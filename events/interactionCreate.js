const Sequelize = require('sequelize');
const { Users, CurrencyShop } = require('../dbObjects');

module.exports = {
	name: 'interactionCreate',
	async execute(interaction, currency) {
		const storedBalances = await Users.findAll();
		storedBalances.forEach(b => currency.set(b.user_id, b));
		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
	},
};
