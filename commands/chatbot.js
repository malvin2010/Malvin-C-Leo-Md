const axios = require('axios')

// Simple AI chatbot using free API
const RESPONSES = [
  "That's interesting! Tell me more 🤔",
  "I hear you! How can I help? 😊",
  "Great question! Let me think... 💭",
  "Wow, that's amazing! 🌟",
  "I understand. What else would you like to know? 🙏",
  "Sure! I'm Malvin C Leo, your WhatsApp assistant powered by Handsome Tech Zimbabwe 🇿🇼",
  "Interesting perspective! What do you think about it? 🤔",
  "I'm always here to help! 💪",
  "That makes sense to me! 😄",
  "Tell me more, I'm listening! 👂"
]

// Simple AI response using wttr/trivia APIs or fallback
async function getAIReply(text) {
  try {
    // Try free AI API
    const res = await axios.get(
      `https://api.popcat.xyz/chatbot?msg=${encodeURIComponent(text)}&owner=HandsomeTechZW&botname=MalvinCLeo`,
      { timeout: 5000 }
    )
    if (res.data?.response) return res.data.response
  } catch {}
  // Fallback to random response
  return RESPONSES[Math.floor(Math.random() * RESPONSES.length)]
}

async function ai({ sock, msg, jid, args }) {
  const query = args.join(' ')
  if (!query) return sock.sendMessage(jid, { text: `🤖 *Usage:* .ai <your message>\n\nExample: .ai what is the capital of Zimbabwe?` }, { quoted: msg })
  await sock.sendMessage(jid, { text: `🤔 Thinking...` }, { quoted: msg })
  const reply = await getAIReply(query)
  await sock.sendMessage(jid, { text: `🤖 *Malvin C Leo AI*\n\n${reply}\n\n_Powered by Handsome Tech 🇿🇼_` }, { quoted: msg })
}

async function malvinC({ sock, msg, jid, args }) {
  const query = args.join(' ')
  if (!query) return sock.sendMessage(jid, { text: `🤖 *Usage:* .malvinC<your message>\n\nExample: .malvinC what is the capital of Zimbabwe?` }, { quoted: msg })
  await sock.sendMessage(jid, { text: `🤔 Thinking...` }, { quoted: msg })
  const reply = await getAIReply(query)
  await sock.sendMessage(jid, { text: `🤖 *Malvin C Leo AI*\n\n${reply}\n\n_Powered by Handsome Tech 🇿🇼_` }, { quoted: msg })
}

async function chat({ sock, msg, jid, args }) {
  return ai({ sock, msg, jid, args })
}

async function ask({ sock, msg, jid, args }) {
  return ai({ sock, msg, jid, args })
}

module.exports = { ai, chat, ask, malvinC }
