exports.run = {
   usage: ['emojimix'],
   hidden: ['mix', 'emomix'],
   use: 'emoji + emoji',
   category: 'converter',
   async: async (m, {
      client,
      text,
      isPrefix,
      command
   }) => {
      try {
         let exif = global.db.setting
         if (!text) return client.reply(m.chat, Func.example(isPrefix, command, '😳+😩'), m)
         let [emo1, emo2] = text.split`+`
         if (!emo1 || !emo2) return client.reply(m.chat, Func.texted('bold', `🚩 Kasi 2 emoji untuk di mix.`), m)
         let json = await Api.emojimix(emo1 + '_' + emo2)
         if (!json.status) return client.reply(m.chat, Func.texted('bold', `🚩 Emoji ini tidak bisa di mix.`), m)
         await client.sendSticker(m.chat, await Func.fetchBuffer(json.data.url), m, {
            packname: exif.sk_pack,
            author: exif.sk_author,
            categories: [emo1, emo2]
         })
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   limit: true,
   cache: true,
   location: __filename
}