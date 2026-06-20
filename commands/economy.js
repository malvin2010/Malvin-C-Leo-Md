const fs   = require('fs')
const path = require('path')

const DB = path.join(__dirname, '../data/economy.json')
const C  = '💵'

function load() {
  if (!fs.existsSync(DB)) { fs.mkdirSync(path.dirname(DB), { recursive: true }); fs.writeFileSync(DB, '{}') }
  return JSON.parse(fs.readFileSync(DB, 'utf8'))
}
function save(db) { fs.writeFileSync(DB, JSON.stringify(db, null, 2)) }
function user(db, id) {
  if (!db[id]) db[id] = { wallet: 500, bank: 0, lastDaily: 0, lastWork: 0, lastRob: 0, inventory: [] }
  return db[id]
}
function fmt(n) { return Number(n).toLocaleString() }
function cd(last, ms) { const l = ms - (Date.now() - last); if (l <= 0) return null; const m = Math.floor(l/60000), s = Math.floor((l%60000)/1000); return m > 0 ? `${m}m ${s}s` : `${s}s` }

const SHOP = [
  { id: 'shield',  name: '🛡️ Rob Shield',   price: 2000, desc: 'Block 1 rob attempt' },
  { id: 'booster', name: '⚡ Work Booster',  price: 1500, desc: '2x earnings for 1hr' },
  { id: 'vault',   name: '🏦 Vault Upgrade', price: 5000, desc: 'Higher bank limit' },
]
const JOBS = ['delivered packages','fixed computers','sold data bundles','coded a website','drove Uber','washed cars','tutored students','sold vegetables','did graphic design','sold airtime']

async function balance({ sock, msg, jid }) {
  const sender = msg.key.participant || jid
  const db = load(); const u = user(db, sender); save(db)
  await sock.sendMessage(jid, { text: `💰 *Balance*\n\n${C} Wallet: *${fmt(u.wallet)}*\n🏦 Bank: *${fmt(u.bank)}*\n📊 Total: *${fmt(u.wallet + u.bank)}*` }, { quoted: msg })
}

async function daily({ sock, msg, jid }) {
  const sender = msg.key.participant || jid
  const db = load(); const u = user(db, sender)
  const c = cd(u.lastDaily, 86400000)
  if (c) return sock.sendMessage(jid, { text: `⏳ Come back in *${c}*` }, { quoted: msg })
  u.wallet += 1000; u.lastDaily = Date.now(); save(db)
  await sock.sendMessage(jid, { text: `✅ *Daily Claimed!*\n+${C}1,000 added!\n💰 Wallet: *${fmt(u.wallet)}*` }, { quoted: msg })
}

async function work({ sock, msg, jid }) {
  const sender = msg.key.participant || jid
  const db = load(); const u = user(db, sender)
  const c = cd(u.lastWork, 1800000)
  if (c) return sock.sendMessage(jid, { text: `⏳ Rest for *${c}*` }, { quoted: msg })
  const earned = Math.floor(Math.random() * 600) + 200
  const job = JOBS[Math.floor(Math.random() * JOBS.length)]
  u.wallet += earned; u.lastWork = Date.now(); save(db)
  await sock.sendMessage(jid, { text: `💼 You *${job}* and earned ${C}*${fmt(earned)}*!\n💰 Wallet: *${fmt(u.wallet)}*` }, { quoted: msg })
}

async function rob({ sock, msg, jid }) {
  const sender = msg.key.participant || jid
  const db = load(); const robber = user(db, sender)
  const target = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0]
  if (!target) return sock.sendMessage(jid, { text: `❌ Tag someone! *.rob @user*` }, { quoted: msg })
  if (target === sender) return sock.sendMessage(jid, { text: `😂 Can't rob yourself!` }, { quoted: msg })
  const c = cd(robber.lastRob, 3600000)
  if (c) return sock.sendMessage(jid, { text: `⏳ Wait *${c}*` }, { quoted: msg })
  const victim = user(db, target); robber.lastRob = Date.now()
  if (victim.wallet < 100) { save(db); return sock.sendMessage(jid, { text: `😅 They're broke!` }, { quoted: msg }) }
  if (Math.random() > 0.45) {
    const stolen = Math.floor(victim.wallet * (Math.random() * 0.3 + 0.1))
    victim.wallet -= stolen; robber.wallet += stolen; save(db)
    await sock.sendMessage(jid, { text: `🦹 Stole ${C}*${fmt(stolen)}* from @${target.split('@')[0]}!\n💰 Wallet: *${fmt(robber.wallet)}*`, mentions: [target] }, { quoted: msg })
  } else {
    const fine = Math.floor(robber.wallet * 0.1)
    robber.wallet = Math.max(0, robber.wallet - fine); save(db)
    await sock.sendMessage(jid, { text: `🚔 Caught! Paid ${C}*${fmt(fine)}* fine.\n💰 Wallet: *${fmt(robber.wallet)}*`, mentions: [target] }, { quoted: msg })
  }
}

