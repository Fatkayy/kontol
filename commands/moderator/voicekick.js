module.exports = {
  name: "voicekick",
  category: "moderation",
  aliases: ['vk','vck'],
  run: async (client, message, args) => {
    if (!message.guild.me.hasPermission(["ADMINISTRATOR"]))
      return message.channel.send(
        "No Kamu mana bisa ih!"
      );

    if (!message.mentions.members.first())
      return message.channel.send(
        `Harap Sebutkan Pengguna yang Ingin Anda Tendang Dari Saluran Suara!`);

    let { channel } = message.mentions.members.first().voice;

    if (!channel)
      return message.channel.send(`Pengguna Tidak Ada di Saluran Suara Any!`);

    message.mentions.members.first().voice.kick();
    
    message.channel.send(`Pengguna Telah Ditendang Dari Saluran Suara!`)
  }
};