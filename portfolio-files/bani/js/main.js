$(document).ready(function(){

	// Scroll Anchor
	$('a[href*="#"]').bind('click', function(e) {
		e.preventDefault();
		var target = $(this).attr("href");

		$('html, body').stop().animate({
			scrollTop: $(target).offset().top - $('.main-nav').height()
		}, 500, function() {});

		return false;
	});

	// Margin on body
	$('body').css({
		'padding-top': $('.main-nav').height() - 2
	})

	// Fixed header
	$(window).scroll(function(){
	    if ($(window).scrollTop() >= 200) {
	       $('.main-nav').addClass('main-nav-fixed');
	    }
	    else {
	       $('.main-nav').removeClass('main-nav-fixed');
	    }
	});

	// Modal
	var modal = document.getElementById('modal');
	// Get the button that opens the modal
	var btn = document.getElementsByClassName('modal-btn')[0];
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName('modal-close')[0];
	// When the user clicks on the button, open the modal 
	btn.onclick = function(event) {
		event.preventDefault();
	    modal.style.display = 'block';
	}
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = 'none';
	}
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = 'none';
	    }
	}

	// Slick slider
	$('.header__slider-inner').slick({
		infinite: true,
		autoplay: true,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('#phone').mask('+7(999) 999-99-99');
});


// Validate
var $form = $('#callback');

$.validator.addMethod("validName", function(value, element) {
	return this.optional(element) || value == value.match(/[а-яё ]{2,20}/i);
});

$.validator.addMethod("noLinks", function(value, element) {
	return !(/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm).test(value);
});

// Form first
$form.validate({
	debug: true,
	rules: {
		name: {
			required: true,
			minlength: 2,
			maxlength: 20,
			validName: true
		},
		tel: {
			required: true
		},
		date: {
			required: true,
			minlength: 5,
			maxlength: 20,
			noLinks: true
		},
		time: {
			required: true,
			minlength: 5,
			maxlength: 20,
			noLinks: true
		}
	},
	messages: {
		name: {
			required: "Обязательное поле",
			minlength: "Имя должно содержать от 2 до 20 символов",
			maxlength: "Имя должно содержать от 2 до 20 символов",
			validName: "Только буквы русского алфавита"
		},
		phone: {
			required: "Обязательное поле"
		},
		date: {
			required: "Обязательное поле",
			minlength: "Поле должно содержать от 5 до 20 символов",
			maxlength: "Поле должно содержать от 5 до 20 символов",
			noLinks: "Ссылки запрещены"
		},
		time: {
			required: "Обязательное поле",
			minlength: "Поле должно содержать от 5 до 20 символов",
			maxlength: "Поле должно содержать от 5 до 20 символов",
			noLinks: "Ссылки запрещены"
		}
	},
	errorClass: "invalid",
	errorElement: "span",
	submitHandler: function (form) {
		$.ajax({
		    type: "POST",
		    url: "./action.php",
		    data: $(form).serialize(),
		    success: function () {
		        $(form).append("<div class='success-msg'>Ваша заявка была отправлена!</div>");
		        $(form).find($('.submit-btn')).prop('disabled', true).addClass('btn-disabled');
		        $('.message')
		            .fadeIn(1500, function () {
		            $('.message');
		        });
		    }
		});
		return false;
	}
});