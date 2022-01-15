const figlet = require("figlet"); // MAKE SURE TO INSTALL FIGLET PACKAGE OR CODE WONT WORK

module.exports = {
  name: "ascii",
  aliases: [],
  category: "Fun",
  usage: "ascii <text>",
  description: "Returns provided text in ascii format.",
  run: async (client, message, args) => {
    let text = args.join(" ");
    if (!text) {
      return message.channel.send(`<:667737932035129344:891461376277618739> \`Usage: lisa ascii <msg>\` <:667737932035129344:891461376277618739>`);
    }
    let maxlen = 20;
    if (text.length > 20) {
      return message.channel.send(
        `Harap cantumkan teks yang memiliki 20 karakter atau kurang karena konversinya tidak akan bagus!`
      );
    }
    // AGAIN, MAKE SURE TO INSTALL FIGLET PACKAGE!
    figlet(text, function (err, data) {
      message.channel.send(data, {
        code: "AsciiArt",
      });
    });
  },
};
