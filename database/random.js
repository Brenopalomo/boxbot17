const random = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `π° -----[ *ALEATΓRIA MENU* ]----- π°
OlΓ‘, ${pushname} π
Tenham um bom dia, usuΓ‘rios, ${sender.split("@")[0]}
ββββββββββββββββββββββ
ββ­βββββββββββββββββββ
βββΈ NOME : ${pushname}
βββΈ LEVEL : ${getLevelingLevel(sender)}
βββΈ USER ${botName} : ${_registered.length}
ββ°βββββββββββββββββββ
ββββββββββββββββββββββ
Aqui estΓ£o os recursos deste bot! β¨
Se vocΓͺ nΓ£o entendeu, digite * $ {prefix} confusedcok *
ββββββββββββββββββββββ
ββ­βββββββββββββββββββ
βββΈ *${prefix}nekonime*
βββΈ *${prefix}wibu*
βββΈ *${prefix}neko*
βββΈ *${prefix}husbu*
βββΈ *${prefix}kpop*
βββΈ *${prefix}anjing*
βββΈ *${prefix}pokemon*
βββΈ *${prefix}bokep*
βββΈ *${prefix}darkjokes*
βββΈ *${prefix}meme*
βββΈ *${prefix}nsfwneko*
ββ°βββββββββββββββββββ
ββββββββββββββββββββββ
π° -----[ *DISTRIBUΓDO POR ${Eren Yeager}* ]----- π°`
}
exports.random = random
