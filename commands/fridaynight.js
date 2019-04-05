const Discord = require("discord.js");
const soulChange = require("../components/soulChange.js")

module.exports.run = async (bot, message, args) => {
    
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

    soulChange.run(bot, message, "increase");
    console.log("past soul change")    
}

module.exports.help = {
    name: "fridaynight"
}