const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    requiredChannel: 'banking-clan',
    data: new SlashCommandBuilder()
        .setName('transfer')
        .setDescription('Kenobot will communicate with the banking clan to send some credits to someone')
        .addIntegerOption(option => option.setName('int').setDescription('Enter an integer').setRequired(true))
        .addUserOption(option => option.setName('target').setDescription('Select a user').setRequired(true)),

    async execute(interaction, currency) {    
        const currentAmount = currency.getBalance(interaction.user.id);
        const transferAmount = interaction.options.getInteger('int');
        const transferTarget = interaction.options.getUser('target');
        const channel = '980405072993333269';
        const creditEmoji = ':credits:980090964616032337';
        if (transferAmount > currentAmount) return interaction.reply({content:`Sorry ${interaction.user}, you only have <${creditEmoji}>${currentAmount}.`,ephemeral:true});
        if (transferAmount <= 0) return interaction.reply({content:`Please enter an amount greater than zero, ${interaction.user}.`,ephemeral:true});
        currency.add(interaction.user.id, -transferAmount);
        currency.add(transferTarget.id, transferAmount);
    	
        const embed4 = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('You asked Kenobi to send some credits to someone')
            .setAuthor({ name: 'Kenobi', iconURL: 'https://i.imgur.com/bdZRNUd.jpeg', url: 'https://discord.com/channels/970705432828080129/980405072993333269' })
            .setDescription('"The banking clan sent you this receipt:"')
            .setThumbnail('https://i.imgur.com/4JbBAFd.png')
            .addFields(
                { name: 'Credit Transfer', value: `Successfully transferred <${creditEmoji}>${transferAmount} to <@${transferTarget.id}>. Your current balance is <${creditEmoji}>${currency.getBalance(interaction.user.id)}` },
            )
            .setTimestamp()
            .setFooter({ text: 'If you believe this is in error, contact the GM.' });


        if (interaction.channel.id.includes(channel)) {


            if (!interaction.member.roles.cache.has('980405527693631488')) {
                return messageId = await interaction.reply({ embeds: [embed4] });
            } else {
                return interaction.reply({content: `You were right ${interaction.user}, the negotiations were short. (You have insufficient permission for this action)`, ephemeral: true} )
            }
        } else return interaction.reply({content:`${interaction.user}, Destroyers! (You aren't using that in the right place! Try <\#${channel}>)`,ephemeral:true})
    }
};