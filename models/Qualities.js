module.exports = (sequelize, DataTypes) => {
	return sequelize.define('qualities', {
		name: {
			type: DataTypes.STRING,
			unique: true,
		},
		search_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		status: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		advantage: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			allowNull: true,
		},
		ranked: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		effect: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		source: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	}, {
		timestamps: false,
	});
};