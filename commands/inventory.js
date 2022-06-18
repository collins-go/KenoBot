const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const Sequelize = require('sequelize');
const { Users, CurrencyShop } = require('../dbObjects');


module.exports = {
    requiredChannel: 'banking-clan',
    data: new SlashCommandBuilder()
        .setName('inventory')
        .setDescription('Kenobot will tell you what you have in your inventory'),
        
    async execute(interaction, currency) {
        const target = await interaction.options.getUser('user') || interaction.user;
        if(!target) {
            
            return interaction.reply(`There is no inventory for this character. You need to buy something first, so try /buy Comlink (handheld)`)
        }


        //console.log(`Pass 1: Target ID ${target.id}`);
        const target2 = await target.id;
        //console.log(`Pass 2: Target ID 2 ${target2}`);
        let user = await Users.findOne({ where: {user_id: target2}});
        if (user) {
            // record found
            //console.log(`Pass 3: My God, it printed the ${user} value!`);
            //console.log(`Pass 3.25: The value is ${user.user_id}`)
        } else {
            // not found
            //console.log(`Pass 3.5: failed at line 30`)
        };
    
        const items = await user.getItems(target2);
        //console.log(`Pass 4: ${items}`);

        const channel = '980405072993333269';
        const embed3 = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('You asked Kenobi to check your inventory')
            .setAuthor({ name: 'Kenobi', iconURL: 'https://i.imgur.com/bdZRNUd.jpeg', url: 'https://discord.com/channels/970705432828080129/980405072993333269' })
            .setDescription('"This is what you are carrying"')
            .setThumbnail('https://i.imgur.com/5ZXoFJf.png')
            .addFields(
                { name: 'Inventory', value: `${interaction.user} currently has ${items.map(i => `${i.amount} ${i.item.name}`).join(', ')}` },
            )
            .setTimestamp()
            .setFooter({ text: 'If you believe this is in error, contact the GM.' });


        if (interaction.channel.id.includes(channel)) {

            if (!interaction.member.roles.cache.has('980405527693631488')) {

                if (!items.length) {
                    return interaction.reply(`${interaction.user} has nothing! Try buying something using /Buy Comlink (handheld)`)
                } else {
                    return messageId = await interaction.reply({ embeds: [embed3] })
                }
            } else {
                return interaction.reply(`You were right ${interaction.user}, the negotiations were short. (You have insufficient permission for this action)`)
            }
        } else {
            return interaction.reply(`${interaction.user}, Destroyers! (You aren't using that in the right place! Try <\#${channel}>)`)
        }
    }
};

