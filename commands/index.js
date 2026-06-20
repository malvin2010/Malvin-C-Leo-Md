// ── Command loader — Malvin C Leo
const fs = require('fs')
const path = require('path')

const commands = {}

// Load every .js file in this folder except index.js
const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.js') && f !== 'index.js')

for (const file of files) {
  try {
    const mod = require(path.join(__dirname, file))
    // each file exports { commandName: asyncFn, ... }
    Object.assign(commands, mod)
  } catch (e) {
    console.error(`Failed to load ${file}:`, e.message)
  }
}

module.exports = commands
