const Discord = module.require("discord.js");

module.exports = {
  name: "kapan",
  description: "kasih pertanyaan",
  run: async (client, message, args) => {
    if (args.length == 0)
      return message.channel
        .send(`<:667737932035129344:891461376277618739> *Usage: lisa kapan <msg>*<:667737932035129344:891461376277618739>`)
        .then((msg) =>setTimeout(() => msg.delete(), 2300));

    var fortunes = [
      "Mungkin Besok",
      "Seminggu Lagi",
      "Tahun Depan",
      "Bulan Depan",
      "Hmm Kapan Yahh kepo deh",
    ];
    await message.channel.send(
      fortunes[Math.floor(Math.random() * fortunes.length)]
    );
  },
};
