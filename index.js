const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Intents, Permissions, Formatters } = require('discord.js');
const { DBClient } = require('pg');
const Sequelize = require('sequelize');
require("dotenv").config();
const { Users, CurrencyShop, UserItems } = require('./dbObjects.js');

const currency = new Collection();

Reflect.defineProperty(currency, 'add', {
	value: async (id, amount) => {
		const user = currency.get(id);

		if (user) {
			user.balance += Number(amount);
			return user.save();
		}

		const newUser = await Users.create({ user_id: id, balance: amount });
		currency.set(id, newUser);

		return newUser;
	},
});

Reflect.defineProperty(currency, 'getBalance', {
	value: id => {
		const user = currency.get(id);
		return user ? user.balance : 0;
	},
});

const { token } = require('./config.json');


const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_PRESENCES],
	partials: ['MESSAGE', 'CHANNEL', 'REACTION']
})



client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	console.log(`Registering event file: ${event.name}`)
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, currency, Users));
	} else {
		client.on(event.name, (...args) => event.execute(...args, currency, Users));
	}
}


client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction, currency, Users),
		currency.add(interaction.user.id, 1);	
	} catch (error) {
		console.error(error);
		await interaction.followUp({ content: `There was an error while executing this command!`, ephemeral: true });
	}
});



client.login(token);
