const owb = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `π° -----[ *MENU DO PROPRIETΓRIO* ]----- π°
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
βββΈ *${prefix}bc*
βββΈ *${prefix}bcgc*
βββΈ *${prefix}clearall*
βββΈ *${prefix}block*
βββΈ *${prefix}unblock*
βββΈ *${prefix}clone*
βββΈ *${prefix}setppbot*
βββΈ *${prefix}setreply*
βββΈ *${prefix}setprefix*
βββΈ *${prefix}addprem*
βββΈ *${prefix}dellprem*
βββΈ *${prefix}ban*
βββΈ *${prefix}unban*
βββΈ *${prefix}resetlimit*
βββΈ *${prefix}event* γ1/0γ
ββ°βββββββββββββββββββ
ββββββββββββββββββββββ
π° -----[ *DISTRIBUΓDO POR ${Eren Yeager}* ]----- π°`
}
exports.owb = owb
