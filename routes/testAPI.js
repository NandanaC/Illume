var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.send('API Working fine!');
});

module.exports = router;   