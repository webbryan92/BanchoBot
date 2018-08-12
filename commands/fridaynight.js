const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    var voiceChannel = message.member.voiceChannel;

    if (!voiceChannel) {
        return message.channel.send("https://www.youtube.com/watch?v=3UnK5rw_6hM");
    }

    voiceChannel.join().then(connection => {
        console.log("JOINED " + voiceChannel.name);
        const dispatcher = connection.playFile('./music/FridayNight.mp3', { volume: 0.1 });
        dispatcher.on("end", end => {
            voiceChannel.leave();
        });
    }).catch(err => console.log(err));
}

module.exports.help = {
    name: "fridaynight"
}