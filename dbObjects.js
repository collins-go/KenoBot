const {Sequelize, sequelize}  = require('./connect');

const Users = require('./models/Users.js')(sequelize, Sequelize.DataTypes);
const GearShop = require('./models/GearShop.js')(sequelize, Sequelize.DataTypes);
const UserItems = require('./models/UserItems.js')(sequelize, Sequelize.DataTypes);
const Qualities = require('./models/Qualities.js')(sequelize, Sequelize.DataTypes);

UserItems.belongsTo(GearShop, { foreignKey: 'item_id', as: 'item' });

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
        order: sequelize.literal('item','ASC'),
        include: ['item'],
    });
};

GearShop.prototype.getItemList = function() {
    return GearShop.findAll({
        include: ['item'],
    });
};

module.exports = { Users, GearShop, UserItems };