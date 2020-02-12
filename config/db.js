'use strict'

const Sequelize = require('sequelize');
const param = require('./parameter');
const sequelize = new Sequelize(param.DATABASE_NAME, param.DATABASE_USERNAME, param.DATABASE_PASSWORD, 
{
	host: param.DATABASE_HOST,
	port: param.DATABASE_PORT,
	dialect: param.DATABASE_DIALECT,
	pool: {
		max : param.DATABASE_POOL.max,
		min : param.DATABASE_POOL.min,
		idle : param.DATABASE_POOL.idle
	},
	define: {
		underscored: true,
		timestamps: true // created and updated column in db tables
	}
});

// Connect all the models/tables in the database to a db object, 
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.Op = Sequelize.Op;
db.sequelize = sequelize;

//Model/tables
db.user = require('../model/user.js')(sequelize, Sequelize);
db.category = require('../model/category.js')(sequelize, Sequelize);
db.categoryTranslation = require('../model/categoryTranslation.js')(sequelize, Sequelize);
db.product = require('../model/product.js')(sequelize, Sequelize);
db.productTranslation = require('../model/productTranslation.js')(sequelize, Sequelize);

//Relations
db.product.belongsTo(db.user); 
db.categoryTranslation.belongsTo(db.category); 
db.productTranslation.belongsTo(db.product); 

db.product.belongsToMany(db.category, {through: 'category_product'});
db.category.belongsToMany(db.product, {through: 'category_product'});

module.exports = db;
