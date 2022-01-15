const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
 
module.exports = {
  name: "saran",
  category:"ADMINISTRATOR",

  
  
  run: async (client, message, args) => {
   
  let channel = await db.fetch(`suggestion_${message.guild.id}`);
    if (channel === null) return;
  
  const suggestionQuery = args.join(" ");
  if(!suggestionQuery) return message.reply("Masukan Text/Saran.");
    
  const embed = new MessageEmbed()
         
       .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
       .setDescription(`${suggestionQuery}`)
       .setTitle(`*SARAN*`) 
       .setColor("BLACK")
       .setFooter("Status: Pending")
       .setTimestamp();
       
    const done = new MessageEmbed()
       .setDescription(`*SARAN* \nTerimakasih Sudah Memberi Saran Anda Disampaikan di sini <#${channel}>\n\nNote: Anda setuju untuk mendapatkan DM pada balasan atas Saran Anda!`)
       .setColor("RANDOM")
       
    message.channel.send(done)
    
    let msgEmbed = await message.guild.channels.cache.get(channel).send(embed)
    
    await msgEmbed.react('<a:77ba453a8bc94763bc49e6a663fd509d:892035791449100348>')
    await msgEmbed.react('<a:865963806483808256:896694904019894282>')
  }
}