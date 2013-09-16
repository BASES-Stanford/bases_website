
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.branding = function(req,res) {
	res.render('branding');
};

exports.basesChallenge = function(req, res) {
	res.render('basesChallenge');
};

exports.eBootCamp = function(req, res) {
	res.render('eBootCamp');
}
exports.etl = function(req, res) {
	res.render('etl');
}
exports.hackspace = function(req, res) {
	res.render('hackspace');
}
exports.profDev = function (req, res) {
	res.render('profDev');
}
exports.core = function (req, res) {
	res.render('core');
}
exports.freshmanBat = function (req, res) {
	res.render('freshmanBat');
}
exports.internship = function (req, res) {
	res.render('internship');
}
exports.pastWinners = function (req, res) {
	res.render('pastWinners');
}
exports.alumni = function (req, res) {
	res.render ('alumni');
}
exports.careerFairs = function (req, res) {
	res.render ('careerFairs');
}
exports.digest = function (req, res) {
	res.render ('digest');
}
exports.registration = function (req, res) {
	res.render('registration');
}

exports.events = function (req, res) {
	res.render('events');
}

exports.inTheNews = function (req, res) {
	res.render('inTheNews');
}
exports.brandingGuideLines = function (req, res) {
	res.render('brandingGuideLines');
}

exports.sponsors = function (req, res) {
	res.render('sponsors');
}

exports.boardOfAdvisors = function (req, res) {
	res.render('boardOfAdvisors');
}