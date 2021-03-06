 /*
* ShanBot es una creación de shanduy
* ShanBot no tiene ningun fin de lucro
* shanduy se reserva todos los derechos de autor
* © 2021 shanduy, INC.

Cualquier copia que utilize mi ApiKey sera dado de baja

- Que hay de nuevo?
* Nada
*/

import WAConnection from '@adiwajshing/baileys';
import 	MessageType from '@adiwajshing/baileys';
import ReconnectMode from '@adiwajshing/baileys';
import Presence from '@adiwajshing/baileys';
import Mimetype from '@adiwajshing/baileys';
import rugaapi from '@adiwajshing/baileys';
import groupSettingChange from '@adiwajshing/baileys';

/******COMIENZO DE LA ENTRADA DEL ARCHIVO******/
import color from './lib/color';
import bgcolor from './lib/color'
import bahasa from './src/bahasa';
import negara from './src/kodenegara';
import virtex from './src/virtex';
import wait from './lib/functions';
import pegatinas from './lib/functions';
import musica from './lib/functions';
import simih from './lib/functions';
import getBuffer from './lib/functions';
import h2k from './lib/functions';
import generateMessageID from './lib/functions';
import getGroupAdmins from './lib/functions';
import getRandom from './lib/functions';
import banner from './lib/functions';
import start from './lib/functions';
import info from './lib/functions';
import success from './lib/functions';
import close from './lib/functions';
import fetchJson from './lib/fetcher';
import recognize from './lib/ocr';
/******FIN DE ENTRADA DE ARCHIVO******/

/******COMIENZO DE LA ENTRADA DEL PAQUETE NPM******/
import fs from 'fs';
import moment from 'moment-timezone';
import { exec } from 'child_process';
import FormData from 'form-data';
import kagApi from '@kagchi/kag-api';
import axios from 'axios';
import fetch from 'node-fetch';
/*import tiktod from 'tiktok-scraper'*/
import Ffmpeg from 'fluent-ffmpeg';
import { removeBackgroundFromImageFile } from 'remove.bg';
/*import imgbb from 'imgbb-uploader'*/
import lolis from 'lolis.life';
const loli = new lolis();
import speed from 'performance-now';
/******FIN DE ENTRADA DEL PAQUETE NPM******/

/******COMIENZO DE LA ENTRADA JSON******/
const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'));
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'));
const ban = JSON.parse(fs.readFileSync('./database/banned.json'));
const setting = JSON.parse(fs.readFileSync('./src/settings.json'));
const samih = JSON.parse(fs.readFileSync('./database/json/simi.json'));
const user = JSON.parse(fs.readFileSync('./database/json/user.json'));
const _leveling = JSON.parse(fs.readFileSync('./database/json/leveling.json'));
const _level = JSON.parse(fs.readFileSync('./database/json/level.json'));
/******FIN DE ENTRADA JSON******/

/******INICIO DE LA ENTRADA DEL MENÚ******/
import help from './src/help';
import logomaker from'./database/menu/logomaker';
import toinmenu from './src/toinmenu';
import menuadmin from './src/menuadmin';
import nsfwminu from './src/nsfwminu';
import desmenu from './src/desmenu';
import version from './src/version';
import juegos from './src/juegos';
import shantera from './src/shantera';
import antimenu from './src/antimenu';
import welmenu from './src/welmenu';
import banmenu from './src/banmenu';
import otak from './src/otak';
import levelmenu from './src/levelmenu';
/******FIN DE ENTRADA DEL MENÚ******/

/******CARGA DE ENTRADA VCARD******/
const vcard = 'BEGIN:VCARD\n' // Tarjeta de contacto
            + 'VERSION:3.0\n' 
            + 'FN:Juan\n' // Nombre
            + 'ORG:Juan del Valle;\n' // Propietario
            + 'TEL;type=CELL;type=VOICE;waid=50241033780:+502 4103 3780 \n' // ID de WhatsApp + número de teléfono
            + 'END:VCARD'
/******FIN DE ENTRADA VCARD******/

prefix = '!'
blocked = []
banChats = false

/******CONFIGURACION DE CARGA******/
const settingan = JSON.parse(fs.readFileSync('./admin/set.json'))
const {
	author,
	pack
} = settingan

/******INICIO DE FUNCIONES ENTRADA******/

/******ARCHIVOS ANTILINK POR SHANDUY******/

const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const antiface = JSON.parse(fs.readFileSync('./src/antiface.json'))
const antitik = JSON.parse(fs.readFileSync('./src/antitik.json'))
const antinsta = JSON.parse(fs.readFileSync('./src/antinsta.json'))
const antikwai = JSON.parse(fs.readFileSync('./src/antikwai.json'))
const antiwa = JSON.parse(fs.readFileSync('./src/antiwa.json'))
const antidiscord = JSON.parse(fs.readFileSync('./src/antidiscord.json'))

/******FIN DE ARCHIVOS ANTILINK POR SHANDUY******/


//LEVEL INICIO
const getLevelingXp = (userId) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].jid === userId) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].xp
	}
}

const getLevelingLevel = (userId) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].jid === userId) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].level
	}
}

const getLevelingId = (userId) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].jid === userId) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].jid
	}
}

const addLevelingXp = (userId, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].jid === userId) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].xp += amount
		fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
	}
}

const addLevelingLevel = (userId, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].jid === userId) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].level += amount
		fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
	}
}

const addLevelingId = (userId) => {
	const obj = {jid: userId, xp: 1, level: 1}
	_level.push(obj)
	fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
}
//LEVEL FIN
	
function addMetadata(packname, author) {	
	if (!packname) packname = 'DestroyerBot'; if (!author) author = 'HADES';	
	author = author.replace(/[^a-zA-Z0-9]/g, '');	
	let name = `${author}_${packname}`
	if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
	const json = {	
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
	}
	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

	let len = JSON.stringify(json).length	
	let last	

	if (len > 256) {	
		len = len - 256	
		bytes.unshift(0x01)	
	} else {	
		bytes.unshift(0x00)	
	}	

	if (len < 16) {	
		last = len.toString(16)	
		last = "0" + len	
	} else {	
		last = len.toString(16)	
	}	

	const buf2 = Buffer.from(last, "hex")	
	const buf3 = Buffer.from(bytes)	
	const buf4 = Buffer.from(JSON.stringify(json))	

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

	fs.writeFile(`./${name}.exif`, buffer, (err) => {	
		return `./${name}.exif`	
	})	

}  
	
