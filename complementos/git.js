let handler = async m => m.reply(`
 *GIT DE ESTE BOT*
LEONEL

MY GIT:

MERRY
😴                                       
`.trim()) 
handler.help = ['git']
handler.tags = ['info']
handler.command = /^git$/i

module.exports = handler

