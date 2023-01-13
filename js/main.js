// Menu
$(document).ready(function() {
  $('.menu-open').on('click', function(){
    $('.menu').addClass('show');
  });
  $('.menu-close').on('click', function(){
    $('.menu').removeClass('show');
  });
  $('.menu-inner__item').on('click', function() {
    $('.menu').removeClass('show');
  })
});

// Scroll top
$(document).ready(function(){
  $('#scroll-top').on('click', function(e) {
    e.preventDefault();
    $(".main").moveTo(1);
  });
});

// Preloader
$(window).on ('load', function () {
	var $preloader = $('#page-preloader'),
	$spinner = $preloader.find ('.spinner');
	$spinner.fadeOut ();
	$preloader.delay (350).fadeOut ('slow');
});
