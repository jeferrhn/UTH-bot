const newLocal = 'discord.js';
const Discord = require(newLocal);

module.exports = {
  name: 'embed-bace',
  description: 'Create embed-bace',
  options: [],
  run: async (client, int) => {
    
    const Embed = new Discord.EmbedBuilder()
    .setAuthor({ name: 'Author', iconURL: client.user.displayAvatarURL() })
    .setTitle('Titulo')
    .setURL('https://www.youtube.com')
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription("Esta es una descripcion")
    .addFields([
      { name: 'Soli mod', value: 'value soli mod'},
      { name: 'Soli sub', value: 'value soli sub'},
    ])
    .setImage(client.user.displayAvatarURL())
    .setColor('#000000')
    .setFooter({ text: "Esto es un footer", iconURL: client.user.displayAvatarURL()  })
    .setTimestamp(new Date('1/3/2023'))
    
    int.reply({ embeds: [ Embed ]});
  }
}