function kyun(seconds){
	function pad(s){
	  return (s < 10 ? '0' : '') + s;
	}
	var hours = Math.floor(seconds / (60*60));
	var minutes = Math.floor(seconds % (60*60) / 60);
	var seconds = Math.floor(seconds % 60);
  
	//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
	return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
  }
  
  async function starts() {
	const client = new WAConnection()
	  client.version = [2, 2147, 16]
	  client.autoReconnect = ReconnectMode.onConnectionLost;
		  client.logger.level = 'warn'
	  console.log(banner.string)
	  client.on('qr', () => {
		  console.log(color('[','white'), color('!','red'), color(']','white'), color('Escanea el codigo QR rapido!!!'))
	  })
  
	  fs.existsSync('./Nazwa.json') && client.loadAuthInfo('./Nazwa.json')
	  client.on('connecting', () => {
		  start('2', 'Estas desconectado')
	  })
	client.on('open', () => {
		success('2', 'Conectado by Juan Del Valle')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Nazwa.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

	client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				teks = `Bienvenid@!!! @${num.split('@')[0]}\nAhora eres un Destructor(a)!!!! Bienvenido a *${mdata.subject}* el mejor grupo de Pokémon Go 👉👈\n\nUn gusto conocerte mortal 😀\n\n_Ojito, sigue las reglas del grupo si no, para fuera mortal, los admins te eliminan 🧐_\n\nOjito con el spam 🧐`
                          client.sendMessage(mdata.id, teks, MessageType.text, { contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				teks = `NOOOO se nos fue un/a Destructor/a 😎 @${num.split('@')[0]} 👋\n\n No lo extrañaremos 😎`
				client.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error: %s', color(e, 'red'))
		}
	})

		client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('chat-update', async (mek) => {
		try {
                        if (!mek.hasNewMessage) return
                        mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const apikey = setting.apikey
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('America/Guatemala').format('HH:mm:ss')
			const date = moment.tz('America/Guatemala').format('DD/MM/YY')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			let authorname = client.contacts[from] != undefined ? client.contacts[from].vname || client.contacts[from].notify : undefined
			const isCmd = body.startsWith(prefix)

			mess = {
				wait: 'Calmado mortal estoy procesando😎\n\n❗Por favor no hacer spam👏❗\n\n_*by Juan del Valle*_',
				success: '✔️ Listo ✔️',
                                levelon: '❬ ✅ ❭ *Level activado*',
				leveloff: ' ❬ ✅ ❭  *Level desactivado*',
				foto: 'Calmado estoy cambiando la foto del grupo\n\nPor favor no hacer spam👏\n\n_*by Juan del Valle*_',
				unir: 'Espere por favor 🕖\n\nEstoy tratando de unirlo\n\n*Recuerda, si no lo uno es por que el usuario tiene bloqueado la función para unirlo a grupos*\n\n_*by Juan del Valle*_',
                                levelnoton: '❬ ❎ ❭ *Level no esta activado*',
				levelnol: '*Nivel* 0 ',
				error: {
					stick: '[❎] Falló, se produjo un error al convertir la imagen en una pegatina',
					yt: 'Falló en el link o se produjo un error al momento de descargar el video',
					unire: 'Por favor, no coloques (+) solo pon el numero con el codigo de area de su pais\n\nEjemplo: *unir 52xxxxxxxxx',
					Iv: 'Este no es un link de youtube',
					Fb: 'Este no es un link de facebook'	
					},
				only: {
					group: '[❗] Este comando es solo para grupos',
					ownerG: '[❗] Este comando solo puede ser utilizado por un admins del grupo',
					ownerB: '[❗] Este comando solo lo usa Juan del Valle',
					admin: '[❗] Este comando solo puede ser utilizado por administradores del grupo',
					Badmin: '[❗] Este comando solo se puede usar cuando el bot se convierte en administrador',
                                        pegatina: 'Calma mortal estoy haciendo tu sticker 👏\n\n*Recuerda los stickersgif son de 6 segundos*\n\n_*by Juan del Valle*_',
					attp: 'Calma mortal estoy haciendo tu texto a sticker 👏\n\n*Esto puede demorar unos minutos*\n\n_*by Juan del Valle*_',
					imgs: 'Oie mortal 🥴\n\n*Convirtiendo tu Sticker a Imagen 🔄*\n\n_*by Juan del Valle*_',
					mpcancion: 'Calmadoooo estoy procesando 😎\n\n*Convirtiendo de MP4 a MP3 🔄*\n\n_*by Juan del Valle*_',
					mpa: 'Oie mortal 🥴\n\n*Estoy descargando tu cancion 🔄*\n\nAguarde un momento, por favor\n\n_*by Juan del Valle*_',
                                        mpv: 'Calma ✋🥸🤚\n\n*Estoy descargando tu video 🔄*\n\nAguarde un momento, por favor\n\n_*by Juan del Valle*_',
					insta: 'Calmado 😎\n\n*Estoy descargando tu post 🔄*\n\nAguarde un momento, por favor\n\n_*by Juan del Valle*_',
					musica: 'Calmado pa estoy bucando tu canción 😎\n\n*Recuerda colocar bien el nombre de la cancion o el link del video de youtube*\n\n*Si el comando *play no funciona utiliza el comando *play2*\n\nSi no envío tu música checa que versión tienes del bot con *version\n\n_*by Juan del Valle*_',
					musica2: 'Calmado pa estoy bucando tu canción 😎\n\n*Recuerda colocar bien el nombre de la cancion o el link del video de youtube*\n\n*Si el comando *play2 no funciona utiliza el comando *play*\n\nSi no envío tu música checa que versión tienes del bot con *version\n\n_*by Juan del Valle*_',
					registroB: `「NO ESTAS REGISTRADO」\n\nMORTAL NO APARECES EN MI BASE DE DATOS ✋🥸🤚\n\nPara poder usarme escribe el siguente comando\n\nComando: ${prefix}registro Nombre\nEjemplo: ${prefix}registro DestroyerBot`,
				}
			}
			const apakah = ['Si','No']
			const kapankah = ['Otro día','Otra semana','Otro mes','Otro año']
			const botNumber = client.user.jid
			const ownerNumber = ["50241033780@s.whatsapp.net"] // replace this with your number
			const nomorOwner = [ownerNumber]
			const isGroup = from.endsWith('@g.us')
			const totalchat = await client.chats.all()
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const isBanned = ban.includes(sender)
			const groupName = isGroup ? groupMetadata.subject : ''
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isAntiDiscord = isGroup ? antidiscord.includes(from) : false
			const isAntInsta = isGroup ? antinsta.includes(from) : false
			const isAntiTik = isGroup ? antitik.includes(from) : false
			const isAntiFace = isGroup ? antiface.includes(from) : false
			const isAntiKwai = isGroup ? antikwai.includes(from) : false
			const isAntiWa = isGroup ? antiwa.includes(from) : false
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isUser = user.includes(sender)
			const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
			const NomerOwner = '50241033780@s.whatsapp.net'
			const conts = mek.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			const pushname = mek.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'
			
			//......................
			
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
           
//LINKS DE WHATSAPP	

if (budy.includes("https://wa.me/")){
		if (!isGroup) return
		if (!isAntiWa) return
                if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*LINK DE WHATSAPP DETECTADO 📢* ${sender.split("@")[0]} Usted será eliminado de este grupo`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Hasta la vista mortal\n\nSi fue un error, acude con algún admin")
		}, 0)
	}
			
	if (budy.includes("wa.me")){
		if (!isGroup) return
		if (!isAntiWa) return
                if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*LINK DE WHATSAPP DETECTADO 📢* ${sender.split("@")[0]} Usted sera eliminado de este grupo`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Hasta la vista mortal\n\nSi fue un error, acude con algún admin")
		}, 0)
	}
			
			
//FIN DE LINKS DE WHATSAPP	
			
			
//ANTILINKS FACEBOOK GRUPOS PERFILES PUBLICACIONES
			
if (budy.includes("https://www.facebook.com/")){
		if (!isGroup) return
		if (!isAntiFace) return
                if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*LINK DE FACEBOOK DETECTADO 📢* ${sender.split("@")[0]} Usted sera eliminado de este grupo`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Hasta la vista mortal\n\nSi fue un error, acude con algún admin")
		}, 0)
	}			
			
if (budy.includes("https://m.facebook.com/")){
		if (!isGroup) return
		if (!isAntiFace) return
                if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*LINK DE FACEBOOK DETECTADO 📢* ${sender.split("@")[0]} Usted sera eliminado de este grupo`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Hasta la vista mortal\n\nSi fue un error, acude con algún admin")
		}, 0)
	}
			
			
//FIN ANTILINKS FACEBOOK GRUPOS PERFILES PUBLICACIONES			
			
//FUNCION ANTILINK
	     	
	if (budy.includes("https://discord.com/")){
		if (!isGroup) return
		if (!isAntiDiscord) return
                if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*LINK DE DISCORD DETECTADO 📢* ${sender.split("@")[0]} Usted sera eliminado de este grupo`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Hasta la vista mortal\n\nSi fue un error, acude con algún admin")
		}, 0)
	}
			
	if (budy.includes("https://s.kwai.app/")){
		if (!isGroup) return
		if (!isAntiKwai) return
                if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*LINK DE KWAI DETECTADO 📢* ${sender.split("@")[0]} Usted sera eliminado de este grupo`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Hasta la vista mortal\n\nSi fue un error, acude con algún admin")
		}, 0)
	}

	if (budy.includes("https://www.instagram.com/")){
		if (!isGroup) return
		if (!isAntInsta) return
	        if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*LINK DE INSTAGRAM DETECTADO 📢* ${sender.split("@")[0]} Usted sera eliminado de este grupo`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Hasta la vista mortal\n\nSi fue un error, acude con algún admin")
		}, 0)
	}		
	
	if (budy.includes("https://vm.tiktok.com/")){
		if (!isGroup) return
		if (!isAntiTik) return
                if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*LINK DE TIK TOK DETECTADO 📢* ${sender.split("@")[0]} Usted sera eliminado de este grupo`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Hasta la vista mortal\n\nSi fue un error, acude con algún admin")
		}, 0)
	}
	
       if (budy.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*LINK DE WHATSAPP DETECTADO 📢* ${sender.split("@")[0]} Usted será expulsado del grupo`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Hasta la vista mortal\n\nSi fue un error, acude con algún admin")
		}, 0)
	}

//FIN DE ANTI LINKS 
		

//FUNCION DE LEVEL
            
     if (isGroup && isLevelingOn) {
		const currentLevel = getLevelingLevel(sender)
		const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const fromdXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (fromdXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(`*「 FELICIDADES LEVEL UP 🆙🥳 」*\n\nFelicidades subiste de nivel sigue asi 👏\n\n*NOMBRE*\n${pushname}\n*XP*: ${getLevelingXp(sender)}\n*NIVEL*: ${getLevel} ⟿ ${getLevelingLevel(sender)}\n\n_*Para ver tu XP en tiempo real coloca el comando ${prefix}level*_`)
                }
            } catch (err) {
                console.error(err)
            }
        }

//FIN DE FUNCION DE LEVEL
			
         		
                        colors = ['red','white','black','blue','yellow','green']
						const isMedia = (type === 'imageMessage' || type === 'videoMessage')
						const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
						const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
						const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
         if (isCmd && isBanned) {
        return console.log(color('[ USUARIO BANEADO ] Ignorando Comando', 'blue'), color(moment.tz('America/Guatemala').format('HH:mm:ss'), 'yellow'), color(`${command}`),'DE:', color(pushname))}
    	if (!isGroup && isCmd) console.log('\x1b[1;37m>', '[ \x1b[1;36mMensaje\x1b[1;37m ]', time, color(command), 'De', color(sender.split('@')[0]))
        if (isCmd && isGroup) console.log('\x1b[1;37m>', '[ \x1b[1;36mMensaje\x1b[1;37m ]', time, color(command), 'De', color(sender.split('@')[0]), 'En', color(groupName))

/******ENTRADA FIN DE FUNCIONES******/
			function addMetadata(packname, author) {	
				if (!packname) packname = 'DestroyerBot'; if (!author) author = 'HADES';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
			switch(command) {
		case 'help':
		case 'menu':
	        client.sendMessage(from, help(prefix, sender), text, {quoted: mek})
		break
                case 'otak':
		client.sendMessage(from, otak(prefix, sender), text, {quoted: mek})
		break
		case 'juegos':
		client.sendMessage(from, juegos(prefix, sender), text, {quoted: mek})
		break
		case 'idioma':
		client.sendMessage(from, bahasa(prefix, sender), text, {quoted: mek})
		break
		case 'levelmenu':
		client.sendMessage(from, levelmenu(prefix, sender), text, {quoted: mek})
		break
		case 'shanmenu':
		client.sendMessage(from, toinmenu(prefix, sender), text, {quoted: mek})
		break
		case 'menuadmin':
		client.sendMessage(from, menuadmin(prefix, sender), text, {quoted: mek})
		break
		case 'nsfwminu':
		client.sendMessage(from, nsfwminu(prefix, sender), text, {quoted: mek})
		break
		case 'banmenu':
		client.sendMessage(from, banmenu(prefix, sender), text, {quoted: mek})
		break
		case 'desmenu':
		client.sendMessage(from, desmenu(prefix, sender), text, {quoted: mek})
		break
		case 'versión':
		case 'version':
		client.sendMessage(from, version(prefix, sender), text, {quoted: mek})
		break
		case 'antimenu':
		client.sendMessage(from, antimenu(prefix, sender), text, {quoted: mek})
		break
                case 'welmenu':
		client.sendMessage(from, welmenu(prefix, sender), text, {quoted: mek})
		break
		case 'shantera':
		client.sendMessage(from, shantera(prefix, sender), text, {quoted: mek})
		break               


//FUNCIONES DE BAN Y DESBAN			
			
case 'ban':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '*\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `『 BANEADO 🚫 』\n\n◉Nombre: @${mentioned[0].split('@')[0]}\n◉Razón: Spam\n\n*Usted a sido baneado del uso del bot, no podrá usar el bot hasta nuevo aviso*`
mentions(`${susp}`, mentioned, true)   
break

case 'desban':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '*\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `『 DESBANEADO ✅ 』\n\n◉Nombre: @${mentioned[0].split('@')[0]}\n\n*Se te ha retirado el BAN, ya puedes usar el bot*`
mentions(`${susp}`, mentioned, true)   
break		
			
//FIN DE FUNCIONES BAN Y DESBAN					
					
					
/******JUEGOS SHANDUY LA PUTA MADRE NO TE OLVIDES******/
					
case 'fan':
if (!isUser) return reply(mess.only.registroB)
rate = body.slice(5)
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
fan = random
if (fan < 20 ) {fan = ':v?'} else if (fan == 21 ) {fan = 'Te salvaste rattata 😎'} else if (fan == 23 ) {fan = 'Te salvaste rattata 😎'} else if (fan == 24 ) {fan = 'Te salvaste rattata 😎'} else if (fan == 25 ) {fan = 'Te salvaste rattata 😎'} else if (fan == 26 ) {fan = 'Te salvaste rattata 😎'} else if (fan == 27 ) {fan = 'Te salvaste rattata 😎'} else if (fan == 28 ) {fan = 'Te salvaste rattata 😎'} else if (fan == 29 ) {fan = 'Te salvaste rattata 😎'} else if (fan == 30 ) {fan = 'Te salvaste rattata 😎'} else if (fan == 31 ) {fan = 'Caterpie que hace viendo videos de cómo ser un seguidor del TODOPODEROSO BIDOOF? 🤔'} else if (fan == 32 ) {fan = 'Caterpie que hace viendo videos de cómo ser un seguidor del TODOPODEROSO BIDOOF? 🤔'} else if (fan == 33 ) {fan = 'Caterpie que hace viendo videos de cómo ser un seguidor del TODOPODEROSO BIDOOF? 🤔'} else if (fan == 34 ) {fan = 'Caterpie que hace viendo videos de cómo ser un seguidor del TODOPODEROSO BIDOOF? 🤔'} else if (fan == 35 ) {fan = 'Caterpie que hace viendo videos de cómo ser un seguidor del TODOPODEROSO BIDOOF? 🤔'} else if (fan == 36 ) {fan = 'Caterpie que hace viendo videos de cómo ser un seguidor del TODOPODEROSO BIDOOF? 🤔'} else if (fan == 37 ) {fan = 'Caterpie que hace viendo videos de cómo ser un seguidor del TODOPODEROSO BIDOOF? 🤔'} else if (fan == 38 ) {fan = 'Caterpie que hace viendo videos de cómo ser un seguidor del TODOPODEROSO BIDOOF? 🤔'} else if (fan == 39 ) {fan = 'Caterpie que hace viendo videos de cómo ser un seguidor del TODOPODEROSO BIDOOF? 🤔'} else if (fan == 40 ) {fan = 'Ramirez que hace viendo pidgey 🤔'} else if (fan == 41 ) {fan = 'Mmm sospechoso pidgey 🧐'} else if (fan == 42 ) {fan = 'Mmm sospechoso pidgey 🧐'} else if (fan == 43 ) {fan = 'Mmm sospechoso pidgey 🧐'} else if (fan == 44 ) {fan = 'Mmm sospechoso pidgey 🧐'} else if (fan == 45 ) {fan = 'Mmm sospechoso pidgey 🧐'} else if (fan == 46 ) {fan = 'Mmm sospechoso pidgey 🧐'} else if (fan == 47 ) {fan = 'Mmm sospechoso pidgey 🧐'} else if (fan == 48 ) {fan = 'Mmm sospechoso pidgey 🧐'} else if (fan == 49 ) {fan = 'Mmm sospechoso pidgey 🧐'} else if (fan == 50 ) {fan = 'Mmm sospechoso pidgey 🧐'} else if (fan > 51) {fan = 'Señores un autentico SEGUIDOR DEL TODOPODEROSO BIDOOF está en el grupo 🥸'}
hasil = `${rate}Resultado ${random}% fan del TODOPODEROSO BIDOOF\n\n${fan}`
reply(hasil)
break

case 'ksabldjalnasljasbdlabsld':
if (!isUser) return reply(mess.only.registroB)
rate = body.slice(9)
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
fan = random
if (fan < 20 ) {cu = 'Mi loco usted va para el cielo 👏'} else if (fan == 21 ) {fan = 'Te salvaste ramirez 😎'} else if (fan == 23 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 24 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 25 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 26 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 27 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 28 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 29 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 30 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 31 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 32 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 33 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 34 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 35 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 36 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 37 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 38 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 39 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 40 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 41 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 42 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 43 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 44 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 45 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 46 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 47 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 48 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 49 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 50 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties > 51) {cu = 'Señores un autentico FAN DE CUTIES esta en el grupo 🥸'}
hasil = `${rate}Resultado ${random}% fan del todopoderoso *BIDOOF*\n\n${fan}`
reply(hasil)
break
	
case ',dsbfldbflibdjfsvdjkfhds':
if (!isUser) return reply(mess.only.registroB)
rate = body.slice(9)
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
racista = random
if (racista < 20 ) {ra = 'Tu no eres racista 👏'} else if (racista == 21 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 23 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 24 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 25 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 26 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 27 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 28 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 29 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 30 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 31 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 32 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 33 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 34 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 35 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 36 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 37 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 38 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 39 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 40 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 41 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 42 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 43 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 44 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 45 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 46 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 47 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 48 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 49 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 50 ) {ra = 'Fuck men alto racista 😡'} else if (racista > 51) {ra = 'UN AUTENTICO RACISTA 🥸'}
hasil = `${rate}Usted es ${random}% racista\n\n${ra}`
reply(hasil)
break

case 'ajsd fsa d sadg as gisabgjnas dg asdg asdg aisdngjkas dgias gi asig ahsg':
	try{
		if (!isUser) return reply(mess.only.registroB)
		if (!isGroup) return reply(mess.only.group)
		d = []
		teks = 'Top 5 de los mas gays del grupo\n\n'
		for(i = 0; i < 5; i++) {
		r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
		teks += `➔ @${groupMembers[r].jid.split('@')[0]}\n`
		d.push(groupMembers[r].jid)
		}
		mentions(teks, d, true)
		} catch (e) {
		console.log(e)
		reply('Hubo un error intentalo nuevamente :/')
		}
		break					
											
/******JUEGOS SHANDUY LA PUTA MADRE NO TE OLVIDES******/					
					
					
       				case 'wa.me':
				  case 'wame':
  client.updatePresence(from, Presence.composing) 
      options = {
          text: `「 *LINK WHATSAPP* 」\n\n_Solicitado por_ : @${sender.split("@s.whatsapp.net")[0]}\n\nSu link de Whatsapp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*O ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
          contextInfo: { mentionedJid: [sender] }
    }
    client.sendMessage(from, options, text, { quoted: mek } )
				break
				if (data.error) return reply(data.error)
				reply(data.result)
				break
		
	
	case 'creador':
	       client.sendMessage(from, {displayname: "Juan", vcard: vcard}, MessageType.contact, { quoted: mek})
		   client.sendMessage(from, 'Arriba está el número del creador del bot <DestroyerBot ву Juan del Valle>\n\nNO SOY UN BOT \n\nAhi puedes resolver tus preguntas y errores :)\n\nEste no es el número del propietario del bot que estas usando ahora mismo. Si no, del creador de la base de datos del bot o sea Juan\n\nву Juan del Valle',MessageType.text, { quoted: mek} )
		   const none = fs.readFileSync('0');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                break
	
	
	case 'x':
                client.updatePresence(from, Presence.composing) 
                if (!isGroupAdmins) return reply(mess.only.Badmin)
		if (!isUser) return reply(mess.only.registroB)
                if (!isGroup) return reply(mess.only.group)
                teks = body.slice(3)
                group = await client.groupMetadata(from);
                member = group['participants']
                jids = [];
                member.map( async adm => {
                jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
                 })
                 options = {
                 text: teks,
                contextInfo: {mentionedJid: jids},
                quoted: mek
                }
              await client.sendMessage(from, options, text)
               break
                               case 'tts':
				   client.updatePresence(from, Presence.recording) 
				   if (args.length < 1) return client.sendMessage(from, 'Cual es el código de idioma?\n\nPara saber el codigo de idioma coloque el comando ${prefix}idioma', text, {quoted: mek})
                                   if (!isUser) return reply(mess.only.registroB)
								   const gtts = from('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Y el texto?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Texto muy largo mortal')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('Gagal om:(')
							client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
                                case 'listadmins':
				case 'adminlist':
					client.updatePresence(from, Presence.composing) 
                                        if (!isUser) return reply(mess.only.registroB)
					if (!isGroup) return reply(mess.only.group)
					teks = `*Lista De Administradores Del Grupo*\n\n${groupMetadata.subject}\n\nTotal: ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
			case 'setprefix':
					client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`El prefijo se ha cambiado correctamente a : ${prefix}`)
					break
			case 'todos':
				client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
                                        if (!isUser) return reply(mess.only.registroB)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(7).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions('╔══✪〘 *TODOS* 〙✪══\n╠➥'+teks+'╚═〘 _*by Juan Del Valle*_ 〙', members_id, true)
					break
                                case 'send':
					var pc = body.slice(6)
					var nomor = pc.split("|")[0];
					var pesan = pc.split("|")[1];
					client.sendMessage(nomor+'@s.whatsapp.net', pesan, text)
					break
					case 'bf':
					client.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Primero envie una foto y responda con el comando *sb`)
						enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						media = await client.downloadAndSaveMediaMessage(enmedia)
						await client.updateProfilePicture(botNumber, media)
						reply('Gracias por la nueva foto de perfil :)')
						break
				case 'bc':
					client.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 TRANSMISIÓN 」*\n\n${body.slice(4)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 _*by Juan Del Valle*_ 」*\n\n${body.slice(4)}`)
						}
						reply('Transmisión exitosa')
					}
					break
					case 'bcgc':
					client.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of groupMembers) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 GRUPO BC 」*\n*Grupo* : ${groupName}\n\n${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of groupMembers) {
							sendMess(_.jid, `*「 BC GROUP 」*\n*Group* : ${groupName}\n\n${body.slice(6)}`)
						}
						reply('Grupo de transmisión exitoso')
					}
					
                     
				
		
                                       
				
			//ANTILINKS DE REDES SOCIALES FLACO ACEPTALO SOLO LO ESTAS EDITANDO REALMENTE SHANDUY TE HIZO TODO ESTO	
				
				case 'antiwa':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.registroB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.ownerG)
					if (args.length < 1) return reply('Coloque *antimenu para ver los comandos de activación de los antilinks')
					if (Number(args[0]) === 1) {
						if (isAntiWa) return reply('El antilink de Whatsapp ya esta activo')
						antiwa.push(from)
						fs.writeFileSync('./src/antidiscord.json', JSON.stringify(antiwa))
						reply('❬ ✅ ❭ La funcion de antilink de Whatsapp esta habilitada en este grupo')
						client.sendMessage(from,`Atención a todos los miembros activos de este grupo 📣\n\nDesde ahora cualquier participante que envie un link de *Discord* a este grupo sera expulsado de inmediato\n\n_*Razones: Spam*_`, text)
					} else if (Number(args[0]) === 0) {
						antiwa.splice(from)
						fs.writeFileSync('./src/antidiscord.json', JSON.stringify(antiwa))
						reply('❬ ✅ ❭ La funcion de antilink de Whatsapp esta deshabilitada en este grupo')
					} else {
						reply('Coloque *antimenu para ver los comandos de activación de los antilinks')
					}
					break
					
				case 'antidiscord':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.registroB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.ownerG)
					if (args.length < 1) return reply('Coloque *antimenu para ver los comandos de activación de los antilinks')
					if (Number(args[0]) === 1) {
						if (isAntiDiscord) return reply('El antilink de Instagram ya esta activo')
						antidiscord.push(from)
						fs.writeFileSync('./src/antidiscord.json', JSON.stringify(antidiscord))
						reply('❬ ✅ ❭ La funcion de antilink de Discord esta habilitada en este grupo')
						client.sendMessage(from,`Atención a todos los miembros activos de este grupo 📣\n\nDesde ahora cualquier participante que envie un link de *Discord* a este grupo sera expulsado de inmediato\n\n_*Razones: Spam*_`, text)
					} else if (Number(args[0]) === 0) {
						antidiscord.splice(from)
						fs.writeFileSync('./src/antidiscord.json', JSON.stringify(antidiscord))
						reply('❬ ✅ ❭ La funcion de antilink de Discord esta deshabilitada en este grupo')
					} else {
						reply('Coloque *antimenu para ver los comandos de activación de los antilinks')
					}
					break
				
				case 'antikwai':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.registroB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.ownerG)
					if (args.length < 1) return reply('Coloque *antimenu para ver los comandos de activación de los antilinks')
					if (Number(args[0]) === 1) {
						if (isAntiKwai) return reply('El antilink de Instagram ya esta activo')
						antikwai.push(from)
						fs.writeFileSync('./src/antinsta.json', JSON.stringify(antikwai))
						reply('❬ ✅ ❭ La funcion de antilink de Kwai esta habilitada en este grupo')
						client.sendMessage(from,`Atención a todos los miembros activos de este grupo 📣\n\nDesde ahora cualquier participante que envie un link de *Kwai* o de su perfil para pedir likes o followers a este grupo sera expulsado de inmediato\n\n_*Razones: Spam*_`, text)
					} else if (Number(args[0]) === 0) {
						antikwai.splice(from)
						fs.writeFileSync('./src/antinsta.json', JSON.stringify(antikwai))
						reply('❬ ✅ ❭ La funcion de antilink de Kwai esta deshabilitada en este grupo')
					} else {
						reply('Coloque *antimenu para ver los comandos de activación de los antilinks')
					}
					break
				
				case 'antinsta':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.registroB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.ownerG)
					if (args.length < 1) return reply('Coloque *antimenu para ver los comandos de activación de los antilinks')
					if (Number(args[0]) === 1) {
						if (isAntInsta) return reply('El antilink de Instagram ya esta activo')
						antinsta.push(from)
						fs.writeFileSync('./src/antinsta.json', JSON.stringify(antinsta))
						reply('❬ ✅ ❭ La funcion de antilink de Instagram esta habilitada en este grupo')
						client.sendMessage(from,`Atención a todos los miembros activos de este grupo 📣\n\nDesde ahora cualquier participante que envie un link de *Instagram* o de su perfil para pedir likes o followers a este grupo sera expulsado de inmediato\n\n_*Razones: Spam*_`, text)
					} else if (Number(args[0]) === 0) {
						antinsta.splice(from)
						fs.writeFileSync('./src/antinsta.json', JSON.stringify(antinsta))
						reply('❬ ✅ ❭ La funcion de antilink de Instagram esta deshabilitada en este grupo')
					} else {
						reply('Coloque *antimenu para ver los comandos de activación de los antilinks')
					}
					break
				
				
                                  case 'antitik':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.registroB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.ownerG)
					if (args.length < 1) return reply('Coloque *antimenu para ver los comandos de activación de los antilinks')
					if (Number(args[0]) === 1) {
						if (isAntiTik) return reply('El antilink de Tik Tok ya esta activo')
						antitik.push(from)
						fs.writeFileSync('./src/antitik.json', JSON.stringify(antitik))
						reply('❬ ✅ ❭ La funcion de antilink de Tik Tok esta habilitada en este grupo')
						client.sendMessage(from,`Atención a todos los miembros activos de este grupo 📣\n\nDesde ahora cualquier participante que envia un link de *Tik Tok* o de su perfil a este grupo sera expulsado de inmediato\n\n_*Razones: Spam*_`, text)
					} else if (Number(args[0]) === 0) {
						antitik.splice(from)
						fs.writeFileSync('./src/antitik.json', JSON.stringify(antitik))
						reply('❬ ✅ ❭ La funcion de antilink de Tik Tok esta deshabilitada en este grupo')
					} else {
						reply('Coloque *antimenu para ver los comandos de activación de los antilinks')
					}
					break 
				
				
				case 'antiface':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.registroB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.ownerG)
					if (args.length < 1) return reply('Coloque *antimenu para ver los comandos de activación de los antilinks')
					if (Number(args[0]) === 1) {
						if (isAntiFace) return reply('El antilink de facebook ya esta activo')
						antiface.push(from)
						fs.writeFileSync('./src/antiface.json', JSON.stringify(antiface))
						reply('❬ ✅ ❭ La funcion de antilink de Facebook esta habilitada en este grupo')
						client.sendMessage(from,`Atención a todos los miembros activos de este grupo 📣\n\nDesde ahora cualquier participante que envia un link de *Facebook* o de alguna publicacion para pedir likes o grupos a este grupo sera expulsado de inmediato\n\n_*Razones: Spam*_`, text)
					} else if (Number(args[0]) === 0) {
						antiface.splice(from)
						fs.writeFileSync('./src/antiface.json', JSON.stringify(antiface))
						reply('❬ ✅ ❭ La funcion de antilink de Facebook esta deshabilitada en este grupo')
					} else {
						reply('Coloque *antimenu para ver los comandos de activación de los antilinks')
					}
					break
				        
			       case 'antilink':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.registroB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.ownerG)
					if (args.length < 1) return reply('Coloque *antimenu para ver los comandos de activación de los antilinks')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('El antilink ya esta activo')
						antilink.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('❬ ✅ ❭ La funcion de antilink de Grupos De Whatsapp esta habilitada en este grupo')
						client.sendMessage(from,`Atención a todos los miembros activos de este grupo 📣\n\nEl antilink esta activo\n\nY solo los admins de este grupo podran pasar el enlace\n\nSi algun participante que no se admin envía un enlace de este grupo u otro grupo sera expulsado de este grupo de inmediato`, text)
					} else if (Number(args[0]) === 0) {
						antilink.splice(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('❬ ✅ ❭ La funcion de antilink de Grupos De Whatsapp esta deshabilitada en este grupo')
					} else {
						reply('Coloque *antimenu para ver los comandos de activación de los antilinks')
					}
					break
			        
				
				//FIN DE ANTILINK HECHO POR SHANDUY
				
//ADMINISTRACION DE GRUPOS
		                
case 'exe':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
setTimeout( () => {
client.groupLeave (from) 
}, 2000)
setTimeout( () => {
client.updatePresence(from, Presence.composing) 
client.sendMessage(from, 'NOS VEMOS MORTALES ✋🥸🤚', text) // ur cods
}, 0)
break
                                      
case 'kick':
case 'hakai':
if (!isUser) return reply(mess.only.registroB)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return reply('Marca al que vamos a _Destruir_')
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (entah.length > 1) {
var mems_ids = []
for (let ids of entah) {
mems_ids.push(ids)
}
client.groupRemove(from, mems_ids)
} else {
client.groupRemove(from, [entah[0]])
}
} else {
entah = ridwan.message.extendedTextMessage.contextInfo.participant
client.groupRemove(from, [entah])
}
break


case 'demote':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Flaco te falto agregar a la persona que voy a quitar el admin')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = ''
for (let _ of mentioned) {
teks += `Pedido recibido✅\n\nRetirando cargo como administrador :\n`
teks += `@_.split('@')[0]`
}
mentions(teks, mentioned, true)
client.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Pedido recibido✅\n\nRetirando cargo como administrador @${mentioned[0].split('@')[0]}\n*${groupMetadata.subject}*_`, mentioned, true)
client.groupDemoteAdmin(from, mentioned)
}
break

