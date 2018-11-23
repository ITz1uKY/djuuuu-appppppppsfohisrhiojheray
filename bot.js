const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "1";





client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "515615496910012418"; // ايدي السررفر
var channel = "515616826537934863";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , **')
    },305);
})



 
















 

 

client.login(process.env.BOT_TOKEN)
