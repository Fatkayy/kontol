const Discord = require("discord.js")
const fetch = require("node-fetch");

module.exports = {
    
        name: "tweet",
        
        category: "Image",
        description : "Sends A Tweet",
        usage: "[username] <text>",
        
   
    run: async(bot, message, args) => {

        let user = args[0];
        let text = args.slice(1).join(" ");

        let m = await message.channel.send("**Please wait...**");

        if(!user){
            return m.edit("**usage : lisa tweet (username) (text)**");
        }

        if(!text){
            return m.edit(`<a:865963806483808256:896694904019894282> **Anda harus memasukkan pesan!`);
        }

        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=tweet&username=${user}&text=${text}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "tweet.png");
            await message.channel.send(`<a:867324408308695070:892077506860040233> **New tweet published by ${user}**`, attachment);
            m.delete({ timeout: 5000});
        } catch(e){
            m.edit(`<a:865963806483808256:896694904019894282> **Error, Try Again!** <a:865963806483808256:896694904019894282`);
        }
    }
};