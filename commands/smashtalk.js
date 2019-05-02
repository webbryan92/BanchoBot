const Discord = require("discord.js");
const smashTalk = require("../smashTalk.json");

module.exports.run = async (bot, message, args, banchoState) => {
    //create a smash talk from the json arrays using a random option
    let bicon = bot.user.displayAvatarURL;
    let serverembed = new Discord.RichEmbed()
        .setDescription("" + smashTalk.openers[Math.floor(Math.random()*smashTalk.openers.length)] +
        " " + smashTalk.verbs[Math.floor(Math.random()*smashTalk.verbs.length)] +
        " " + smashTalk.enders[Math.floor(Math.random()*smashTalk.enders.length)])
        .setColor("#15f153")
        .setThumbnail(bicon)

    return message.channel.send(serverembed);
}

//TODO write help description and usage
module.exports.help = {
    name: "smashtalk"
}