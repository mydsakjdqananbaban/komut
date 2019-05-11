 const Discord = require('discord.js');

exports.run = (client, message, args) => { 
              if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
    var Jimp = require("jimp");
    const Discord = require('discord.js');
    let img    = Jimp.read(message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL),
    moldura = Jimp.read("https://cdn.glitch.com/b18a2fa6-68cb-49d5-9818-64c50dd0fdab%2FPNGPIX-COM-Crosshair-PNG-Transparent-Image.png?1529363625811");
    Promise.all([img, moldura]).then(imgs => {
    let moldura = imgs[1],
        img    = imgs[0];
    moldura.resize(295, 295);  
    img.resize(295, 295)
    img.greyscale()
    img.gaussian(1)
    img.composite(moldura, 0, 0).getBuffer(Jimp.MIME_PNG, (err, buffer) => {
        if (!err) 
        message.channel.send(new Discord.Attachment(buffer));        
    });
});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sniper',
  description: 'atam',
  usage: 'wasted'
};