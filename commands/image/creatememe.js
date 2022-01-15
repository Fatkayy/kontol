const Discord = module.require("discord.js");

module.exports = {
  name: "meme",
  description: "Create Custom Memes",
  botPerms: ["ATTTACH_FILES", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    message.delete();
    const memetemplate = args[0];
    if (!memetemplate) {
      return message.channel.send(
        "usage : lisa meme```\n`sohappy`,`tenguy`,`afraid`,`apcr`,`older`,`aag`,`atis`,`alyt`,`biw`,`stew`,`blb`,`bihw`,`kermit`,`bd`,`ch`,`cbg`,`wonka`,`cb`,`gandalf`,`keanu`,`cryingfloor`,`dsm`,`disastergirl`,`live`,`ants`,`doge`,`trump`,`drake`,`ermg`,`facepalm`,`feelsgood`,`firsttry`,`fwp`,`fa`,`fbf`,`fmr`,`fry`,`ggg`,`grumpycat`,`harold`,`hipster`,`icanhas`,`crazypills```"
      );
    }
    const memetext1 = args[1];
    if (!memetext1) {
      return message.channel.send("Enter the text to be placed at the top!");
    }
    const memetext2 = args[2];
    if (!memetext2) {
      return message.channel.send("Enter the text to be placed at the bottom!");
    }
    message.channel.send({
      files: [
        {
          attachment: `https://api.memegen.link/images/${memetemplate}/${memetext1}/${memetext2}`,
          name: "custommeme.png",
        },
      ],
    });
  },
  catch(error) {
    const errorlogs = client.channels.cache.get("747750993583669258");
    message.channel.send(
      "Seems like an error has occured!. Please try again in a few hours!"
    );
    errorlogs.send("Error on Creatememe command! \n\nError:\n\n" + error);
  },
};
