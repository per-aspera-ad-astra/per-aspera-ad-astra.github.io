$(document).ready(function(){

  // Main nav
  $('.main-nav-opener').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('open');
    $('.main-nav').slideToggle();
  });

  // Slider
  var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("header-slider__item");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }

  $('.header .prev').on('click', function(e) {
    e.preventDefault();
    plusSlides(-1);
  });
  $('header .next').on('click', function(e) {
    e.preventDefault();
    plusSlides(1);
  })

  // Carousel
  var isDown = false;
  $arrowRight = $(".partners .prev");
  $arrowLeft = $(".partners .next");
  $arrowRight.mousedown(function(){isDown = true;});
  $arrowLeft.mousedown(function(){isDown = true;});
  $(document).mouseup(function(){
      if(isDown){
          isDown = false;
      }
  });

  $arrowRight.mousedown(function() {movePlayer('+=100');});
  $arrowLeft.mousedown(function() {movePlayer('-=100');});

  function movePlayer(intMovement){
    $('.partners-inner').animate({
      'left': intMovement +'px'
    }, 50, function() {
      if (isDown){
        movePlayer(intMovement);
      }
    });
  }

  // Scroll Anchor
	$('a[href*="#"]').bind('click', function(e) {
		e.preventDefault();
		var target = $(this).attr("href");

		$('html, body').stop().animate({
			scrollTop: $(target).offset().top - 90
		}, 500, function() {});

		return false;
	});

  // Scroll top
  $('.scroll-top').on('click', function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });

});
