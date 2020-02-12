'use strict'

module.exports = (sequelize, DataTypes) => {
	return sequelize.define('category', {
		parentId: {
			type: DataTypes.UUID,
			allowNull: false
		},
		path: {
			type: DataTypes.STRING,
			allowNull: false
		},
		status: {
			type: DataTypes.ENUM('active', 'inactive', 'deleted'),
			allowNull: false
		}
	});
};
