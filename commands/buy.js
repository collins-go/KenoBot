const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { Users, GearShop } = require('../dbObjects.js');
const Sequelize = require('sequelize');
const { sequelize } = require('../connect');
const Op = Sequelize.Op

module.exports = {
    requiredChannel: 'banking-clan',
    itemname(){console.log(choicesArray.value)},
    data: new SlashCommandBuilder()
        .setName('buy')
        .setDescription('Kenobot will buy an item and add it to your inventory')
        .addStringOption(option =>
            option.setName('item-name')
                .setDescription('Enter an item name')
                .setRequired(true)
        ),

    async execute(interaction, currency) {

        const channel = '980405072993333269';
        const creditEmoji = ':credits:980090964616032337';
        const itemName = interaction.options.getString('item-name').toLowerCase();
        const item = await GearShop.findOne({ where: { search_name: {[Op.like]:'%'+itemName+'%'}} });
        if (!item) {
            return interaction.reply({content:`This item does not exist. Ensure you have typed it correctly. To find specific spelling, use /find-items <keyword>`,ephemeral:true})
        }
        const itemCost = item.cost;
        const itemEncumberance = item.item_encumberance;
        const itemRarity = item.item_rarity;
        const itemDescription = item.item_description;
        // const itemThumbnail = 'https://i.imgur.com/4JbBAFd.png';

        if (item.cost > currency.getBalance(interaction.user.id)) {
            return interaction.reply({content:`You currently have <${creditEmoji}>${currency.getBalance(interaction.user.id)}, but the ${item.name} costs <${creditEmoji}>${item.cost}!`,ephemeral:true});
        }

        const user = await Users.findOne({ where: { user_id: interaction.user.id } });
        currency.add(interaction.user.id, -item.cost);
        await user.addItem(item);


        const embed4 = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`${item.name} Purchased`)
            .setAuthor({ name: 'Kenobi', iconURL: 'https://i.imgur.com/bdZRNUd.jpeg', url: 'https://discord.com/channels/970705432828080129/980405072993333269' })
            .setDescription(`The item has been addeed to your inventory. Your new balance is <${creditEmoji}>${currency.getBalance(interaction.user.id)}`)
            //            .setThumbnail(itemThumbnail)
            .addFields(
                { name: 'Cost', value: `<${creditEmoji}>${itemCost}`, inline: true },
                { name: 'Encumberance', value: `${itemEncumberance}`, inline: true },
                { name: 'Rarity', value: `${itemRarity}`, inline: true },
                { name: 'Description', value: `${itemDescription}`}
            )
            .setTimestamp()
            .setFooter({ text: 'If you believe this is in error, contact the GM.' });


        if (interaction.channel.id.includes(channel)) {
            if (!interaction.member.roles.cache.has('980405527693631488')) {
                return messageId = await interaction.reply({ embeds: [embed4],ephemeral:false });
            } else {
                return interaction.reply({content: `You were right ${interaction.user}, the negotiations were short. (You have insufficient permission for this action)`, ephemeral: true} )
            }
        } else return interaction.reply({content:`${interaction.user}, Destroyers! (You aren't using that in the right place! Try <\#${channel}>)`,ephemeral:true})
    }
};