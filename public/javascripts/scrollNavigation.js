$(document).ready(function() {

  if (isValidHash(window.location.hash)) {
    scrollTo(window.location.hash);
  }

  $("a").click(function(e) {
    var destination = $(this).attr("href");
    if (isValidHash(destination) && window.history) {     // window.history not supported by IE8 
      e.preventDefault();
      window.history.pushState(null, null, destination);  // Update hash w/o triggering page jump
      scrollTo(destination);
    }
  });

});

function scrollTo(destination) {
  $("body").animate({
    scrollTop: $(destination).offset().top
    }, "slow");
}

function isValidHash(hash) {
  return hash.indexOf("#") === 0;
}