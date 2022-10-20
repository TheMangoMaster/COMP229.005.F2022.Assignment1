// File Name: index.js
// Name: Abdul Rahman Saud
// ID: 301227450
// Date: 8 Oct 2022

var express = require('express');
var router = express.Router();
let controlerIndex = require('../controllers/index.controller');

/* GET home page. */
router.get('/', controlerIndex.home);

// GET about page
router.get('/about', controlerIndex.about);

// GET projects page
router.get('/projects', controlerIndex.projects);

// GET services page
router.get('/services', controlerIndex.services);

// GET contact page
router.get('/contact', controlerIndex.contact);

module.exports = router;
