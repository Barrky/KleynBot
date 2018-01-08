const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.env.TOKEN;
const express = require("express");
var app = express();
var prefix = "/";
var guild = client.guilds.get("379316320384319488")
var add = client.channels.get("379320704216334336")

client.on("ready", () => {

	var memberCount = client.users.size;
	var serverCount = client.guilds.size;
		client.user.setGame("KleynBot | /aide");
		client.user.setStatus("online");
	console.log("--------------------------------------");
	console.log("Utilisateurs: " + memberCount + "\nServeurs: " + serverCount);
});

   client.on('guildMemberRemove', member => {
    const guild1 = member.guild.id;
    var guild = client.guilds.get("379316320384319488")
    var add = client.channels.get("379320704216334336")
    if(guild1 == guild.id) {
      add.send(`Enrevoir ${member}, à quitter le serveur **"${guild.name}"** !`);
    } else {
        return 
    }
    });

    client.on('guildMemberAdd', member => {
        const guild1 = member.guild.id;
        var guild = client.guilds.get("379316320384319488")
        var add = client.channels.get("379320704216334336")
        if(guild1 == guild.id) {
          add.sendMessage(`Salut ${member}, bienvenue sur le serveur **${guild.name}** !`);
        } else {
            return 
        }
        });

      client.on('message', message => {
        if (message.content.startsWith('!say')) {
        var string = (message.content)
        var result = string.replace(/^!say\s/i, " ");
        message.channel.sendMessage(result)
        console.log("Say you !")
          }
        });

client.on('message', message => {

const warn = require("./commands/moderation/warn.js");
const addrole = require("./commands/moderation/addrole.js");
const rmrole = require("./commands/moderation/rmrole.js");
const ban = require("./commands/moderation/ban.js");
const kick = require("./commands/moderation/kick.js");
const mute = require("./commands/moderation/mute.js");
const purge = require("./commands/moderation/purge.js");
const unmute = require("./commands/moderation/unmute.js");
const embed = require("./commands/moderation/embed.js");
const eval = require("./commands/Owner/eval.js");
const logout = require("./commands/Owner/logout.js");
const aide = require("./commands/Sarah/aide.js");
const invite = require("./commands/Sarah/invite.js");

client.on('message', message => {
  if (message.content === 'Bvn') {
    message.channel.send('Bienvenue sur le serveur ! Sois actif :wink: !')
  }
})


warn(message, prefix, client)
addrole(message, prefix, client)
rmrole(message, prefix, client)
ban(message, prefix, client)
kick(message, prefix, client)
mute(message, prefix, client)
purge(message, prefix, client)
unmute(message, prefix, client)
embed(message, Discord, prefix, client)
eval(message, prefix, client)
logout(message, prefix, client)
aide(message, prefix, client)
invite(message, prefix, client)

  });

app.listen(5000);
client.login('MzgzNzM4NTg3OTIzMDg3MzYy.DTVl9w.JlSgM_FNShWTCeZX3-cm1mqAyvU')
