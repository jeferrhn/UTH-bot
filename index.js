require('http').createServer((req, res) => res.end('Hola')).listen();

const Discord = require('discord.js');
const client = new Discord.Client({ intents: 32767 });
const fs = require('fs');
const path = require('path');
const config = require('./prefix.json');

const dirEvents = fs.readdirSync(path.join(__dirname, 'events'));
const dirCommands = fs.readdirSync(path.join(__dirname, 'commands'));


for (const fileEvent of dirEvents) {
const event = require (path.join(__dirname, 'events', fileEvent));
client.on(event.name, (...args) => event.run(client, ...args));
}

client.commands = new Discord.Collection();
for(const subFolder of dirCommands) {
  const filesCommands = fs.readdirSync(path.join(__dirname, 'commands', subFolder));
 
  for(const fileCommand of filesCommands){
   const command = require(path.join(__dirname, 'commands', subFolder, fileCommand)); 
    console.log(`✅ ${command.name} cargado correctamente.`);
    client.commands.set(command.name, command);
  }
}


client.login("MTA0NTUxNTg3MDUxODEzMjczNw.G33aq4.KzJFjgXrBENTqpmBkUn1xYVk4Xz2YWiEvFrId0");

