
const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "magik",
  aliases: ["magic", ""],
  category: "Image",
  description: "Shows magic image",
  usage: "magik <user> <number>",
  run: async (client, message, args) => {
    const Value = args.slice(1).join(" ");

    if (!Value || Value.length > 150) return message.channel.send(`<:667737932035129344:891461376277618739> sage : lisa magik @tag <number random> = lisa magik @xalbador 22 <:667737932035129344:891461376277618739>`); 
    
   const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle("Fuck Idiot")
    .setImage(encodeURI
    (`https://api.devs-hub.xyz/magik?image=${Member.user.displayAvatarURL({ format: "png" })}?size=2048&level=${Value}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};