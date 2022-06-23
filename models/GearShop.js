module.exports = (sequelize, DataTypes) => {
	return sequelize.define('gear_shop', {
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
		item_soak_bonus: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			allowNull: true,
		},
		item_ranged_def_bonus: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			allowNull: true,
		},
		item_melee_def_bonus: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			allowNull: true,
		},
		item_char_brawn_bonus: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			allowNull: true,
		},
		item_char_agility_bonus: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			allowNull: true,
		},
		item_char_intellect_bonus: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			allowNull: true,
		},
		item_char_cunning_bonus: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			allowNull: true,
		},
		item_char_willpower_bonus: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			allowNull: true,
		},
		item_char_presence_bonus: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			allowNull: true,
		},
		// item_thumbnail: {
		// 	type: DataTypes.STRING,
		// 	allowNull: true,
		// }
	}, {
		timestamps: false,
	});
};