case 'promote':
client.updatePresence(from, Presence.composing) 
if (!isUser) return reply(mess.only.registroB)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A quien voy a dar admin??\n\n*Ejemplo:* ${prefix}promote @xxxxxxx')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Pedido recibido✅\n\nAgregando cargo como administrador :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
client.groupMakeAdmin(from, mentioned)
} else {
mentions(`Pedido recibido✅\n\nAgregando cargo como administrador : @${mentioned[0].split('@')[0]}`, mentioned, true)
client.groupMakeAdmin(from, mentioned)
}
break				
				
case 'linkgc':
client.updatePresence(from, Presence.composing) 
if (!isGroup) return reply(mess.only.group)
if (!isUser) return reply(mess.only.registroB)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await client.groupInviteCode (from)
yeh = `Aqui esta el link del grupo\n\nhttps://chat.whatsapp.com/${linkgc}\n\nLink Del Grupo *${groupName}*`
client.sendMessage(from, yeh, text, {quoted: mek, detectLinks: false})
break

case 'closegc':
client.updatePresence(from, Presence.composing) 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var nomor = mek.participant
const close = {
text: `Grupo cerrado por el administrador @${nomor.split("@s.whatsapp.net")[0]}\nAhora *solo los administradores* pueden enviar mensajes`,
contextInfo: { mentionedJid: [nomor] }
}
client.groupSettingChange (from, GroupSettingChange.messageSend, true);
reply(close)
break
                
