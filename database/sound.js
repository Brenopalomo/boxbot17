const sound = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `π° -----[ *SOM MENU* ]----- π°
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
βββΈ *${prefix}iri*
βββΈ *${prefix}pale*
βββΈ *${prefix}sound1*
βββΈ *${prefix}sound2*
βββΈ *${prefix}sound3*
βββΈ *${prefix}sound4*
βββΈ *${prefix}sound5*
βββΈ *${prefix}sound6*
βββΈ *${prefix}sound7*
βββΈ *${prefix}sound8*
βββΈ *${prefix}sound9*
βββΈ *${prefix}sound10*
ββ°βββββββββββββββββββ
ββββββββββββββββββββββ
π° -----[ *DISTRIBUΓDO POR ${Eren Yeager}* ]----- π°`
}
exports.sound = sound
