module.exports.run = async (client) => {
  console.log(`${client.user.tag} has logged in.`);
  client.user.setActivity(`${client.guilds.cache.size} servers! ┊ K!help ┊ Bot By XRazzel`, {
    type: "STREAMING",
  });
};
