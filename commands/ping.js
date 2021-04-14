module.exports = {
    name: 'ping',
    description: "sends the sender pings",
    execute(message, args){
        message.channel.send(`🏓 Pong! Ping mu sekarang adalah ${Date.now() - message.createdTimestamp}ms.`);
        }
    }