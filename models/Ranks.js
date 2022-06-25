module.exports = (sequelize, DataTypes) => {
	return sequelize.define('user_skills', {
		user_id: DataTypes.STRING,

		//Brawn
		brawlRanks: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
		meleeRanks: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
		lightsaberRanks: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
		athleticsRanks: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
		resilienceRanks: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},

		// Agility
		gunneryRanks: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
		rangedHeavyRanks: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
		rangedHLightRanks: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
		coordinationRanks: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
		pilotingPlanetaryRanks: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
		pilotingSpaceRanks: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
		stealthRanks: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
		// Intellect
		knowCoreWorldRanks: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
		knowEducationRanks: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
		knowLoreRanks: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
		knowOuterRimRanks: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
		knowUnderworldRanks: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
		knowWarfareRanks: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
		knowXenologyRanks: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
		// Cunning
		deceptionRanks: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
		perceptionRanks: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
		skulduggeryRanks: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
		streetwiseRanks: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
		survivalRanks: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
		//Willpower
		coercionRanks: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
		disciplineRanks: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
		vigilanceRanks: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
		// Presence
		charmRanks: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
		coolRanks: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
		leadershipRanks: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
		negotiationRanks: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
	}, {
		timestamps: false,
	});
};