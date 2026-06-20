import googleTTS from 'google-tts-api'

export const malvinsay = async (m, sock) => {
  const body = m.body?.trim()
  
  if (body?.toLowerCase().startsWith('.malvinsay ')) {
    const sayText = body.slice(11)
    if (!sayText) return
    
    try {
      const url = googleTTS.getAudioUrl(sayText, {
        lang: 'en',
        slow: false,
        host: 'https://translate.google.com',
        tld: 'co.uk' // Male voice
      })

      await sock.sendMessage(m.key.remoteJid, {
        audio: { url: url },
        mimetype: 'audio/mpeg',
        ptt: true
      }, { quoted: m })
    } catch (e) {
      console.log('TTS Error:', e)
    }
  }
}

export const command = ['malvinsay']
export const category = 'fun'
export const desc = 'Malvin male voice note'