$(function(){
  var videos = document.querySelectorAll('video');

  function enableVideos(everywhere) {
    for (var i = 0; i < videos.length; i++) {
      window.enableInlineVideo(videos[i], {everywhere: everywhere});
    }
  }

  function init(){
    enableVideos();
  }

  init();

  enableVideos();


  // Svg placeholder
  $('.phone-line').find('input').on('focus blur', function(e){

    var $icon = $(this).closest('.phone-line').find('.icon-phone');

    if($(this).is(':focus')){
      $icon.removeClass('show').addClass('hide');
    } else if(!e.target.value){
      $icon.removeClass('hide').addClass('show');
    }

  })

});
