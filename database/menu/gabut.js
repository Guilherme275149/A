const gabut = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *GABUTZ MENU* ]----- 🔰
Roii, ${pushname} 👋
Tenha um bom dia, usuários, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : ${pushname}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Aqui estão os recursos deste bot! ✨
 Se você não entende, digite *${prefix}bingungcok*
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}apakah*
┃│➸ *${prefix}bisakah*
┃│➸ *${prefix}kapankah*
┃│➸ *${prefix}hobby*
┃│➸ *${prefix}rate*
┃│➸ *${prefix}cekbapak*
┃│➸ *${prefix}seberapagay*
┃│➸ *${prefix}truth*
┃│➸ *${prefix}dare*
┃│➸ *${prefix}tebakin*
┃│➸ *${prefix}timer*
┃│➸ *${prefix}simi*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.gabut = gabut
