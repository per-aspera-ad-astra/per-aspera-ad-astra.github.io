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

});
