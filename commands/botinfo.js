const Discord = require("discord.js");

module.exports.run = async (bot, message, args, banchoState) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
        .setDescription("Bot Information")
        .setColor("#15f153")
        .setThumbnail(bicon)
        .addField("Bot Name", bot.user.username)
        .addField("Created On", bot.user.createdAt)
        .addField("Additional Info:", "to see mood give the bot a role named \"Bancho\" with a lower rank than the BanchoBot role");

    return message.channel.send(botembed);
}

module.exports.help = {
    name: "botinfo",
    description: "bot information"
}