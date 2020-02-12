var express = require('express');
var router = express.Router();
var db = require('../config/db');
var baseModel = require('../model/base');
var relatedModel = db.user;

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

router.get('/create-tabels', async (req, res, next) => {
	let createResponse;
	try {
		createResponse = await  baseModel.createTabels();
	} catch(err) {
		res.send('respond with a error' + JSON.stringify(err));
		return;
	}
	res.status(200).send('respond with a resource' +JSON.stringify(createResponse));
});

router.get('/create', async (req, res, next) => {
	let insetedRespons;
	try {
		let data = req.query;
		insetedRespons = await baseModel.insert(relatedModel,data);
	} catch(err) {
		console.log(err);
		res.status(500).send('respond with a error' + JSON.stringify(err));
		return;
	}
	res.status(200).send('respond with a resource ' + insetedRespons.id + ' firstName = '+ insetedRespons.firstName);
});

module.exports = router;
