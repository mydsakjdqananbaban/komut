const Discord = require('discord.js')

exports.run = (client, message, args) => {
          if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
        const DBL = require('dblapi.js')
  const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ3OTM1NTc5NDI3ODcxMTI5NiIsImJvdCI6dHJ1ZSwiaWF0IjoxNTQ4Nzg1NTA1fQ.y_V_E5MX9r1Ff8pVYxR0neQoDm0a0jSWNso0hqvb5oQ', client) 
  
  dbl.hasVoted(message.author.id).then(voted => {
    if(voted) {
  let user = message.mentions.users.first();
  if(!user) return message.channel.send('Öpüceğin birisini etiketlemelisin')
  
    
  if ( message.react('😍')) {
      var gif = [
      'https://media.giphy.com/media/l2SpQaZIPgpdwBTI4/giphy.gif', 'https://media.giphy.com/media/47hWogQ3tjW9i/giphy.gif', 'https://media.giphy.com/media/zfuzcZdVNYL6/giphy.gif', 'https://media.giphy.com/media/3oz8xIZrAhijabg69a/giphy.gif', 'https://media.giphy.com/media/Ij1cbMbIWDKDK/giphy.gif', 'https://media.giphy.com/media/l2JegJ1EAA2NIxEWY/giphy.gif', 'https://media.giphy.com/media/3o6ozHbQHZzDTxRjsA/giphy.gif', 'https://media.giphy.com/media/3o7TKqhF898sKm6opy/giphy.gif', 'https://media.giphy.com/media/3o72F3zlbWvP4kJp4c/giphy.gif'];

      var gifler = gif[Math.floor(Math.random() * gif.length)];
  }
    
    if (message.react('😍')) {
    const op = new Discord.RichEmbed()
    .setAuthor(message.author.username + ` ${user.username}'ı öptü <3`)
    .setColor('RANDOM')
    .setImage(gifler)
    return message.channel.send(op)
    }
    } else {
      message.channel.send("Bu komutu kullanabilmek için 12 saatte bir https://discordbots.org/bot/479355794278711296/vote sitesinden bota oy vermeniz gerekmektedir. Onaylanması birkaç dakika sürebilir, lütfen bekleyin.")
    }
  })
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'öp',
  description: 'öp',
  usage: 'öp'
};
