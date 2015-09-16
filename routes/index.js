/*
 * GET home page.
 */

exports.index = function(req, res){
	res.render('index');
};

exports.branding = function(req,res) {
	res.render('programs/branding');
};

exports.challenge = function(req, res) {
	res.render('programs/challenge');
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
};

exports.eBootCamp = function(req, res) {
	res.render('history/eBootCamp');
};

exports.etl = function(req, res) {
	res.render('programs/etl');
};

exports.hackspace = function(req, res) {
	res.render('programs/hackspace');
};

exports.profDev = function (req, res) {
	res.render('programs/profDev');
};

exports.core = function (req, res) {
	res.render('programs/core');
};

exports.freshmanBat = function (req, res) {
	res.render('programs/freshmanBat');
};

exports.internship = function (req, res) {
	res.render('programs/internship');
};

exports.WIE = function (req, res) {
	res.render('programs/WIE');
};

exports.pastWinners = function (req, res) {
	res.render('history/pastWinners');
};

exports.alumni = function (req, res) {
	res.render ('history/alumni');
};

exports.careerFairs = function (req, res) {
	res.render ('getInvolved/careerFairs');
};

exports.startupLunch = function (req, res) {
	res.render ('getInvolved/startupLunch');
};

exports.lessonsInLife = function(req, res) {
	res.render('getInvolved/lessonsInLife');
};

exports.digest = function (req, res) {
	res.render ('getInvolved/digest');
};

exports.registration = function (req, res) {
	res.render('getInvolved/registration');
};

exports.friends = function(req, res) {
	res.render('getInvolved/friends');
}

exports.blog = function(req, res) {
	res.redirect('http://stanfordbases.wordpress.com/');
};

exports.events = function (req, res) {
	res.render('media/events');
};

exports.inTheNews = function (req, res) {
	res.render('media/inTheNews');
};

exports.brandingGuideLines = function (req, res) {
	res.render('media/brandingGuideLines');
};

exports.sponsors = function (req, res) {
	res.render('sponsors');
};

exports.eGuide = function(req, res) {
	res.render('eguide/home');
};

exports.eGuidePrivate = function(req, res) {
	res.render('eguide/home');
};

exports.eGuideClasses = function(req, res) {
	res.render('eguide/classes');
};

exports.eGuideGroups = function(req, res) {
	res.render('eguide/groups');
};

exports.eGuideCampusResources = function(req, res) {
	res.render('eguide/campusResources');
};

exports.eGuideLabs = function(req, res) {
	res.render('eguide/labs');
};

exports.eGuideExternalResources = function(req, res) {
	res.render('eguide/externalResources');
};

exports.about = function(req, res) {
	res.render('about/team');
};

exports.boardOfAdvisors = function (req, res) {
	res.render('about/boardOfAdvisors');
};

/**********************************************************
STAGING
**********************************************************/

exports.stagingindex = function(req, res) {
	res.render('staging/index');
};

// exports.stagingtest = function(req, res) {
// 	res.render('staging/test');
// };

exports.stagingevents = function(req, res) {
	res.render('staging/events');
};

exports.stagingprograms = function(req,res) {
	res.render('staging/programs/index');
};

exports.stagingbranding = function(req,res) {
	res.render('staging/programs/branding');
};

exports.stagingchallenge = function(req, res) {
	res.render('staging/programs/challenge');
};

exports.stagingeChallenge = function(req, res) {
	res.render('staging/programs/eChallenge');
};

exports.stagingsocialEChallenge = function(req, res) {
	res.render('staging/programs/socialEChallenge');
};

exports.stagingproductShowCase = function(req, res) {
	res.render('staging/programs/productShowCase');
};

exports.staginginternal = function(req, res) {
	res.redirect('https://sites.google.com/site/baseshome/');
};

exports.stagingeBootCamp = function(req, res) {
	res.render('staging/history/eBootCamp');
};

exports.stagingetl = function(req, res) {
	res.render('staging/programs/etl');
};

exports.staginghackspace = function(req, res) {
	res.render('staging/programs/hackspace');
};

exports.stagingprofDev = function (req, res) {
	res.render('staging/programs/profDev');
};

exports.stagingcore = function (req, res) {
	res.render('staging/programs/core');
};

exports.stagingfreshmanBat = function (req, res) {
	res.render('staging/programs/freshmanBat');
};

exports.staginginternship = function (req, res) {
	res.render('staging/programs/internship');
};

exports.stagingWIE = function (req, res) {
	res.render('staging/programs/WIE');
};

exports.stagingcareerFairs = function (req, res) {
	res.render('staging/programs/careerFairs');
};

exports.stagingstartupLunch = function (req, res) {
	res.render('staging/programs/startupLunch');
};

exports.staginglessonsInLife = function(req, res) {
	res.render('staging/programs/lessonsInLife');
};

exports.stagingpastWinners = function (req, res) {
	res.render('staging/history/pastWinners');
};

exports.stagingdigest = function (req, res) {
	res.render ('getInvolved/digest');
};

exports.stagingregistration = function (req, res) {
	res.render('staging/getInvolved/registration');
};

exports.stagingfriends = function(req, res) {
	res.render('staging/getInvolved/friends');
}

exports.stagingblog = function(req, res) {
	res.redirect('http://stanfordbases.wordpress.com/');
};

exports.stagingmediaevents = function (req, res) {
	res.render('staging/media/events');
};

exports.staginginTheNews = function (req, res) {
	res.render('staging/media/inTheNews');
};

exports.stagingbrandingGuideLines = function (req, res) {
	res.render('staging/media/brandingGuideLines');
};

exports.stagingsponsors = function (req, res) {
	res.render('staging/sponsors');
};

exports.stagingeGuide = function(req, res) {
	res.render('staging/eguide/home');
};

exports.stagingeGuidePrivate = function(req, res) {
	res.render('staging/eguide/home');
};

exports.stagingeGuideClasses = function(req, res) {
	res.render('staging/eguide/classes');
};

exports.stagingeGuideGroups = function(req, res) {
	res.render('staging/eguide/groups');
};

exports.stagingeGuideCampusResources = function(req, res) {
	res.render('staging/eguide/campusResources');
};

exports.stagingeGuideLabs = function(req, res) {
	res.render('staging/eguide/labs');
};

exports.stagingeGuideExternalResources = function(req, res) {
	res.render('staging/eguide/externalResources');
};

exports.stagingabout = function(req, res) {
	res.render('staging/about/index');
};

exports.stagingofficers = function(req, res) {
	res.render('staging/about/officers');
};

exports.stagingboardOfAdvisors = function (req, res) {
	res.render('staging/about/boardOfAdvisors');
};

exports.stagingalumni = function (req, res) {
	res.render('staging/about/alumni');
};
