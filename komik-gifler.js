const Discord = require('discord.js');

 exports.run = (client, message, args) => {
               if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
 const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ3OTM1NTc5NDI3ODcxMTI5NiIsImJvdCI6dHJ1ZSwiaWF0IjoxNTQ4Nzg1NTA1fQ.y_V_E5MX9r1Ff8pVYxR0neQoDm0a0jSWNso0hqvb5oQ', client) 


dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {
    var gif = [
        'https://cdn.discordapp.com/attachments/382580600697126924/382913621438496779/tumblr_ogc175pMhn1tikbino1_400.gif','https://cdn.discordapp.com/attachments/382580600697126924/382913619857375242/tumblr_opc1p6E6oc1s3n53to1_250.gif','https://cdn.discordapp.com/attachments/382580600697126924/382913618737496067/tumblr_o3nw12On3D1v33e53o1_500.gif','https://cdn.discordapp.com/attachments/382580600697126924/382913613163266048/tumblr_o94b1jAtYI1u0r00mo1_400.gif','https://cdn.discordapp.com/attachments/382580600697126924/382913605252808705/tumblr_o9e3y9g0K51tntktlo1_500.gif','https://cdn.discordapp.com/attachments/382580600697126924/382913583757131778/tumblr_o6cro3xSbD1s3n53to1_500.gif','https://cdn.discordapp.com/attachments/382580600697126924/382913501984980994/tumblr_nuua0fGIj61uzwpx0o1_400.gif',
   'https://cdn.discordapp.com/attachments/382580600697126924/382913471508905984/tumblr_o164vwOad01v33e53o1_400.gif','https://cdn.discordapp.com/attachments/382580600697126924/382912764689121310/tumblr_on18lk2Y4g1vgh4bio1_400.gif','https://cdn.discordapp.com/attachments/382580600697126924/382912757357608960/tumblr_nvf5vjXGNf1ut8cwvo1_400.gif','https://cdn.discordapp.com/attachments/382580600697126924/382912756627668992/tumblr_okywmqIJiP1s3n53to1_400.gif','https://cdn.discordapp.com/attachments/382580600697126924/382912755834814474/tumblr_ok4hmqSL5L1v33e53o1_400.gif','https://cdn.discordapp.com/attachments/382580600697126924/382912753284939786/tumblr_o6yg32H3yd1v8xre3o1_400.gif','https://cdn.discordapp.com/attachments/382580600697126924/382912750776745994/tumblr_on1yv9fKpF1s3n53to1_250.gif','https://cdn.discordapp.com/attachments/382580600697126924/382912747551326208/tumblr_oeq11vqG3c1vgh4bio1_400.gif',
   'https://cdn.discordapp.com/attachments/382580600697126924/382912740584325120/tumblr_og0r8odDX21s3n53to1_400.gif','https://cdn.discordapp.com/attachments/382580600697126924/382912530349031434/tumblr_nxrho6WjCQ1sowe88o1_400.gif','https://cdn.discordapp.com/attachments/382580600697126924/382912504986206218/tumblr_nk9vfyIYCK1u9g77uo1_500.gif','https://cdn.discordapp.com/attachments/382580600697126924/382912494047592449/tumblr_odt1nd0gSM1s3n53to1_400.gif','https://cdn.discordapp.com/attachments/382580600697126924/382911291909603331/tumblr_ovtgb9CxAx1skzu0ro1_400.gif','https://cdn.discordapp.com/attachments/382580600697126924/382911286167732224/tumblr_olm4yzyl0K1s3n53to1_400.gif','https://cdn.discordapp.com/attachments/382580600697126924/382911284762509323/tumblr_npvfvpbBHo1sgrei5o1_400.gif','https://cdn.discordapp.com/attachments/382580600697126924/382911283709739018/tumblr_o9lvfgwFxD1u0r00mo1_250.gif',
   'https://cdn.discordapp.com/attachments/382580600697126924/382911280077602816/tumblr_ohptlrYqY91s3n53to1_400.gif','https://cdn.discordapp.com/attachments/382580600697126924/382911280077602816/tumblr_ohptlrYqY91s3n53to1_400.gif','https://cdn.discordapp.com/attachments/382580600697126924/382911252307116032/tumblr_ogsrc1VfN11s3n53to1_400.gif','https://cdn.discordapp.com/attachments/382580600697126924/382911201874542592/tumblr_oq3yukE8al1w3vhddo1_500.gif','https://cdn.discordapp.com/attachments/382580600697126924/382910877185343497/tumblr_o7mjmrAPnE1v33e53o1_400.gifhttps://cdn.discordapp.com/attachments/382580600697126924/382910873645219840/tumblr_of38jrLnT81s5jzdzo1_400.gif','https://cdn.discordapp.com/attachments/382580600697126924/382910842557169664/tumblr_nlw3rzhxqt1urn9x7o1_500.gif','https://cdn.discordapp.com/attachments/382580600697126924/382910835519127552/tumblr_o16wyorJ4a1v33e53o1_400.gif',
   'https://cdn.discordapp.com/attachments/382580600697126924/382910825129574420/tumblr_o4pxaaImdC1s8c9jeo1_400.gif','https://cdn.discordapp.com/attachments/382580600697126924/382910789146771456/tumblr_nq5ubqRcXD1uw96wko1_400.gif','https://cdn.discordapp.com/attachments/382580600697126924/382910625136902144/tumblr_nsvedfQPc61sowe88o1_250.gif','https://cdn.discordapp.com/attachments/382580600697126924/382910625040302080/tumblr_o0h9lo1rr21v33e53o1_400.gif','https://cdn.discordapp.com/attachments/382580600697126924/382910625321320448/tumblr_ofz5wysdRb1s8c9jeo1_400.gif','https://cdn.discordapp.com/attachments/382580600697126924/382910616555225088/tumblr_nvyse0urws1uxood6o1_500.gif','https://cdn.discordapp.com/attachments/382580600697126924/382910601111928836/tumblr_osjzh4IawZ1s3n53to1_400.gif','https://cdn.discordapp.com/attachments/382580600697126924/382910596376428553/tumblr_o7gyanzZIf1qc2rauo1_250.gif',
   'https://cdn.discordapp.com/attachments/382580600697126924/382910578768871424/tumblr_ni50xjAUB51tey8l5o1_500.gif','https://media3.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif'];


var gifler = gif[Math.floor(Math.random() * gif.length)];

 const embed = new Discord.RichEmbed()
 .setImage(gifler)
 .setColor("RANDOM")
 message.channel.sendEmbed(embed);
        message.channel.send("Bu komutu kullanabilmek için 12 saatte bir https://discordbots.org/bot/479355794278711296/vote sitesinden bota oy vermeniz gerekmektedir. Onaylanması birkaç dakika sürebilir, lütfen bekleyin.")
      }
  })
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['kgif', 'kg', 'komik-gifler', 'komikgif', 'komik-gif'],
 permLevel: 0 ,
};

exports.help = {
 name: 'komikgifler',
 description: 'komik Gifler',
 usage: 'komikgif'
};