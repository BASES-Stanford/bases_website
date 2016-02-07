
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path'),
  rootPath  = path.normalize(__dirname);

// var sass = require('node-sass');
// sass.render({
//   file: scss_filename,
//   [, options..]
// }, function(err, result) { /*...*/ });

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
app.get('/programs', routes.programs);
app.get('/programs/connects', routes.connects);
app.get('/programs/externalRelations', routes.externalRelations);
app.get('/programs/socImpact', routes.socImpact);
app.get('/programs/cnect', routes.cnect);
app.get('/programs/createspace', routes.createspace);
app.get('/programs/challenge', routes.challenge);
app.get('/programs/freshmanBat', routes.freshmanBat);
// app.get('/programs/careerFairs', routes.careerFairs);
// app.get('/programs/startupLunch', routes.startupLunch);
// app.get('/programs/lessonsInLife', routes.lessonsInLife);

//Events
app.get('/events', routes.events);

//Get Involved
app.get('/getInvolved', routes.getInvolved);
app.get('/getInvolved/friends', routes.friends);

//Media
// app.get('/media', routes.index);
// app.get('/media/events', routes.mediaevents);
// app.get('/media/inTheNews', routes.inTheNews);
// app.get('/media/brandingGuideLines', routes.brandingGuideLines);
// app.get('/e-bootcamp', routes.eBootCamp);

//Blog
// app.get('/blog', routes.blog);

//Internal
//No pages here, just direct link
app.get('/internal', routes.internal);

//Sponsors
app.get('/sponsors', routes.sponsors);

//About
app.get('/about', routes.about);
app.get('/about/team', routes.team);
app.get('/about/boardOfAdvisors', routes.boardOfAdvisors);
app.get('/about/alumni', routes.alumni);





/*************************************
BEGIN STAGING
*************************************/
app.get('/staging/', routes.stagingindex);
// // app.get('/staging/test', routes.stagingtest);

// //Programs
// app.get('/staging/programs', routes.stagingprograms);
// app.get('/staging/programs/connects', routes.stagingconnects);
// app.get('/staging/programs/externalRelations', routes.stagingexternalRelations);
// app.get('/staging/programs/socImpact', routes.stagingsocImpact);
// app.get('/staging/programs/cnect', routes.stagingcnect);
// app.get('/staging/programs/createspace', routes.stagingcreatespace);
// app.get('/staging/programs/challenge', routes.stagingchallenge);
// app.get('/staging/programs/eChallenge', routes.stagingeChallenge);
// app.get('/staging/programs/socialEChallenge', routes.stagingsocialEChallenge);
// app.get('/staging/programs/productShowCase', routes.stagingproductShowCase);
// app.get('/staging/programs/etl', routes.stagingetl);
// app.get('/staging/programs/hackspace', routes.staginghackspace);
// app.get('/staging/programs/hackspace/workshops', hackspace.workshops);
// app.get('/staging/programs/hackspace/workshops/1', hackspace.websiteWorkshop);
// app.get('/staging/programs/freshmanBat', routes.stagingfreshmanBat);
// app.get('/staging/programs/WIE', routes.stagingWIE);
// app.get('/staging/programs/careerFairs', routes.stagingcareerFairs);
// app.get('/staging/programs/startupLunch', routes.stagingstartupLunch);
// app.get('/staging/programs/lessonsInLife', routes.staginglessonsInLife);

// //Events
// app.get('/staging/events', routes.stagingevents);

// //Get Involved
// app.get('/staging/getInvolved', routes.staginggetInvolved);
// app.get('/staging/getInvolved/digest', routes.stagingdigest);
// app.get('/staging/getInvolved/registration', routes.stagingregistration);
// app.get('/staging/getInvolved/friends', routes.stagingfriends);

// //Media
// app.get('/staging/media', routes.stagingindex);
// app.get('/staging/media/events', routes.stagingmediaevents);
// app.get('/staging/media/inTheNews', routes.staginginTheNews);
// app.get('/staging/media/brandingGuideLines', routes.stagingbrandingGuideLines);
// app.get('/staging/e-bootcamp', routes.stagingeBootCamp);

// //Blog
// app.get('/staging/blog', routes.stagingblog);

// //Internal
// //No pages here, just direct link
// app.get('/staging/internal', routes.staginginternal);

// //Sponsors
app.get('/staging/sponsors', routes.stagingsponsors);
// 
// //E-Guide
// app.get('/staging/eGuide', routes.stagingeGuide);
// app.get('/staging/eGuidePrivate', routes.stagingeGuidePrivate);
// app.get('/staging/eGuideClasses', routes.stagingeGuideClasses);
// app.get('/staging/eGuideGroups', routes.stagingeGuideGroups);
// app.get('/staging/eGuideLabs', routes.stagingeGuideLabs);
// app.get('/staging/eGuideCampusResources', routes.stagingeGuideCampusResources);
// app.get('/staging/eGuideExternalResources', routes.stagingeGuideExternalResources);

// //About
// app.get('/staging/about', routes.stagingabout);
// app.get('/staging/about/team', routes.stagingteam);
// app.get('/staging/about/boardOfAdvisors', routes.stagingboardOfAdvisors);
// app.get('/staging/about/alumni', routes.stagingalumni);
/*************************************
END STAGING
*************************************/





// In case of bad routing
//app.get('/*', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
