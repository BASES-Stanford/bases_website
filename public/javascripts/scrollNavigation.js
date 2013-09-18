$(document).ready(function() {

  if (isValidHash(window.location.hash)) {
    scrollTo(window.location.hash);
  }

  $("a").click(function(e) {
    var destination = $(this).attr("href");
    if (isValidHash(destination)) {
      e.preventDefault();
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