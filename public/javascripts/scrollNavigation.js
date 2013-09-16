$(document).ready(function() {
  var destination = window.location.hash;
  if (destination) {
    
  }
});

function scrollTo(id){
  $('html').animate({
    scrollTop: $("#" + id).offset().top},
    'slow');
}