module.exports = (sequelize, DataTypes) => {
	return sequelize.define('currency_shop', {
		name: {
			type: DataTypes.STRING,
			unique: true,
		},
		cost: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		item_encumberance:{
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		item_rarity: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		item_description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		// item_thumbnail: {
		// 	type: DataTypes.STRING,
		// 	allowNull: false,
		// }
	}, {
		timestamps: false,
	});
};