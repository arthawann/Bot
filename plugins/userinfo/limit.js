exports.run = {
   usage: ['limit'],
   category: 'user info',
   async: async (m, {
      client,
      isPrefix,
   }) => {
      let user = global.db.users.find(v => v.jid == m.sender)
      if (user.limit < 1) return client.reply(m.chat, `🚩 Limit telah habis dan limit akan direset setiap hari pada 00.00\n\nUntk mendapatkan lebihbanyak limit, YA BELI PREMIUM *${isPrefix}premium*`, m)
      client.reply(m.chat, `🍟 Limit mu : [ *${Func.formatNumber(user.limit)}* ]${!user.premium ? `\n\nUntuk mendapatkan lebihbanyak limit, YA BELI PREMIUM *${isPrefix}premium*` : ''}`, m)
   },
   error: false
}