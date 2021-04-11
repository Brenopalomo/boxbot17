const sound = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *SOM MENU* ]----- 🔰
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
┃│➸ *${prefix}iri*
┃│➸ *${prefix}pale*
┃│➸ *${prefix}sound1*
┃│➸ *${prefix}sound2*
┃│➸ *${prefix}sound3*
┃│➸ *${prefix}sound4*
┃│➸ *${prefix}sound5*
┃│➸ *${prefix}sound6*
┃│➸ *${prefix}sound7*
┃│➸ *${prefix}sound8*
┃│➸ *${prefix}sound9*
┃│➸ *${prefix}sound10*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *DISTRIBUÍDO POR ${Eren Yeager}* ]----- 🔰`
}
exports.sound = sound
