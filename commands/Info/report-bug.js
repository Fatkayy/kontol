const Discord = require("discord.js");

module.exports = {
  name: "report",
category: "info",
run : async(client, message, args) => { 
// again make this fit your command handler style 😀
  if (!args[0]) return message.reply("😁Harap tentukan bugnya. Contoh:\n`/cmd hack Bot tidak mau me respon`");   
  if (args[0] === "bug") return message.reply("Harap tentukan bugnya. Example:\n`/kayes report-bug cmd hack Bot tidak mau me respon`");   
  args = args.join(" ");   
  message.reply("👍Terimakasih Telah melaporkan Bug atau eror, Bug atau eror Akan Segera Di Konfirmasi!")
 
              
  const content = `
Nama Report : ${message.author.username}#${message.author.discriminator}
Id Pereport : (${message.author.id})
reported : ${args}
On the server: ${message.guild.name}
Server ID : ${message.guild.id}`;


      

          client.channels.cache.get('911578270791774228').send(content)
  }
}
