
AFRAME.registerComponent('weirdness-video-handler',{
    init: function () {
     let el = this.el;
     let vid = document.querySelector("#weirdnessVid");
     vid.pause();
     el.addEventListener('mouseenter',function(){
       console.log ("hearing?");
        vid.play();
     });
     el.addEventListener('mouseleave',function(){
        vid.pause();
     });
    }
  });
  
  
  AFRAME.registerComponent('coachvid-video-handler',{
    init: function () {
     let el = this.el;
     let vid = document.querySelector("#coachvidVid");
     vid.pause();
     el.addEventListener('mouseenter',function(){
       console.log ("hearing?");
        vid.play();
     });
     el.addEventListener('mouseleave',function(){
        vid.pause();
     });
    }
  });

  // play video when user approaches vid. Pause when leaving
// const video = document.getElementById('coffeeVid');
// video.pause();
// AFRAME.registerComponent('listener', {
//   tick: function () {
//     const userPosition = this.el.getAttribute('position')["z"];

//     if (userPosition <= -17) {
//       video.play();
//     } else {
//       video.pause();
//     }
//   }
// });