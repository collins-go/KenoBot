module.exports = (sequelize, DataTypes) => {
	return sequelize.define('user_characteristic', {
		user_id: DataTypes.STRING,
		brawn_amonut: DataTypes.INTEGER,
        agility_amount: DataTypes.INTEGER,
        intellect_amount: DataTypes.INTEGER,
        cunning_amount: DataTypes.INTEGER,
        willpower_amount: DataTypes.INTEGER,
        presence_amount: DataTypes.INTEGER,
        forceRank_amount: DataTypes.INTEGER,
	}, {
		timestamps: false,
	});
};