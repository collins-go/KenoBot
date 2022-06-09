const { SlashCommandBuilder } = require('@discordjs/builders');

const { MessageEmbed } = require('discord.js');

const embed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Rules')
	.setURL('https://discord.com/channels/970705432828080129/970744619421814814')
	.setAuthor({ name: 'Collins (LeGM)', iconURL: 'https://i.imgur.com/Yz99OlS.png', url: 'https://discord.gg/Nehbanf7' })
	.setDescription('The rules post')
	.setThumbnail('https://i.imgur.com/Yz99OlS.png')
	.addFields(
		{ name: 'General Respect', value: 'Players will treat all members and guests with respect, dignity and empathy.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Politics/Religion', value: 'No discussion of politics, religion or other potentially volatile subjects (unless related to the lore of the game)', inline: true },
		{ name: 'Personal Attacks', value: 'No direct personal attacks of any kind, directed at anyone', inline: true },
	)
	.addField('Other Abuse', 'Patterns of abusive behavior will not be tolerated.', true)
	.setTimestamp()
	.setFooter({ text: 'The GM reserves the right to remove players without notice.' });

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rules')
		.setDescription('Kenobot will share some rules'),
	async execute(interaction) {
								const user = interaction.member.user
	if(interaction.member.roles.cache.has('970708553981624412')){
																	return messageId = await interaction.reply({ embeds: [ embed ] });																	
															} else {
																return interaction.reply(`You were right ${interaction.user}, the negotiations were short. (You have insufficient permission for this action)`)
																
																	}
	}
};