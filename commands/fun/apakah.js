const Discord = module.require("discord.js");

module.exports = {
  name: "apakah",
  description: "Kasih Pertanyaan",
  run: async (client, message, args) => {
    if (args.length == 0)
      return message.channel
        .send(`<:667737932035129344:891461376277618739> *Usage: lisa wpakah <msg>* <:667737932035129344:891461376277618739>`)
        .then((msg) =>setTimeout(() => msg.delete(), 2300));
    
    var fortunes = [
      "Iyasih",
      "Mungking",
      "Gatau Ihhh..",
      "Fih Nga gituu",
      "Hmm..",
    ];
    await message.channel.send(
      fortunes[Math.floor(Math.random() * fortunes.length)]
    );
  },
};
