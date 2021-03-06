module.exports = (DataTypes) => {
	return {
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.INTEGER,
			autoIncrement: true
		},
		user_id: {
			allowNull: false,
			type: DataTypes.INTEGER
		},
		follower_id: {
			allowNull: false,
			type: DataTypes.INTEGER
		}
	};
};
