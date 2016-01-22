//youtube
var bodyEl = document.body,
videoWrap = document.querySelector('.video-wrap'),
videoEl = videoWrap.querySelector('#video'),
playCtrl = document.querySelector('.action--play'),
closeCtrl = document.querySelector('.action--close');



// function play() {
// 	stopVideo();
// 	videoEl.playVideo();
// 		// videoEl.currentTime = 0;
// 		// classie.remove(videoWrap, 'video-wrap--hide');
// 		// classie.add(videoWrap, 'video-wrap--show');
// 		// setTimeout(function() {videoEl.play();}, 600);
// 	}

	// function hide() {
	// 	classie.remove(videoWrap, 'video-wrap--show');
	// 	classie.add(videoWrap, 'video-wrap--hide');
	// 	videoEl.pause()
	// }



// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {

  player = new YT.Player(videoEl, {
    height: '390',
    width: '640',
    controls: 0,
    videoId: 'M7lc1UVf-VE',
    events: {
     'onReady': onPlayerReady,
     'onStateChange': onPlayerStateChange
   }
 });

  // 4. The API will call this function when the video player is ready.

  function onPlayerReady(event) {

    // bind events

    playCtrl.addEventListener('click', playVideo);
    closeCtrl.addEventListener('click', hideVideo);
    videoEl.addEventListener('canplaythrough', allowPlayVideo);
    videoEl.addEventListener('ended', hideVideo);



  }
  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(playVideo, 6000);
      done = true;
    }
  }
  function allowPlayVideo() {
      classie.add(bodyEl, 'video-loaded');
    }
    function playVideo() {
      player.stopVideo();
      classie.remove(videoWrap, 'video-wrap--hide');
      classie.add(videoWrap, 'video-wrap--show');
      setTimeout(function() {player.playVideo();}, 600);
    }
    function hideVideo() {
      classie.remove(videoWrap, 'video-wrap--show');
      classie.add(videoWrap, 'video-wrap--hide');
      player.pauseVideo();
    }
    function stopVideo() {
      player.stopVideo();
    }

};
