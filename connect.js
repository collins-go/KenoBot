const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:meridian@178.128.161.102:5432/kenobot')

module.exports = {
    Sequelize,
    sequelize
};