// Menu
$(document).ready(function(){
  $('.burger-btn').on('click', function(e){
    $('.nav').addClass('show-menu');
  });

  $('.close-btn').on('click', function(e){
    $('.nav').removeClass('show-menu');
  });
});

// datepicker
$('[data-toggle="datepicker"]').datepicker({
  language: 'ru-RU'
});

// Accordion
$(document).ready(function(){
	var allPanels = $('.faq-inner .faq-item-text').hide();
	allPanels.first().show();
	var allTitles = $('.faq-inner .faq-item-title');
	allTitles.first().addClass('active');

	allTitles.click(function(e) {
		e.preventDefault();
		$this = $(this);
		$target =  $this.parent().find('.faq-item-text');

		$this.parents('.faq-inner').find('.faq-item-text').slideUp();

		if($target.is(':hidden')){
		  $target.slideDown();
		  $this.parents('.faq-inner').find('.faq-item-title').removeClass('active');
		}

		$this.toggleClass('active');

		return false;
	});
});

// jcf
$(function() {
  jcf.replaceAll();
});


// Scroll to anchor
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
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
