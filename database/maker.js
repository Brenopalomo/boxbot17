const maker = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *Maker MENU* ]----- 🔰
Olá, ${pushname} 👋
Tenha um bom dia para os usuários, ${sender.split("@")[0]}
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
┃│➸ *${prefix}hartatahta*
┃│➸ *${prefix}ninjalogo*
┃│➸ *${prefix}halloweentext*
┃│➸ *${prefix}pornhub*
┃│➸ *${prefix}glitchtext*
┃│➸ *${prefix}blackpink*
┃│➸ *${prefix}cloudtext*
┃│➸ *${prefix}neontext*
┃│➸ *${prefix}textlight*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *DISTRIBUÍDO POR ${Eren Yeager}* ]----- 🔰`
}
exports.maker = maker
