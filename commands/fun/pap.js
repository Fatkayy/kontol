const Discord = module.require("discord.js");

module.exports = {
  name: "pap",
  description: "Kasih Pertanyaan",
  run: async (client, message, args) => {
    if (args.length == 0)
      return message.channel
        .send(`<:667737932035129344:891461376277618739> *Usage: kayes pap (text random)* <:667737932035129344:891461376277618739>`)
        .then((msg) =>setTimeout(() => msg.delete(), 2300));
    
    var fortunes = [
     "https://media.discordapp.net/attachments/924704190519988324/926682025820295168/5-tipe-cowok-idaman-onic-kayes-aka-kharisma-cahaya-putri-20210925034204.jpg",
     "Bacot Kontol",
"https://media.discordapp.net/attachments/924704190519988324/926682026004848660/download_1.jpg",
"beliin aku sutra dulu",
"https://media.discordapp.net/attachments/924704190519988324/926682026210377778/download_2.jpg",
"https://media.discordapp.net/attachments/924704190519988324/926682026373972018/download_3.jpg",
"Besok Aja Lagi",
"https://media.discordapp.net/attachments/924704190519988324/926682026550112266/download_4.jpg",
"https://media.discordapp.net/attachments/924704190519988324/926682146461089832/download.jpg",
"https://media.discordapp.net/attachments/924704190519988324/926682146641428490/images_1.jpg",
"Kasi Gue Jata Dulu Baru Aku Mau Pap",
"https://media.discordapp.net/attachments/924704190519988324/926682146872123473/images_2.jpg",
"Aku mau nya sama Bg @ᴴᶜLutT.#1570",
"https://media.discordapp.net/attachments/924704190519988324/926682147274752060/images_3.jpg",
"Aku Mau Nya Sama Om Razzel",
"https://media.discordapp.net/attachments/924704190519988324/926682147585151016/images_4.jpg",
"https://media.discordapp.net/attachments/924704190519988324/926682147807440946/images_5.jpg",
"kontol kontol",
"apa sih memek ini",
"https://media.discordapp.net/attachments/924704190519988324/926682148063281182/images.jpg",
    ];
    await message.channel.send(
      fortunes[Math.floor(Math.random() * fortunes.length)]
    );
  },
};
