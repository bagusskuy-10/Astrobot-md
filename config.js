import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
      
global.pairingNumber = 62xxxxxx
global.owner = [
  ['6283163686712', 'bagus skuy', true]
]
global.mods = ['6283163686712']

global.namebot = 'ASTROBOT - MD'
global.author = 'Astrobot'

// MENU AUDIO / MENU BOT 
global.audio = "https://file.botcahx.eu.org/file/hwxpz6o5bsg4qi5zb7sw.mp3"; // boleh di ubah pakai audio url kamu
global.menu = "https://c.termai.cc/i121/3hXJidr.jpg"; // bebas di ubah

// MEDIA OWNER
global.gc = "https://chat.whatsapp.com/LJBaQ2ZZG0cH6P9yJgoGQF"; // wajib di isi tidak boleh kosong
global.thumb = 'https://c.termai.cc/i119/LCupV.jpg'; // jangan di ubah nanti error
global.instagram = "https://instagram.com/bagus.ganz10"; // wajib di isi tidak boleh kosong


// MEDIA DONASI OWNER
global.dana = "083163686712"; // ubah nomor dana kamu
global.ovo = "08xxxxx"; // ubah ovo kamu
global.gopay = "08xxxx"; // ubah pakai gopay kamu
global.shopepay = "xxxxxxx"; // ubah pakai shopepay kamu
global.mksmp3 = "https://file.botcahx.eu.org/file/kpy4qkhwfwnyu8ulpfwm.opus"; // jangan di ubah nanti error 


global.wait = 'Loading...'
global.eror = 'Terjadi Kesalahan...'
global.domain= '_',
global.ptla= '_',
global.nestid= '5',
global.egg= '15',
global.loc= '1',   

global.payment = {
  dana: "083163686712",
  ovo: "089xxxxxxxx",
  gopay: "089xxxxxxxx",
  bca: "123456789 - A/N Store",
  bri: "123456789 - A/N Store",
  mandiri: "123456789 - A/N Store"
}

global.pakasir = {
slug: 'kilersbotz',
apikey: 'bWDO2M8GcfruzXscdKNQJC3vw8Y8PV13',
expired: 30 //1 = 1menit. 30 = 30menit
}

global.stickpack = 'Croted By'
global.stickauth = namebot

global.multiplier = 38 // The higher, The harder levelup


// APIKEY INI WAJIB DI ISI! //
global.btc = "barXbar";
// global.btc = process.env.API_KEY_BTC;
// aktifkan akses .env di atas jika kamu ingin menaruh key api di .env
// Daftar terlebih dahulu https://api.botcahx.eu.org

// AKSESKEY INI DI ISI JIKA DIPERLUKAN (e.g suno ai (ai music ) & fitur prem lainnya//
global.aksesKey = "barXbar";
// global.aksesKey = process.env.API_KEY_BTC_AKSESKEY;
// aktifkan akses .env di atas jika kamu ingin menaruh key api di .env
// Daftar terlebih dahulu https://api.botcahx.eu.org

// Tidak boleh diganti atau di ubah
global.APIs = {
  btc: "https://api.botcahx.eu.org",
};

//Tidak boleh diganti atau di ubah
global.APIKeys = {
  "https://api.botcahx.eu.org": global.btc,
};

/*============== EMOJI ==============*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '📊',
      limit: '🎫',
      health: '❤️',
      stamina: '🔋',
      exp: '✨',
      money: '💹',
      bank: '🏦',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🛍️',
      mythic: '🎁',
      legendary: '🗃️',
      superior: '💼',
      pet: '🔖',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      pickaxe: '⛏️',
      fishingrod: '🎣',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐴',
      cat: '🐱',
      dog: '🐶',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '🪙',
      emerald: '❇️',
      upgrader: '🧰'
      
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
