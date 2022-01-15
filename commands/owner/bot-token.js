const axios = require("axios").default;
const Discord = require("discord.js");

module.exports = {
 name: "bot-token",
 aliases: ["discord-token", "discord-bot-token"],
 description: "Generate (fake) random Discord Bot token",
 category: "Fun",
 usage: "bot-token",
 run: async (client, message, args) => {
  try {
   const options = {
    method: "GET",
    url: "https://some-random-api.ml/bottoken",
   };
   axios.request(options).then((response) => {
    const embed = new Discord.MessageEmbed()
     .setColor("RANDOM")
     .setFooter(
      "Requested by " + `${message.author.username}`,
      message.author.displayAvatarURL({
       dynamic: true,
       format: "png",
       size: 2048,
      })
     )
     .setTitle("<a:8_:929407339738587227> Discord Bot Token")
     .setDescription("```" + response.data.token + "```\n||Note: Dih Mau Ambil Token Gue Emang Gue Bodoh Kontol Kontol! <a:1_:930041204815589397> ||");
    message.channel.send(embed);
   });
  } catch (err) {
   message.channel.send({
    embed: {
     color: 16734039,
     description: "Something went wrong...",
    },
   });
  }
 },
};