const discord = require("discord.js");

module.exports = {
  name: "setreact-roles",
  aliases: ["reaction", "rr"],
  category: "⛔️ moderation",
  description: "react to a message",

  run: async (client, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No kamu mana bisa ih!")

    if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Please add a `MANAGE_MESSAGES` permission!")

    // gets the role for the reaction
    let reactRole = message.mentions.roles.first()

    // if no role provided it will send this
    if (!reactRole) return message.channel.send(`*Masukan Role Untuk Mengaktifkan Reaction roles*`)

    // create an embed
    const embed = new discord.MessageEmbed()
      .setColor("RANDOM") // the color of the embed 
      .setTitle("**__Reaction Roles__**")
      .setImage("https://media.discordapp.net/attachments/924322950067392533/924594125129519104/smiling-cat-creepy-cat.gif")
      .setDescription(`Click ✅ Untuk Mendapatkan Role ${reactRole}`)
      .setFooter("Kayes Bot") // desc of the embed
      .setTimestamp();

    // send the embed.
    let msg = await message.channel.send(embed)

    // reacts to the embed with an emoji
    await msg.react('✅')

    const reactionFilter = (reaction, user) => ["✅"].includes(reaction.emoji.name)

    const reactionCollector = msg.createReactionCollector(reactionFilter, { dispose: true })

    reactionCollector.on("remove", (reaction, user) => {

      if (user.bot) return;
 
      let member = reaction.message.guild.members.cache.find(member => member.id === user.id)

      reaction.member.roles.remove(reactRole.id)
    })

    reactionCollector.on("collect", (reaction, user) => {

      if (user.bot) return;

      let member = reaction.message.guild.members.cache.find(member => member.id === user.id)

      // adds the role to the member!
      member.roles.add(reactRole.id)
    })
  }
}  
