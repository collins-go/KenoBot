const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const Sequelize = require('sequelize');
const { Users, CurrencyShop } = require('../dbObjects');

module.exports = {
    requiredChannel: 'banking-clan',
    data: new SlashCommandBuilder()
        .setName('inventory')
        .setDescription('Kenobot will tell you what you have in your inventory'),
    async execute(interaction, currency, Users) {
		const target = interaction.options.getUser('user') || interaction.user;
		const user = await Users.findOne({ where: { user_id: target.id } });
		const items = await user.getItems();
        const channel = '980405072993333269';
        const embed3 = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('You asked Kenobi to check your balance')
            .setAuthor({ name: 'Kenobi', iconURL: 'https://i.imgur.com/bdZRNUd.jpeg', url: 'https://discord.com/channels/970705432828080129/980405072993333269' })
            .setDescription('"This is what you are carrying"')
            .setThumbnail('https://i.imgur.com/5ZXoFJf.png')
            .addFields(
                { name: 'Inventory', value: `${interaction.user} currently has ${items.map(i => `${i.amount} ${i.item.name}`).join(', ')}` },
            )
            .setTimestamp()
            .setFooter({ text: 'If you believe this is in error, contact the GM.' });


        if (interaction.channel.id.includes(channel)) {

            if (!interaction.member.roles.cache.has('980405527693631488')) {

                if (!items.length) {
                    return interaction.reply(`${interaction.user} has nothing!`)
                } else {
                    return messageId = await interaction.reply({ embeds: [embed3] })
                }
            } else {
                return interaction.reply(`You were right ${interaction.user}, the negotiations were short. (You have insufficient permission for this action)`)
            }
        } else {
            return interaction.reply(`${interaction.user}, Destroyers! (You aren't using that in the right place! Try <\#${channel}>)`)
        }
    }
};