case 'opengc':                
client.updatePresence(from, Presence.composing) 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
open = {
text: `Grupo abierto por el administrador @${sender.split("@")[0]}\nAhora *todos los participantes* pueden enviar mensajes`,
contextInfo: { mentionedJid: [sender] }
}
client.groupSettingChange (from, GroupSettingChange.messageSend, false)
client.sendMessage(from, open, text, {quoted: mek})
break
				                
case 'unir':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Para emoción ✋\nPara unir a una persona debes escribir el número sin (+)\n\nEjemplo: *unir _código del país_ xxxxxxxxx')
if (args[0].startsWith('+')) return reply(mess.error.unire)
try {0
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
client.groupAdd(from, [num])
} catch (e) {
console.log('Error:', e)
reply('No se pudo agregar el destino, tal vez porque es privado')
}
break
				
case 'fgc': 
reply(mess.foto)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
media = await client.downloadAndSaveMediaMessage(mek)
await client.updateProfilePicture (from, media)
reply('*⌊✅⌉ El cambio de foto del grupo fue exitoso*')
break						
				
case 'ngc':
      if (!isGroup) return reply(mess.only.group)
      if (!isGroupAdmins) return reply(mess.only.admin)
      if (!isBotGroupAdmins) return reply(mess.only.Badmin)
      client.groupUpdateSubject(from, `${body.slice(5)}`)
      client.sendMessage(from, '*⌊✅⌉ El nombre del grupo fue cambiado*', text, {quoted: mek})
      break

