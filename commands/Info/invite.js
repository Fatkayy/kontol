const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");
const { prefix, developerID, support, bot } = require("../../config.json")

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "Information",

  run: async (client, message, args) => {
    let helpEmbed = new MessageEmbed()
    .setTitle(`Invite ${bot}`)
      .setDescription(`*Pilih opsi di bawah ini untuk mengalihkan*`)
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(`Requested by: ${message.author.tag}`)
      .setColor("RED")
      .setImage("https://media.discordapp.net/attachments/908541932815405107/913696549484249098/a3691163-1a66-49cc-9149-701cc847351b.gif")


      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setEmoji('😘')
      .setLabel('Invite') 
      .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`);
      let button2 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('✉️Support Server') 
      .setURL(`${support}`);


      return message.channel.send(helpEmbed,{
        button: [button1,button2],
      });

  },
};