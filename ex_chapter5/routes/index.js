var express = require('express');
var data = require('../DAO/productDAO.js')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express', data });
});

module.exports = router;