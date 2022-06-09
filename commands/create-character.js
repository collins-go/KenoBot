const { SlashCommandBuilder } = require('@discordjs/builders');

const { MessageEmbed } = require('discord.js');

const embed1 = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Character Creation - Step 1')
	.setAuthor({ name: 'Collins (LeGM)', iconURL: 'https://i.imgur.com/Yz99OlS.png', url: 'https://discord.gg/Nehbanf7' })
	.setDescription('We begin by selecting a species')
	.setThumbnail('https://i.imgur.com/Yz99OlS.png')
	.addFields(
		{ name: 'How do I pick my species?', value: 'Below, you will see many reactions. You can select a reaction to match from the following list.' },
		{ name: 'List 1', value: 'tbc', inline: true },
		{ name: 'List 2', value: 'tbc', inline: true },
	)
	.addField('List 3', 'tbc', true)
	.setTimestamp()
	.setFooter({ text: 'The GM reserves the right to remove players without notice.' });

module.exports = {
	requiredChannel: 'char-creation',
	data: new SlashCommandBuilder()
		.setName('create-character')
		.setDescription('Kenobot will share some rules'),
	async execute(interaction) {
								const user = interaction.member.user
								const channel ='980093871587479582';
								if(interaction.channel.id.includes(channel)){
								if(interaction.member.roles.cache.has('970708553981624412')){
																	return messageId = await interaction.reply({ embeds: [ embed1 ] });																	
															} else {
																return interaction.reply(`You were right ${interaction.user}, the negotiations were short. (You have insufficient permission for this action)`)
																
																	}
																}else return interaction.reply(`${interaction.user}, Destroyers! (You aren't using that in the right place! Try <\#${channel}>)`) }
};