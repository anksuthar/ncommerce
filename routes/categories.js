var express = require('express');
var router = express.Router();
var db = require('../config/db');
var baseModel = require('../model/base');
var relatedModel = db.category;


/* GET users listing. */
router.get('/', async (req, res, next) => {
	let response;
	let params = req.query;
	let offset = params.offset ? parseInt(params.offset) : 0;
	let limit = params.limit ? parseInt(params.limit) : 10;
	var search = {  status: { [db.Op.notLike]: 'deleted'} };
	response = await  baseModel.findAndCountAll(relatedModel, search, offset, limit);
	res.status(200).send(response);
});


router.get('/create', async (req, res, next) => {
	let insetedRespons;
	let categoryTranslation = db.categoryTranslation;
	try {
		let data = {
			parentId: '',
			path: '',
			status: 'active',
			categoryTranslation: [
				{name: 'Male',content: ''},
				{name: 'Female',content: ''}
			]
		};
		let conf = {include: [categoryTranslation]};
		insetedRespons = await baseModel.insert(relatedModel, data, conf);
	} catch(err) {
		console.log(err);
		res.status(500).send('respond with a error' + JSON.stringify(err));
		return;
	}
	res.status(200).send('respond with a resource ' + insetedRespons.id);
});

module.exports = router;
