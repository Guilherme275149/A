const dompet = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ * MENU * ]----- 🔰
Roii, ${pushname} 👋
Tenha um bom dia, usuários, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ Nome : ${pushname}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ Usuario ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Aqui estão os recursos deste bot! ✨
 Se você não entende, digite *${prefix}bingungcok*
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}limit*
┃│➸ *${prefix}atm*
┃│➸ *${prefix}transfer*
┃│➸ *${prefix}buylimit*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.dompet = dompet