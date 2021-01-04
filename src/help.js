const help = (prefix) => {
	return `> *𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙸𝚂* <

╔════════════════════
║ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾: *${prefix}sticker* or *${prefix}stiker*
║ 𝙳𝙴𝚃𝙰𝙻𝙷𝙴: converter imagem / gif / vídeo em adesivo
║ 𝚄𝚂𝙾: responde𝚁 imagem / gif / vídeo ou enviar imagem / gif / vídeo com legenda\n
╠════════════════════
║ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾: *${prefix}sticker nobg* or *${prefix}stiker nobg*
║ 𝙳𝙴𝚃𝙰𝙻𝙷𝙴: converter imagem em adesivo removendo o fundo
║ 𝚄𝚂𝙾: responder imagem ou enviar imagem com legenda
╠════════════════════
║ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾: *${prefix}toimg*
║ 𝙳𝙴𝚃𝙰𝙻𝙷𝙴: converter adesivo em imagem
║ 𝚄𝚂𝙾: marque a figurinha
╠════════════════════
║ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾: *${prefix}tsticker* or *${prefix}tstiker*
║ 𝙳𝙴𝚃𝙰𝙻𝙷𝙴: converter texto em adesivo
║ 𝚄𝚂𝙾: *${prefix}tsticker texto aqui *
╚════════════════════

> *C𝙾𝙼𝙰𝙽𝙳𝙾 𝙳𝙴 𝙼𝙴𝙼𝙴𝚂* <

╔════════════════════
║ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾: *${prefix}meme*
║ 𝙳𝙴𝚃𝙰𝙻𝙷𝙴: imagens aleatórias de meme [english]
║ 𝚄𝚂𝙾: apenas envie o comando
╠════════════════════
║ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾: *${prefix}memeindo*
║ 𝙳𝙴𝚃𝙰𝙻𝙷𝙴: imagens aleatórias de meme [indo]
║ 𝚄𝚂𝙾: apenas envie o comando
╚════════════════════

> *𝙾𝚄𝚃𝚁𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂* <

╔════════════════════
║ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾: *${prefix}gtts*
║ 𝙳𝙴𝚃𝙰𝙻𝙷𝙴: converter texto em fala / áudio
║ 𝚄𝚂𝙾: *${prefix}gtts [cc] [text]*\nexemplo : *${prefix}gtts ja On2-chan*\n
╠════════════════════
║ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾: *${prefix}loli*
║ 𝙳𝙴𝚃𝙰𝙻𝙷𝙴: imagens aleatórias de loli
║ 𝚄𝚂𝙾: apenas envie o comando
╠════════════════════
║ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾: *${prefix}nsfwloli*
║ 𝙳𝙴𝚃𝙰𝙻𝙷𝙴: imagens aleatórias de nsfw loli
║ 𝚄𝚂𝙾: basta enviar o comando
╠════════════════════
║ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾: *${prefix}url2img*
║ 𝙳𝙴𝚃𝙰𝙻𝙷𝙴: tirar screenshots da web
║ 𝚄𝚂𝙾: *${prefix}url2img [tipe] [url]*\n
╠════════════════════
║ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾: *${prefix}simi*
║ 𝙳𝙴𝚃𝙰𝙻𝙷𝙴: sua mensagem será respondida por simi
║ 𝚄𝚂𝙾: *${prefix}simi sua mensagem*
╠════════════════════
║ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾: *${prefix}ocr*
║ 𝙳𝙴𝚃𝙰𝙻𝙷𝙴: pegue o texto na foto
║ 𝚄𝚂𝙾: responder imagem ou enviar imagem com legenda\n
╠════════════════════
║ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾: *${prefix}wait*
║ 𝙳𝙴𝚃𝙰𝙻𝙷𝙴: procure anime com imagem [ que anime é isso / aquilo ]
║ 𝚄𝚂𝙾: responder imagem ou enviar imagem com legendan\n
╠════════════════════
║ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾: *${prefix}setprefix*
║ 𝙳𝙴𝚃𝙰𝙻𝙷𝙴: substituir prefixo
║ 𝚄𝚂𝙾: *${prefix}setprefix [text|optional]*\nexample : *${prefix}setprefix ?*
║ 𝙰𝙽𝙾𝚃𝙰𝙲𝙰𝙾: Este comando só pode ser usado pelo proprietário do bot
╚════════════════════

> *𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙳𝙾 𝙶𝚁𝚄𝙿𝙾* <

╔════════════════════
║ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾: *${prefix}linkgroup*
║ 𝙳𝙴𝚃𝙰𝙻𝙷𝙴: pegue o link do grupo
║ 𝚄𝚂𝙾: apenas envie o comando
║ 𝙰𝙽𝙾𝚃𝙰𝙲𝙰𝙾: só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
╠════════════════════
║ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾: *${prefix}tagall*
║ 𝙳𝙴𝚃𝙰𝙻𝙷𝙴: marca todos os membros do grupo, incluindo administradores também
║ 𝚄𝚂𝙾: apenas envie o comando
║ 𝙰𝙽𝙾𝚃𝙰𝙲𝙰𝙾: Este comando pode ser usado se você for um administrador do grupo\n
╠════════════════════
║ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾: *${prefix}simih*
║ 𝙳𝙴𝚃𝙰𝙻𝙷𝙴: ative o modo simi no grupo
║ 𝚄𝚂𝙾: *${prefix}simih 1* para ativar o modo simi e *${prefix}simih 0* para desativar o modo simi
║ 𝙰𝙽𝙾𝚃𝙰𝙲𝙰𝙾: Este comando pode ser usado se você for um admin\n`
╚════════════════════
}

exports.help = help


