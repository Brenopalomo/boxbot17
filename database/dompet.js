const dompet = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `π° -----[ *MINHA CARTEIRA MENU* ]----- π°
OlΓ‘, ${pushname} π
Tenha um bom dia para os usuΓ‘rios, ${sender.split("@")[0]}
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
βββΈ *${prefix}limit*
βββΈ *${prefix}atm*
βββΈ *${prefix}transfer*
βββΈ *${prefix}buylimit*
ββ°βββββββββββββββββββ
ββββββββββββββββββββββ
π° -----[ *DISTRIBUΓDO POR ${Eren Yeager}* ]----- π°`
}
exports.dompet = dompet
