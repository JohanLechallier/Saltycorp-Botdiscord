const Discord = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Je suis prêt !");
});

client.on("message", msg => {
    if (msg.author.bot) return
    const args = msg.content.split(/ +/g);
    const cmd = args.shift().toLocaleLowerCase();
    if (cmd === `${PREFIX}ping`) msg.channel.send("Pong!");
    
});

// massage join discord //

client.on("guildMemberAdd", member=> {
    member.send("Bienvenu dans la SaltyCorp!");
    const channel = client.channels.find(r => r.name === "aaa");
    channel.send(`${member} un nouveau soldat du sel est arriver !`);
})

client.login(TOKEN);

client.on("error", console.error);
client.on("warn", console.warn);
client.on("debug", console.log);