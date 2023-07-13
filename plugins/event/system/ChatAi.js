exports.run = {
  async: async (m, { client, body, chats, setting }) => {
    try {
      if (body && !global.evaluate_chars.some(v => body.startsWith(v))) {
        let json = await scrap.chatAI(process.env.BRAIN_API_ID, process.env.BRAIN_API_SECRET, body)
        if (!m.fromMe && setting.chatbot && json.status) {
          let replyMsg = `*[TensuraAI]* ${json.msg.replace(/_/g, "\\_")}` // Tambahkan [TensuraAI] di awal pesan
          await new Promise(resolve => setTimeout(resolve, 3000)) // Jeda 3 detik
          await client.reply(m.chat, replyMsg, m) // Menggunakan 'reply' untuk membalas dengan mencantumkan pesan asli
        }
      }
    } catch (e) {
      console.log(e)
    }
  },
  error: false,
  private: true,
  cache: true,
  location: __filename
}