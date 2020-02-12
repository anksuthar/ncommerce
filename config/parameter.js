'use strict'

var parameter = {
	DATABASE_DIALECT: 'mysql',
	DATABASE_HOST: 'localhost',
	DATABASE_PORT: '',
	DATABASE_NAME: 'ncommerce',
	DATABASE_USERNAME: 'root',
	DATABASE_PASSWORD: '',
	DATABASE_POOL: {
		max: 5,
		min: 0,
		idle: 10000
	}};

module.exports = parameter;
