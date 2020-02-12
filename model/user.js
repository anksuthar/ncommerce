'use strict'

module.exports = (sequelize, DataTypes) => {
	return sequelize.define('user', {
		firstName: {
			type: DataTypes.STRING,
			field: 'first_name',
			allowNull: false
		},
		lastName: {
			type: DataTypes.STRING,
			field: 'last_name',
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			isEmail: true, 
			unique: true
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false			
		},
		role: {
		      type: DataTypes.ENUM('admin'),
		      allowNull: false
		},
		status: {
			type: DataTypes.ENUM('active', 'inactive', 'deleted'),
			allowNull: false
		}
	});
};
