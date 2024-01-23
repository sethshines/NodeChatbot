var express = require('express');
var { isServer } = require('../utils');
const { process_params } = require('express/lib/router');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'ChatBot', isServer: isServer() });
});

module.exports = router;
