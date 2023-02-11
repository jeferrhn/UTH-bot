module.exports = {
  name: 'ping',
  description: 'mira mi velocidad de respuesta',
  options:[],
  run: async (client, int) => {
    int.reply({
      content: "analizando",
      fetchReply: true
    }).then ((m) => {
      m.edit(`ping: \`${Date.now() - m.createdTimestamp}ms\``)
    });
  }
}