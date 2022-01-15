module.exports = {
  name: "nuke",
};

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("you don't have the permission for that.");
  if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("No kamu Mana Bisa ih");

  if (!message.channel.parentID) {
    message.channel.clone({ position: message.channel.rawPosition }).then((ch) => {
      ch.send("https://media.discordapp.net/attachments/913493583636611145/913494336417714277/69a230cb72769cced059729f24c32e54.gif").then((msg) => msg.delete({ timeout: 20000 }));
    });
  } else {
    message.channel.clone({ parent: message.channel.parentID, position: message.channel.rawPosition }).then((ch) => {
      ch.send("https://media.discordapp.net/attachments/913493583636611145/913494336417714277/69a230cb72769cced059729f24c32e54.gif").then((msg) => msg.delete({ timeout: 20000 }));
    });
  }
  message.channel.delete();
};