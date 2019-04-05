const Discord = require("discord.js");
const banchoSoul = require("../banchosoul.json")
const fs = require("fs");

module.exports.run = async (bot, guild, mood) => {
    console.log("I'm in the function")
    bot.guilds.get(guild.id)    
    //useless statement until I separate soul level by guild
    guildBanchoSoul = banchoSoul;
    //increment soul level by 1 or decrease and dont let level exceed maximum
    if(mood == "increase" && (guildBanchoSoul.soulLevel < 30)){
        guildBanchoSoul.soulLevel += 1;
    }
    else if(guildBanchoSoul.soulLevel > 0){
        guildBanchoSoul.soulLevel -= 1;
    }
    console.log("guild banchosoul level is" + guildBanchoSoul.soulLevel)
    fs.writeFile("./banchosoul.json", JSON.stringify(guildBanchoSoul, null, 1), (err) => {
        if (err){
            console.error(err);
            return;
        };
        console.log("banchosoul.json has been updated")
    })
}