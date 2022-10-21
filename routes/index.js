// File Name: index.js
// Name: Abdul Rahman Saud
// ID: 301227450
// Date: 8 Oct 2022

var express = require('express');
var router = express.Router();
let controllerIndex = require('../controllers/index.controller');

/* GET home page. */
router.get('/', controllerIndex.home);

// GET about page
router.get('/about', controllerIndex.about);

// GET projects page
router.get('/projects', controllerIndex.projects);

// GET services page
router.get('/services', controllerIndex.services);

// GET contact page
router.get('/contact', controllerIndex.contact);

module.exports = router;
