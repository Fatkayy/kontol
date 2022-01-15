const { MessageEmbed } = require('discord.js');

module.exports = {
    
        name: "vote",
        description: "polling",
        category: "info",
        usage: "[question]",
        
       
   
    run: async (bot, message, args) => {
        
        if (!args[0])
            return message.channel.send("**Kasih Text Bang!**");

        const embed = new MessageEmbed()
            .setColor("BLACK")
            
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setDescription(args.join(' '))
        var msg = await message.channel.send(embed);

        await msg.react(`<a:77ba453a8bc94763bc49e6a663fd509d:892035791449100348>`);
        await msg.react(`<a:865963806483808256:896694904019894282>`);

        message.delete({ timeout: 1000 });
    }
}
