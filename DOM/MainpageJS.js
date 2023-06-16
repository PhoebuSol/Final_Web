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

  var audioPlayer = $("#audio-player")[0];

  $("#main-button").click(function() {
    $(".button-options").toggleClass("show");
  });


  $("#play-button").on('click' , function() {
     // Get the audio element
    if (audioPlayer.paused) {
      audioPlayer.play(); // Play the audio
    }
      // Pause the audio
  });


  $("#stop-button").on('click' , function() {
  
    if (audioPlayer.paused != true) {
      audioPlayer.pause(); 
    }
  });

  $("#repeat-button").on('click' , function() {
    // Add functionality for Repeat button
    if(audioPlayer.currentTime != 0)
    {
      audioPlayer.currentTime = 0;
      audioPlayer.play()
    }
     
    
    // Play the audio
    
  });
});