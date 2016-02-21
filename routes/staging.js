var express = require('express');
var router = express.Router();

/* Index */
router.get('/', function(req, res, next) {
  res.render('staging/index');
});

/* Programs */
router.get('/programs', function(req, res, next) {
  res.render('staging/programs/index');
});

router.get('/programs/connects', function(req, res, next) {
  res.render('staging/programs/connects');
});

router.get('/programs/externalRelations', function(req, res, next) {
  res.render('staging/programs/externalRelations');
});

router.get('/programs/socImpact', function(req, res, next) {
  res.render('staging/programs/socImpact');
});

router.get('/programs/cnect', function(req, res, next) {
  res.render('staging/programs/cnect');
});

router.get('/programs/createspace', function(req, res, next) {
  res.render('staging/programs/createspace');
});

router.get('/programs/branding', function(req, res, next) {
  res.render('staging/programs/branding');
});

router.get('/programs/challenge', function(req, res, next) {
  res.render('staging/programs/challenge');
});

router.get('/programs/eChallenge', function(req, res, next) {
  res.render('staging/programs/eChallenge');
});

router.get('/programs/socialEChallenge', function(req, res, next) {
  res.render('staging/programs/socialEChallenge');
});

router.get('/programs/productShowCase', function(req, res, next) {
  res.render('staging/programs/productShowCase');
});

router.get('/history/eBootCamp', function(req, res, next) {
  res.render('staging/history/eBootCamp');
});

router.get('/programs/etl', function(req, res, next) {
  res.render('staging/programs/etl');
});

router.get('/programs/hackspace', function(req, res, next) {
  res.render('staging/programs/hackspace');
});

router.get('/programs/profDev', function(req, res, next) {
  res.render('staging/programs/profDev');
});

router.get('/programs/core', function(req, res, next) {
  res.render('staging/programs/core');
});

router.get('/programs/freshmanBat', function(req, res, next) {
  res.render('staging/programs/freshmanBat');
});

router.get('/programs/internship', function(req, res, next) {
  res.render('staging/programs/internship');
});

router.get('/programs/WIE', function(req, res, next) {
  res.render('staging/programs/WIE');
});

router.get('/programs/careerFairs', function(req, res, next) {
  res.render('staging/programs/careerFairs');
});

router.get('/programs/startupLunch', function(req, res, next) {
  res.render('staging/programs/startupLunch');
});

router.get('/programs/lessonsInLife', function(req, res, next) {
  res.render('staging/programs/lessonsInLife');
});

/* Events */
router.get('/events', function(req, res, next) {
  res.render('staging/events');
});

/* Get Involved */
router.get('/getInvolved', function(req, res, next) {
  res.render('staging/getInvolved');
});

router.get('/getInvolved/friends', function(req, res, next) {
  res.render('staging/getInvolved/friends');
});

/* Sponsors */
router.get('/sponsors', function(req, res, next) {
  res.render('staging/sponsors');
});

/* About */
router.get('/about', function(req, res, next) {
  res.render('staging/about/index');
});

router.get('/about/team', function(req, res, next) {
  res.render('staging/about/team');
});

router.get('/about/boardOfAdvisors', function(req, res, next) {
  res.render('staging/about/boardOfAdvisors');
});

router.get('/about/alumni', function(req, res, next) {
  res.render('staging/about/alumni');
});


module.exports = router;