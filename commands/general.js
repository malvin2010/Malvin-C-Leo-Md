// ══════════════════════════════
// BOT : MALVIN C LEO 
// DESCRIPTION: WhatsApp Multi-Device Bot
// BY : Handsome Tech 🇿🇼 
// DEV : MALVIN C
//CONTACT : 263776676755 OR 263780026088
// ══════════════════════════════

const axios = require('axios')
const fs    = require('fs')
const path  = require('path')

// ── MENU
async function menu({ sock, msg, jid, PREFIX }) {
  const menuImg = path.join(__dirname, '../public/menu.png')
  const text = `
╔══════════════════════╗
║═★Bot :》 *MALVIN C LEO MD* 《  
║═★Dev :》 Malvin C  😁🇿🇼 《
║═★Malvin C:      
║              *263780026088*     
║              *263776676755*
║═★Commands : 780+
║═★Version: 4.0.1 Beta
╚══════════════════════╝
╔═════════《☆》═════════╗
║─☆ZIMBABWE MENU COMMANDS
║─☆MUSIC DOWNLOAD COMMANDS 
║─☆AI SYSTEM COMMANDS 
║─☆ECONOMY COMMANDS 
║─☆FUN COMMANDS 
║─☆INFO AND TOOLS 
║─☆GROUP COMMANDS 
║─☆MEDIA COMMANDS
║─☆UTILITY COMMANDS 
║─☆TEXT TOOLS 
║─☆CREATIVE COMMAND 
║─☆GAME COMMANDS 
║─☆SOCIAL COMMANDS 
║─☆ADMIN COMMANDS 
╚═══════════════════════╝
╔═══════════════════╗
║=====《 *ZIMBABWE* 》=====
║    《MAIN COMMANDS》
║─★${PREFIX}menu
║─★${PREFIX}malvinC
║─★${PREFIX}handsometech
║─★${PREFIX}ping
║─★${PREFIX}alive
║ 
╚═══════════════════╝

║═=══《 *🎵 MUSIC* 》═=══║
║─★${PREFIX}play <song> 
║─★${PREFIX}song <song> 
║─★${PREFIX}ytmp3 <url> 
║─★${PREFIX}ytmp4 <url> 
╚═════════==═════════╝

║══《 *🤖 AI / CHAT* 》═══║
║─★${PREFIX}ai <text>
║─★${PREFIX}chat <text> 
║─★${PREFIX}ask <text>
║─★${PREFIX}gpt <text>
║─★${PREFIX}malvin-c-leo <text> 
║─★${PREFIX}co-pilot <text> 
║─★${PREFIX}claude <text>  
║─★${PREFIX}manus <text> 
║─★${PREFIX}chatbot on/off <text> 
╚═══════════════════╝
║════《 *🔧 OWNER* 》═══║
║─★${PREFIX}ping 
║─★${PREFIX}uptime
║─★${PREFIX}info 
║─★${PREFIX}owner
║─★${PREFIX}report <text>
║─★${PREFIX}help <command>
║─★${PREFIX}runtime 
║─★${PREFIX}botname
║─★${PREFIX}prefix
║─★${PREFIX}id 
║─★${PREFIX}uid 
║─★${PREFIX}mentionme 
║─★${PREFIX}afk <reason>
║─★${PREFIX}unafk
║─★${PREFIX}stats 
║─★${PREFIX}alive
║─★${PREFIX}profile 
║─★${PREFIX}setbio <text>
║─★${PREFIX}achievements 
║─★${PREFIX}reputation 
║─★${PREFIX}giverep @user 
║─★${PREFIX}rank
║─★${PREFIX}level
║─★${PREFIX}xp
║─★${PREFIX}badge
║─★${PREFIX}marry @user 
║─★${PREFIX}divorce
║─★${PREFIX}partner
║─★${PREFIX}creatgc
║─★${PREFIX}createchannel 
║─★${PREFIX}owner
║─★${PREFIX}malvinC
║─★${PREFIX}zimbabwe
║─★${PREFIX}carry
║─★${PREFIX}mine
╚════════════════════╝

║══《 *💰 ECONOMY* 》═══║
║─★${PREFIX}balance
║─★${PREFIX}daily 
║─★${PREFIX}work 
║─★${PREFIX}rob @user 
║─★${PREFIX}deposit <amt> 
║─★${PREFIX}withdraw <amt> 
║─★${PREFIX}give @user <amt> 
║─★${PREFIX}shop 
║─★${PREFIX}buy <item> 
║─★${PREFIX}leaderboard 
╚═══════════════════╝

║════《 *🎮 FUN* 》════║
║─★${PREFIX}joke 
║─★${PREFIX}fact 
║─★${PREFIX}quote 
║─★${PREFIX}8ball <question>
║─★${PREFIX}flip 
║─★${PREFIX}roll
║─★${PREFIX}rps <rock|paper|scissors>
║─★${PREFIX}dare 
║─★${PREFIX}truth 
║─★${PREFIX}riddle 
║─★${PREFIX}meme
║─★${PREFIX}roast @user 
║─★${PREFIX}compliment @user
║─★${PREFIX}ship @user1 @user2 
║─★${PREFIX}rate @
║─★${PREFIX}choose <a|b
╚═══════════════════╝

║═《 *🌍 INFO & TOOLS* 》══║
║─★${PREFIX}weather <city
║─★${PREFIX}time <city
║─★${PREFIX}calc <expression> 
║─★${PREFIX}define <word>
║─★${PREFIX}wiki <topic>
║─★${PREFIX}news
║─★${PREFIX}translate <lang> <text>
║─★${PREFIX}currency <amt> <from> <to>
║─★${PREFIX}shorten <url>
║─★${PREFIX}qr <text>
║─★${PREFIX}color <hex> 
║─★${PREFIX}ip <address>
║─★${PREFIX}covid 
║─★${PREFIX}crypto <coin>
║─★${PREFIX}horoscope <sign>
║─★${PREFIX}bmi <weight> <height>
║─★${PREFIX}password <length> 
╚════════════════════╝

║════《 *👥 GROUP* 》════║
║─★${PREFIX}kick @user
║─★${PREFIX}add <number>
║─★${PREFIX}promote @user
║─★${PREFIX}demote @user
║─★${PREFIX}welcome 
║─★${PREFIX}mute
║─★${PREFIX}unmute
║─★${PREFIX}tagall
║─★${PREFIX}everyone
║─★${PREFIX}groupinfo
║─★${PREFIX}setname <name>
║─★${PREFIX}setdesc <text>
║─★${PREFIX}seticon
║─★${PREFIX}resetlink
║─★${PREFIX}revoke
║─★${PREFIX}invite
║─★${PREFIX}leave
║─★${PREFIX}join <link>
║─★${PREFIX}ban @user
║─★${PREFIX}warn @user
║─★${PREFIX}warnings @user
║─★${PREFIX}clearwarn @user
║─★${PREFIX}antilink on/off 
╚════════════════════╝

║════《 *📱 MEDIA* 》════║
║─★${PREFIX}ytmp3 <url>
║─★${PREFIX}ytmp4 <url>
║─★${PREFIX}tiktok <url>
║─★${PREFIX}instagram <url> 
║─★${PREFIX}facebook <url> 
║─★${PREFIX}sticker
║─★${PREFIX}toimg
║─★${PREFIX}screenshot <url>
║─★${PREFIX}malvinsay 
╚════════════════════╝

║════《 *🔧 UTILITY* 》═══║
║─★${PREFIX}ping 
║─★${PREFIX}uptime
║─★${PREFIX}info 
║─★${PREFIX}owner
║─★${PREFIX}report <text>
║─★${PREFIX}help <command>
║─★${PREFIX}runtime 
║─★${PREFIX}botname
║─★${PREFIX}prefix
║─★${PREFIX}id 
║─★${PREFIX}uid 
║─★${PREFIX}mentionme 
║─★${PREFIX}afk <reason>
║─★${PREFIX}unafk
║─★${PREFIX}stats 
║─★${PREFIX}alive
╚════════════════════╝

║══《 *📝 TEXT TOOLS* 》══║
║─★${PREFIX}tinytext <text>
║─★${PREFIX}bold <text>
║─★${PREFIX}italic <text>
║─★${PREFIX}strike <text>
║─★${PREFIX}reverse <text> 
║─★${PREFIX}upper <text>
║─★${PREFIX}lower <text>
║─★${PREFIX}mock <text>
║─★${PREFIX}morse <text> 
║─★${PREFIX}caesar <n> <text>
║─★${PREFIX}count <text>
║─★${PREFIX}emojify <text> 
╚════════════════════╝

║═=═《 *🎭 CREATIVE* 》═══║
║─★${PREFIX}story
║─★${PREFIX}poem
║─★${PREFIX}lyrics <song>
║─★${PREFIX}rap <topic
║─★${PREFIX}slogan <brand>
║─★${PREFIX}recipe <food>
║─★${PREFIX}advice 
║─★${PREFIX}motivation
║─★${PREFIX}affirmation
║─★${PREFIX}prayer
╚════════════════════╝

║════《 *🎯 GAMES* 》════║
║─★${PREFIX}tictactoe @user 
║─★${PREFIX}hangman
║─★${PREFIX}wordle 
║─★${PREFIX}quiz
║─★${PREFIX}trivia 
║─★${PREFIX}number
║─★${PREFIX}slots
║─★${PREFIX}blackjack
║─★${PREFIX}lottery
╚═════════════════════╝
║════《 *🎮 JOKES* 》════║
║─★${PREFIX}joke 
║─★${PREFIX}fact 
║─★${PREFIX}quote 
║─★${PREFIX}8ball <question>
║─★${PREFIX}flip 
║─★${PREFIX}roll
║─★${PREFIX}rps <rock|paper|scissors>
║─★${PREFIX}dare 
║─★${PREFIX}truth 
║─★${PREFIX}riddle 
║─★${PREFIX}meme
║─★${PREFIX}roast @user 
║─★${PREFIX}compliment @user
║─★${PREFIX}ship @user1 @user2 
║─★${PREFIX}rate @
║─★${PREFIX}choose <a|b
╚═══════════════════╝

║════《 *🌐 SOCIAL* 》════║
║─★${PREFIX}profile 
║─★${PREFIX}setbio <text>
║─★${PREFIX}achievements 
║─★${PREFIX}reputation 
║─★${PREFIX}giverep @user 
║─★${PREFIX}rank
║─★${PREFIX}level
║─★${PREFIX}xp
║─★${PREFIX}badge
║─★${PREFIX}marry @user 
║─★${PREFIX}divorce
║─★${PREFIX}partner
╚════════════════════╝

║════《 *🔐 ADMIN* 》════║
║─★${PREFIX}broadcast <text>
║─★${PREFIX}blacklist @user
║─★${PREFIX}unblacklist @
║─★${PREFIX}maintenance on/off
║─★${PREFIX}eval <code>
╚════════════════════╝    
║═══《 > *MALVIN-C* 》════║
║─★Total: 783 commands
║─★Prefix: ${PREFIX}_
║─★Dev: Malvin C 😁 
║─★proudly Zimbabwean
║─★ > Handsome Tech >_
╚════════════════════╝`

async function menu({ sock, msg, jid, PREFIX }) {
  const menuImg = path.join(__dirname, '../public/yala2.mp3')

  if (fs.existsSync(menuImg)) {
    await sock.sendMessage(jid, {
      image: { url: menuImg },
      caption: text
    }, { quoted: msg })
  } else {
    await sock.sendMessage(jid, { text }, { quoted: msg })
  }
}

// ── MENU2
async function menu2({ sock, msg, jid, PREFIX }) {
  const menuImg = path.join(__dirname, '../public/menu.png')
  const text = `
╔══════════════════════╗
║ Bot : *Handsome Tech XD*  
║ Made By: *Handsome Tech*  
║ Dev : Malvin C   
║ Malvin C:      
║           *263780026088*     
║           *263776676755*
║ Version: 4.0.1
║ Prefix: ${PREFIX}
║ Total Commands: 780+
╚══════════════════════╝
╔══════════════════════╗
║Hello there Thanks for using 
║*Handsome Tech XD*
║ Type *.menu* , *.malvin-c* , 
║ *.handsometech* ,
║ or *.help* for command lists 😁
║ Zimbabwe to the World 🌎 🇿🇼
╚══════════════════════╝
*🎵 MUSIC*
${PREFIX}play <song> — Download music
${PREFIX}song <song> — Same as play



*🤖 AI / CHAT*
${PREFIX}ai <text> — AI chatbot
${PREFIX}chat <text> — Chat with bot
${PREFIX}ask <text> — Ask anything



*💰 ECONOMY*
${PREFIX}balance — Check balance
${PREFIX}daily — Daily reward
${PREFIX}work — Earn money
${PREFIX}rob @user — Rob someone
${PREFIX}deposit <amt> — Deposit to bank
${PREFIX}withdraw <amt> — Withdraw from bank
${PREFIX}give @user <amt> — Send money
${PREFIX}shop — View shop
${PREFIX}buy <item> — Buy item
${PREFIX}leaderboard — Top richest



*🎮 FUN*
${PREFIX}joke — Random joke
${PREFIX}fact — Random fact
${PREFIX}quote — Inspirational quote
${PREFIX}8ball <question> — Magic 8 ball
${PREFIX}flip — Flip a coin
${PREFIX}roll — Roll a dice
${PREFIX}rps <rock|paper|scissors> — Play RPS
${PREFIX}dare — Truth or dare (dare)
${PREFIX}truth — Truth or dare (truth)
${PREFIX}riddle — Get a riddle
${PREFIX}meme — Random meme text
${PREFIX}roast @user — Roast someone
${PREFIX}compliment @user — Compliment someone
${PREFIX}ship @user1 @user2 — Ship two people
${PREFIX}rate @user — Rate someone
${PREFIX}choose <a|b> — Let bot choose



*🌍 INFO & TOOLS*
${PREFIX}weather <city> — Get weather
${PREFIX}time <city> — Get time
${PREFIX}calc <expression> — Calculator
${PREFIX}define <word> — Dictionary
${PREFIX}wiki <topic> — Wikipedia search
${PREFIX}news — Latest news
${PREFIX}translate <lang> <text> — Translate
${PREFIX}currency <amt> <from> <to> — Convert currency
${PREFIX}shorten <url> — Shorten URL
${PREFIX}qr <text> — Generate QR code
${PREFIX}color <hex> — Color info
${PREFIX}ip <address> — IP lookup
${PREFIX}covid — COVID stats
${PREFIX}crypto <coin> — Crypto price
${PREFIX}horoscope <sign> — Horoscope
${PREFIX}bmi <weight> <height> — BMI calc
${PREFIX}password <length> — Generate password



*👥 GROUP*
${PREFIX}kick @user — Remove member
${PREFIX}add <number> — Add member
${PREFIX}promote @user — Promote to admin
${PREFIX}demote @user — Demote admin
${PREFIX}welcome - Welcome Someone to Group
${PREFIX}mute — Mute group
${PREFIX}unmute — Unmute group
${PREFIX}tagall — Tag all members
${PREFIX}everyone — Tag everyone
${PREFIX}groupinfo — Group info
${PREFIX}setname <name> — Set group name
${PREFIX}setdesc <text> — Set description
${PREFIX}seticon — Set group icon (reply image)
${PREFIX}resetlink — Reset invite link
${PREFIX}revoke — Revoke invite link
${PREFIX}invite — Get invite link
${PREFIX}leave — Bot leaves group
${PREFIX}join <link> — Join via link
${PREFIX}ban @user — Ban user from group
${PREFIX}warn @user — Warn a member
${PREFIX}warnings @user — Check warnings
${PREFIX}clearwarn @user — Clear warnings
${PREFIX}antilink on/off — Toggle anti-link



*📱 MEDIA*
${PREFIX}ytmp3 <url> — YouTube to MP3
${PREFIX}ytmp4 <url> — YouTube to MP4
${PREFIX}tiktok <url> — TikTok download
${PREFIX}instagram <url> — Instagram download
${PREFIX}facebook <url> — Facebook video
${PREFIX}sticker — Image to sticker (reply)
${PREFIX}toimg — Sticker to image
${PREFIX}screenshot <url> — Screenshot website
${PREFIX}malvinsay - Malvin C Leo says something



*🔧 UTILITY*
${PREFIX}ping — Check bot speed
${PREFIX}uptime — Bot uptime
${PREFIX}info — Bot info
${PREFIX}owner — Owner contact
${PREFIX}report <text> — Report issue
${PREFIX}help <command> — Command help
${PREFIX}runtime — Runtime info
${PREFIX}botname — Bot name
${PREFIX}prefix — Current prefix
${PREFIX}id — Get chat ID
${PREFIX}uid — Get your ID
${PREFIX}mentionme — Mention self test
${PREFIX}afk <reason> — Set AFK status
${PREFIX}unafk — Remove AFK status
${PREFIX}stats — Bot statistics
${PREFIX}alive — Check if bot is alive



*📝 TEXT TOOLS*
${PREFIX}tinytext <text> — Tiny text
${PREFIX}bold <text> — Bold text
${PREFIX}italic <text> — Italic text
${PREFIX}strike <text> — Strikethrough
${PREFIX}reverse <text> — Reverse text
${PREFIX}upper <text> — Uppercase
${PREFIX}lower <text> — Lowercase
${PREFIX}mock <text> — SaRcAsM text
${PREFIX}binary <text> — Text to binary
${PREFIX}morse <text> — Text to Morse
${PREFIX}caesar <n> <text> — Caesar cipher
${PREFIX}count <text> — Count chars/words
${PREFIX}emojify <text> — Add emojis



*🎭 CREATIVE*
${PREFIX}story — Random short story
${PREFIX}poem — Random poem
${PREFIX}lyrics <song> — Song lyrics
${PREFIX}rap <topic> — Generate rap
${PREFIX}slogan <brand> — Generate slogan
${PREFIX}recipe <food> — Get recipe
${PREFIX}advice — Life advice
${PREFIX}motivation — Motivational message
${PREFIX}affirmation — Daily affirmation
${PREFIX}prayer — Daily prayer 🙏



*🎯 GAMES*
${PREFIX}tictactoe @user — Start TicTacToe
${PREFIX}hangman — Play hangman
${PREFIX}wordle — Play wordle
${PREFIX}quiz — Random quiz
${PREFIX}trivia — Trivia question
${PREFIX}number — Guess the number
${PREFIX}slots — Slot machine 🎰
${PREFIX}blackjack — Play blackjack
${PREFIX}lottery — Buy lottery ticket



*🌐 SOCIAL*
${PREFIX}profile — Your profile
${PREFIX}setbio <text> — Set bio
${PREFIX}achievements — Your achievements
${PREFIX}reputation — Rep points
${PREFIX}giverep @user — Give reputation
${PREFIX}rank — Your rank
${PREFIX}level — Your level
${PREFIX}xp — Your XP
${PREFIX}badge — Your badges
${PREFIX}marry @user — Marry someone
${PREFIX}divorce — Get divorced
${PREFIX}partner — Check partner



*🔐 ADMIN*
${PREFIX}broadcast <text> — Broadcast message
${PREFIX}blacklist @user — Blacklist user
${PREFIX}unblacklist @user — Remove blacklist
${PREFIX}maintenance on/off — Maintenance mode
${PREFIX}eval <code> — Run code (owner)

_Total: 783 commands
Prefix: ${PREFIX}_
Dev: Malvin C 😁 

*proudly Zimbabwean*

> Handsome Tech>_`
async function menu2({ sock, msg, jid, PREFIX }) {
  const menuImg = path.join(__dirname, '../public/yala2.mp3')

  if (fs.existsSync(menuImg)) {
    await sock.sendMessage(jid, {
      image: { url: menuImg },
      caption: text
    }, { quoted: msg })
  } else {
    await sock.sendMessage(jid, { text }, { quoted: msg })
  }
}

// ── MALVINC
async function malvinC({ sock, msg, jid, PREFIX }) {
  const menuImg = path.join(__dirname, '../public/menu.png')
  const text = `
╔══════════════════════╗
║═★Bot :》 *MALVIN C LEO MD* 《  
║═★Dev :》 Malvin C  😁🇿🇼 《
║═★Malvin C:      
║              *263780026088*     
║              *263776676755*
║═★Commands : 780+
║═★Version: 4.0.1 Beta
╚══════════════════════╝
╔═════════《☆》═════════╗
║─☆ZIMBABWE MENU COMMANDS
║─☆MUSIC DOWNLOAD COMMANDS 
║─☆AI SYSTEM COMMANDS 
║─☆ECONOMY COMMANDS 
║─☆FUN COMMANDS 
║─☆INFO AND TOOLS 
║─☆GROUP COMMANDS 
║─☆MEDIA COMMANDS
║─☆UTILITY COMMANDS 
║─☆TEXT TOOLS 
║─☆CREATIVE COMMAND 
║─☆GAME COMMANDS 
║─☆SOCIAL COMMANDS 
║─☆ADMIN COMMANDS 
╚══════════════════════╝
╔══════════════════════╗
║=======《 *ZIMBABWE* 》=======
║      《MENU COMMANDS》
║─★${PREFIX}menu
║─★${PREFIX}malvinC
║─★${PREFIX}handsometech
║ 
╚══════════════════════╝

║════《 *🎵 MUSIC* 》════║
║─★${PREFIX}play <song> 
║─★${PREFIX}song <song> 
║─★${PREFIX}ytmp3 <url> 
║─★${PREFIX}ytmp4 <url> 
╚════════════════════╝

║════《 *🤖 AI / CHAT* 》═══║
║─★${PREFIX}ai <text>
║─★${PREFIX}chat <text> 
║─★${PREFIX}ask <text>
║─★${PREFIX}gpt <text>
║─★${PREFIX}malvin-c-leo <text> 
║─★${PREFIX}co-pilot <text> 
║─★${PREFIX}claude <text>  
║─★${PREFIX}manus <text> 
║─★${PREFIX}chatbot on/off <text> 
╚══════════════════════╝

║════《 *💰 ECONOMY* 》═══║
║─★${PREFIX}balance
║─★${PREFIX}daily 
║─★${PREFIX}work 
║─★${PREFIX}rob @user 
║─★${PREFIX}deposit <amt> 
║─★${PREFIX}withdraw <amt> 
║─★${PREFIX}give @user <amt> 
║─★${PREFIX}shop 
║─★${PREFIX}buy <item> 
║─★${PREFIX}leaderboard 
╚═════════════════════╝

║════《 *🎮 FUN* 》════║
║─★${PREFIX}joke 
║─★${PREFIX}fact 
║─★${PREFIX}quote 
║─★${PREFIX}8ball <question>
║─★${PREFIX}flip 
║─★${PREFIX}roll
║─★${PREFIX}rps <rock|paper|scissors>
║─★${PREFIX}dare 
║─★${PREFIX}truth 
║─★${PREFIX}riddle 
║─★${PREFIX}meme
║─★${PREFIX}roast @user 
║─★${PREFIX}compliment @user
║─★${PREFIX}ship @user1 @user2 
║─★${PREFIX}rate @
║─★${PREFIX}choose <a|b
╚═══════════════════╝

║══《 *🌍 INFO & TOOLS* 》══║
║─★${PREFIX}weather <city
║─★${PREFIX}time <city
║─★${PREFIX}calc <expression> 
║─★${PREFIX}define <word>
║─★${PREFIX}wiki <topic>
║─★${PREFIX}news
║─★${PREFIX}translate <lang> <text>
║─★${PREFIX}currency <amt> <from> <to>
║─★${PREFIX}shorten <url>
║─★${PREFIX}qr <text>
║─★${PREFIX}color <hex> 
║─★${PREFIX}ip <address>
║─★${PREFIX}covid 
║─★${PREFIX}crypto <coin>
║─★${PREFIX}horoscope <sign>
║─★${PREFIX}bmi <weight> <height>
║─★${PREFIX}password <length> 
╚═════════════════════╝

║════《 *👥 GROUP* 》════║
║─★${PREFIX}kick @user
║─★${PREFIX}add <number>
║─★${PREFIX}promote @user
║─★${PREFIX}demote @user
║─★${PREFIX}welcome 
║─★${PREFIX}mute
║─★${PREFIX}unmute
║─★${PREFIX}tagall
║─★${PREFIX}everyone
║─★${PREFIX}groupinfo
║─★${PREFIX}setname <name>
║─★${PREFIX}setdesc <text>
║─★${PREFIX}seticon
║─★${PREFIX}resetlink
║─★${PREFIX}revoke
║─★${PREFIX}invite
║─★${PREFIX}leave
║─★${PREFIX}join <link>
║─★${PREFIX}ban @user
║─★${PREFIX}warn @user
║─★${PREFIX}warnings @user
║─★${PREFIX}clearwarn @user
║─★${PREFIX}antilink on/off 
╚════════════════════╝

║════《 *📱 MEDIA* 》════║
║─★${PREFIX}ytmp3 <url>
║─★${PREFIX}ytmp4 <url>
║─★${PREFIX}tiktok <url>
║─★${PREFIX}instagram <url> 
║─★${PREFIX}facebook <url> 
║─★${PREFIX}sticker
║─★${PREFIX}toimg
║─★${PREFIX}screenshot <url>
║─★${PREFIX}malvinsay 
╚═════════════════════╝

║════《 *🔧 UTILITY* 》════║
║─★${PREFIX}ping 
║─★${PREFIX}uptime
║─★${PREFIX}info 
║─★${PREFIX}owner
║─★${PREFIX}report <text>
║─★${PREFIX}help <command>
║─★${PREFIX}runtime 
║─★${PREFIX}botname
║─★${PREFIX}prefix
║─★${PREFIX}id 
║─★${PREFIX}uid 
║─★${PREFIX}mentionme 
║─★${PREFIX}afk <reason>
║─★${PREFIX}unafk
║─★${PREFIX}stats 
║─★${PREFIX}alive
╚══════════════════════╝

║════《 *📝 TEXT TOOLS* 》════║
║─★${PREFIX}tinytext <text>
║─★${PREFIX}bold <text>
║─★${PREFIX}italic <text>
║─★${PREFIX}strike <text>
║─★${PREFIX}reverse <text> 
║─★${PREFIX}upper <text>
║─★${PREFIX}lower <text>
║─★${PREFIX}mock <text>
║─★${PREFIX}morse <text> 
║─★${PREFIX}caesar <n> <text>
║─★${PREFIX}count <text>
║─★${PREFIX}emojify <text> 
╚════════════════════════╝

║════《 *🎭 CREATIVE* 》════║
║─★${PREFIX}story
║─★${PREFIX}poem
║─★${PREFIX}lyrics <song>
║─★${PREFIX}rap <topic
║─★${PREFIX}slogan <brand>
║─★${PREFIX}recipe <food>
║─★${PREFIX}advice 
║─★${PREFIX}motivation
║─★${PREFIX}affirmation
║─★${PREFIX}prayer
╚═══════════════════════╝

║════《 *🎯 GAMES* 》════║
║─★${PREFIX}tictactoe @user 
║─★${PREFIX}hangman
║─★${PREFIX}wordle 
║─★${PREFIX}quiz
║─★${PREFIX}trivia 
║─★${PREFIX}number
║─★${PREFIX}slots
║─★${PREFIX}blackjack
║─★${PREFIX}lottery
╚═════════════════════╝

║════《 *🌐 SOCIAL* 》════║
║─★${PREFIX}profile 
║─★${PREFIX}setbio <text>
║─★${PREFIX}achievements 
║─★${PREFIX}reputation 
║─★${PREFIX}giverep @user 
║─★${PREFIX}rank
║─★${PREFIX}level
║─★${PREFIX}xp
║─★${PREFIX}badge
║─★${PREFIX}marry @user 
║─★${PREFIX}divorce
║─★${PREFIX}partner
╚════════════════════╝

║════《 *🔐 ADMIN* 》════║
║─★${PREFIX}broadcast <text>
║─★${PREFIX}blacklist @user
║─★${PREFIX}unblacklist @
║─★${PREFIX}maintenance on/off
║─★${PREFIX}eval <code>
╚════════════════════╝    
║════《 > *MALVIN-C* 》════║
║─★Total: 783 commands
║─★Prefix: ${PREFIX}_
║─★Dev: Malvin C 😁 
║─★proudly Zimbabwean
║─★ > Handsome Tech >_
╚════════════════════╝`

async function malvinC({ sock, msg, jid, PREFIX }) {
  const menuImg = path.join(__dirname, '../public/yala2.mp3')

  if (fs.existsSync(menuImg)) {
    await sock.sendMessage(jid, {
      image: { url: menuImg },
      caption: text
    }, { quoted: msg })
  } else {
    await sock.sendMessage(jid, { text }, { quoted: msg })
  }
}

// ── HANDSOMETECH 
async function handsometech({ sock, msg, jid, PREFIX }) {
  const menuImg = path.join(__dirname, '../public/menu.png')
  const text = `
╔══════════════════════╗
║═★Bot :》 *MALVIN C LEO MD* 《  
║═★Dev :》 Malvin C  😁🇿🇼 《
║═★Malvin C:      
║              *263780026088*     
║              *263776676755*
║═★Commands : 780+
║═★Version: 4.0.1 Beta
╚══════════════════════╝
╔═════════《☆》═════════╗
║─☆ZIMBABWE MENU COMMANDS
║─☆MUSIC DOWNLOAD COMMANDS 
║─☆AI SYSTEM COMMANDS 
║─☆ECONOMY COMMANDS 
║─☆FUN COMMANDS 
║─☆INFO AND TOOLS 
║─☆GROUP COMMANDS 
║─☆MEDIA COMMANDS
║─☆UTILITY COMMANDS 
║─☆TEXT TOOLS 
║─☆CREATIVE COMMAND 
║─☆GAME COMMANDS 
║─☆SOCIAL COMMANDS 
║─☆ADMIN COMMANDS 
╚══════════════════════╝
╔══════════════════════╗
║=======《 *ZIMBABWE* 》=======
║      《MENU COMMANDS》
║─★${PREFIX}menu
║─★${PREFIX}malvinC
║─★${PREFIX}handsometech
║ 
╚══════════════════════╝

║════《 *🎵 MUSIC* 》════║
║─★${PREFIX}play <song> 
║─★${PREFIX}song <song> 
║─★${PREFIX}ytmp3 <url> 
║─★${PREFIX}ytmp4 <url> 
╚════════════════════╝

║════《 *🤖 AI / CHAT* 》════║
║─★${PREFIX}ai <text>
║─★${PREFIX}chat <text> 
║─★${PREFIX}ask <text>
║─★${PREFIX}gpt <text>
║─★${PREFIX}malvin-c-leo <text> 
║─★${PREFIX}co-pilot <text> 
║─★${PREFIX}claude <text>  
║─★${PREFIX}manus <text> 
║─★${PREFIX}chatbot on/off <text> 
╚════════════════════════╝

║════《 *💰 ECONOMY* 》════║
║─★${PREFIX}balance
║─★${PREFIX}daily 
║─★${PREFIX}work 
║─★${PREFIX}rob @user 
║─★${PREFIX}deposit <amt> 
║─★${PREFIX}withdraw <amt> 
║─★${PREFIX}give @user <amt> 
║─★${PREFIX}shop 
║─★${PREFIX}buy <item> 
║─★${PREFIX}leaderboard 
╚══════════════════════╝

║════《 *🎮 FUN* 》════║
║─★${PREFIX}joke 
║─★${PREFIX}fact 
║─★${PREFIX}quote 
║─★${PREFIX}8ball <question>
║─★${PREFIX}flip 
║─★${PREFIX}roll
║─★${PREFIX}rps <rock|paper|scissors>
║─★${PREFIX}dare 
║─★${PREFIX}truth 
║─★${PREFIX}riddle 
║─★${PREFIX}meme
║─★${PREFIX}roast @user 
║─★${PREFIX}compliment @user
║─★${PREFIX}ship @user1 @user2 
║─★${PREFIX}rate @
║─★${PREFIX}choose <a|b
╚═══════════════════╝

║════《 *🌍 INFO & TOOLS* 》════║
║─★${PREFIX}weather <city
║─★${PREFIX}time <city
║─★${PREFIX}calc <expression> 
║─★${PREFIX}define <word>
║─★${PREFIX}wiki <topic>
║─★${PREFIX}news
║─★${PREFIX}translate <lang> <text>
║─★${PREFIX}currency <amt> <from> <to>
║─★${PREFIX}shorten <url>
║─★${PREFIX}qr <text>
║─★${PREFIX}color <hex> 
║─★${PREFIX}ip <address>
║─★${PREFIX}covid 
║─★${PREFIX}crypto <coin>
║─★${PREFIX}horoscope <sign>
║─★${PREFIX}bmi <weight> <height>
║─★${PREFIX}password <length> 
╚══════════════════════════╝

║════《 *👥 GROUP* 》════║
║─★${PREFIX}kick @user
║─★${PREFIX}add <number>
║─★${PREFIX}promote @user
║─★${PREFIX}demote @user
║─★${PREFIX}welcome 
║─★${PREFIX}mute
║─★${PREFIX}unmute
║─★${PREFIX}tagall
║─★${PREFIX}everyone
║─★${PREFIX}groupinfo
║─★${PREFIX}setname <name>
║─★${PREFIX}setdesc <text>
║─★${PREFIX}seticon
║─★${PREFIX}resetlink
║─★${PREFIX}revoke
║─★${PREFIX}invite
║─★${PREFIX}leave
║─★${PREFIX}join <link>
║─★${PREFIX}ban @user
║─★${PREFIX}warn @user
║─★${PREFIX}warnings @user
║─★${PREFIX}clearwarn @user
║─★${PREFIX}antilink on/off 
╚════════════════════╝

║════《 *📱 MEDIA* 》════║
║─★${PREFIX}ytmp3 <url>
║─★${PREFIX}ytmp4 <url>
║─★${PREFIX}tiktok <url>
║─★${PREFIX}instagram <url> 
║─★${PREFIX}facebook <url> 
║─★${PREFIX}sticker
║─★${PREFIX}toimg
║─★${PREFIX}screenshot <url>
║─★${PREFIX}malvinsay 
╚═════════════════════╝

║════《 *🔧 UTILITY* 》════║
║─★${PREFIX}ping 
║─★${PREFIX}uptime
║─★${PREFIX}info 
║─★${PREFIX}owner
║─★${PREFIX}report <text>
║─★${PREFIX}help <command>
║─★${PREFIX}runtime 
║─★${PREFIX}botname
║─★${PREFIX}prefix
║─★${PREFIX}id 
║─★${PREFIX}uid 
║─★${PREFIX}mentionme 
║─★${PREFIX}afk <reason>
║─★${PREFIX}unafk
║─★${PREFIX}stats 
║─★${PREFIX}alive
╚══════════════════════╝

║════《 *📝 TEXT TOOLS* 》════║
║─★${PREFIX}tinytext <text>
║─★${PREFIX}bold <text>
║─★${PREFIX}italic <text>
║─★${PREFIX}strike <text>
║─★${PREFIX}reverse <text> 
║─★${PREFIX}upper <text>
║─★${PREFIX}lower <text>
║─★${PREFIX}mock <text>
║─★${PREFIX}morse <text> 
║─★${PREFIX}caesar <n> <text>
║─★${PREFIX}count <text>
║─★${PREFIX}emojify <text> 
╚════════════════════════╝

║════《 *🎭 CREATIVE* 》════║
║─★${PREFIX}story
║─★${PREFIX}poem
║─★${PREFIX}lyrics <song>
║─★${PREFIX}rap <topic
║─★${PREFIX}slogan <brand>
║─★${PREFIX}recipe <food>
║─★${PREFIX}advice 
║─★${PREFIX}motivation
║─★${PREFIX}affirmation
║─★${PREFIX}prayer
╚═══════════════════════╝

║════《 *🎯 GAMES* 》════║
║─★${PREFIX}tictactoe @user 
║─★${PREFIX}hangman
║─★${PREFIX}wordle 
║─★${PREFIX}quiz
║─★${PREFIX}trivia 
║─★${PREFIX}number
║─★${PREFIX}slots
║─★${PREFIX}blackjack
║─★${PREFIX}lottery
╚═════════════════════╝

║════《 *🌐 SOCIAL* 》════║
║─★${PREFIX}profile 
║─★${PREFIX}setbio <text>
║─★${PREFIX}achievements 
║─★${PREFIX}reputation 
║─★${PREFIX}giverep @user 
║─★${PREFIX}rank
║─★${PREFIX}level
║─★${PREFIX}xp
║─★${PREFIX}badge
║─★${PREFIX}marry @user 
║─★${PREFIX}divorce
║─★${PREFIX}partner
╚════════════════════╝

║════《 *🔐 ADMIN* 》════║
║─★${PREFIX}broadcast <text>
║─★${PREFIX}blacklist @user
║─★${PREFIX}unblacklist @
║─★${PREFIX}maintenance on/off
║─★${PREFIX}eval <code>
╚════════════════════╝    
║════《 > *MALVIN-C* 》════║
║─★Total: 783 commands
║─★Prefix: ${PREFIX}_
║─★Dev: Malvin C 😁 
║─★Proudly Zimbabwean
║─★ > Handsome Tech >_
╚════════════════════╝`

async function help({ sock, msg, jid, PREFIX }) {
  const menuImg = path.join(__dirname, '../public/yala2.mp3')

  if (fs.existsSync(menuImg)) {
    await sock.sendMessage(jid, {
      image: { url: menuImg },
      caption: text
    }, { quoted: msg })
  } else {
    await sock.sendMessage(jid, { text }, { quoted: msg })
  }
}
// ── PING
const startTime = Date.now()
async function ping({ sock, msg, jid }) {
  const t = Date.now()
  await sock.sendMessage(jid, { text: `Malvin C 🏓 Pong! *${Date.now() - t}ms*` }, { quoted: msg })
}

// ── UPTIME
async function uptime({ sock, msg, jid }) {
  const s = Math.floor((Date.now() - startTime) / 1000)
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60
  await sock.sendMessage(jid, { text: `⏱ *Uptime:* ${h}h ${m}m ${sec}s` }, { quoted: msg })
}

// ── INFO
async function info({ sock, msg, jid }) {
  await sock.sendMessage(jid, {
    text: `🤖 *Malvin C Leo Bot*\n\n👨‍💻 Dev: Malvin C 🇿🇼\n🔧 Engine: Baileys\n📦 Commands: 783\n🌐 Prefix: .\n💬 Type .menu for all commands`
  }, { quoted: msg })
}

async function alive({ sock, msg, jid }) {
  await sock.sendMessage(jid, {
    text: `✅ *Malvin C Leo is Alive!*\n\n🤖 Bot: Online\n⚡ Status: Active\n🇿🇼 Powered by Handsome Tech`
  }, { quoted: msg })
}

// ── JOKE
async function joke({ sock, msg, jid }) {
  try {
    const r = await axios.get('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist&type=single', { timeout: 5000 })
    await sock.sendMessage(jid, { text: `😂 *Joke*\n\n${r.data.joke}` }, { quoted: msg })
  } catch {
    const jokes = ['Why don\'t scientists trust atoms? Because they make up everything!','I told my wife she was drawing her eyebrows too high. She looked surprised.','Why do cows wear bells? Because their horns don\'t work!']
    await sock.sendMessage(jid, { text: `😂 *Joke*\n\n${jokes[Math.floor(Math.random() * jokes.length)]}` }, { quoted: msg })
  }
}

// ── FACT
async function fact({ sock, msg, jid }) {
  try {
    const r = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random', { timeout: 5000 })
    await sock.sendMessage(jid, { text: `💡 *Random Fact*\n\n${r.data.text}` }, { quoted: msg })
  } catch {
    await sock.sendMessage(jid, { text: `💡 *Fact*\n\nHoney never spoils. Archaeologists have found 3000-year-old honey in Egyptian tombs still perfectly edible!` }, { quoted: msg })
  }
}

// ── QUOTE
async function quote({ sock, msg, jid }) {
  try {
    const r = await axios.get('https://zenquotes.io/api/random', { timeout: 5000 })
    const q = r.data[0]
    await sock.sendMessage(jid, { text: `💬 *Quote*\n\n_"${q.q}"_\n\n— *${q.a}*` }, { quoted: msg })
  } catch {
    await sock.sendMessage(jid, { text: `💬 *Quote*\n\n_"The best time to plant a tree was 20 years ago. The second best time is now."_\n\n— *Chinese Proverb*` }, { quoted: msg })
  }
}

// ── 8BALL
const eightBallAnswers = ['Yes definitely!','It is certain','Without a doubt','Yes!','Most likely','Ask again later','Cannot predict now','Don\'t count on it','My reply is no','Very doubtful']
async function eightball({ sock, msg, jid, args }) {
  if (!args.length) return sock.sendMessage(jid, { text: `🎱 Ask a question! *.8ball will I be rich?*` }, { quoted: msg })
  const answer = eightBallAnswers[Math.floor(Math.random() * eightBallAnswers.length)]
  await sock.sendMessage(jid, { text: `🎱 *Magic 8 Ball*\n\n❓ ${args.join(' ')}\n\n✨ *${answer}*` }, { quoted: msg })
}

// ── FLIP
async function flip({ sock, msg, jid }) {
  await sock.sendMessage(jid, { text: `🪙 *Coin Flip:* ${Math.random() > 0.5 ? '🌟 HEADS' : '⚪ TAILS'}` }, { quoted: msg })
}

// ── ROLL
async function roll({ sock, msg, jid }) {
  await sock.sendMessage(jid, { text: `🎲 *Dice Roll:* ${Math.floor(Math.random() * 6) + 1}` }, { quoted: msg })
}

// ── RPS
async function rps({ sock, msg, jid, args }) {
  const choices = ['rock','paper','scissors']
  const player = args[0]?.toLowerCase()
  if (!choices.includes(player)) return sock.sendMessage(jid, { text: `✂️ .rps <rock|paper|scissors>` }, { quoted: msg })
  const bot = choices[Math.floor(Math.random() * 3)]
  const wins = { rock: 'scissors', paper: 'rock', scissors: 'paper' }
  const result = player === bot ? '🟡 Draw!' : wins[player] === bot ? '🟢 You Win!' : '🔴 You Lose!'
  await sock.sendMessage(jid, { text: `✂️ *Rock Paper Scissors*\n\nYou: *${player}*\nBot: *${bot}*\n\n${result}` }, { quoted: msg })
}

// ── CALC
async function calc({ sock, msg, jid, args }) {
  const expr = args.join(' ')
  if (!expr) return sock.sendMessage(jid, { text: `🔢 *.calc 5 + 3 * 2*` }, { quoted: msg })
  try {
    // Safe eval using Function
    const result = Function(`"use strict"; return (${expr.replace(/[^0-9+\-*/().% ]/g, '')})`)()
    await sock.sendMessage(jid, { text: `🔢 *Calculator*\n\n${expr} = *${result}*` }, { quoted: msg })
  } catch {
    await sock.sendMessage(jid, { text: `❌ Invalid expression` }, { quoted: msg })
  }
}

// ── WEATHER
async function weather({ sock, msg, jid, args }) {
  const city = args.join(' ')
  if (!city) return sock.sendMessage(jid, { text: `🌤 *.weather Harare*` }, { quoted: msg })
  try {
    const r = await axios.get(`https://wttr.in/${encodeURIComponent(city)}?format=3`, { timeout: 5000 })
    await sock.sendMessage(jid, { text: `🌤 *Weather*\n\n${r.data}` }, { quoted: msg })
  } catch {
    await sock.sendMessage(jid, { text: `❌ Could not fetch weather for *${city}*` }, { quoted: msg })
  }
}

// ── TRANSLATE
async function translate({ sock, msg, jid, args }) {
  const [lang, ...textArr] = args
  const text = textArr.join(' ')
  if (!lang || !text) return sock.sendMessage(jid, { text: `🌐 *.translate sn Hello world*` }, { quoted: msg })
  try {
    const r = await axios.get(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${lang}`, { timeout: 5000 })
    await sock.sendMessage(jid, { text: `🌐 *Translation*\n\nOriginal: ${text}\nTranslated (${lang}): *${r.data.responseData.translatedText}*` }, { quoted: msg })
  } catch {
    await sock.sendMessage(jid, { text: `❌ Translation failed` }, { quoted: msg })
  }
}

// ── CRYPTO
async function crypto({ sock, msg, jid, args }) {
  const coin = (args[0] || 'bitcoin').toLowerCase()
  try {
    const r = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`, { timeout: 5000 })
    const price = r.data[coin]?.usd
    if (!price) throw new Error()
    await sock.sendMessage(jid, { text: `💰 *${coin.toUpperCase()}*\n\nPrice: *$${price.toLocaleString()}*` }, { quoted: msg })
  } catch {
    await sock.sendMessage(jid, { text: `❌ Could not fetch price for *${coin}*` }, { quoted: msg })
  }
}

// ── DEFINE
async function define({ sock, msg, jid, args }) {
  const word = args[0]
  if (!word) return sock.sendMessage(jid, { text: `📖 *.define ubuntu*` }, { quoted: msg })
  try {
    const r = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`, { timeout: 5000 })
    const entry = r.data[0]
    const def = entry.meanings[0].definitions[0].definition
    const pos = entry.meanings[0].partOfSpeech
    await sock.sendMessage(jid, { text: `📖 *${word}*\n_(${pos})_\n\n${def}` }, { quoted: msg })
  } catch {
    await sock.sendMessage(jid, { text: `❌ Definition not found for *${word}*` }, { quoted: msg })
  }
}

// ── TEXT TOOLS
async function reverse({ sock, msg, jid, args }) {
  const t = args.join(' ')
  if (!t) return sock.sendMessage(jid, { text: `↩ *.reverse hello world*` }, { quoted: msg })
  await sock.sendMessage(jid, { text: `↩ ${t.split('').reverse().join('')}` }, { quoted: msg })
}

async function upper({ sock, msg, jid, args }) {
  await sock.sendMessage(jid, { text: args.join(' ').toUpperCase() }, { quoted: msg })
}

async function lower({ sock, msg, jid, args }) {
  await sock.sendMessage(jid, { text: args.join(' ').toLowerCase() }, { quoted: msg })
}

async function mock({ sock, msg, jid, args }) {
  const t = args.join(' ')
  const result = t.split('').map((c, i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join('')
  await sock.sendMessage(jid, { text: result }, { quoted: msg })
}

async function count({ sock, msg, jid, args }) {
  const t = args.join(' ')
  await sock.sendMessage(jid, { text: `📊 *Count*\n\nCharacters: ${t.length}\nWords: ${t.split(/\s+/).filter(Boolean).length}` }, { quoted: msg })
}

// ── SLOTS
async function slots({ sock, msg, jid }) {
  const s = ['🍎','🍊','🍋','🍇','⭐','💎','7️⃣','🎰']
  const r = () => s[Math.floor(Math.random() * s.length)]
  const a = r(), b = r(), c = r()
  const win = a === b && b === c
  await sock.sendMessage(jid, {
    text: `🎰 *Slots*\n\n[ ${a} | ${b} | ${c} ]\n\n${win ? '🎉 *JACKPOT! You Win!*' : '😞 Better luck next time!'}`
  }, { quoted: msg })
}

// ── TRIVIA
async function trivia({ sock, msg, jid }) {
  try {
    const r = await axios.get('https://opentdb.com/api.php?amount=1&type=multiple', { timeout: 5000 })
    const q = r.data.results[0]
    const opts = [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5)
    const letters = ['A','B','C','D']
    const optText = opts.map((o, i) => `${letters[i]}. ${o}`).join('\n')
    await sock.sendMessage(jid, {
      text: `🎯 *Trivia*\n\n${q.question}\n\n${optText}\n\n_Answer: ${q.correct_answer}_`
    }, { quoted: msg })
  } catch {
    await sock.sendMessage(jid, { text: `🎯 *Trivia*\n\nWhat is the capital of Zimbabwe?\n\nA. Bulawayo\nB. Harare\nC. Mutare\nD. Gweru\n\n_Answer: Harare_` }, { quoted: msg })
  }
}

// ── ADVICE
async function advice({ sock, msg, jid }) {
  try {
    const r = await axios.get('https://api.adviceslip.com/advice', { timeout: 5000 })
    await sock.sendMessage(jid, { text: `🌟 *Advice*\n\n${r.data.slip.advice}` }, { quoted: msg })
  } catch {
    await sock.sendMessage(jid, { text: `🌟 *Advice*\n\nWork hard in silence. Let your success be the noise.` }, { quoted: msg })
  }
}

// ── MOTIVATION
async function motivation({ sock, msg, jid }) {
  const msgs = [
    'Believe in yourself! You are stronger than you think 💪',
    'Every day is a new opportunity to grow 🌱',
    'Your dreams are valid. Keep pushing! 🚀',
    'Success is not final, failure is not fatal. Keep going! 🔥',
    'In Zimbabwe we say: *Pastaira racho chero zvikaoma, usaramba!* Never give up! 🇿🇼\n\nMalvin C Motivation'
  ]
  await sock.sendMessage(jid, { text: `💪 *Motivation*\n\n${msgs[Math.floor(Math.random() * msgs.length)]}` }, { quoted: msg })
}

// ── PRAYER
async function prayer({ sock, msg, jid }) {
  await sock.sendMessage(jid, {
    text: `🙏 *Daily Prayer*\n\nLord, guide our steps today.\nBless the work of our hands.\nGive us wisdom, strength, and peace.\nMay Zimbabwe and all nations prosper.\n\nAmen 🙏\n\n_Powered by Handsome Tech Zimbabwe_ 🇿🇼`
  }, { quoted: msg })
}

// ── ID / UID / PREFIX
async function id({ sock, msg, jid }) {
  await sock.sendMessage(jid, { text: `🆔 *Chat ID:* \`${jid}\`` }, { quoted: msg })
}
async function uid({ sock, msg, jid }) {
  const sender = msg.key.participant || jid
  await sock.sendMessage(jid, { text: `🆔 *Your ID:* \`${sender}\`` }, { quoted: msg })
}
async function prefix({ sock, msg, jid, PREFIX }) {
  await sock.sendMessage(jid, { text: `⚙️ *Current prefix:* \`${PREFIX}\`` }, { quoted: msg })
}
async function botname({ sock, msg, jid }) {
  await sock.sendMessage(jid, { text: `🤖 *Bot Name:* Malvin C Leo\n_Powered by Handsome Tech Zimbabwe_ 🇿🇼` }, { quoted: msg })
}
async function owner({ sock, msg, jid }) {
  await sock.sendMessage(jid, { text: `👨‍💻 *Owner:* Handsome Tech Zimbabwe 🇿🇼\n📱 Bot: Malvin C Leo\n🔧 Framework: Baileys` }, { quoted: msg })
}


async function runtime({ sock, msg, jid }) {
  const s = process.uptime()
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = Math.floor(s % 60)
  await sock.sendMessage(jid, { text: `⏱ *Runtime:* ${h}h ${m}m ${sec}s` }, { quoted: msg })
}

// ── COMPLIMENT / ROAST
async function compliment({ sock, msg, jid }) {
  const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0]
  const target = mentioned ? `@${mentioned.split('@')[0]}` : 'you'
  const cs = ['You are absolutely amazing! 🌟','Your smile lights up any room! ☀️','You are one of a kind! 💎','The world is better with you in it! 🌍','You have a heart of gold! 💛']
  await sock.sendMessage(jid, { text: `💝 *Compliment*\n\n${target}, ${cs[Math.floor(Math.random() * cs.length)]}`, mentions: mentioned ? [mentioned] : [] }, { quoted: msg })
}

async function roast({ sock, msg, jid }) {
  const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0]
  const target = mentioned ? `@${mentioned.split('@')[0]}` : 'you'
  const rs = ['You\'re the reason the gene pool needs a lifeguard 😂','I\'ve seen better looking things in a petri dish 😆','You\'re not stupid, you just have bad luck thinking 😅','Your secrets are always safe with me, I never listen anyway 😂']
  await sock.sendMessage(jid, { text: `🔥 *Roast*\n\n${target}, ${rs[Math.floor(Math.random() * rs.length)]}`, mentions: mentioned ? [mentioned] : [] }, { quoted: msg })
}

// ── SHIP
async function ship({ sock, msg, jid }) {
  const mentions = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid || []
  if (mentions.length < 2) return sock.sendMessage(jid, { text: `💕 *.ship @user1 @user2*` }, { quoted: msg })
  const pct = Math.floor(Math.random() * 101)
  const bar = '█'.repeat(Math.floor(pct / 10)) + '░'.repeat(10 - Math.floor(pct / 10))
  const emoji = pct >= 80 ? '💞' : pct >= 50 ? '💖' : pct >= 30 ? '💛' : '💔'
  await sock.sendMessage(jid, {
    text: `${emoji} *Shipping*\n\n@${mentions[0].split('@')[0]} + @${mentions[1].split('@')[0]}\n\n[${bar}] *${pct}%*\n\n${pct >= 80 ? 'Perfect match!' : pct >= 50 ? 'Good match!' : pct >= 30 ? 'Could work...' : 'Not a match 💔'}`,
    mentions
  }, { quoted: msg })
}

// ── AFFIRMATION
async function affirmation({ sock, msg, jid }) {
  const affs = ['I am worthy of love and success 💫','I attract positivity into my life 🌈','I am capable of achieving greatness 🚀','I am grateful for all that I have 🙏','Today is going to be a great day ☀️']
  await sock.sendMessage(jid, { text: `✨ *Daily Affirmation*\n\n_${affs[Math.floor(Math.random() * affs.length)]}_` }, { quoted: msg })
}

// ── PASSWORD GENERATOR
async function password({ sock, msg, jid, args }) {
  const len = parseInt(args[0]) || 12
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'
  let pwd = ''
  for (let i = 0; i < Math.min(len, 32); i++) pwd += chars[Math.floor(Math.random() * chars.length)]
  await sock.sendMessage(jid, { text: `🔐 *Generated Password*\n\n\`${pwd}\`\n\n_Keep it safe!_` }, { quoted: msg })
}

// ── RATE
async function rate({ sock, msg, jid }) {
  const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0]
  const target = mentioned ? `@${mentioned.split('@')[0]}` : 'you'
  const score = Math.floor(Math.random() * 101)
  await sock.sendMessage(jid, { text: `⭐ *Rating*\n\n${target} scores *${score}/100*\n${'⭐'.repeat(Math.round(score / 20))}`, mentions: mentioned ? [mentioned] : [] }, { quoted: msg })
}

