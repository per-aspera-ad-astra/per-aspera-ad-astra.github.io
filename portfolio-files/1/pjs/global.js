(function ($) {
    'use strict';
    /*==================================================================
        [ Daterangepicker ]*/
    try {
        $('.js-datepicker').daterangepicker({
            "singleDatePicker": true,
            "showDropdowns": true,
            "autoUpdateInput": false,
            locale: {
                format: 'DD/MM/YYYY'
            },
        });
    
        var myCalendar = $('.js-datepicker');
        var isClick = 0;
    
        $(window).on('click',function(){
            isClick = 0;
        });
    
        $(myCalendar).on('apply.daterangepicker',function(ev, picker){
            isClick = 0;
            $(this).val(picker.startDate.format('DD/MM/YYYY'));
    
        });
    
        $('.js-btn-calendar').on('click',function(e){
            e.stopPropagation();
    
            if(isClick === 1) isClick = 0;
            else if(isClick === 0) isClick = 1;
    
            if (isClick === 1) {
                myCalendar.focus();
            }
        });
    
        $(myCalendar).on('click',function(e){
            e.stopPropagation();
            isClick = 1;
        });
    
        $('.daterangepicker').on('click',function(e){
            e.stopPropagation();
        });
    
    
    } catch(er) {console.log(er);}
    /*[ Select 2 Config ]
        ===========================================================*/
    
    try {
        var selectSimple = $('.js-select-simple');
    
        selectSimple.each(function () {
            var that = $(this);
            var selectBox = that.find('select');
            var selectDropdown = that.find('.select-dropdown');
            selectBox.select2({
                dropdownParent: selectDropdown
            });
        });
    
    } catch (err) {
        console.log(err);
    }
    

})(jQuery);

/************Custom JS****************/

    window.card_button = '#card-button';
    window.card_element = '#card-element';
    window.payment_form = "payment-form";
    window.error_bucket = '.error-stripe';
    window.disable_cls = 'disable-button-class-serges';
    window.success_redirect = "https://brightly.eco/thank-you-membership";
    window.loader_cls = '.loader';
    window.hiding_cls = 'hide';
    window.success_clr = "#77936d";
    window.failure_clr = "tomato";



    window.stripe = Stripe(window.key);
    window.elements = stripe.elements();
    window.cardElement = elements.create('card', {hidePostalCode: true});
    window.cardholderName = jQuery('#fname').val()+' '+jQuery('#lname').val();
    cardElement.mount(window.card_element);
    var cardButton = jQuery(card_button);

    function mendatory_stop(msg='')
    {
        jQuery(card_button).prop('disabled', false);
        jQuery(card_button).attr('disabled', false);
        jQuery(card_button).removeClass(disable_cls);
        jQuery(error_bucket).css('color',failure_clr);
        jQuery(error_bucket).html(msg);
        jQuery(loader_cls).addClass(hiding_cls);
    }
    function disablity_start()
    {
        jQuery(card_button).prop('disabled', true);
        jQuery(card_button).attr('disabled', true);
        jQuery(card_button).addClass(disable_cls);
        jQuery(error_bucket).css('color',failure_clr);
        jQuery(error_bucket).html('');
        jQuery(loader_cls).removeClass(hiding_cls);
    }
    function success_feature(msg='')
    {
        jQuery(card_button).prop('disabled', false);
        jQuery(card_button).attr('disabled', false);
        jQuery(card_button).removeClass(disable_cls);
        jQuery(error_bucket).css('color',success_clr);
        jQuery(error_bucket).html(msg);
        jQuery(loader_cls).addClass(hiding_cls);
        //window.location.href = success_redirect;           
    }
    function clear_all_errors()
    {
        jQuery(card_button).prop('disabled', false);
        jQuery(card_button).attr('disabled', false);
        jQuery(card_button).removeClass(disable_cls);
        jQuery(error_bucket).html("");
        jQuery(loader_cls).addClass(hiding_cls);
    }
    function error_handing_bot(result)
    {
        if(typeof result.error === 'string')
        {
           mendatory_stop(result.error);

        }
        else if (result.error.message)
        {
           mendatory_stop(result.error.message); 
        }
        else
        {
            mendatory_stop('Something is broken');
        }

    }
    function name_val()
    {
        return $("#fname").val()+' '+$("#lname").val();
    }


    jQuery(document).ready(function(){
        cardButton.on('click',function(event){
            disablity_start();

            var allAreFilled = true;
            document.querySelectorAll("[required]").forEach(function(i) {
            if (!allAreFilled) return;
            if (!i.value) allAreFilled = false;
            });
            if (!allAreFilled) 
            {
                mendatory_stop('All fields are Required.');
                return false;
            }



            stripe.createPaymentMethod('card', cardElement, {
            billing_details: {
                name: name_val(),
                email:$("#email").val(),
                phone:$("#phone").val(),
                }
            }).then(function(result) {

            if (result.error) {
                error_handing_bot(result);
            } else {

              var amount = ($("#amount").val())*100;
              var phone = $("#phone").val();
              var name = name_val();
              var email = $("#email").val();
              var fnote = $("#fnote").val();
              var payments = JSON.stringify({ 
                payment_method_id: result.paymentMethod.id, 
                amount : amount,
                phone : phone,
                name : name,
                email : email,
                fnote : fnote 

              });
              $.ajax({
                url: window.ajaxpath+'confirm_payment.php',
                type : "POST",
                dataType : 'json',
                data : payments,
                success : function(result) {
                    var jsonres = JSON.stringify(result);


                    if (result.error) {
                        error_handing_bot(result);
                    } else if (result.requires_action) {
                      // Use Stripe.js to handle required card action
                      stripe.handleCardAction(
                        result.payment_intent_client_secret
                      ).then(function(result) {
                        if (result.error) {
                            error_handing_bot(result);
                        } else {
                          //console.log(result);
                          var amount = $("#amount").val()*100;
                          var phone = $("#phone").val();
                          var name = name_val();
                          var email = $("#email").val();
                          var fnote = $("#fnote").val();
                          var payments = JSON.stringify({ 
                            payment_intent_id: result.paymentIntent.id, 
                            amount : amount,
                            phone : phone,
                            name : name,
                            email : email,
                            fnote : fnote
                          });
                          $.ajax({
                            url: window.ajaxpath+'reconfirm_payment.php',
                            type : "POST",
                            dataType : 'json',
                            data : payments,
                            success : function(result) {
                                console.log('success sca');
                                if(result.success)
                                {
                                   success_feature('Thank you very much, payment is completed!');                        
                                }
                                else
                                {
                                    error_handing_bot(result);
                                }


                            },
                            error: function(xhr, resp, text) {
                               mendatory_stop(result.text);
                            }});

                        }
                      });
                    } else {
                        success_feature('Thank you very much, payment is completed!');
                    }

                },
                error: function(xhr, resp, text) {
                    console.log(text);return;
                    mendatory_stop(text);
                }});
            }
            });

        });

        jQuery(".content-area").css('padding-top','0px');
        
    });    