case 'dgc':
      if (!isGroup) return reply(mess.only.group)
      if (!isGroupAdmins) return reply(mess.only.admin)
      if (!isBotGroupAdmins) return reply(mess.only.Badmin)
      client.groupUpdateDescription(from, `${body.slice(5)}`)
      client.sendMessage(from, '*⌊✅⌉ La descripción del grupo fue cambiado*', text, {quoted: mek})
      break

case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (!isUser) return reply(mess.only.registroB)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Para activar está funcion coloca *welcome 1')
if (Number(args[0]) === 1) {
if (isWelkom) return reply('Ya esta activada!!!')
welkom.push(from)
fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
reply('❬ ✅ ❭ La funcion de bienvenida esta habilitada en este grupo')
} else if (Number(args[0]) === 0) {
welkom.splice(from)
fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
reply('❬ ✅ ❭ La funcion de bienvenida esta deshabilitada en este grupo')
} else {
reply('Escribe el comando 1 para activarlo y 0 para desactivarlo Ejemplo: *welcome 1')
}
break					
					
					
//FIN DE ADMINISTRACION DE GRUPOS				
				
				
				
//CREACION DE STICKERS Y VARIOS				
				
				case 's':
                                case 'stiker':
				case 'sticker':
				case 'stickergif':
				case 'stikergif':
					if (!isUser) return reply(mess.only.registroB)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
									 ran = getRandom('.webp')
			 await ffmpeg(`./${media}`)
				 .input(media)
				 .on('start', function (cmd) {
					 console.log(`Started : ${cmd}`)
				 })
				 .on('error', function (err) {
					 console.log(`Error : ${err}`)
					 fs.unlinkSync(media)
					 reply(mess.error.stick)
				 })
				 .on('end', function () {
					 console.log('Finish')
					 exec(`webpmux -set exif ${addMetadata(pack, author)} ${ran} -o ${ran}`, async (error) => {
						  if (error) {    
									  fs.unlinkSync(media)	
								  fs.unlinkSync(ran)
								  }
						 client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
						 fs.unlinkSync(media)	
						 fs.unlinkSync(ran)	
					 })
				 })
				 .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
				 .toFormat('webp')
				 .save(ran)
			 } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
				const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				const media = await client.downloadAndSaveMediaMessage(encmedia)
			 ran = getRandom('.webp')
			 reply(mess.only.pegatina)
			 await ffmpeg(`./${media}`)
				 .inputFormat(media.split('.')[1])
				 .on('start', function (cmd) {
					 console.log(`Started : ${cmd}`)
				 })
				 .on('error', function (err) {
					 console.log(`Error : ${err}`)
					 fs.unlinkSync(media)
					 tipe = media.endsWith('.mp4') ? 'video' : 'gif'
					 reply(`[❗] Fallo, al momento de convertir la imagen a sticker`)
				 })
				 .on('end', function () {
					 console.log('Finish')
						 exec(`webpmux -set exif ${addMetadata(pack, author)} ${ran} -o ${ran}`, async (error) => {
						 if (error) {
								  fs.unlinkSync(media)	
								  fs.unlinkSync(ran)
								  }
					 buff = fs.readFileSync(ran)
					 client.sendMessage(from, buff, sticker)
					 fs.unlinkSync(media)
					 fs.unlinkSync(ran)
				 })
			 })
				 .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
				 .toFormat('webp')
				 .save(ran)
			 }
			 break
					
					case 'attp':
						if (!isUser) return reply(mess.only.registroB)
					        if (args.length < 1) return reply(`¿Dónde está el texto?\n*Ejemplo:* ${prefix}attp DestroyerBot`)
						reply(mess.only.attp)
					        attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
						client.sendMessage(from, attp2, MessageType.sticker, {quoted: mek})
						break
					
			          case 'qrcode':
                buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?data=${body.slice(8)}&size=1080%C3%971080`)
				client.sendMessage(from, buff, image, {quoted: mek})
				break  
				
				case 'toimg':
				    client.updatePresence(from, Presence.composing)
                                    if (!isUser) return reply(mess.only.registroB)
					if (!isQuotedSticker) return reply('❌ Solo stickers')
					reply(mess.only.imgs)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ No se pudo convertir el sticker en imágenes')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '*⌈ Imagen convertida ✅ ⌉*\n\n_*by Juan Del Valle*_'})
						fs.unlinkSync(ran)
					})
					break
                        case 'tomp3':
                	client.updatePresence(from, Presence.composing) 
                        if (!isUser) return reply(mess.only.registroB)
					if (!isQuotedVideo) return reply('Responde al video con el comando *tomp3')
					reply(mess.only.mpcancion)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ No se pudo convertir el video a mp3')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break
//CREACION DE STICKERS Y VARIOS	            
	

	//SERVICIO DE MUSICA Y VIDEO 			
				
				
	        case 'play':   
	        if (args.length < 1) return reply('Donde esta el nombre de la canción?\n\nEjemplo: *play Industry Baby - Lil Nas X')
		if (!isUser) return reply(mess.only.registroB)
                reply(mess.only.musica)
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.me/api/ytplaymp3?q=${play}&apikey=28hamilton`)
                if (anu.error) return reply(anu.error)
                infomp3 = `*⌜Cancion Encontrada ✅⌟*\n◉ *Título:* ${anu.result.title}\n◉ *Fuente:* ${anu.result.source}\n◉ *Tamaño:* ${anu.result.size}\n\n*ESPERE ENVIANDO SU ARCHIVO MP3 ⚠*\n\n_*Servicio proveido por Juan Del Valle*_`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                break
		
		case 'play2':   
	        if (args.length < 1) return reply('Donde esta el nombre de la canción?\n\nEjemplo: *play2 Industry Baby - Lil Nas X')
		if (!isUser) return reply(mess.only.registroB)
	        reply(mess.only.musica2)
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.me/api/ytplaymp3?q=${play}&apikey=28shanduy`)
                if (anu.error) return reply(anu.error)
                infomp3 = `*⌜Cancion Encontrada ✅⌟*\n◉ *Título:* ${anu.result.title}\n◉ *Fuente:* ${anu.result.source}\n◉ *Tamaño:* ${anu.result.size}\n\n*ESPERE ENVIANDO SU ARCHIVO MP3 ⚠*\n\n_*Servicio proveido por Juan Del Valle*_`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                break
                                
		case 'ytmp4':
		if (args.length < 1) return reply('Donde esta la url del video?\n\nEjemplo: *ytmp4 www.youtube.com/xxxxxxxxx')
		if (!isUser) return reply(mess.only.registroB)
		reply(mess.only.mpv)
		if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
		anu = await fetchJson(`https://api.zeks.me/api/ytmp4?apikey=${apikey}&url=${args[0]}`, {method: 'get'})
		if (anu.error) return reply(anu.error.yt)
		teks = `*⌜Video Encontrado ✅⌟*\n◉ *Título:* ${anu.result.title} \n◉ *Tamaño:* ${anu.result.size}\n\n*ESPERE ENVIANDO SU ARCHIVO MP4 ⚠*\n\n_*Servicio proveido por Juan Del Valle*_`
		lagu = await getBuffer(anu.result.thumbnail)
                client.sendMessage(from, lagu, image, {quoted: mek, caption: teks})
		buffer = await getBuffer(anu.result.url_video)
		client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek})
		break
					
														
	//FIN DE SERVICIO DE MUSICA Y VIDEO			
	
	
