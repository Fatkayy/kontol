module.exports = {
  name: "clear",
  aliases: ["clear"],
  usage: "*clear*",
  description: "deletes amount of messages specified",
  run: async (client, message, args) => {
    if(!args[0]) return message.reply("Silakan masukkan jumlah pesan yang ingin Anda hapus.");
    if(isNaN(args[0])) return message.reply("masukkan number asli");

    if(args[0]> 100) return message.reply("Harap masukkan angka yang kurang dari 100.");
    if(args[0]< 1) return message.reply("Harap masukkan lebih besar dari 0.");

    await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
      message.channel.bulkDelete(messages);
      return message.reply(`kayes Berhasil Menghapus sebanyak ${args[0]} pesan!! `)
    });
  }
}