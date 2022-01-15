
const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "bed",
  aliases: [ "" ],
  category: "Image",
  description: "Shows image in beds",
  usage: "bed <user>",
  run: async (client, message, args) => {
    
   const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!Member) return message.channel.send("Tag Atau Kasih Id Member!")

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle("Bed Is Fucking")
    .setImage(encodeURI
    (`https://api.devs-hub.xyz/bed?user1=${message.author.avatarURL({ format: "png" })}&user2=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};