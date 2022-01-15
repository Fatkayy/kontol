const request = require('node-superfetch');
const Color = "RANDOM";
const Discord = require("discord.js");
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton, MassageMenuOption } = require("discord-buttons");
const { prefix, developerID, bot, support } = require("../../config.json")



module.exports = {
  name: "help",
  description: "Info",
  description: "moderator",
  description: "fun",
  description: "image",
  description: "search",

  run: async (client, message, args) => {


    const embed = new Discord.MessageEmbed()
    .setTitle(`<a:emoji_83:931716788666921031> *Hello I* ${bot} *Help Menu My Prefix Is* \`K!\``)
      
    .setImage("https://media.discordapp.net/attachments/908541932815405107/913696549484249098/a3691163-1a66-49cc-9149-701cc847351b.gif")
    
    .setDescription(`<a:8_:929407339738587227>**Commands:** *K!help / K!help2*
**Jika Command Tidak Bekerja Harap** \`K!report\`

___BOT OWNER___: <@873128689330712577>

**All Command:**<:emoji_62:929047826065948774>
 <a:emoji_79:929269554230738955>**FUN**
 <:emoji_79:931713203648491530>**IMAGE**
 <a:72:929048093528297593>**SEARCHING**
 <:emoji_60:929047805136371763>**MODERATOR**
 <a:emoji_80:931714092996128769>**INFORMASI**
 <a:emoji_86:931722849926922270>**SETTINGS**
 <a:emoji_82:931715292667727882>**MUSIC**`)

    .setThumbnail(client.user.displayAvatarURL())
    .setColor("BLACK")
    .setFooter(`Requested by: ${message.author.tag}`)


    const music = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage("https://media.discordapp.net/attachments/908541932815405107/913696549484249098/a3691163-1a66-49cc-9149-701cc847351b.gif")
    .setTitle(`<a:emoji_82:931715292667727882> ᗒ MUSIC`)
    .setDescription(`
> ✧ \`join\`
> ✧ \`leave\`
> ✧ \`loop\`
> ✧ \`nowplaying\`
> ✧ \`pause\`
> ✧ \`play\`
> ✧ \`queue\`
> ✧ \`remove\`
> ✧ \`resume\`
> ✧ \`search\`
> ✧ \`skip\`
> ✧ \`skipall\`
> ✧ \`stop\`
> ✧ \`volume\``)
    .setThumbnail(client.user.displayAvatarURL())
    
    .setFooter(`Requested by: ${message.author.tag}`)


    const moderator = new Discord.MessageEmbed()
    .setColor("YELLOW")
    .setImage("https://media.discordapp.net/attachments/908541932815405107/913696549484249098/a3691163-1a66-49cc-9149-701cc847351b.gif")
    .setTitle(`<:emoji_60:929047805136371763> ᗒ MODERATOR`)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`*Commands:*
> ✧ \`ban\`
> ✧ \`kick\`
> ✧ \`unban\`
> ✧ \`nuke\`

> ✧ \`voicekick\`
> ✧ \`warn\`
> ✧ \`setsaran\`
> ✧ \`addrole\`
> ✧ \`remrole\`
> ✧ \`mute\`
> ✧ \`unmute\`
> ✧ \`lock\`
> ✧ \`setnick\`
> ✧ \`say\``)
    .setFooter(`Requested by: ${message.author.tag}`)

    const info = new Discord.MessageEmbed()
    .setColor("RED")
    .setImage("https://media.discordapp.net/attachments/908541932815405107/913696549484249098/a3691163-1a66-49cc-9149-701cc847351b.gif")
    .setTitle(`<a:emoji_80:931714092996128769>  ᗒ INFORMASI`)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`*Commands:*
> ✧ \`help\`
> ✧ \`invite\`
> ✧ \`phone\`
> ✧ \`urlcek\`
> ✧ \`timer \`
> ✧ \`hastebin\`
> ✧ \`report-bug\`
> ✧ \`botinfo\`
> ✧ \`saran\`
> ✧ \`ping\`
> ✧ \`serverinfo\`
> ✧ \`whois\``)
    .setFooter(`Requested by: ${message.author.tag}`)

    const settings = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setImage("https://media.discordapp.net/attachments/908541932815405107/913696549484249098/a3691163-1a66-49cc-9149-701cc847351b.gif")
    .setTitle(` <a:emoji_86:931722849926922270> ᗒ SETTINGS`)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`*Commands:*
> ✧ \`replysaran\`
> ✧ \`setautorole\`
> ✧ \`setsaran\``)
    .setFooter(`Requested by: ${message.author.tag}`)


    const home = new Discord.MessageEmbed()
    .setTitle(`<a:emoji_83:931716788666921031>*Hello I* ${bot} *Help Menu My Prefix Is* \`K!\` `)
    .setImage("https://media.discordapp.net/attachments/908541932815405107/913696549484249098/a3691163-1a66-49cc-9149-701cc847351b.gif")
    
    .setDescription(`<a:8_:929407339738587227>**Commands:** <:emoji_62:929047826065948774> *K!help / K!help2*
*Jika Command Tidak Bekerja Harap* \`K!report\`

MY OWNER: <@873128689330712577>

**All Command:** 
 <:emoji_62:929047826065948774>
<a:emoji_79:929269554230738955>**FUN**
 <:emoji_79:931713203648491530>**IMAGE**
 <a:72:929048093528297593>**SEARCHING**
 <:emoji_60:929047805136371763>**MODERATOR**
 <a:emoji_80:931714092996128769>**INFORMASI**
 <a:emoji_86:931722849926922270>**SETTINGS**
 <a:emoji_82:931715292667727882>**MUSIC**`)
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("BLACK")
    .setFooter(`Requested by: ${message.author.tag}`)



    let button1 = new MessageButton()
    .setLabel(`Music`)
    .setEmoji(`891240754993844244`)  
    .setID(`music`)
    .setStyle("gray");

    let button2 = new MessageButton()
    .setLabel(`Home`)    
    .setEmoji('931721139900780625')
    .setID(`home`)
    .setStyle("green");
    

    let button3 = new MessageButton()
    .setLabel(`Informasi`)
    .setEmoji(`891453230561779772`)
    .setID(`info`)
    .setStyle("blurple");

    let button4 = new MessageButton()
    .setLabel(`Moderator`)
    .setEmoji(`929269573226725447`)
    .setID(`moderator`)
    .setStyle("red");

    let button5 = new MessageButton()
    .setLabel(`Settings`)
    .setEmoji(`931722849926922270`)
    .setID(`settings`)
    .setStyle("red");
    
if(!message.member.hasPermission("ADMINISTRATOR")) button4.setDisabled(true);
    if(!message.member.hasPermission("ADMINISTRATOR")) button5.setDisabled(true);
    
    
    let row = new MessageActionRow()
    .addComponents(button1, button2, button3, button4, button5);


    const MESSAGE = await message.channel.send(embed, row);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 300000 });

    collector.on('collect', async (b) => {
         
        if(b.id == "settings") {

            MESSAGE.edit(settings, row);
            await b.reply.defer()

        } 
        

        if(b.id == "home") {

            MESSAGE.edit(home, row);
            await b.reply.defer()

        }

      
        if(b.id == "moderator") {

            MESSAGE.edit(moderator, row);
            await b.reply.defer()

        }
        if(b.id == "music") {

            MESSAGE.edit(music, row);
            await b.reply.defer()
            
        }

         if(b.id == "info") {

            MESSAGE.edit(info, row);
            await b.reply.defer()
            
        }


    });


   
}};