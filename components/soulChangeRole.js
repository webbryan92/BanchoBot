const Discord = require("discord.js");
const banchoSoul = require("../banchosoul.json")

module.exports.run = async (bot, guild, mood, banchoState) => {
    bot.guilds.get(guild.id)

    //useless statement until I separate soul level by guild
    guildBanchoSoul = banchoSoul;
    //use current soul level for guild to determine how to update the role color
    if(guildBanchoSoul.soullevel < 5){
        return message.channel.send("huge mood");
    }
    else if(guildBanchoSoul.soullevel < 10){
        return message.channel.send("big mood");
    }
    else if(guildBanchoSoul.soullevel < 15){
        return message.channel.send("small mood");
    }
    else if(guildBanchoSoul.soullevel < 20){
        return message.channel.send("doin alright");
    }
    else if(guildBanchoSoul.soullevel < 25){
        return message.channel.send("fired up");
    }
    else{
        return message.channel.send("maximum pomp");
    }
}