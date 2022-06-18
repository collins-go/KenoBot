module.exports = (sequelize, DataTypes) => {
	return sequelize.define('currency_shop', {
		name: {
			type: DataTypes.STRING,
			unique: true,
		},
		search_name: {
			type: DataTypes.STRING,
			allowNull: false,
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
			type: DataTypes.TEXT,
			allowNull: false,
		},
		item_restricted: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		// item_thumbnail: {
		// 	type: DataTypes.STRING,
		// 	allowNull: false,
		// }
	}, {
		timestamps: false,
	});
};