//REGISTRO				

case 'registro':
client.updatePresence(from, Presence.composing)
if (isUser) return reply('Ya estas registrado 🧐')
if (args.length < 1) return reply(`Incorrecto ❎\nComando: ${prefix}registro Nombre\n\nEjemplo: ${prefix}registro Botsito`)
var reg = body.slice(8)
var nombre = reg.split("|")[0];
user.push(sender)
fs.writeFileSync('./database/json/user.json', JSON.stringify(user))
client.sendMessage(from, `\`\`\`REGISTRADO ✅\`\`\`\n\n\`\`\`DNI: Destructor(a) # ${user.length}\`\`\`\n\n\`\`\`Hora 🇬🇹: ${time}\`\`\`\n\n\`\`\`Fecha: ${date}\`\`\`\n\n\`\`\`[Usuario]: ${nombre}\`\`\`\n\`\`\`[Número]: wa.me/${sender.split("@")[0]}\`\`\`\`\n\`\`\`\nTotal de usuarios: ${user.length}\`\`\``, text, {quoted: mek})
break
                                
//FIN DE REGISTRO  
				
	//NSFW ACTIVAR			
                             
	case 'nsfw':
		if (!isGroup) return reply(mess.only.group)
		if (!isGroupAdmins) return reply(mess.only.admin)
		if (args.length < 1) return reply('Para activar los NSFW enviar el comando\n\n*nsfw 1')
		if (Number(args[0]) === 1) {
			if (isNsfw) return reply('Recursos Activados ✅')
			nsfw.push(from)
			fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
			reply('❬ ✅ ❭ La funcion NSFW esta habilitado en este grupo\n\nPara ver las opciones de nsfw enviar el comando *nsfwminu')
		} else if (Number(args[0]) === 0) {
			nsfw.splice(from, 1)
			fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
			reply('❬ ✅ ❭ La funcion NSFW esta deshabilitado en este grupo')
		} else {
			reply('Digite 1 para activarlo, 0 para desactivarlo')
		}
		break	
	
