const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:meridian@167.99.85.138:5432/kenobot')

module.exports = {
    Sequelize,
    sequelize
};