const newLocal = 'discord.js';
const Discord = require(newLocal);

module.exports = {
    name: 'embed-jackiee',
    description: 'embed-jackiee',
    options: [],

    run: async (client, int) => {
        

        const Embed1 = new Discord.EmbedBuilder()
            .setTitle('Hola, SOY EL BOT DE REGLAS')
            //.setThumbnail(('https://cdn.discordapp.com/icons/860607400011890729/66819cfb8e32553865386e17cd0ee317.png'))//logo en pequeño
            .setColor('#000033')


        const Embed2 = new Discord.EmbedBuilder()
            .setTitle('ʀᴇɢʟᴀꜱ ʙᴀꜱɪᴄᴀꜱ')//titulo
            .setThumbnail(('https://cdn.discordapp.com/icons/860607400011890729/66819cfb8e32553865386e17cd0ee317.png'))//logo en pequeño
            .setDescription("╔══════ ❀∘❀∘❀∘══════╗\n✔ ꜱᴇ ʀᴇꜱᴘᴇᴛᴜᴏꜱᴏ ᴄᴏɴ ʟᴏꜱ ᴅᴇᴍÁꜱ.\n✔ ᴄᴜᴍᴘʟᴇ ʟᴏꜱ ᴛᴇʀᴍɪɴᴏꜱ ʏ ᴄᴏɴᴅɪᴄɪᴏɴᴇꜱ ᴅᴇʟ ꜱᴇʀᴠɪᴄɪᴏ ᴅᴇ ᴅɪꜱᴄᴏʀᴅ. https://discord.com/terms .\n✔Usar los canales de forma apropiada, hablar con claridad tanto en texto como en voz.\n╠═════ᴘʀᴏʜɪʙɪᴄɪᴏɴᴇꜱ═════╣\n❌ ɴᴏ ʜᴀɢᴀꜱ ꜱᴘᴀᴍ ɴɪ ᴘᴜʙʟɪᴄɪᴅᴀᴅ ᴅᴇ ᴏᴛʀᴏꜱ ꜱᴇʀᴠᴇʀꜱ ᴏ ᴄᴀɴᴀʟᴇꜱ ᴅᴇ ᴛᴡɪᴛᴄʜ. 'ꜱɪɴ ᴀᴜᴛᴏʀɪᴢᴀᴄɪᴏɴ ᴅᴇ ᴜɴ ᴍᴏᴅᴇʀᴀᴅᴏʀ'.\n❌ ɴᴏ ʜᴀɢᴀꜱ ᴄᴏᴍᴇɴᴛᴀʀɪᴏꜱ ᴏꜰᴇɴꜱɪᴠᴏꜱ ᴏ ᴅᴇᴍᴀꜱɪᴀᴅᴏ ᴘᴇʀꜱᴏɴᴀʟᴇꜱ.\n❌ ɴᴏ ᴘᴜʙʟɪᴄᴀʀ ɴɪɴɢÚɴ ᴛɪᴘᴏ ᴅᴇ ᴄᴏɴᴛᴇɴɪᴅᴏ +18 ᴏ ɪʟᴇɢᴀʟ.\n❌ ɴᴏ ᴍᴀʟ ᴜᴛɪʟɪᴢᴀʀ ʟᴏꜱ ʙᴏᴛꜱ\n❌ᴘʀᴏʜɪʙɪᴅᴏ ᴇʟ ᴜꜱᴏ ᴅᴇ ᴍᴜʟᴛɪᴄᴜᴇɴᴛᴀꜱ ʏ ʟᴀ ꜱᴜᴘʟᴀɴᴛᴀᴄɪÓɴ ᴅᴇ ɪᴅᴇɴᴛɪᴅᴀᴅ.n\╚══════ ❀∘❀∘❀∘══════╝")//contenido
            .setImage('https://cdn.discordapp.com/attachments/1045871917564973116/1065443239122968726/Banner_R_N.gif')//imagen grande abajo
            .setColor('#7f00b2')//color linea                

        const Embed3 = new Discord.EmbedBuilder()
            .setTitle('Términos de Incumplimiento')//titulo
            .setThumbnail(('https://cdn.discordapp.com/icons/860607400011890729/66819cfb8e32553865386e17cd0ee317.png'))//logo en pequeño
            .setDescription("╔════════ ❀∘❀∘❀∘════════╗\nꜱɪ ɪɴᴄᴜᴍᴘʟᴇꜱ ʟᴀꜱ ɴᴏʀᴍᴀꜱ ᴅᴇʟ ᴄᴀɴᴀʟ ʀᴇᴄɪʙɪʀÁꜱ ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀꜱ Qᴜᴇ ꜱᴇ ɪʀÁɴ ꜱᴜᴍᴀɴᴅᴏ ʏ ᴘᴏꜱᴛᴇʀɪᴏʀ ᴍᴇɴᴛᴇ ꜱɪ ᴘᴀꜱᴀꜱ ᴅᴇ ʟᴀꜱ 3 ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀꜱ ʀᴇᴄɪʙɪʀ ᴀɪꜱʟᴀᴍɪᴇɴᴛᴏꜱ ᴛᴇɴᴅʀÁꜱ ʏ ᴛᴇɴᴅʀÁꜱ 0 ᴘᴏꜱɪʙɪʟɪᴅᴀᴅ ᴅᴇ ᴏʙᴛᴇɴᴇʀ ᴍᴏᴅᴇʀᴀᴅᴏʀ ᴇɴ ᴇꜱᴛᴇ ᴄᴀɴᴀʟ\n╚════════ ❀∘❀∘❀∘════════╝")//contenido
            //.setImage('https://cdn.discordapp.com/attachments/1045871917564973116/1065443239122968726/Banner_R_N.gif')//imagen grande abajo
            .setColor('#1f2098')//color linea

            const Embed4 = new Discord.EmbedBuilder()
            .setTitle('Título del Mensaje 4')//titulo
            .setThumbnail(('https://cdn.discordapp.com/icons/860607400011890729/66819cfb8e32553865386e17cd0ee317.png'))//logo en pequeño
            .setDescription("╔═════════❀∘❀∘❀═════════╗\nᴄᴜᴀʟQᴜɪᴇʀ ᴅᴜᴅᴀ ᴄᴏᴍᴜɴɪᴄᴀʀꜱᴇ ᴄᴏɴ ʟᴏꜱ ᴍᴏᴅᴇʀᴀᴅᴏʀᴇꜱ\n@Moderadores\n╚═════════❀∘❀∘❀═════════╝")//contenido
            //.setImage('https://cdn.discordapp.com/attachments/1045871917564973116/1065443239122968726/Banner_R_N.gif')//imagen grande abajo
            .setColor('#d06aff')//color linea
            .setFooter({ text: "Creador JeferrHN", iconURL: client.user.displayAvatarURL()  })
            int.reply({ embeds: [ Embed1, Embed2, Embed3, Embed4]})
        
    }
}
