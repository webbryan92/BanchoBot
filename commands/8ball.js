const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!args[2]) return message.reply("Are you an idiot?")
    let replies = ["Yes", "No", "Yowamushi", "Uzendayo", "Aho Ka?"]

    let result = Math.floor((Math.random() * replies.length));

    return message.channel.send(replies[result]);
}

module.exports.help = {
    name: "8ball"
}