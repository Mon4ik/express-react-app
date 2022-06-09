var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
	res.render('react', { file: "index", title: "Home" });
});

module.exports = router;
