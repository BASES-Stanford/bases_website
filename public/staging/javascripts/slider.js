var makeSlideshow = function(selector, width) {
  selector.bjqs({
  	animtype      : 'slide',
  	height        : '100vh',
  	width         : width,
  	responsive    : true,
  	showmarkers   : false,
  	keyboardnav   : true,
  	hoverpause    : true,
  	automatic     : false,
  	nexttext      : '&nbsp;',
  	prevtext      : ' ',
  	usecaptions   : false,
  	responsive    : true,
  	animduration  : 300
  });
};

$(function($) {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  var width = $(document).width();

  makeSlideshow($('#speakers'), width);

  $(window).resize(function() {
    var width = $(window).width();
    if (width > 800) {
      $('header nav').css('display', 'inline-block');
    }
    $('.slideshow').each(function() {
      var numSlides = $(this).find('li').length;
      $(this).css('max-width', width + 'px');
      $(this).find('li.speaker.bjqs-slide').css('width', width + 'px');
      $(this).find('.bjqs').css('width', width + 'px');
      $(this).find('div.bjqs-wrapper').css('width', width + 'px');
      $(this).find('ul.bjqs').css({
        width: (width * (numSlides))  + 'px'
      });
      $(this).find('ul li').css('width', width + 'px');
    });
  });

  $('header a#mobile-nav-toggle').on('click', function() {
    var nav = $(this).siblings('nav');
    nav.css('display', nav.css('display') == 'none' ? 'inline-block' : 'none');
  });

});
