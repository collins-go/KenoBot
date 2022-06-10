const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:meridian@167.99.85.138:5432/kenobot')

const Users = require('./models/Users.js')(sequelize, Sequelize.DataTypes);
const CurrencyShop = require('./models/CurrencyShop.js')(sequelize, Sequelize.DataTypes);
const UserItems = require('./models/UserItems.js')(sequelize, Sequelize.DataTypes);

UserItems.belongsTo(CurrencyShop, { foreignKey: 'item_id', as: 'item' });

Users.prototype.addItem = async function(item) {
    const useritem = await UserItems.findOne({
        where: { user_id: this.user_id, item_id: item.id },
    });

    if (useritem) {
        useritem.amount += 1;
        return useritem.save();
    }

    return UserItems.create({ user_id: this.user_id, item_id: item.id, amount: 1 });
};

Users.prototype.getItems = function() {
    return UserItems.findAll({
        where: { user_id: this.user_id },
        include: ['item'],
    });
};

module.exports = { Users, CurrencyShop, UserItems };