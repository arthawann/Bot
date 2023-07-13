exports.run = {
   usage: ['join'],
   use: 'group link',
   category: 'owner',
   async: async (m, {
      client,
      args,
      isPrefix,
      command
   }) => {
      try {
         if (!args || !args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'https://chat.whatsapp.com/codeInvite'), m)
         let link = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
         let [_, code] = args[0].match(link) || []
         if (!code) return client.reply(m.chat, global.status.invalid, m)
         let id = await client.groupAcceptInvite(code)
         if (!id.endsWith('g.us')) return client.reply(m.chat, Func.texted('bold', `🚩 Maaf gw gak bisa joindi grup ini :(`), m)
         let member = await (await client.groupMetadata(id)).participants.map(v => v.id)
         return client.reply(m.chat, `🚩 Joined!`, m)
      } catch {
         return client.reply(m.chat, Func.texted('bold', `🚩 Maaf gw ga k bis join di grup ini :(`), m)
      }
   },
   owner: true
}