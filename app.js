
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
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
app.get('/users', user.list);

//Programs
app.get('/challenge', routes.index);
app.get('/programs', routes.index);
app.get('/programs/branding', routes.branding);
app.get('/programs/eChallenge', routes.eChallenge);
app.get('/programs/socialEChallenge', routes.socialEChallenge);
app.get('/programs/productShowCase', routes.productShowCase);
app.get('/programs/eBootCamp', routes.eBootCamp);
app.get('/programs/etl', routes.etl);
app.get('/programs/hackspace', routes.hackspace);
app.get('/programs/profDev', routes.profDev);
app.get('/programs/core', routes.core);
app.get('/programs/freshmanBat', routes.freshmanBat);
app.get('/programs/internship', routes.internship);
//History
app.get('/history', routes.index);
app.get('/history/pastWinners', routes.pastWinners);
app.get('/history/alumni', routes.alumni);
//Get Involved
app.get('/getInvolved/careerFairs', routes.careerFairs);
app.get('/getInvolved', routes.index);
app.get('/getInvolved/digest', routes.digest);
app.get('/getInvolved/registration', routes.registration);
// Media
app.get('/media', routes.index);
app.get('/media/events', routes.events);
app.get('/media/inTheNews', routes.inTheNews);
app.get('/media/brandingGuideLines', routes.brandingGuideLines);

//Blog
//No pages here, just direct link
//Partners
app.get('/partners', routes.index);
app.get('/partners/sponsors', routes.sponsors);
app.get('/partners/boardOfAdvisors', routes.boardOfAdvisors);
// In case of bad routing
//app.get('/*', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
