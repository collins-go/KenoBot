const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { CurrencyShop } = require('../dbObjects.js');
const Sequelize = require('sequelize');
const { sequelize } = require('../connect');
const Op = Sequelize.Op

module.exports = {
    requiredChannel: 'banking-clan',
    data: new SlashCommandBuilder()
        .setName('find-items')
        .setDescription('Kenobot will find items of a similar name')
        .addStringOption(option =>
            option.setName('item-name')
                .setDescription('Enter an item name')
                .setRequired(true)
            //           .addChoices(
            //
            //           { name: '1', value: 'gif_funny' },
            //            { name: '2', value: 'gif_meme' },
            //            { name: '3', value: 'gif_movie' },
            //        )
        ),

    async execute(interaction, currency) {
        const channel = '980405072993333269';
        const creditEmoji = ':credits:980090964616032337';
        const itemName = interaction.options.getString('item-name').toLowerCase();
        const item = await CurrencyShop.findAll({ where: { search_name: {[Op.like]:'%'+itemName+'%'}}, order: sequelize.literal('search_name','ASC') })
        if (!item) {
            return interaction.reply({content:`There doesn't appear to be any items which include that text in the name. Ensure you have typed it correctly.`,ephemeral:true})
        }
        const itemList = (item.map(i => `${i.name}`).join('\n'));
    
        //        const itemThumbnail = 'https://i.imgur.com/4JbBAFd.png';



        const embed4 = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`Items which include the term: ${itemName}`)
            .setAuthor({ name: 'Kenobi', iconURL: 'https://i.imgur.com/bdZRNUd.jpeg', url: 'https://discord.com/channels/970705432828080129/980405072993333269' })
            .setDescription(`|--------------__Name__.--------------|\n ${itemList}`)
            //            .setThumbnail(itemThumbnail)
            .setTimestamp()
            .setFooter({ text: 'If you believe this is in error, contact the GM.' });


        if (interaction.channel.id.includes(channel)) {
            if (!interaction.member.roles.cache.has('980405527693631488')) {
                return messageId = await interaction.reply({ embeds: [embed4], ephemeral: true });
            } else {
                return interaction.reply({content: `You were right ${interaction.user}, the negotiations were short. (You have insufficient permission for this action)`, ephemeral: true} )
            }
        } else return interaction.reply({content:`${interaction.user}, Destroyers! (You aren't using that in the right place! Try <\#${channel}>)`,ephemeral:true})
    }
};