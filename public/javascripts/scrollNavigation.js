$(document).ready(function() {
  var destination = window.location.hash;
  if (destination) scrollTo(destination);
});

function scrollTo(destination){
  $("html,body").animate({
    scrollTop: $(destination).offset().top
    }, "slow");
}