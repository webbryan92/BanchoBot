const Discord = require("discord.js");

module.exports.run = async (bot, message, args, banchoState) => {
    const banchoRole = message.channel.server.roles.get('name', 'BanchoQuest')
    if(!args[2]) return message.reply("type help for commands")
    if(args[2] === "setlead" 
        && (banchoState[message.guild.id].leader === "")){
        const leader = message.mentions.users.first();
        banchoState[message.guild.id].leader = leader;
        fs.writeFile("./banchosoul.json", JSON.stringify(banchoState, null, 1), (err) => {
            if (err){
                console.error(err);
                return;
            };
            console.log("banchosoul.json has been updated(banchoquest setlead)")
        });
    } else {
        return message.reply("There is already a leader, type help for help removing a user")
    }
    //test user and mention object comparison
    if(args[2] === "removelead" 
        && (isLeader(message)
            || message.member.hasPermission("ADMINISTRATOR"))){
        banchoState[message.guild.id].leader = "";
    } else {
        return message.reply("Only leader or server admin can reset leader")
    }
    if(args[2] === "newQuest"){
        //TODO, require an image, create a new album for the images
    }
    if(args[2] === "requestNextPrompt"){
        message.channel.send(banchoRole.mention() + "Accepting replies for next prompt"); 
        banchoState[message.guild.id].banchoQuest.readyPrompt = true; 
        //TODO initiate a automatic timeout component      
    }
    if(args[2] === "addPrompt"){
        if(banchoState[message.guild.id].banchoQuest.readyPrompt === true){
            //don't let people spam fill the prompts object
            if(banchoState[message.guild.id].banchoQuest.prompts.length > 10){ 
                let prompt = message.content.substring(10);
                banchoState[message.guild.id].banchoQuest.prompts.push(prompt);
            }
            else{
                return message.channel.send("too many prompts");
            }
        }
        else{
            return message.channel.send("not accepting prompts at this time");
        }
    }
}

function isLeader(message){
    if(banchoState[message.guild.id].leader === message.author.username){
        return true;
    } else {
        return false;
    }
}

module.exports.help = {
    name: "banchoquest",
    description: "Manages banchoquest"
}