//NSFW ACTIVAR 				

	case 'waifu':
		gatauda = body.slice(7)
		reply(mess.wait)
							if (!isUser) return reply(mess.only.registroB)
		anu = await fetchJson(`https://arugaz.my.id/api/nekonime`, {method: 'get'})
		buffer = await getBuffer(anu.result)
		client.sendMessage(from, buffer, image,{quoted: mek})
		break
	
	case 'randomanime':
		gatauda = body.slice(13)
		reply(mess.wait)
							if (!isUser) return reply(mess.only.registroB)
		anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`, {method: 'get'})
		buffer = await getBuffer(anu.result)
		client.sendMessage(from, buffer, image, {quoted: mek})
		break						
				 case 'delete':
		case 'del':
		if (!isGroup)return reply(mess.only.group)
							if (!isUser) return reply(mess.only.registroB)
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
		break
	 case 'level':
	if (!isLevelingOn) return reply(mess.levelnoton)
	if (!isGroup) return reply(mess.only.group)
	const userLevel = getLevelingLevel(sender)
	const userXp = getLevelingXp(sender)
sem = sender.replace('@s.whatsapp.net','')
if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
	resul = `『 *TUS ESTADISTICAS 🆙* 』\n\nTus estadisticas en tiempo real 🕐\n\n├─ ❏ *NOMBRE:* ${sem}\n├─ ❏ *XP 🆙:* ${userXp}\n└─ ❏ *NIVEL:* ${userLevel}`
   client.sendMessage(from, resul, text, { quoted: mek})
	.catch(async (err) => {
			console.error(err)
			await reply(`Error!\n${err}`)
		})
break
	
case 'leveling':
	if (!isGroup) return reply(mess.only.group)
	if (!isGroupAdmins) return reply(mess.only.admin)
	if (args.length < 1) return reply('Digita *leveling 1 para activar este recurso')
	if (args[0] === '1') {
		if (isLevelingOn) return reply('*La función de nivel ya estaba activa*')
		_leveling.push(groupId)
		fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
		 reply(mess.levelon)
	} else if (args[0] === '0') {
		_leveling.splice(groupId, 1)
		fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
		 reply(mess.leveloff)
	} else {
		reply(` *Digita el comando 1 para activar, 0 para desactivar *\n * Ejemplo: ${prefix}leveling 1*`)
	}
break
		
//NSFW FUNCIONES
				   
		case 'neko': 
			try {
				if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
				res = await fetchJson(`https://meme-api.herokuapp.com/gimme/Nekogirl`, {method: 'get'})
				buffer = await getBuffer(res.url)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Grrrr dame pene'})
			} catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('❌ *ERROR* ❌')
			}
			break
	
			case 'culos': 
			try {
				if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
				res = await fetchJson(`https://meme-api.herokuapp.com/gimme/biganimetiddies`, {method: 'get'})
				buffer = await getBuffer(res.url)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'La vieja de gabo, tremenda puta'})
			} catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('❌ *ERROR* ❌')
			}
			break
		
	
		case 'tetas':
			try {
				if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
				res = await fetchJson(`https://meme-api.herokuapp.com/gimme/sideoppai`, {method: 'get'})
				buffer = await getBuffer(res.url)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Quiero ver tetas'})
			} catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('❌ *ERROR* ❌')
			}
			break
		
		case 'ahegao':
			try {
				if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
				res = await fetchJson(`https://meme-api.herokuapp.com/gimme/ahegao`, {method: 'get'})
				buffer = await getBuffer(res.url)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Joder, quisiera follarmela'})
			} catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('❌ *ERROR* ❌')
			}
			break
		
		case 'pies':
			try {
				if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
				res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animefeets`, {method: 'get'})
				buffer = await getBuffer(res.url)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'MMMMM PATAS'})
			} catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('❌ *ERROR* ❌') 
			}
			break
		
		case 'rule34':
			try {
				if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
				res = await fetchJson(`https://meme-api.herokuapp.com/gimme/rule34`, {method: 'get'})
				buffer = await getBuffer(res.url)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Vaya jaibita 🦀🧀 '})
			} catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('❌ *ERROR* ❌') 
			}
			break
		
		case 'ecchi':
			try {
				if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
				res = await fetchJson(`https://meme-api.herokuapp.com/gimme/ecchi`, {method: 'get'})
				buffer = await getBuffer(res.url)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Uff pa una pajita'})
			} catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('❌ *ERROR* ❌') 
			}
			break
		
			case 'yaoi':
			try {
				if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
				res = await fetchJson(`https://meme-api.herokuapp.com/gimme/yaoi`, {method: 'get'})
				buffer = await getBuffer(res.url)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ay 😈'})
			} catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('❌ *ERROR* ❌') 
			}
			break

			case 'yuri':
			try {
				if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
				res = await fetchJson(`https://meme-api.herokuapp.com/gimme/yuri`, {method: 'get'})
				buffer = await getBuffer(res.url)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Mmmmmmmmmm tijeras 🤤'})
			} catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('❌ *ERROR* ❌') 
			}
			break
		
