module.exports = {
  name: 'ready',
  run: (client) => {
    console.log('Estoy listo!');

    client.application.commands.set(client.commands.map(x => x));
  }
}