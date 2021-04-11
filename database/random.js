const random = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *ALEATÓRIA MENU* ]----- 🔰
Olá, ${pushname} 👋
Tenham um bom dia, usuários, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NOME : ${pushname}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Aqui estão os recursos deste bot! ✨
Se você não entendeu, digite * $ {prefix} confusedcok *
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}nekonime*
┃│➸ *${prefix}wibu*
┃│➸ *${prefix}neko*
┃│➸ *${prefix}husbu*
┃│➸ *${prefix}kpop*
┃│➸ *${prefix}anjing*
┃│➸ *${prefix}pokemon*
┃│➸ *${prefix}bokep*
┃│➸ *${prefix}darkjokes*
┃│➸ *${prefix}meme*
┃│➸ *${prefix}nsfwneko*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *DISTRIBUÍDO POR ${Eren Yeager}* ]----- 🔰`
}
exports.random = random
