var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Contact = require('../models/Contact');

/* SAVE contact */
router.post('/', function(req, res, next) {
  Contact.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;