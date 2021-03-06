const Discord = require("discord.js");
const soulChange = require("../components/soulChange.js")

module.exports.run = async (bot, message, args, banchoState) => {
    
    var voiceChannel = message.member.voiceChannel;

    if (!voiceChannel) {
        console.log("sending FridayNight to channel");
        soulChange.run(bot, message, "increase");
        return message.channel.send("https://www.youtube.com/watch?v=3UnK5rw_6hM");        
    }

    voiceChannel.join().then(connection => {
        console.log("JOINED " + voiceChannel.name);
        const dispatcher = connection.playFile('./music/FridayNight.mp3', { volume: 0.1 });
        console.log("Playing FridayNight in voice channel");
        dispatcher.on("end", end => {
            voiceChannel.leave();
        });
    }).catch(err => console.log(err));

    soulChange.run(bot, "increase", banchoState);
}

module.exports.help = {
    name: "fridaynight",
    description: "play Friday Night in voice or post the youtube video if the command user is not in voice."
}