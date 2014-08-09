/*
 * GET home page.
 */

exports.index = function(req, res){
	res.render('index');
};

exports.branding = function(req,res) {
	res.render('programs/branding');
};

exports.eChallenge = function(req, res) {
	res.render('programs/eChallenge');
};

exports.socialEChallenge = function(req, res) {
	res.render('programs/socialEChallenge');
};

exports.productShowCase = function(req, res) {
	res.render('programs/productShowCase');
};

exports.internal = function(req, res) {
	res.redirect('https://sites.google.com/site/baseshome/');
}
exports.eBootCamp = function(req, res) {
	res.render('history/eBootCamp');
}
exports.etl = function(req, res) {
	res.render('programs/etl');
}
exports.hackspace = function(req, res) {
	res.render('programs/hackspace');
}
exports.profDev = function (req, res) {
	res.render('programs/profDev');
}
exports.core = function (req, res) {
	res.render('programs/core');
}
exports.freshmanBat = function (req, res) {
	res.render('programs/freshmanBat');
}
exports.internship = function (req, res) {
	res.render('programs/internship');
}
exports.pastWinners = function (req, res) {
	res.render('history/pastWinners');
}
exports.alumni = function (req, res) {
	res.render ('history/alumni');
}
exports.careerFairs = function (req, res) {
	res.render ('getInvolved/careerFairs');
}
exports.digest = function (req, res) {
	res.render ('getInvolved/digest');
}
exports.registration = function (req, res) {
	res.render('getInvolved/registration');
}

exports.blog = function(req, res) {
	res.redirect('http://stanfordbases.wordpress.com/');
}

exports.events = function (req, res) {
	res.render('media/events');
}

exports.inTheNews = function (req, res) {
	res.render('media/inTheNews');
}
exports.brandingGuideLines = function (req, res) {
	res.render('media/brandingGuideLines');
}

exports.sponsors = function (req, res) {
	res.render('partners/sponsors');
}

exports.boardOfAdvisors = function (req, res) {
	res.render('partners/boardOfAdvisors');
}

exports.eGuide = function(req, res) {
	res.render('eguide/home');
}

exports.eGuidePrivate = function(req, res) {
	res.render('eguide/home');
}

exports.eGuideClasses = function(req, res) {
	res.render('eguide/classes')
}

exports.eGuideGroups = function(req, res) {
	res.render('eguide/groups')
}

exports.eGuideResources = function(req, res) {
	res.render('eguide/resources')
}

exports.eGuideLabs = function(req, res) {
	res.render('eguide/labs')
}