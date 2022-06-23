const deploy_commands = require('../deploy-commands');
const deploy_guild_commands = require('../deploy-guild-commands');
const Sequelize = require('sequelize');
const { Users, GearShop } = require('../dbObjects')

module.exports = {
	name: 'ready',
	once: true,
	async execute(client, currency) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		const storedBalances = await Users.findAll();
		storedBalances.forEach(b => currency.set(b.user_id, b));
		try {
			deploy_commands(),
			deploy_guild_commands(),
			console.log('Connection has been established successfully.')
		} catch (error) {
			console.error('Unable to connect to the database:', error);
		}
	},


};



