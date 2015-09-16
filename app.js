
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , hackspace = require("./routes/hackspace")
  , http = require('http')
  , path = require('path'),
  rootPath  = path.normalize(__dirname);

var app = express();

app.configure(function(){
  // app.set('port', 3000);
  app.set('port', process.env.PORT || 80);
  app.use(express.favicon(path.join(__dirname, '/public/favicon.ico')));
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);

//Programs
app.get('/challenge', routes.index);
app.get('/programs', routes.index);
app.get('/programs/branding', routes.branding);
app.get('/programs/challenge', routes.challenge);
app.get('/programs/eChallenge', routes.eChallenge);
app.get('/programs/socialEChallenge', routes.socialEChallenge);
app.get('/programs/productShowCase', routes.productShowCase);
app.get('/programs/etl', routes.etl);
app.get('/programs/hackspace', routes.hackspace);
app.get('/programs/hackspace/workshops', hackspace.workshops);
app.get('/programs/hackspace/workshops/1', hackspace.websiteWorkshop);
app.get('/programs/profDev', routes.profDev);
app.get('/programs/core', routes.core);
app.get('/programs/freshmanBat', routes.freshmanBat);
app.get('/programs/internship', routes.internship);
app.get('/programs/WIE', routes.WIE);

//History
app.get('/history', routes.index);
app.get('/history/pastWinners', routes.pastWinners);
app.get('/history/alumni', routes.alumni);
app.get('/history/eBootCamp', routes.eBootCamp);

//Get Involved
app.get('/getInvolved', routes.index);
app.get('/getInvolved/careerFairs', routes.careerFairs);
app.get('/getInvolved/digest', routes.digest);
app.get('/getInvolved/registration', routes.registration);
app.get('/getInvolved/startupLunch', routes.startupLunch);
app.get('/getInvolved/lessonsInLife', routes.lessonsInLife);
app.get('/getInvolved/friends', routes.friends);

// Media
app.get('/media', routes.index);
app.get('/media/events', routes.events);
app.get('/media/inTheNews', routes.inTheNews);
app.get('/media/brandingGuideLines', routes.brandingGuideLines);
app.get('/e-bootcamp', routes.eBootCamp);

//Blog
app.get('/blog', routes.blog);

//Internal
//No pages here, just direct link
app.get('/internal', routes.internal);

//Sponsors
app.get('/sponsors', routes.sponsors);

//E-Guide
app.get('/eGuide', routes.eGuide);
app.get('/eGuidePrivate', routes.eGuidePrivate);
app.get('/eGuideClasses', routes.eGuideClasses);
app.get('/eGuideGroups', routes.eGuideGroups);
app.get('/eGuideLabs', routes.eGuideLabs);
app.get('/eGuideCampusResources', routes.eGuideCampusResources);
app.get('/eGuideExternalResources', routes.eGuideExternalResources);

app.get('/about', routes.about);
app.get('/about/boardOfAdvisors', routes.boardOfAdvisors);





/*************************************
BEGIN STAGING
*************************************/
app.get('/staging/', routes.stagingindex);
// app.get('/staging/test', routes.stagingtest);

app.get('/staging/events', routes.stagingevents);

//Programs
app.get('/staging/programs', routes.stagingprograms);
app.get('/staging/challenge', routes.stagingindex);
app.get('/staging/programs/branding', routes.stagingbranding);
app.get('/staging/programs/challenge', routes.stagingchallenge);
app.get('/staging/programs/eChallenge', routes.stagingeChallenge);
app.get('/staging/programs/socialEChallenge', routes.stagingsocialEChallenge);
app.get('/staging/programs/productShowCase', routes.stagingproductShowCase);
app.get('/staging/programs/etl', routes.stagingetl);
app.get('/staging/programs/hackspace', routes.staginghackspace);
app.get('/staging/programs/hackspace/workshops', hackspace.workshops);
app.get('/staging/programs/hackspace/workshops/1', hackspace.websiteWorkshop);
app.get('/staging/programs/profDev', routes.stagingprofDev);
app.get('/staging/programs/core', routes.stagingcore);
app.get('/staging/programs/freshmanBat', routes.stagingfreshmanBat);
app.get('/staging/programs/internship', routes.staginginternship);
app.get('/staging/programs/WIE', routes.stagingWIE);
app.get('/staging/programs/careerFairs', routes.stagingcareerFairs);
app.get('/staging/programs/startupLunch', routes.stagingstartupLunch);
app.get('/staging/programs/lessonsInLife', routes.staginglessonsInLife);

//History
app.get('/staging/history', routes.stagingindex);
app.get('/staging/history/pastWinners', routes.stagingpastWinners);
app.get('/staging/history/eBootCamp', routes.stagingeBootCamp);

//Get Involved
app.get('/staging/getInvolved', routes.stagingindex);
app.get('/staging/getInvolved/digest', routes.stagingdigest);
app.get('/staging/getInvolved/registration', routes.stagingregistration);
app.get('/staging/getInvolved/friends', routes.stagingfriends);

// Media
app.get('/staging/media', routes.stagingindex);
app.get('/staging/media/events', routes.stagingmediaevents);
app.get('/staging/media/inTheNews', routes.staginginTheNews);
app.get('/staging/media/brandingGuideLines', routes.stagingbrandingGuideLines);
app.get('/staging/e-bootcamp', routes.stagingeBootCamp);

//Blog
app.get('/staging/blog', routes.stagingblog);

//Internal
//No pages here, just direct link
app.get('/staging/internal', routes.staginginternal);

//Sponsors
app.get('/staging/sponsors', routes.stagingsponsors);

//E-Guide
app.get('/staging/eGuide', routes.stagingeGuide);
app.get('/staging/eGuidePrivate', routes.stagingeGuidePrivate);
app.get('/staging/eGuideClasses', routes.stagingeGuideClasses);
app.get('/staging/eGuideGroups', routes.stagingeGuideGroups);
app.get('/staging/eGuideLabs', routes.stagingeGuideLabs);
app.get('/staging/eGuideCampusResources', routes.stagingeGuideCampusResources);
app.get('/staging/eGuideExternalResources', routes.stagingeGuideExternalResources);

app.get('/staging/about', routes.stagingabout);
app.get('/staging/about/officers', routes.stagingofficers);
app.get('/staging/about/boardOfAdvisors', routes.stagingboardOfAdvisors);
app.get('/staging/about/alumni', routes.stagingalumni);
/*************************************
END STAGING
*************************************/





// In case of bad routing
//app.get('/*', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
