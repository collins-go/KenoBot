module.exports = (sequelize, DataTypes) => {
	return sequelize.define('user_skills', {
		user_id: DataTypes.STRING,
        
        //Brawn
        brawl: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
        melee: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
        lightsaber: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
        athletics: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
        resilience: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},

        // Agility
        gunnery: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
        rangedHeavy: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
        rangedHLight: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
        coordination: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
        pilotingPlanetary: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
        pilotingSpace: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
        stealth: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
        // Intellect
        knowCoreWorld: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
        knowEducation: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
        knowLore: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
        knowOuterRim: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
        knowUnderworld: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
        knowWarfare: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
        knowXenology: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
        // Cunning
        deception: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
        perception: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
        skulduggery: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
        streetwise: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
        survival: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
        //Willpower
        coercion: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
        discipline: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
        vigilance: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
        // Presence
        charm: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
        cool: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
        leadership: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
        negotiation: {
			type: DataTypes.INTEGER,
			unique: true,
			default: 0,
			allowNull: true
		},
	}, {
		timestamps: false,
	});
};