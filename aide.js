function aide(message,prefix,client){
if (message.content.startsWith(prefix + "aide")) {
message.channel.send("***Voici mes commandes !***\n\n**Préfix : /**\n`warn | unmute | rmrole | mute | kick | embed | ban | addrole`\n\n *Je souhaite aussi la bienvenue !*\n **Le bot est toujours en développement !**");
    }
}
    module.exports = aide
