const Discord = require("discord.js");
const ownerid = ["873128689330712577"];
const ownerid2 = ["873128689330712577"];



module.exports = {
  
        name:"set-leaveserver",
        aliases: ["lvs"],
        category: "owner",
        accessableby: ""
    ,
 
  run: async (client, message, args) => {
    if (message.author.id == ownerid || ownerid2) {
      if (!message.guild.me.hasPermission("ADMINISTRATOR"))
        return message.channel
          .send("No kamu mana bisa ih")
          .then(msg => msg.delete({ timeout: 5000 }));
		
		    const guildId = args[0];
 
    if (!guildId) {
      return message.channel.send("Please Discord Server  id");
    }
 
    const guild = client.guilds.cache.find((g) => g.id === guildId);
 
    if (!guild) {
      return message.channel.send("Server Tidak ada bot felisa");
    }
 
    try {
      await guild.leave();
      message.channel.send(`Successfully left server: **${guild.name}**`);
    } catch (e) {
      console.error(e);
      return message.channel.send("Terjadi kesalahan saat meninggalkan server");
    }
    }
  }
};