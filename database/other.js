const other = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `π° -----[ *OUTRO MENU* ]----- π°
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
βββΈ *${prefix}brainly*
βββΈ *${prefix}wiki*
βββΈ *${prefix}pinterest*
βββΈ *${prefix}resepmakanan*
βββΈ *${prefix}beritahoax*
βββΈ *${prefix}timer*
βββΈ *${prefix}nulis1*
βββΈ *${prefix}nulis2*
ββ°βββββββββββββββββββ
ββββββββββββββββββββββ
π° -----[ *DISTRIBUΓDO POR ${Eren Yeager}* ]----- π°`
}
exports.other = other
