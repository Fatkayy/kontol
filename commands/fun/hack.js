const ms = module.require("ms");

module.exports = {
  name: "hack",
  description: "Another Fun Command",
  run: async (client, message, args) => {
    if (!args[0]) {
      return message.channel.send(
        `<:667737932035129344:891461376277618739> Wah.... Siapa yang mau kita retas..??`
      );
    }
    const tohack = message.mentions.members.first();
    let msg = await message.channel.send(`Hacking ${tohack.displayName}....`);

    let time = "1s";
    setTimeout(function () {
      msg.edit(`Finding ${tohack.displayName}'s Email and Password.....`);
    }, ms(time));

    let time1 = "6s";
    setTimeout(function () {
      msg.edit(`E-Mail: ${tohack.displayName}@gmail.com \nPassword: akusukacoli123`);
    }, ms(time1));

    let time2 = "9s";
    setTimeout(function () {
      msg.edit("Finding Other Accounts.....");
    }, ms(time2));

    let time3 = "15s";
    setTimeout(function () {
      msg.edit("Setting up Discord Account.....");
    }, ms(time3));

    let time4 = "21s";
    setTimeout(function () {
      msg.edit("Hacking Discord Account......");
    }, ms(time4));

    let time5 = "28s";
    setTimeout(function () {
      msg.edit("Hacked Discord Account!!");
    }, ms(time5));

    let time6 = "31s";
    setTimeout(function () {
      msg.edit("Collecting Info.....");
    }, ms(time6));

    let time7 = "38s";
    setTimeout(function () {
      msg.edit("Selling data to FBI....");
    }, ms(time7));

    let time8 = "41s";
    setTimeout(function () {
      msg.edit(`Finished Hacking ${tohack.displayName}`);
    }, ms(time8));
  },
};
