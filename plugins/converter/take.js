exports.run = {
   usage: ['take'],
   hidden: ['wm'],
   use: 'packname | author',
   category: 'converter',
   async: async (m, {
      client,
      text,
      isPrefix
   }) => {
      try {
         if (!text) return client.reply(m.chat, Func.texted('bold', `🚩 Kasih text untuk membuat watermark.`), m)
         let [packname, ...author] = text.split`|`
         author = (author || []).join`|`
         let q = m.quoted ? m.quoted : m
         let mime = (q.msg || q).mimetype || ''
         if (!/webp/.test(mime)) return client.reply(m.chat, Func.texted('bold', `🚩 Reply sticker yang kamu inginkan untuk menggati watermarkn.`), m)
         let img = await q.download()
         if (!img) return client.reply(m.chat, global.status.wrong, m)
         client.sendSticker(m.chat, img, m, {
            packname: packname || '',
            author: author || ''
         })
      } catch (e) {
         console.log(e)
         return client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   premium: true,
   limit: true,
   cache: true,
   location: __filename
}