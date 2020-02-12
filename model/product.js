'use strict'

module.exports = (sequelize, DataTypes) => {
	return sequelize.define('product', {
		status: {
			type: DataTypes.ENUM('active', 'inactive', 'deleted'),
			allowNull: false
		}
	});
};
