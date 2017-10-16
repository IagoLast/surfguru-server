const surfguru = require('surfguru-parser');

module.exports = function (req, res) {
	surfguru(req.params.id)
		.then(data => res.json(data))
		.catch(err => res.status(500).json());
}