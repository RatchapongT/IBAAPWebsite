var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('LogIn', { title: 'LogIn' });
});

router.get('/FirstScreen', function(req, res, next) {
  res.render('FirstScreen', { title: 'FirstScreen' });
});

router.get('/GreenZone', function(req, res, next) {
    res.render('GreenZone', { title: 'GreenZone' });
});

router.get('/YellowZone', function(req, res, next) {
    res.render('YellowZone', { title: 'YellowZone' });
});

router.get('/RedZone', function(req, res, next) {
    res.render('RedZone', { title: 'RedZone' });
});

router.get('/Practice', function(req, res, next) {
    res.render('Practice', { title: 'Practice' });
});

router.get('/Triggers', function(req, res, next) {
    res.render('Triggers', { title: 'Triggers' });
});

router.get('/Notification', function(req, res, next) {
    res.render('Notification', { title: 'Notification' });
});

router.get('/SendPlan', function(req, res, next) {
    res.render('SendPlan', { title: 'SendPlan' });
});
module.exports = router;
