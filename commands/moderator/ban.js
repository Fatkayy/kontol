const math = require('discord-math');
module.exports = {
  name: "ban",
  aliases: ["b"],
  usage: "ban",
  description: "bans member",
  run: async (client, message, args) => {
    const {member, mentions} = message
    const tag = `<@${member.id}` 
    const target = message.mentions.users.first();

      if (
        member.hasPermission('BAN_MEMBERS') ||
        member.hasPermission('ADMINISTRATOR')
      ) {
        if (target){
          const memberTarget = message.guild.members.cache.get(target.id);
          memberTarget.ban();
          message.channel.send(`<:ItemModBanHammer:891215369358934056> <${tag}><@${memberTarget.user.id}> kayes Berhasil Banned Member!`);

      }else {
        message.channel.send(`⚠️Siapa yang mau di ban ${tag}> ??`);
      }
    }else {
      message.channel.send(` ${tag}> Kamu mana bisa Kintil!!`);
    }
  },
};