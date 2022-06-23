module.exports = (sequelize, DataTypes) => {
	return sequelize.define('brawn_builder', {
		speciesBrawn: {
			type: DataTypes.INTEGER,
			unique: true,
		},
		// item_thumbnail: {
		// 	type: DataTypes.STRING,
		// 	allowNull: true,
		// }
	}, {
		timestamps: false,
	});
};