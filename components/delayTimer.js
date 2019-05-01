//will be ran to periodically change the soul level of all bot instances
const Discord = require("discord.js");

module.exports.run = async (bot, message, banchoState) => {
    if(banchoState[message.guild.id].banchoSoul < 22 ) {
        banchoState[message.guild.id].banchoSoul += 1;
    }
    else {
        banchoState[message.guild.id].banchoSoul -=1;
    }
}