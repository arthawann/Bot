exports.run = {
   usage: ['owner'],
   category: 'special',
   async: async (m, {
      client
   }) => {
      client.sendContact(m.chat, [{
         name: global.owner_name,
         number: global.owner,
         about: 'Owner'
      }], m, {
         org: 'Tensura Community',
         website: 'https://discord.gg/tensuras',
         email: '-'
      })
   },
   error: false,
   cache: true,
   location: __filename
}