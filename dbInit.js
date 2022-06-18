const {Sequelize, sequelize}  = require('./connect');


const CurrencyShop = 
require('./models/CurrencyShop.js')(sequelize, Sequelize.DataTypes);
require('./models/Users.js')(sequelize, Sequelize.DataTypes);
require('./models/UserItems.js')(sequelize, Sequelize.DataTypes);

const force = process.argv.includes('--force') || process.argv.includes('-f');

sequelize.sync({ force }).then(async () => {
    const shop = [
        //CurrencyShop.upsert({ name: '', cost: 0, item_encumberance: 0, item_rarity: 0, item_description: `` }),
        CurrencyShop.upsert({ name: 'Comlink (handheld)', cost: 25, item_encumberance: 0, item_rarity: 0, item_description: `This piece of gear is used to communicate between other comlinks. The handheld versions are only viable for extreme distances on planets, reaching up to low orbit. However, long range versions can usually reach the entire planet in range.`}),
        CurrencyShop.upsert({ name: 'Field Ration Pack', cost: 5, item_encumberance: 0, item_rarity: 0, item_description: `Single meal` }),
        CurrencyShop.upsert({ name: 'Mk. III Modular Backpack', cost: 75, item_encumberance: 0, item_rarity: 1, item_description: `Increases encumbrance threshold by 2. Extra pockets increase the encumbrance threshold by 1 (6 can be attached)`}),
    ];

    await Promise.all(shop);
    console.log('Database synced');

    sequelize.close();
}).catch(console.error);