// ── CHOOSE
async function choose({ sock, msg, jid, args }) {
  const options = args.join(' ').split('|').map(o => o.trim()).filter(Boolean)
  if (options.length < 2) return sock.sendMessage(jid, { text: `🤔 *.choose option1 | option2 | option3*` }, { quoted: msg })
  const pick = options[Math.floor(Math.random() * options.length)]
  await sock.sendMessage(jid, { text: `🤔 *Bot chooses:* *${pick}*` }, { quoted: msg })
}

// ── BMI
async function bmi({ sock, msg, jid, args }) {
  const [weight, height] = args.map(Number)
  if (!weight || !height) return sock.sendMessage(jid, { text: `⚖️ *.bmi 70 1.75* (kg, meters)` }, { quoted: msg })
  const b = (weight / (height * height)).toFixed(1)
  const cat = b < 18.5 ? 'Underweight' : b < 25 ? 'Normal weight' : b < 30 ? 'Overweight' : 'Obese'
  await sock.sendMessage(jid, { text: `⚖️ *BMI Calculator*\n\nBMI: *${b}*\nCategory: *${cat}*` }, { quoted: msg })
}

// ── DARE / TRUTH
const dares = ['Text your last contact "I love you" 😂','Do 10 pushups right now 💪','Send a selfie 📸','Sing a song and send the voice note 🎤','Say something nice about the person who gave you this dare 💝']
const truths = ['What\'s your biggest secret? 🤫','Who is your crush? 😍','What\'s your most embarrassing moment? 😳','What is your biggest fear? 😨','When did you last cry and why? 😢']
async function dare({ sock, msg, jid }) {
  await sock.sendMessage(jid, { text: `🎭 *Dare*\n\n${dares[Math.floor(Math.random() * dares.length)]}` }, { quoted: msg })
}
async function truth({ sock, msg, jid }) {
  await sock.sendMessage(jid, { text: `🎭 *Truth*\n\n${truths[Math.floor(Math.random() * truths.length)]}` }, { quoted: msg })
}

// ── STATS
async function stats({ sock, msg, jid }) {
  await sock.sendMessage(jid, {
    text: `📊 *Bot Stats*\n\n🤖 Name: Malvin C Leo\n📦 Commands: 783\n⚙️ Engine: Baileys\n💻 Runtime: Node.js\n🌐 Prefix: .\n🇿🇼 By: Handsome Tech Zimbabwe`
  }, { quoted: msg })
}

module.exports = {
  menu, malvinC, handsometech, ping, uptime, info, alive, joke, fact, quote,
  '8ball': eightball, flip, roll, rps, calc, weather,
  translate, crypto, define, reverse, upper, lower,
  mock, count, slots, trivia, advice, motivation,
  prayer, id, uid, prefix, botname, owner, help,
  runtime, compliment, roast, ship, affirmation,
  password, rate, choose, bmi, dare, truth, stats
}