//NSFW FIN DE FUNCIONES					
				
						
                                case 'ping':    
			   	        if (!isUser) return reply(mess.only.userB)
						   const timestamp = speed();
						   const latensi = speed() - timestamp
                                        client.updatePresence(from, Presence.composing) 
				        uptime = process.uptime()
                                        client.sendMessage(from, `Velocidad: *${latensi.toFixed(4)} _Second_*\nDevice: *Samsung J7 NEO*\nRAM: *2GB*\nData: *16GB*\nRed: *4G*\nEstado: *Posiblemente cargando*`, text, { quoted: mek})
                                        break
                                case 'ttp':
					if (args.length < 1) return reply('Y el texto mortal?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(4).trim()
					anu = await fetchJson(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'slap':
						when = budy.slice(1)
						if (args.length < 1) return reply(mess.only.userB)
						const slap =['perr@','te hablo a ti cerdo','de inocente no tienes nada','eres tont@ o te haces','te ves como un/a mon@','la pasarás solter@ el resto de tu vida UwU','así que quieres tener un/a novi@, ya te has visto en un espejo?','No eres gracios@ y eres fe@, vaya combinación para estar sol@ por el resto de tu vida','Vaya que no estamos cerca, si ni te soporto en digital, ni me imagino de lo que será en vida real','Eres un fan de YoloTroll','Siento que estás llorando','Sé que tus padres no te lo han dicho pero, ERES ADOPTADO','Woody ya está orgulloso de ti puesto que por fin entendiste que solo eres un juguete','Las únicas mujeres que te han besado son tu madre, abuela y demás familiares','Eres hermoso baby, en este instante se dicen cosas opuestas a la realidad','Eres adoptad@','De seguro te gustó Boku no Pico','Si te miras al espejo, talvez te asustes tú mismo','Ni los fantasmas se sienten tranquilos con tenerte en la misma casa','Enfrente de ti hay una silla con un pastel :3','Acéptalo, te gustan los trapitos','*PODRÁS SER:* feo, inseguro, con temor al rechazo, tímido, sin amigos, muy feo, realmente aburrido','Lo siento, me asusté al ver tu foto de perfil']
						const ple = slap[Math.floor(Math.random() * slap.length)]
						pod = await getBuffer(`https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif`)
						client.sendMessage(from, pod, image, { quoted: mek, caption: '*Tóxico*\n\n'+ ple })
					break
                default:
                
					if (budy.includes(`todo bien bot`)) {
						reply(`Si amigo todo bien, ok :v`)
						}
	  
			  if (budy.includes(`buenos días bot`)) {
						reply(`Buenos Dias 🐷 fly *UwU*`)
						}
	  
			  if (budy.includes(`Buenos dias bot`)) {
						reply(`Buenos Dias 🐷 fly *UwU*`)
						}
	  
			  if (budy.includes(`buenos dias bot`)) {
						reply(`Buenos Dias 🐷 fly *UwU*`)
						}
	  
			  if (budy.includes(`Buenos días bot`)) {
						reply(`Buenos Dias 🐷 fly *UwU*`)
						}
	  
			  if (budy.includes(`bot malo`)) {
						reply(`Miren a este fan de Boku no Pico`)
						}
	  
			  if (budy.includes(`Bot malo`)) {
						reply(`Miren a este fan de Boku no Pico`)
						}
	  
			  if (budy.includes(`Bot bueno`)) {
						reply(`*Ese es mi Destructor FAVORITO* 🤩`)
						}
		
			  if (budy.includes(`gracias bot`)) {
						reply(`De nada 🐷 fly *UwU*`)
						}
	  
			  if (budy.includes(`hola bot`)) {
						reply(`Hola 🐷 fly *UwU*`)
						}
	  
			  if (budy.includes(`Hola bot`)) {
						reply(`Hola 🐷 fly *UwU*`)
						}
					   
			  if (budy.includes(`fua`)) {
						reply(`el diegote pa`)
						}
	  
			  if (budy.includes(`infoBot`)) {
						reply(`La base de este bot es una creación de *Shanduy*, JuandelValle solo modificó y adaptó los mensajes para los grupos a los que el bot pertenece`)
						}	
	  
			  if (budy.includes(`saca las caguamas`)) {
						reply(`Qué marca? y cuántas?`)
						}
	  
			  if (budy.includes(`Saca las caguamas`)) {
						reply(`Qué marca? y cuántas?`)
						}
	  
			  if (budy.includes(`el bot habla`)) {
						reply(`Ammmm... No?`)
						}
	  
			  if (budy.includes(`El bot habla`)) {
						reply(`Ammmm... No?`)
						}
	  
			  if (budy.includes(`que hay bot`)) {
						reply(`lo mismo de siempre 🐷 fly *UwU*`)
						}
	  
			  if (budy.includes(`qué hay bot`)) {
						reply(`lo mismo de siempre 🐷 fly *UwU*`)
						}				  
	  
			  if (budy.includes(`como funciona el bot`)) {
						reply(`No lo entenderías si te lo dijera`)
						}
	  
			  if (budy.includes(`me salio shiny`)) {
						reply(`Flycidades 🐷 fly *UwU*`)
						}
	  
			  if (budy.includes(`Me salió shiny`)) {
						reply(`Flycidades 🐷 fly *UwU*`)
						}
	  
			  if (budy.includes(`ya estan los nidos`)) {
						reply(`Escribe "@nidos" y averígualo`)
						}
	  
			  if (budy.includes(`Ya están los nidos`)) {
						reply(`Escribe "@nidos" y averígualo`)
						}				  
	  
			  if (budy.includes(`nidos de arceus`)) {
						reply(`🤡, Todo bien en casa amigo?`)
						}	
	  
			  if (budy.includes(`Nidos de Arceus`)) {
						reply(`🤡, Todo bien en casa amigo?`)
						}
	  
			  if (budy.includes(`buenas noches bot`)) {
						reply(`Buena noche 🐷 fly *UwU*`)
						}	
	  
			  if (budy.includes(`Buenas noches bot`)) {
						reply(`Buena noche 🐷 fly *UwU*`)
						}		
	  
			  if (budy.includes(`El bot sabe qué número va después del 12`)) {
						reply(`*Baka Hentai*`)
						}
	  
			  if (budy.includes(`El bot sabe que numero va despues del 12`)) {
						reply(`*Baka Hentai*`)
						}		
						
			  if (budy.includes(`Cuánto es 12+1`)) {
						reply(`*Baka Hentai*`)
						}
	  
			  if (budy.includes(`Oye bot, tú y yo qué somos`)) {
						reply(`*😏 ¿Quieres que lo sepan todos?*\n\n*¿O que sea un secreto entre nosotros?*😏`)
						}
									  
			  if (budy.includes(`Oye bot tu y yo que somos`)) {
						reply(`*😏 ¿Quieres que lo sepan todos?*\n\n*¿O que sea un secreto entre nosotros?*😏`)
						}

			  if (budy.includes(`Cuál es tu película favorita`)) {
						reply(`*Mi película favorita es WALL-E*\n\n*¿Por qué?*\n\n*Porque el amor entre robots si existe :3*`)
						}
							
			  if (budy.includes(`Cual es tu película favorita`)) {
						reply(`*Mi película favorita es WALL-E*\n\n*¿Por qué?*\n\n*Porque el amor entre robots si existe :3*`)
						}

			  if (budy.includes(`cual es tu película favorita`)) {
						reply(`*Mi película favorita es WALL-E*\n\n*¿Por qué?*\n\n*Porque el amor entre robots si existe :3*`)
						}
				
	   		  if (budy.includes(`cuál es tu película favorita`)) {
						reply(`*Mi película favorita es WALL-E*\n\n*¿Por qué?*\n\n*Porque el amor entre robots si existe :3*`)
						}
	if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
