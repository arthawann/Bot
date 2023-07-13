exports.run = {
   usage: ['mute'],
   use: '0 / 1',
   category: 'admin tools',
   async: async (m, {
      args,
      isPrefix,
      command
   }) => {
      let gc = global.db.groups.find(v => v.jid == m.chat)
      let opt = [0, 1]
      let rows = [{
         title: 'True',
         rowId: `${isPrefix + command} 1`,
         description: ``
      }, {
         title: 'False',
         rowId: `${isPrefix + command} 0`,
         description: ``
      }]
      if (!args || !args[0] || !opt.includes(parseInt(args[0]))) return client.sendList(m.chat, '', `🚩 *Current status* : [ ${gc.mute ? 'True' : 'False'} ]`, '', 'Tap!', [{ rows }], m)
      if (parseInt(args[0]) == 1) {
         if (gc.mute) return client.reply(m.chat, Func.texted('bold', `〙Sudah termute sebelumnya〘`), m)
         gc.mute = true
         client.reply(m.chat, Func.texted('bold', `〙Sukses Termute〘`), m)
      } else if (parseInt(args[0]) == 0) {
         if (!gc.mute) return client.reply(m.chat, Func.texted('bold', `〙Sudah terunmute sebelumnya〘`), m)
         gc.mute = false
         client.reply(m.chat, Func.texted('bold', `〙Sukses terunmute〘`), m)
      }
   },
   admin: true,
   group: true,
   cache: true,
   location: __filename
}