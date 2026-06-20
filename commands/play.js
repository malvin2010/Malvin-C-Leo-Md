const yts  = require('yt-search')
const ytdl = require('@distube/ytdl-core')
const { createWriteStream, unlinkSync, existsSync } = require('fs')
const path = require('path')
const os   = require('os')

async function play({ sock, msg, jid, args }) {
  const query = args.join(' ')
  if (!query) {
    return sock.sendMessage(jid, {
      text: `🎵 *Usage:* .play <song name>\n\n*Example:* .play Jah Prayzah Maruva`
    }, { quoted: msg })
  }

  await sock.sendMessage(jid, { text: `🔍 Searching for *${query}*...` }, { quoted: msg })

  let video
  try {
    const r = await yts(query)
    video = r.videos[0]
    if (!video) throw new Error('No results')
  } catch {
    return sock.sendMessage(jid, { text: `❌ No results found for *${query}*` }, { quoted: msg })
  }

  await sock.sendMessage(jid, {
    text: `🎵 *${video.title}*\n👤 ${video.author.name}\n⏱ ${video.timestamp}\n\n📥 Malvin C Downloading...`
  }, { quoted: msg })

  const tmp = path.join(os.tmpdir(), `leo_${Date.now()}.mp3`)
  try {
    await new Promise((res, rej) => {
      const s = ytdl(video.url, { filter: 'audioonly', quality: 'highestaudio' })
      const w = createWriteStream(tmp)
      s.pipe(w)
      s.on('error', rej)
      w.on('finish', res)
      w.on('error', rej)
    })
  } catch {
    return sock.sendMessage(jid, { text: `❌ Download failed. Try another song FOOL!!!.` }, { quoted: msg })
  }

  try {
    await sock.sendMessage(jid, {
      audio: { url: tmp },
      mimetype: 'audio/mpeg',
      ptt: false,
      fileName: `${video.title}.mp3`,
      contextInfo: {
        externalAdReply: {
          title: video.title,
          body: video.author.name,
          thumbnailUrl: video.thumbnail,
          sourceUrl: video.url,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: msg })
  } finally {
    try { if (existsSync(tmp)) unlinkSync(tmp) } catch (_) {}
  }
}

async function song({ sock, msg, jid, args }) {
  return play({ sock, msg, jid, args })
}

module.exports = { play, song }
