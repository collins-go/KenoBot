const { SlashCommandBuilder } = require('@discordjs/builders');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:meridian@167.99.85.138:5432/kenobot')


module.exports = {
    data: new SlashCommandBuilder()
        .setName('newtag')
        .setDescription('Kenobot will add a tag (SQL Dev Action)')
        .addStringOption(option =>
            option.setName('tagname')
                .setDescription('description')
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName('tagdescription')
                .setDescription('description')
                .setRequired(true)
        ),

    async execute(interaction) {
        const user = interaction.user.id;
        const tagName = interaction.options.getString('tagname');
        const tagDescription = interaction.options.getString('tagdescription');
        if (interaction.member.roles.cache.has('970708553981624412')) {
            try {
                // equivalent to: INSERT INTO tags (name, description, username) values (?, ?, ?);
                const Tags = sequelize.define('tags', {
                    name: {
                        type: Sequelize.STRING,
                        unique: true,
                    },
                    description: Sequelize.TEXT,
                    username: Sequelize.STRING,
                    usage_count: {
                        type: Sequelize.INTEGER,
                        defaultValue: 0,
                        allowNull: false,
                    }
                });
                const tag = await Tags.create({
                    name: tagName,
                    description: tagDescription,
                    username: user,
                });
                return interaction.reply(`Tag ${tag.name} added.`),
                    await Tags.sync({ alter: true });
            }
            catch (error) {
                if (error.name === 'SequelizeUniqueConstraintError') {
                    return interaction.reply('That tag already exists.'),
                        console.log(error);
                }
                return interaction.reply('Something went wrong with adding a tag.'),
                    console.log(error);
            }
        } else {
            return interaction.reply(`You were right ${interaction.user}, the negotiations were short. (You have insufficient permission for this action)`)

        };
    }
};
