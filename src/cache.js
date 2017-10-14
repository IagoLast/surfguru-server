const express = require('express');
const router = express.Router();
const cache = require('memory-cache');
const api = require('./api');


router.get('/simple/:id', cacheMiddleware);

function cacheMiddleware(req, res, next) {
	let cached = cache.get(req.originalUrl);
	if (cached) {
		console.log('cached');
		return res.json(cached);
	} else {
		console.log('not cached');
		next();
	}
}

module.exports = router;