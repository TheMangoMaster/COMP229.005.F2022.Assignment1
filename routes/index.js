// File Name: index.js
// Name: Abdul Rahman Saud
// ID: 301227450
// Date: 8 Oct 2022

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { 
    title: 'TheMangoMaster',
    name: 'Abdul Rahman Saud', 
  }
  );
});

// GET about page
router.get('/about', function(req, res, next) {
  res.render('index', 
  { 
    title: 'About Me',
    name: 'Abdul Rahman Saud' 
  }
  );
});

// GET projects page
router.get('/projects', function(req, res, next) {
  res.render('projectservices', 
  { 
    title: 'Projects' 
  }
  );
});

// GET services page
router.get('/services', function(req, res, next) {
  res.render('projectservices', 
  { 
    title: 'Services' 
  }
  );
});

// GET contact page
router.get('/contact', function(req, res, next) {
  res.render('contact', 
  { 
    title: 'Contact Me' 
  }
  );
});

module.exports = router;
