'use strict'

module.exports = (sequelize, DataTypes) => {
	return sequelize.define('productTranslation', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			required: true
		},
		content: {
			type: DataTypes.TEXT,
			required: true
		}
	});
};
