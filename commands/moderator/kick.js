const math = require('discord-math');
module.exports = {
  name: "kick",
  aliases: ["ckl"],
  usage: "kick",
  description: "kicks member",
  run: async (client, message, args) => {
    const {member, mentions} = message
    const tag = `<@${member.id}` 
    const target = message.mentions.users.first();

      if (
        member.hasPermission('KICK_MEMBERS') ||
        member.hasPermission('ADMINISTRATOR')
      ) {
        if (target){
          const memberTarget = message.guild.members.cache.get(target.id);
          memberTarget.kick();
          message.channel.send(`${tag}> , <@${memberTarget.user.id}> kayes Berhasil Kick Member!! `);

      }else {
        message.channel.send(`⚠️Siapa yang mau di kick ${tag}>??`);
      }
    }else {
      message.channel.send(`${tag}> Kamu mana bisa ih!! `);
    }
  },
};