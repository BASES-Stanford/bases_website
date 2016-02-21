var express = require('express');
var router = express.Router();

/* Index */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* Programs */
router.get('/programs', function(req, res, next) {
  res.render('programs/index');
});

router.get('/programs/connects', function(req, res, next) {
  res.render('programs/connects');
});

router.get('/programs/connects', function(req, res, next) {
	res.render('programs/connects');
});

router.get('/programs/externalRelations', function(req, res, next) {
	res.render('programs/externalRelations');
});

router.get('/programs/socImpact', function(req, res, next) {
	res.render('programs/socImpact');
});

router.get('/programs/cnect', function(req, res, next) {
	res.render('programs/cnect');
});

router.get('/programs/createspace', function(req, res, next) {
	res.render('programs/createspace');
});

router.get('/programs/challenge', function(req, res, next) {
	res.render('programs/challenge');
});

router.get('/programs/etl', function(req, res, next) {
	res.render('programs/etl');
});

router.get('/programs/freshmanBat', function(req, res, next) {
	res.render('programs/freshmanBat');
});

router.get('/programs/careerFairs', function(req, res, next) {
	res.render('programs/careerFairs');
});

router.get('/programs/startupLunch', function(req, res, next) {
	res.render('programs/startupLunch');
});

router.get('/programs/lessonsInLife', function(req, res, next) {
	res.render('programs/lessonsInLife');
});

/* Events */
router.get('/events', function(req, res, next) {
	res.render('events');
});

/* Get Involved */
router.get('/getInvolved', function(req, res, next) {
	res.render('getInvolved');
});

router.get('/getInvolved/friends', function(req, res, next) {
	res.render('getInvolved/friends');
});

/* Sponsors */
router.get('/sponsors', function(req, res, next) {
	res.render('sponsors');
});

/* About */
router.get('/about/index', function(req, res, next) {
	res.render('about/index');
});

router.get('/about/team', function(req, res, next) {
	res.render('about/team');
});

router.get('/about/boardOfAdvisors', function(req, res, next) {
	res.render('about/boardOfAdvisors');
});

router.get('/about/alumni', function(req, res, next) {
	res.render('about/alumni');
});


module.exports = router;