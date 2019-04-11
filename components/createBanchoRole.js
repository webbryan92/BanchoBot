/*const Discord = require("discord.js");

module.exports.run = async (bot, guild) => {
    let role = guild.roles.find(r => r.name === "Bancho");
    if(!role) {
        try {
            console.log("Creating role Bancho")
            role = await guild.createRole({
                name: 'Bancho',
                color: 'GREEN',
            })
                .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
                .catch(console.error)
        } catch(err) {
            console.log(err);
        }
    }    

    console.log(role.name)
    //find the bot member
    let member = guild.member(bot.user);
    if (!member) {
        console.log("member not found")
    }
    if (member.roles.has(role.id));
    await (member.addRole(role.id));
}*/