async function deposit({ sock, msg, jid, args }) {
  const sender = msg.key.participant || jid
  const db = load(); const u = user(db, sender)
  const amt = args[0] === 'all' ? u.wallet : parseInt(args[0])
  if (!amt || amt <= 0) return sock.sendMessage(jid, { text: `❌ .deposit <amount|all>` }, { quoted: msg })
  if (amt > u.wallet) return sock.sendMessage(jid, { text: `❌ Only ${C}${fmt(u.wallet)} in wallet` }, { quoted: msg })
  u.wallet -= amt; u.bank += amt; save(db)
  await sock.sendMessage(jid, { text: `🏦 Deposited ${C}*${fmt(amt)}*\n💰 Wallet: *${fmt(u.wallet)}*\n🏦 Bank: *${fmt(u.bank)}*` }, { quoted: msg })
}

async function withdraw({ sock, msg, jid, args }) {
  const sender = msg.key.participant || jid
  const db = load(); const u = user(db, sender)
  const amt = args[0] === 'all' ? u.bank : parseInt(args[0])
  if (!amt || amt <= 0) return sock.sendMessage(jid, { text: `❌ .withdraw <amount|all>` }, { quoted: msg })
  if (amt > u.bank) return sock.sendMessage(jid, { text: `❌ Only ${C}${fmt(u.bank)} in bank` }, { quoted: msg })
  u.bank -= amt; u.wallet += amt; save(db)
  await sock.sendMessage(jid, { text: `💸 Withdrew ${C}*${fmt(amt)}*\n💰 Wallet: *${fmt(u.wallet)}*\n🏦 Bank: *${fmt(u.bank)}*` }, { quoted: msg })
}

async function give({ sock, msg, jid, args }) {
  const sender = msg.key.participant || jid
  const db = load(); const giver = user(db, sender)
  const target = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0]
  const amt = parseInt(args[args.length - 1])
  if (!target || !amt) return sock.sendMessage(jid, { text: `❌ .give @user <amount>` }, { quoted: msg })
  if (amt > giver.wallet) return sock.sendMessage(jid, { text: `❌ Not enough in wallet` }, { quoted: msg })
  const recv = user(db, target); giver.wallet -= amt; recv.wallet += amt; save(db)
  await sock.sendMessage(jid, { text: `💝 Sent ${C}*${fmt(amt)}* to @${target.split('@')[0]}!\n💰 Wallet: *${fmt(giver.wallet)}*`, mentions: [target] }, { quoted: msg })
}

async function shop({ sock, msg, jid }) {
  const list = SHOP.map(i => `*${i.name}*\n   ${C}${fmt(i.price)} — ${i.desc} | ID: \`${i.id}\``).join('\n\n')
  await sock.sendMessage(jid, { text: `🏪 *Malvin C Leo Shop*\n\n${list}\n\n_Use .buy <id>_` }, { quoted: msg })
}

async function buy({ sock, msg, jid, args }) {
  const sender = msg.key.participant || jid
  const item = SHOP.find(i => i.id === args[0])
  if (!item) return sock.sendMessage(jid, { text: `❌ Unknown item. Use *.shop*` }, { quoted: msg })
  const db = load(); const u = user(db, sender)
  if (u.wallet < item.price) return sock.sendMessage(jid, { text: `❌ Need ${C}${fmt(item.price)}, you have ${C}${fmt(u.wallet)}` }, { quoted: msg })
  u.wallet -= item.price; u.inventory.push(item.id); save(db)
  await sock.sendMessage(jid, { text: `✅ Bought *${item.name}*!\n💰 Wallet: *${fmt(u.wallet)}*` }, { quoted: msg })
}

async function leaderboard({ sock, msg, jid }) {
  const db = load()
  const top = Object.entries(db).map(([id, u]) => ({ id, t: (u.wallet || 0) + (u.bank || 0) })).sort((a, b) => b.t - a.t).slice(0, 10)
  const medals = ['🥇','🥈','🥉']
  const lines = top.map((e, i) => `${medals[i] || `${i+1}.`} +${e.id.split('@')[0]} — ${C}${fmt(e.t)}`).join('\n')
  await sock.sendMessage(jid, { text: `🏆 *Leaderboard*\n\n${lines || 'No data yet'}` }, { quoted: msg })
}

module.exports = { balance, daily, work, rob, deposit, withdraw, give, shop, buy, leaderboard }
