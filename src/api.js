const surfguru = require('surfguru-parser');
const express = require('express');
const router = express.Router();
const cache = require('memory-cache');
const TTL = 1800000; // half an hour

router.get('/simple/:id', function (req, res) {
	console.log('Entering backend');
	surfguru(req.params.id)
		.then(data => {
			cache.put(req.originalUrl, data, TTL);
			res.json(data);
		})
		.catch(err => {
			console.error(err);
			res.status(500).json();
		});

});


module.exports = router;