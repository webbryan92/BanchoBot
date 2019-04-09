const Discord = require("discord.js");
const banchoState = require("../banchosoul.json");
const fs = require("fs");

module.exports.run = async (bot, guild, mood) => {
    console.log("I'm in the function")
    //find the element and update it
    try{
        let guildObj = banchoState[guild.id]; 
         //increment soul level by 1 or decrease and dont let level exceed maximum
        if(mood == "increase" && (guildObj.soulLevel < 30)){
            console.log("im in increase");
            guildObj.soulLevel += 1;
        }
        else if(mood == "decrease" && guildObj.soulLevel > 0){
            console.log("im in decrease");
            guildObj.soulLevel -= 1;
        }  
    }
    catch(err){
        console.log("guild.id not found")
    }    
    
    fs.writeFile("./banchosoul.json", JSON.stringify(banchoState, null, 1), (err) => {
        if (err){
            console.error(err);
            return;
        };
        console.log("banchosoul.json has been updated(soulChange)")
    })
}