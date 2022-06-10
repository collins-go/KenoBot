const Sequelize = require('sequelize');
const { Users, CurrencyShop } = require('../dbObjects');

module.exports = {
	name: 'interactionCreate',
	async execute(interaction, currency){
	console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
},
};
