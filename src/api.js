const surfguru = require('surfguru-parser');
const express = require('express');
const router = express.Router();
const cache = require('memory-cache');
const TTL = 1800000; // half an hour

router.get('/simple/:id', function (req, res) {
	surfguru(req.params.id)
		.then(data => {
			cache.put(req.originalUrl, data, TTL);
			res.json(data);
		})
		.catch(err => res.status(err.statusCode).json(err.statusCode));
});


module.exports = router;