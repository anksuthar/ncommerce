var db = require('../config/db');

exports.findAndCountAll = function (table, search, offset, limit) {
	return table.findAndCountAll({
		where: search,
		offset: offset,
		limit: limit
	}).then(result => {
		return result;
	});
};

exports.createTabels = function () {
	return db.sequelize.sync({ force: false }).then(() => {
		return 'table create' ;
	}).catch(error => {
		throw error;
	})
};

exports.insert = function (table, data, conf = {}) {
	return table.create(data, conf).then(row => {
		return row;
	}).catch(error => {
		throw error;
	});
};

exports.update = function (table, updateData, condtion) {
	return table.update(
			updateData,
			{where : condtion}
		).then(()  => {
		return  'update done';
	}).catch(error => {
		throw error;
	});
};

exports.delete = function (table,  condtion) {
	return table.destroy(
			{ where : condtion }
		).then(() => {
		return 'delete done';
	}).catch(error => {
		throw error;
	});
};

