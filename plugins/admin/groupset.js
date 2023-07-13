exports.run = {
   usage: ['setdesc', 'setname'],
   use: 'text',
   category: 'admin tools',
   async: async (m, {
      client,
      text,
      isPrefix,
      command
   }) => {
      let value = m.quoted ? m.quoted.text : text
      if (command == 'setname') {
         if (!value) return client.reply(m.chat, Func.example(isPrefix, command, 'CHATBOT'), m)
         if (value > 25) return client.reply(m.chat, Func.texted('bold', `〙Text terlalu panjang! maxs 25 Karakter〘`), m)
         await client.groupUpdateSubject(m.chat, value)
      } else if (command == 'setdesc') {
     	if (!value) return client.reply(m.chat, Func.example(isPrefix, command, `〙Patuhi rules kalo lu gak mau di kick〘`), m)
         await client.groupUpdateDescription(m.chat, value)
      }
   },
   group: true,
   admin: true,
   botAdmin: true
}