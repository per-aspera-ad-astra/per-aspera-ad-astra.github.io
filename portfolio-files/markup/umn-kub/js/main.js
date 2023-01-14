// Menu
$(document).ready(function(){
  $('.burger-btn').on('click', function(event){
    $(this).toggleClass('active');
    $('.nav-list').toggleClass('show-nav');
  });

  $('.nav-list__item a').on('click', function(event){
    $('.nav-list').removeClass('show-nav');
    $('.burger-btn').removeClass('active');
  })
});

$(document).on('click', function(event){
  var $trigger = $('.nav');
  if($trigger !== event.target && !$trigger.has(event.target).length){
    $('.nav-list').removeClass('show-nav');
    $('.burger-btn').removeClass('active');
  }
});

// Scroll top btn
$(document).ready(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scroll-top').fadeIn();
    } else {
      $('.scroll-top').fadeOut();
    }
  });

  //Click event to scroll to top
  $('.scroll-top').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
});


// Modal
$('.btn-modal').magnificPopup({
	type: 'inline'
});

$('.btn-popup').magnificPopup({
	type: 'image',
  closeBtnInside: false,
  image: {
		verticalFit: false
	},

});


// Accordion
$(document).ready(function(){
	var allPanels = $('.faq__inner .faq__item-text').hide();
	var allTitles = $('.faq__inner .faq__item-title');

	allTitles.click(function(e) {
		e.preventDefault();
		$this = $(this);
		$target =  $this.parent().find('.faq__item-text');

		$this.parents('.faq__inner').find('.faq__item-text').slideUp();

		if($target.is(':hidden')){
		  $target.slideDown();
		  $this.parents('.faq__inner').find('.faq__item-title').removeClass('active');
		}

		$this.toggleClass('active');

		return false;
	});
});

// Scroll to anchor
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .not('[href="#modal"]')
  .not('[href="#modal2"]')
  .not('[href="#modal3"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });
