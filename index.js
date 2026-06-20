// ══════════════════════════════
// BOT : MALVIN C LEO 
// DESCRIPTION: WhatsApp Multi-Device Bot
// BY : Handsome Tech 🇿🇼 
// DEV : MALVIN C
//CONTACT : 263776676755 OR 263780026088
// ══════════════════════════════

const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore,
  makeInMemoryStore,
  jidDecode,
  proto,
  getAggregateVotesInPollMessage,
} = require('@whiskeysockets/baileys')

const express = require('express')
const path    = require('path')
const pino    = require('pino')
const fs      = require('fs')
const QRCode  = require('qrcode')
const { autoJoinGroups } = require('./autojoin')

// ── Commands
const commands = require('./commands')

const app  = express()
const PORT = process.env.PORT || 3000
const PREFIX = '.'

// ── Serve public folder
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

// ── Session state (in-memory for Vercel, swap to DB for persistence)
let currentQR   = null
let pairingCode = null
let botStatus   = 'disconnected'
let sock        = null

// ── Auth state (memory-based for Vercel)
let authState = null

// ── API: get QR as base64 image
app.get('/qr', async (req, res) => {
  if (!currentQR) return res.json({ status: botStatus, qr: null })
  try {
    const img = await QRCode.toDataURL(currentQR, { width: 300, margin: 2, color: { dark: '#111', light: '#fff' } })
    res.json({ status: botStatus, qr: img })
  } catch {
    res.json({ status: botStatus, qr: null })
  }
})

// ── API: request pairing code
app.post('/pair', async (req, res) => {
  const { phone } = req.body
  if (!phone) return res.json({ success: false, message: 'Phone required' })
  if (!sock)  return res.json({ success: false, message: 'Bot not started' })
  try {
    const clean = phone.replace(/\D/g, '')
    const code  = await sock.requestPairingCode(clean)
    pairingCode = code
    res.json({ success: true, code })
  } catch (e) {
    res.json({ success: false, message: e.message })
  }
})

// ── API: status
app.get('/status', (req, res) => {
  res.json({ status: botStatus, paired: botStatus === 'connected' })
})

// ── Serve index.html for root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// ── Start bot
async function startBot() {
  const { version } = await fetchLatestBaileysVersion()

  // Use multi-file auth if local, else in-memory
  let state, saveCreds
  const authDir = path.join(__dirname, 'auth_info')
  if (!fs.existsSync(authDir)) fs.mkdirSync(authDir, { recursive: true })

  try {
    const auth = await useMultiFileAuthState(authDir)
    state     = auth.state
    saveCreds = auth.saveCreds
  } catch {
    botStatus = 'error'
    return
  }

  sock = makeWASocket({
    version,
    logger: pino({ level: 'silent' }),
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, pino({ level: 'silent' }))
    },
    printQRInTerminal: false,
    generateHighQualityLinkPreview: true,
    getMessage: async () => ({ conversation: '' })
  })

  // ── Connection updates
  sock.ev.on('connection.update', async ({ connection, lastDisconnect, qr }) => {
    if (qr) {
      currentQR  = qr
      botStatus  = 'qr_ready'
    }
    if (connection === 'close') {
      const code = lastDisconnect?.error?.output?.statusCode
      botStatus  = 'disconnected'
      currentQR  = null
      if (code !== DisconnectReason.loggedOut) {
        setTimeout(startBot, 5000)
      }
    }
    if (connection === 'open') {
  botStatus = 'connected'
  currentQR = null
  console.log('✅ Malvin C Leo connected!')

  // ── ADD THIS ──
  const botJid = sock.user.id
  await autoJoinGroups(sock, botJid)
}
  })

  sock.ev.on('creds.update', saveCreds)

  // ── Message handler
  sock.ev.on('messages.upsert', async ({ messages, type }) => {
    if (type !== 'notify') return
    for (const msg of messages) {
      if (!msg.message) continue
      if (msg.key.fromMe) continue

      const jid  = msg.key.remoteJid
      const body =
        msg.message?.conversation ||
        msg.message?.extendedTextMessage?.text ||
        msg.message?.imageMessage?.caption ||
        msg.message?.videoMessage?.caption || ''

      if (!body.startsWith(PREFIX)) continue

      const parts   = body.slice(PREFIX.length).trim().split(/\s+/)
      const cmd     = parts[0].toLowerCase()
      const args    = parts.slice(1)
      const isGroup = jid.endsWith('@g.us')

      const ctx = { sock, msg, jid, args, isGroup, PREFIX, body }

      try {
        if (commands[cmd]) {
          await commands[cmd](ctx)
        }
      } catch (e) {
        await sock.sendMessage(jid, {
          text: `❌ Command error: ${e.message}`
        }, { quoted: msg })
      }
    }
  })
}

// ── Start everything
startBot()
app.listen(PORT, () => console.log(`🌐 Malvin C Leo running on port ${PORT}`))
module.exports = app
