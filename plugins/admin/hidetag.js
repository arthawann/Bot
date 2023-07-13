exports.run = {
  usage: ['hidetag'],
  use: 'text',
  category: 'admin tools',
  async: async (m, { client, text, participants }) => {
    let users = participants.map(u => u.id)
    let replyText = `*[Tensura News]*\n\n${text}` // Menambahkan "anjay" di depan chat
    await client.reply(m.chat, replyText, null, { mentions: users })
  },
  admin: true,
  group: true
}