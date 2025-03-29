alert("Click 'OK'")
// Get the video
var vid = document.getElementById("background-video");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (vid.paused) {
    vid.play();
    btn.innerHTML = "Pause";
  } else {
    vid.pause();
    btn.innerHTML = "Play";
  }
}

