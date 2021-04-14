const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '!';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
client.once('ready', () => {
    console.log('HOLOS is online!');
    client.user.setPresence({ activity: { name: "watching you dumbass" }, status: "online"})
});
 
client.once('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'NORMIES');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('831875858817613824').send(`SELAMAT DATANG BROO <@${guildMember.user.id}> DI HOLOS SEMOGA BETAH YAA! `)
})
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command == 'youtube'){
        client.commands.get('youtube').execute(message, args);
    }else if (command == 'bantuan'){
        client.commands.get('bantuan').execute(message, args);
    } else if (command == 'panggilanku'){
        client.commands.get('panggilanku').execute(message, args);
    } else if (command == 'babon'){
        client.commands.get('babon').execute(message, args);
    }  else if (command == 'warung'){
        client.commands.get('warung').execute(message, args);
    } else if (command === 'mainkan') {
        client.commands.get('mainkan').execute(message, args);
    } else if (command === 'pergi') {
        client.commands.get('pergi').execute(message, args);
    }
});

  client.login('ODMxODU0NTY5MTgwMTAyNjc3.YHbS8A.b0ICfvfXUQpE-1KN9cz_jVY21Vo')