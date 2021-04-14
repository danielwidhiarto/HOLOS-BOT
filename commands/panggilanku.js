module.exports = {
    name: 'panggilanku',
    description: "sends unique nicknames",
    execute(message, args){
        let nicknames = ["orang bodo", "anak pinter", "bang copo", "bang jago", "pacarnya yehz", "sahabat samuel"]
        message.channel.send(`${nicknames[Math.floor(Math.random() * nicknames.length)]}`)
        }
    }