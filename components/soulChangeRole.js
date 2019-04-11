const Discord = require("discord.js");
const banchoSoul = require("../banchosoul.json")

module.exports.run = async (bot, message, banchoState) => {

    //find the bancho role
    let role = message.guild.roles.find(r => r.name === "Bancho");
    let member = message.guild.member(bot.user);
    //test if role exists and bot has the role if not, exit
    if(!role || !member.roles.has(role.id)){
        return;
    }
    else{
        //use current soul level for guild to determine how to update the role color
        if(banchoState[message.guild.id].banchoSoul < 5){
            role.edit({ color: 'GRAY' })
                .then(updated => console.log(`Edited role color from ${role.color} to ${updated.color}`))
                .catch(console.error);

            return message.channel.send("huge mood");
        }
        else if(banchoState[message.guild.id].banchoSoul < 10){
            role.edit({ color: 'PURPLE' })
                .then(updated => console.log(`Edited role color from ${role.color} to ${updated.color}`))
                .catch(console.error);
            return message.channel.send("big mood");
        }
        else if(banchoState[message.guild.id].banchoSoul < 15){
            role.edit({ color: 'BLUE' })
                .then(updated => console.log(`Edited role color from ${role.color} to ${updated.color}`))
                .catch(console.error);
            return message.channel.send("small mood");
        }
        else if(banchoState[message.guild.id].banchoSoul < 20){
            role.edit({ color: 'GREEN' })
                .then(updated => console.log(`Edited role color from ${role.color} to ${updated.color}`))
                .catch(console.error);
            return message.channel.send("doin alright");
        }
        else if(banchoState[message.guild.id].banchoSoul < 25){
            role.edit({ color: 'YELLOW' })
                .then(updated => console.log(`Edited role color from ${role.color} to ${updated.color}`))
                .catch(console.error);
            return message.channel.send("fired up");
        }
        else{
            role.edit({ color: 'RED' })
                .then(updated => console.log(`Edited role color from ${role.color} to ${updated.color}`))
                .catch(console.error);
            return message.channel.send("maximum pomp");
        }
    }
}