const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

//components
//const createBanchoRole = require(`./components/createBanchoRole.js`);
const delayTimer = require(`./components/delayTimer.js`);

let banchoState = require("./banchosoul.json");

fs.readdir("./commands/", (err, files) => {
    //if folder doesnt exist
    if(err) console.log(err);

    //load commands and create an array of filenames
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Couldn't find commands.");
        return;
    }
    //for every command add a require() for the command file
    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        //add the name of the command to the bot
        bot.commands.set(props.help.name, props);
    });
});
//the bot wont respond to input until the ready event is emitted
bot.on("ready", async () =>{
    console.log(`${bot.user.username} is online`);
    bot.user.setPresence({
        game: {
            name: 'Smoke 🅱️reak',
            type: 'smoking'
        },
        status: "idle"
    })  

    //set timer to decrease bancho soul
    setInterval(() => {
        delayTimer.run();
    }, 1800000); // Runs this every 30 minutes.
});

//read and react to message input
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    console.log("the guild id is" + message.guild.id);

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    //check for the command and run the proper command file
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) {
        commandfile.run(bot, message, args, banchoState)
        //call the soulchange function
        //bot.commands.soulchange.run(bot, message, args)
    };
});

//on guild(server) join
bot.on("guildCreate", guild => {
    console.log("Joined a new guild: " + guild.name);
    //create a state entry for the server using the guild.id as an identifier if none exists
    if(!(banchoState.hasOwnProperty(guild.id))){
        banchoState[guild.id] = {
            "banchoSoul": 10
        };
        fs.writeFile("./banchosoul.json", JSON.stringify(banchoState, null, 1), (err) => {
            if (err){
                console.error(err);
                return;
            };
            console.log("banchosoul.json has been updated(guildCreate)")
        })
    }   
    else{
        console.log("guild exists");
    }
    //createBanchoRole.run(bot, guild);
});

bot.login(tokenfile.token);