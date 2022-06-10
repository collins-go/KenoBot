const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const Sequelize = require('sequelize');
const { Users, CurrencyShop } = require('../dbObjects.js');

module.exports = {
    requiredChannel: 'banking-clan',
    data: new SlashCommandBuilder()
        .setName('balance')
        .setDescription('Kenobot will communicate with the banking clan to check your balance'),
    async execute(interaction, currency) {
        const storedBalances = await Users.findAll();
		storedBalances.forEach(b => currency.set(b.user_id, b));
        const target = interaction.user.id
        const credits = currency.getBalance(target);
        const channel = '980405072993333269';
        const creditEmoji = ':credits:980090964616032337';
        const embed2 = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('You asked Kenobi to check your balance')
            .setAuthor({ name: 'Kenobi', iconURL: 'https://i.imgur.com/bdZRNUd.jpeg', url: 'https://discord.com/channels/970705432828080129/980405072993333269' })
            .setDescription('"This is what the Banking Clan had to say:"')
            .setThumbnail('https://i.imgur.com/4JbBAFd.png')
            .addFields(
                { name: 'Imperial Credits', value: `Your current balance is <${creditEmoji}>${credits}` },
            )
            .setTimestamp()
            .setFooter({ text: 'If you believe this is in error, contact the GM.' });


        if (interaction.channel.id.includes(channel)) {


            if (!interaction.member.roles.cache.has('980405527693631488')) {
                return messageId = await interaction.reply({ embeds: [embed2] });
            } else {
                return interaction.reply(`You were right ${interaction.user}, the negotiations were short. (You have insufficient permission for this action)`)

            }
        } else return interaction.reply(`${interaction.user}, Destroyers! (You aren't using that in the right place! Try <\#${channel}>)`)
    }
};

