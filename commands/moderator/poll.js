const { MessageEmbed } = require('discord.js');

module.exports = {
    
        name: "poll",
        description: "polling",
        category: "info",
        usage: "[question]",
        
       
   
    run: async (bot, message, args) => {
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send("**No Kamu Mana Bisa Ih!!**");

        if (!args[0])
            return message.channel.send("**Kasih Text Bang!**");

        const embed = new MessageEmbed()
            .setColor("BLACK")
            .setImage("")
            .setTitle(`👑 *Pemilihan* 👑`)
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setDescription(args.join(' '))
        var msg = await message.channel.send(embed);

        await msg.react(`✅`);
        await msg.react(`❌`);

        message.delete({ timeout: 1000 });
    }
}
