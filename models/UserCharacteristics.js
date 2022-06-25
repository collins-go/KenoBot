module.exports = (sequelize, DataTypes) => {
	return sequelize.define('user_characteristic', {
		user_id: DataTypes.STRING,
        brawn: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
        agility: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
        intellect: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
        cunning: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
        willpower: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
        presence: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
        forceRank: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
	}, {
		timestamps: false,
	});
};