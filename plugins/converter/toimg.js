const { readFileSync: read, unlinkSync: remove } = require('fs')
const path = require('path')
const { exec } = require('child_process')
const { tmpdir } = require('os')
exports.run = {
   usage: ['toimg'],
   use: 'reply sticker',
   category: 'converter',
   async: async (m, {
      client
   }) => {
      try {
         if (!m.quoted) return client.reply(m.chat, Func.texted('bold', `🚩 Reply stiker untuk menconvert ke gambar (tidak support untuk sticker bergerak).`), m)
         if (m.quoted.mimetype != 'image/webp') return client.reply(m.chat, Func.texted('bold', `🚩 Reply stiker untuk menconvert ke gambar (tidak support untuk sticker bergerak).`), m)
         let media = await client.saveMediaMessage(m.quoted)
         let file = Func.filename('png')
         let isFile = path.join(tmpdir(), file)
         exec(`ffmpeg -i ${media} ${isFile}`, (err, stderr, stdout) => {
            remove(media)
            if (err) return client.reply(m.chat, Func.texted('bold', `🚩 Maaf gagal menconvert.`), m)
            buffer = read(isFile)
            client.sendFile(m.chat, buffer, '', '', m)
            remove(isFile)
         })
      } catch (e) {
         console.log(e)
         return client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   limit: true,
   cache: true,
   location: __filename
}