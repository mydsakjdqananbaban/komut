 const discord = require("discord.js");
const bot = new discord.Client();
const fs = require ("fs");
const prefix = "g!";

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(prefix)) return ;
    message.delete();
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let noUserEmbed = new discord.RichEmbed()
    .setDescription(":grey_question: Atılacak Kullanıcıyı Belirtmedin.")
  if(!bUser) return message.channel.send(noUserEmbed);
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Gerekli Yetkiye Sahip Değilsin BAN_MEMBERS .");
    let noBanEmbed = new discord.RichEmbed()
    .setDescription(":no_entry_sign: Bu Kişi Banlanamaz!")
    .setColor("#8B0000");
  if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(noBanEmbed);
     let banEmbed = new discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#732699")
    .addField("Yasaklanan Kullanıcı", `${bUser} with ID ${bUser.id}`, true)
    .addField("Yasaklayan Yetkili", `<@${message.author.id}> with ID ${message.author.id}`, true)
    .addField("Yasaklanan Kanal", message.channel, true)
    .addField("Zaman", message.createdAt, true)
    .addField("Sebeb", bReason, true);
     let banChannel = message.guild.channels.find(`name`, "mod-log");
    if(!banChannel) return message.channel.send(`mod-log Kanalı Bulunamıyor.`);
    message.delete().catch(O_o=>{});
    message.guild.member(bUser).ban(bReason);
    banChannel.send(banEmbed);
  let bannedEmbed = new discord.RichEmbed()
  .setDescription(`:white_check_mark: Kullanıcı <@${bUser.id}> Yasaklandı.`)
  .setColor("#2eb82e")
  .setImage('https://media.tenor.com/images/da66a96ca7f65f949a07db8ab9926297/tenor.gif');
    if(banChannel) return message.channel.send(bannedEmbed);
    

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'ban-deneme',
  description: 'İstediğiniz kişiyi sunucudan yasaklar.',
  usage: 'ban [kullanıcı] [sebep]'
};