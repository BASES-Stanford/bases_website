(function(){
  "use strict";
  
  // TODO: Make the workshop page rendered from a db entry for all workshops
  exports.websiteWorkshop = function(req, res, next){
    res.render("programs/hackspace_workshops/website");
  };

  exports.workshops = function(req, res, next){
    res.render("programs/hackspace_workshops/index");
  };
}());
