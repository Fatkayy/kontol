const { Util, MessageEmbed } = require('discord.js');
const { GOOGLE_API_KEY} = require('../../config');
const YouTube = require("simple-youtube-api");
const youtube = new YouTube(GOOGLE_API_KEY);
const Discord = require("discord.js");
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");
const ytdl = require('ytdl-core');


module.exports = {

        name: 'play',
        description: 'Play command',
        aliases: ["p"],
        category: "music",
        usage: '[song (name | link)]',
        accessableby: "everyone",
    run: async (bot, message, args, ops) => {

   

   

        const { channel } = message.member.voice;
        if (!channel) return message.channel.send('Kamu Gak ada Di Voice Kontol🍌');

        if (!args[0]) return message.channel.send("Kasi Link Lagu Nya Atau Judul Nya Komtol🍆!")
        args = message.content.split(' ');
        const searchString = args.slice(1).join(' ');
        const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';


        const permissions = channel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send('Izin Hilang, saya tidak memiliki izin koneksi.');
        if (!permissions.has('SPEAK')) return message.channel.send('Izin Hilang, saya tidak memiliki izin berbicara.');

        let button1 = new MessageButton()
    .setLabel(`Pause`)
    .setID(`pause`)
    .setStyle("red");

    let button2 = new MessageButton()
    .setLabel(`Resume`)
    .setID(`resume`)
    .setStyle("green");

    let button3 = new MessageButton()
    .setLabel(`Skip`)
    .setID(`skip`)
    .setStyle("green");

    let button4 = new MessageButton()
    .setLabel(`Pause`)
    .setID(`dpause`)
    .setDisabled()
    .setStyle("grey");

     let button5 = new MessageButton()
    .setLabel(`Resume`)
    .setID(`dresume`)
    .setDisabled()
    .setStyle("grey");

     let button6 = new MessageButton()
    .setLabel(`Skip`)
    .setID(`dskip`)
    .setDisabled()
    .setStyle("grey");

    let button7 = new MessageButton()
    .setLabel(`Loop`)
    .setID(`loop`)
    .setStyle("blurple");

    let button8 = new MessageButton()
    .setLabel(`Loop`)
    .setID(`dloop`)
    .setDisabled()
    .setStyle("grey");

let rowss = new MessageActionRow()
    .addComponents(button4, button5, button6, button8);


    let row = new MessageActionRow()
    .addComponents(button1, button3, button7);

    let rows = new MessageActionRow()
    .addComponents(button2, button3);

        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();

            for (const video of Object.values(videos)) {
                const video2 = await youtube.getVideoByID(video.id);
                await handleVideo(video2, message, channel, true);
            }
            return message.channel.send(`**Playlist \`${playlist.title}\` telah ditambahkan ke request!**`);
        } else {
            try {
                var video = await youtube.getVideo(url);
            } catch (error) {
                try {
                    var videos = await youtube.searchVideos(searchString, 1);
                    var video = await youtube.getVideoByID(videos[0].id);
                } catch (err) {
                    console.error(err)
                    return message.channel.send(`Sorry ${message.author.username}, I cant find that song`)
                }
            }
            return handleVideo(video, message, channel);
        }
            async function handleVideo(video, message, channel, playlist = false) {
                const serverQueue = ops.queue.get(message.guild.id);
                const songInfo = await ytdl.getInfo(video.id);
                const song = {
                    id: video.id,
                    title: Util.escapeMarkdown(video.title),
                    url: `https://www.youtube.com/watch?v=${video.id}`,
                    thumbnail: `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`,
                    duration: video.duration,
                    time: songInfo.videoDetails.lengthSeconds
                };

                let npmin = Math.floor(song.time / 60);
                let npsec = song.time - npmin * 60
                let np = `${npmin}:${npsec}`.split(' ')

                if (serverQueue) {
                    serverQueue.songs.push(song);
                    if (playlist) return undefined;
                    else {
                        const sembed = new MessageEmbed()
                            .setColor("RED")
                            .setTitle("💾 Added To Request", message.author.displayAvatarURL())
                            .setThumbnail("https://media.discordapp.net/attachments/898459097169555476/908627519970885642/4755-spotify-cursed.png")
                            .setTimestamp()
                            .setImage(song.thumbnail)
                            .setDescription(`**Judul:** [${song.title}](${song.url}) \n\n **<a:logo:897774100712407050>Song Duration:** ${np} minutes \n\n **Status:** Pending`)
                            .setFooter(`Added By: ${message.member.displayName}`);
                        message.channel.send(sembed)
                    }
                    return undefined;
                }

                const queueConstruct = {
                    textChannel: message.channel,
                    voiceChannel: channel,
                    connection: null,
                    songs: [],
                    volume: 6,
                    playing: true,
                    loop: false,
                };
                ops.queue.set(message.guild.id, queueConstruct);
                queueConstruct.songs.push(song);
                try {
                    const connection = await channel.join();
                    queueConstruct.connection = connection;
                    play(queueConstruct.songs[0]);
                } catch (error) {
                    console.error(`I could not join the voice channel: ${error.message}`);
                    ops.queue.delete(message.guild.id);
                    await channel.leave();
                    return message.channel.send(`I could not join the voice channel: ${error.message}`);
                }
            };
            async function play(song) {
                const queue = ops.queue.get(message.guild.id);
                if (!song) {
                    queue.voiceChannel.leave();
                    ops.queue.delete(message.guild.id);
                    return;
                };

            
                
  const serverQueue = ops.queue.get(message.guild.id);
                let npmin = Math.floor(song.time / 60);
                let npsec = song.time - npmin * 60
                let np = `${npmin}:${npsec}`.split(' ')

                 

                const dispatcher = queue.connection.play(ytdl(song.url, { highWaterMark: 1 << 20, quality: "highestaudio" }))
                    .on('finish', () => {
                        if (queue.loop) {
                            queue.songs.push(queue.songs.shift());
                            return play(queue.songs[0]);
                        }
                        queue.songs.shift();
                        play(queue.songs[0]);
                    })
                    .on('error', error => console.error(error));
                dispatcher.setVolumeLogarithmic(queue.volume / 5);
  
  
        
                const embed = new MessageEmbed()
                    .setColor("RED")
                    .setTitle('<a:logo:897774100712407050> Playing Music')
                    .setThumbnail("https://media.discordapp.net/attachments/898459097169555476/908627519970885642/4755-spotify-cursed.png")
                    .setTimestamp()
                    .setImage(song.thumbnail)          .setDescription(`**Judul:** [${song.title}](${song.url}) \n\n **Durasi: ** ${np} minutes \n\n **Status:** **Playing** \n\n *Hanya request yang dapat melewati dan mengulang lagu*`)
                    .setFooter(`Played by: ${message.member.displayName} `, message.author.displayAvatarURL());

                    const embed3 = new MessageEmbed()
                    .setColor("RED")
                    .setImage(song.thumbnail)
                    .setTitle('💽 Lagu telah berakhir')
                    .setThumbnail("https://media.discordapp.net/attachments/898459097169555476/908627519970885642/4755-spotify-cursed.png")
                    .setTimestamp()
                    .setDescription(`**Judul: ** [${song.title}](${song.url}) \n\n **Durasi: ** ${np} minutes \n\n **Status:** **Finished** `)
                    .setFooter(`Played by: ${message.member.displayName} `, message.author.displayAvatarURL());

  



                    
                
                const MESSAGE = await queue.textChannel.send(embed, row);

    const filter = (button) => button.clicker.user.id !== bot.user.id

    const collector = MESSAGE.createButtonCollector(filter, { time: song.time > 0 ? song.time * 1000 : 600000 });

    collector.on('collect', async (b) => {
const { channel } = message.member.voice;
        
      const embed4 = new MessageEmbed()
                    .setColor("RED")
                    .setTitle('💾 Started Playing')
                    .setThumbnail("https://media.discordapp.net/attachments/898459097169555476/908627519970885642/4755-spotify-cursed.png")
                    .setTimestamp()
                    .setImage(song.thumbnail)
                    .setDescription(`**Judul: ** [${song.title}](${song.url}) \n\n **Durasi: ** ${np} minutes \n\n **Status:** Resumed by ${b.clicker.member} \n\n *Hanya request yang dapat melewati dan mengulang lagu* `)
                    .setFooter(`Played by: ${message.member.displayName} `, message.author.displayAvatarURL());

      const embed2 = new MessageEmbed()
                    .setColor("RED")
                    .setTitle('▶️ Music Paused')
                    .setThumbnail("https://media.discordapp.net/attachments/898459097169555476/908627519970885642/4755-spotify-cursed.png")
                    .setTimestamp()
                    .setImage(song.thumbnail)
                    .setDescription(`**Judul: ** [${song.title}](${song.url}) \n\n **Durasi: ** ${np} minutes \n\n **Status:** Paused by ${b.clicker.member} \n\n *Hanya request yang dapat melewati dan mengulang lagu* `)
                    .setFooter(`Played by: ${message.member.displayName}`, message.author.displayAvatarURL());

                     const embed5 = new MessageEmbed()
                    .setColor("RED")
                    .setTitle('⏸️ Started Playing')
                    .setThumbnail("https://media.discordapp.net/attachments/898459097169555476/908627519970885642/4755-spotify-cursed.png")
                    .setTimestamp()
                    .setImage(song.thumbnail)
                    .setDescription(`**Judul: ** [${song.title}](${song.url}) \n\n **Durasi: ** ${np} minutes \n\n **Status:** Skiped by ${b.clicker.member} `)
                    .setFooter(`Played by: ${message.member.displayName} `, message.author.displayAvatarURL());

        if(b.id == "pause") {
          if (!channel) return await b.reply.send('Anda harus berada di voice channel', true);
          if (message.guild.me.voice.channel !== message.member.voice.channel) {
            return await b.reply.send('Anda harus bergabung dengan voice channel', true);
        }
  
           if (serverQueue && serverQueue.playing) {
            serverQueue.playing = false;
            serverQueue.connection.dispatcher.pause(true);
            MESSAGE.edit(embed2, rows);
            return await b.reply.send('Musik telah dijeda', true);
             
        }
  
    return await b.reply.send('Tidak ada yang diputar atau lagu sudah dijeda!', true);

   
  
        
        
            
        }
         if(b.id == "resume") {

           if (!channel) return await b.reply.send('Anda harus berada di voice channel', true);
           if (message.guild.me.voice.channel !== message.member.voice.channel) {
            return await b.reply.send('Anda harus bergabung dengan voice channel', true);
        }

           if (serverQueue && !serverQueue.playing) {
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
                MESSAGE.edit(embed4, row);
            return await b.reply.send('Musik telah dilanjutkan', true);
        }
      
    return await b.reply.send('Tidak ada yang diputar atau lagu sudah dilanjutkan!', true);


  
        
        
            
            
        }

         if(b.id == "skip") {

           if (!channel) return await b.reply.send('Anda harus berada di saluran suara', true);
if (message.guild.me.voice.channel !== message.member.voice.channel) {
            return await b.reply.send('Anda harus bergabung dengan voice channel', true);
        }

       if (b.clicker.id === message.author.id) {
        serverQueue.connection.dispatcher.end();
        MESSAGE.edit(embed5, rowss);
        return await b.reply.send('Skiped!', true)
        
         }
         return await b.reply.send(`No!!  Cuma ${message.author.username} Yang Bisa Skip`,true)
      
       
            
            
        }
         if(b.id == "loop") {
if (!channel) return await b.reply.send('Kamu Harus di Voice Kintil🍌', true);
           
if (b.clicker.id === message.author.id ) {
            if (!serverQueue) return await b.reply.send('Tidak ada yang bermain.', true);
        if (message.guild.me.voice.channel !== message.member.voice.channel) {
            return await b.reply.send('Kamu Harus di Voice Hade🍆', true);
        }
        if (!serverQueue.loop) {
            serverQueue.loop = true;
            return await b.reply.send('Loop is now on', true);
        } else {
            serverQueue.loop = false;
            return await b.reply.send('Loop is now off', true);
        }
 }
         return await b.reply.send(`No!!  Cuma ${message.author.username} Yang Bisa Loop`, true)


  
        
        
            
            
        }
      

    });

    collector.on('end', async (b) => {
  
        MESSAGE.edit(embed3, rowss)
    })
            };
             
     
    }
};