const discord = require("discord.js")
const { RichEmbed } = require("discord.js")
const moment = require("moment")
const hastebin = require('hastebin-gen');

module.exports = {
        name: "hastebin",
        description: "Get link of Your given Code or Text as Hastebin.",
        usage: `hastebin <code/text>`,
        category: "utility",
        aliases: ["haste"],
    run: async (client, message, args) => {
      
      if(!args.join(" ")) return message.channel.send(`<a:865963806483808256:896694904019894282> **Masukan <Text/code>!!**`);
      
      hastebin(args.join(" "), { extension: 'rage' }).then(haste => {
    message.channel.send(haste);
}).catch(error => {
    message.channel.send(`\`\`\`\n<a:865963806483808256:896694904019894282>\n\`\`\`${error}`);
      });
      }
}