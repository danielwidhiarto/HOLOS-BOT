module.exports = {
    name: 'pergi',
    description: 'stop the bot and leave the channel',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
 
        if(!voiceChannel) return message.channel.send("Kamu harus berada didalam voice channel untuk menghentikan musiknya :)");
        await voiceChannel.leave();
        await message.channel.send('Selamat tinggal kawan, kamu jahat! :smiling_face_with_tear:')
 
    }
}
module.exports = {
    name: 'pergi',
    description: 'stop the bot and leave the channel',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
 
        if(!voiceChannel) return message.channel.send("Kamu harus berada didalam voice channel untuk menghentikan musiknya :)");
        await voiceChannel.leave();
        await message.channel.send('Selamat tinggal kawan, kamu jahat! :smiling_face_with_tear:')
 
    }
}