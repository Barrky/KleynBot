const Discord = require ('discord.js');
const bot = new Discord.Client();
const prefix = "/";

bot.login("Mzk4OTE4MjM3MzU1NjM4Nzg0.DTFhFA.vYs9vEFkcEBzbHK3sVWkLIGvqVM");


bot.on('ready', () => {
    bot.user.setPresence({ game: { name: "Kleyn Bot", type: 0 } });
    console.log("Bot Ready !");
});

bot.on('guildMemberRemove', member => {
    const guild1 = member.guild.id;
    var guild = bot.guilds.get("398894341965348874")
    var add = bot.channels.get("398900625720737792")
    if(guild1 == guild.id) {
      add.send(`Enrevoir ${member}, à quitter le serveur **"${guild.name}"** !`);
    } else {
        return 
    }
    });

    bot.on('guildMemberAdd', member => {
        const guild1 = member.guild.id;
        var guild = bot.guilds.get("398894341965348874")
        var add = bot.channels.get("398900625720737792")
        if(guild1 == guild.id) {
          add.sendMessage(`Salut ${member}, bienvenue sur le serveur **${guild.name}** !`);
        } else {
            return 
        }
        });

    bot.on('message', message => {
        if (message.content.startsWith('!say')) {
        var string = (message.content)
        var result = string.replace(/^!say\s/i, " ");
        message.channel.sendMessage(result)
        console.log("Say you !")
          }
        });