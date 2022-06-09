const { SlashCommandBuilder } = require('@discordjs/builders');

// const profileSchema = require("../models/profileSchema");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('register')
		.setDescription('Kenobot register you as a character in the Archives.'),
	// async execute(interaction) {
	//     const existingProfile = await profileSchema.findOne({userID: interaction.user.id});

	//     if (existingProfile) {
	//         console.log(`${interaction.user.username} already exists in DB... skipping`)
	// 		await interaction.reply({ content: `Your registration is already complete. \n Try using /char-creation to get started `, ephemeral: true });
	//         return;
	//     }

	//     new profileSchema({
	//         userID: interaction.user.id,
	//         serverID: interaction.guild.id,
	//         credits: 1,
	//         bank: 1
	//     }).save()
	//     await interaction.reply({ content: `Your registration is now complete ${interaction.user}. \n Try using /char-creation to get started `, ephemeral: true });
	//     console.log('new profile -  Saved')
	// }
};