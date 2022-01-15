const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "lock",
    description: "Locks a given channel for a particular role!",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("No Kamu Mana Bisa!")
        const channel = message.mentions.channels.first()
        if(!channel) return message.reply("Please mention channel!")
        const roletofind = args.slice(1).join(" ")
        const role = message.guild.roles.cache.find(r => r.id === roletofind)
        if(!role) return message.reply("Please give valid role id!")
        let embed = new MessageEmbed()
        .setTitle("**Kayes Berhasil Locks Channel!**") 
        .setDescription(`This channel has been locked by ${message.author.tag}`)
        .setTimestamp()
        channel.updateOverwrite(role, {
            SEND_MESSAGES: false
        })
        await channel.send(embed)
    }
}