module.exports = {
  name: 'ready',
  run: (client) => {
    console.log('Estoy listo!')
    client.application.commands.set([
      {
       name: 'ping',
        description: 'pong',
        options: [],
      },
      {
        name: 'saludo',
        description: 'Te evio un saludo',
        options: [{
            type: 7,
            name:'canal',
            description:'el canal ',
            required: true
          },
          {
            type: 6,
            name:'usuario',
            description:'El usuarios que desea saludar',
            required: true
          }],
      }
    ]); 
  }
}