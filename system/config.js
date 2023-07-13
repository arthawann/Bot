const { Function, Scraper } = new (require('@neoxr/neoxr-js'))
// Owner number
global.owner = '6283865662983'
// Owner name
global.owner_name = 'iHax'
// Database name (Default: database)
global.database = 'database'
// Maximum upload file size limit (Default : 100 MB)
global.max_upload = 100
// Delay for spamming protection (Default : 3 seconds)
global.cooldown = 4
// User Limitation (Default : 25)
global.limit = 1000
// Time to be temporarily banned and others (Default : 30 minutes)
global.timer = 1800000
// Symbols that are excluded when adding a prefix (Don't change it)
global.evaluate_chars = ['=>', '~>', '<', '>', '$']
// Country code that will be automatically blocked by the system, when sending messages in private chat
global.blocks = ['91', '92', '212']
// Put target jid to forward friends story
global.forwards = global.owner + '@c.us'
// Get neoxr apikey by registering at https://api.neoxr.my.id
global.Api = new (require('./neoxrApi'))(process.env.API_KEY)
// Timezone (Default : Asia/Jakarta)
global.timezone = 'Asia/Jakarta'
// Bot version
global.version = '99.99',
// Bot name
global.botname = `© Tensura-Bot v${global.version} (Public Bot)`
// Footer text
global.footer = 'Tensura Community'
// Scraper
global.scrap = Scraper
// Function
global.Func = Function
// Global status
global.status = Object.freeze({
   wait: Func.texted('bold', 'Sabar cuk sedang diproses'),
   invalid: Func.texted('bold', 'URL salah anjay'),
   wrong: Func.texted('bold', 'Formatnya salah pak'),
   getdata: Func.texted('bold', 'Scraping metadata . . .'),
   fail: Func.texted('bold', 'Can\'t get metadata!'),
   error: Func.texted('bold', 'Error occurred!'),
   errorF: Func.texted('bold', 'Maaf fitur ini error'),
   premium: Func.texted('bold', 'Fitur ini hanya untuk member premium.'),
   owner: Func.texted('bold', 'Perintah ini hanya untuk iHax.'),
   god: Func.texted('bold', 'Perintah ini hanya untuk master'),
   group: Func.texted('bold', 'Perintah ini hanya bekerja di dalam grup.'),
   botAdmin: Func.texted('bold', 'Ya minimal jadiin admin dulu lah ya.'),
   admin: Func.texted('bold', 'Perintah ini hanya untuk admin grup.'),
   private: Func.texted('bold', 'Gunakanperinah ini di private chat.')
})