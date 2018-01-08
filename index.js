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
            if (message.content === (prefix + 'chien')) {
               message.channel.sendFile("https://i.ytimg.com/vi/wSTt04rOwa8/maxresdefault.jpg")
                        console.log("Chien demandée !")
            }
          });
          
          client.on('message', message => {
            if (message.content === (prefix + 'chat')) {
               message.channel.sendFile("https://fr.animalblog.co/wp-content/uploads/2013/02/chat-content.jpg")
                        console.log("Chat demandée !")
            }
          });
      
          client.on('message', message => {
            if (message.content === (prefix + 'thug')) {
              message.reply('Thug life ! :open_mouth:')
               message.channel.sendFile("https://i.ytimg.com/vi/gw5oB7VqUpI/maxresdefault.jpg")
                        console.log("Thug demandée !")
            }
          });
      
          client.on('message', message => {
            if (message.content === (prefix + 'dab')) {
              message.reply('BITCH DAB !')
               message.channel.sendFile("https://i.ytimg.com/vi/GRpJk1uERKA/maxresdefault.jpg")
                        console.log("DAB demandée !")
            }
          });
      
          client.on('message', message => {
            if (message.content === (prefix + 'sucide')) {
              message.reply('Enrevoir ')
              message.channel.sendFile("http://lawofficer.com/wp-content/uploads/2017/01/suicide.jpg")
              console.log("Quelqu'un c'est sucider !")
            }
          });
      
          client.on('message', message => {
            if (message.content.startsWith(prefix + 'kill')) {
            let member = message.mentions.members.first();
                message.channel.sendMessage('Aurevoir ' + member)
                message.channel.sendFile("https://image.noelshack.com/fichiers-sm/2017/47/7/1511719852-234776-theratter-i-only-shoot-to-kill.jpg")
                console.log("Quelqu'un à fait un kill !")
              }
            });
      
           client.on('message', message => {
              if (message.content.startsWith(prefix + 'calin')) {
              let member = message.mentions.members.first();
                  message.channel.sendMessage('CALINNN ' + member )
                  message.channel.sendFile("https://media.giphy.com/media/16bJmyPvRbCDu/giphy.gif")
                  console.log("Quelqu'un à fait un calin !!")
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
client.login('process.env.TOKEN')
