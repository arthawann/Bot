exports.run = {
   usage: ['setwelcome', 'setleft'],
   hidden: ['setout'],
   use: 'text',
   category: 'admin tools',
   async: async (m, {
      client,
      text,
      isPrefix,
      command
   }) => {
      let setup = global.db.groups.find(v => v.jid == m.chat)
      if (command == 'setwelcome') {
         if (!text) return client.reply(m.chat, formatWel(isPrefix, command), m)
         setup.text_welcome = text
         await client.reply(m.chat, Func.texted('bold', `🔧 Berhasil mengset.`), m)
      } else if (/set(out|left)/i.test(command)) {
         if (!text) return client.reply(m.chat, formatLef(isPrefix, command), m)
         setup.text_left = text
         await client.reply(m.chat, Func.texted('bold', `🔧 berhasil mengset.`), m)
      }
   },
   admin: true
}

const formatWel = (prefix, command) => {
   return `Maaf banget, tidak bisa di balikin tanpa text, dan iini contoh dan cara menggunakan :

*1.* +tag : untuk mengetag member baru yang join.
*2.* +grup : untuk mendapatkan nama Group.

• *Contohnya* : ${prefix + command} Hello +tag, Selamat datang di +grup group, Semoga betah hehe.`
}

const formatLef = (prefix, command) => {
   return `Maaf banget, gak bisa balikin tanpa text, dan ini contoh dan cara penggunaan :

*1.* +tag : Untuk mengtag member yang keluar.
*2.* +grup : Untuk membaca nama group.

• *contohnya* : ${prefix + command} Selamat tinggal +tag, terimakasih`
}