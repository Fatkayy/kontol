module.exports = {
  name: "pg",
  description: "Shows ping of the bot",
  category: "Owner",
  botPermission: [],
  authorPermission: [],
  
  run: async (client, message, args) => {
    message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }
}

const discord = require('discord.js')

module.exports = {
    name: "wibu",
    aliases: ["latency"],
    description: "Returns teh bot's ping!",
    usage: "!ping",
    ownerOnly: true,
    run: async(client, message) => {
        const embed = new discord.MessageEmbed()
        .setTitle("kayes Ping!")
        .setDescription(`**API latency is:**\n [${client.ws.ping}ms]\n\n **Message Latency is:**\n [${Date.now() - message.createdTimestamp}ms.]`)
      .setColor("RANDOM")
      .setTimestamp()
        message.channel.send(embed)
    }
}