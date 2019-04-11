const Discord = require("discord.js");
const banchoState = require("../banchosoul.json");
const soulChangeRole = require("./soulChangeRole.js");
const fs = require("fs");

module.exports.run = async (bot, message, mood) => {
    //find the element and update it
    try{
         //increment soul level by 1 or decrease and dont let level exceed maximum
        if(mood == "increase" && (banchoState[message.guild.id].banchoSoul < 30)){
            banchoState[message.guild.id].banchoSoul += 1;
        }
        else if(mood == "decrease" && banchoState[message.guild.id].banchoSoul > 0){
            banchoState[message.guild.id].banchoSoul -= 1;
        }  
    }
    catch(err){
        console.log("guildID not found")
    }        
    fs.writeFile("./banchosoul.json", JSON.stringify(banchoState, null, 1), (err) => {
        if (err){
            console.error(err);
            return;
        };
        console.log("banchosoul.json has been updated(soulChange)")
    });
    //update role color if needed
    soulChangeRole.run(bot, message, banchoState);
}