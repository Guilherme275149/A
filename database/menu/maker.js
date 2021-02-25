const maker = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *MAKER MENU* ]----- 🔰
Roiii, ${pushname} 👋
Tenha um bom dia, usuários, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ Nome : ${pushname}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ Usuário ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Aqui estão os recursos deste bot! ✨
 Se você não entende, digite *${prefix}bingungcok*
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
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.maker = maker