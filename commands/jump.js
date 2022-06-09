const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('jump')
		.setDescription('Kenobot will jump down to address General Grievous'),
	async execute(interaction) {
								const user = interaction.member.user
	if(interaction.member.roles.cache.has('970708553981624412')){
																	return interaction.reply(`Hello there, ${interaction.user}!`);																
															} else {
																return interaction.reply(`You were right ${interaction.user}, the negotiations were short. (You have insufficient permission for this action)`)
																
																	}
	}
};
