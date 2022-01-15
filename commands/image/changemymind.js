
const Color = "RANDOM", Random = require("srod-v2");
const Discord = require("discord.js");

module.exports = {
  name: "changemymind",
  aliases: ["cmm"],
  category: "Image",
  description: "Return A Change My Mind Image!",
  usage: "Changemymind <Text>",
  run: async (client, message, args) => {
    
    const Value = args.join(" ");
    if (!Value || Value.length > 25) return message.channel.send("<:768584762280509480:891458035053129758>                                                      | Tolong Beri Teks Dan Pastikan Panjangnya Tidak 25+ Karakter!"); 

    const Data = await Random.ChangeMyMind({ Message: Value, Color: Color });

    return message.channel.send(Data);
  }
};