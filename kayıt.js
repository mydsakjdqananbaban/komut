const Discord = require('discord.js');

exports.run = function(client, message, args) {
              if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
    if(message.guild.id !== '562016610303344644') return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu Komutu Bu Sunucuda Kullanamasın').setColor('RED'));
  if(message.channel.id !== '567365657625362434') return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu Burada Kullanılamaz').setColor('RED'));
if (!args[0]) return message.channel.send("İsim Ve Yaş Beliritinz Lütfen")
     message.member.setNickname(`✻ ${args[0]} `)
     message.channel.send(`Başarıyla, kayıt oldun! <@${message.author.id}> .`)  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıt-ol','kayit-ol','kayıtol','kayitol','isim'],
  permLevel: 0
};

exports.help = {
  name: 'k',
  description: 'sdas.',
  usage: 'kayıt'
};