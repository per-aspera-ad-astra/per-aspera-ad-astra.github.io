// Validate
var $form = $('#contact-form');

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
			noLinks: true
		},
		email: {
			required: true,
			email: true,
			noLinks: true
		},
		message: {
			required: true,
			noLinks: true
		}
	},
	messages: {
		name: {
			required: "This field is required",
			minlength: "This field must be between 2 and 20 characters",
			maxlength: "This field must be between 2 and 20 characters",
			noLinks: "Links are prohibited"
		},
		email: {
			required: "This field is required",
			email: "Enter a valid e-mail address",
			noLinks: "Links are prohibited"
		},
		message: {
			required: "This field is required",
			maxlength: "Up to 100 characters",
			noLinks: "Links are prohibited"
		}
	},
	errorClass: "invalid",
	errorElement: "span",
	submitHandler: function (form) {
		var data = new FormData(form);
		$.ajax({
			type: "POST",
			enctype: 'multipart/form-data',
		    url: "./action.php",
		    data: data,
          processData: false,
          contentType: false,
          cache: false,
          timeout: 600000,
		    success: function () {
				$(form).parent().append("<div class='success-msg'>Your message has been sent</div>");
				$(form).parent().addClass('success-form');
	        $('.message')
	          .fadeIn(1500, function () {
	          $('.message');
	        });
			},
			error: function (e) {
        console.log("ERROR : ", e.responseText);
        $(form).parent().append("<div class='invalid-msg'>Error, your message can`t be sent</div>");
      }
		});
		return false;
	}

});
