function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


var scrollbtn = document.getElementById('gotomiddle');
scrollbtn.addEventListener('click',scroll)

function scroll()
{

  window.scrollTo(0, 1350);
}


$(document).ready(function() {
  $("#main-button").click(function() {
    $(".button-options").toggleClass("show");
  });


  $("#play-button").click(function() {
    var audioPlayer = $("#audio-player")[0]; // Get the audio element
    if (audioPlayer.paused) {
      audioPlayer.play(); // Play the audio
    } else {
    }
      audioPlayer.pause(); // Pause the audio
  });



  $("#stop-button").click(function() {
    // Add functionality for Stop button
    console.log("Stop button clicked");
  });

  $("#repeat-button").click(function() {
    // Add functionality for Repeat button
    console.log("Repeat button clicked");
  });
});