const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "setnick",
  aliases: ["nick","nickname"],
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
    

  
  run: async (client, message, args) => {
    const member = message.mentions.members.first();

    if (!member) return message.reply("Please tag member!");

    const arguments = args.slice(1).join(" ");

    if (!arguments) return message.reply("Please Masukan nickname!");

    try {
      member.setNickname(arguments);
      message.channel.send(`kayes selesai Setnick ${args[0]}'s nickname to ${args[1]}.`)
    } catch (err) {
      console.log(err);
      message.reply("Saya tidak memiliki permission untuk mengatur " + member.toString() + " nickname!");
    
    }
  },
};