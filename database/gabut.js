const gabut = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `π° -----[ *GABUTZ MENU* ]----- π°
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
Se vocΓͺ nΓ£o entendeu, digite * $ {prefix} confuso *
ββββββββββββββββββββββ
ββ­βββββββββββββββββββ
βββΈ *${prefix}apakah*
βββΈ *${prefix}bisakah*
βββΈ *${prefix}kapankah*
βββΈ *${prefix}hobby*
βββΈ *${prefix}rate*
βββΈ *${prefix}cekbapak*
βββΈ *${prefix}seberapagay*
βββΈ *${prefix}truth*
βββΈ *${prefix}dare*
βββΈ *${prefix}tebakin*
βββΈ *${prefix}timer*
βββΈ *${prefix}simi*
ββ°βββββββββββββββββββ
ββββββββββββββββββββββ
π° -----[ *DISTRIBUΓDO POR ${Eren Yeager}* ]----- π°`
}
exports.gabut = gabut
