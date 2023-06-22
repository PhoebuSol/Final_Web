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

const zoomElements = document.querySelectorAll('.sc');
 zoomElements.forEach((element) => {
   element.addEventListener('mouseover', () => {
     element.classList.add('hovered');
   });
   element.addEventListener('mouseout', () => {
      element.classList.remove('hovered');
   });
  });


  $(document).ready(function() {
  var chatWindow = $('#chat-window');

  $('#chat-button').click(function() {
    chatWindow.slideToggle();
    var message = $('#message-input').val();
    if (message !== '') {
      $('#message-input').val('');
    }
   
  });

  $('#close-button').click(function() {
    chatWindow.slideUp();
    var message = $('#message-input').val();
    if (message !== '') {
      $('#message-input').val('');
    }
  });

  $('#send-button').click(function() {
    var message = $('#message-input').val();
    if (message !== '') {
      var messageElement = $('<div class="message user">' + message + '</div>');
      $('#chat-body').append(messageElement);
      $('#message-input').val('');
    }
  });


  
  // Automatically show chat window after 5 seconds
  setTimeout(function() {
    chatWindow.slideDown();
  }, 5000);
});


const userInput = document.getElementById("message-input");
const typingDots = document.getElementById("typing-dots");
let typingTimeout;

userInput.addEventListener("input", function() {
  clearTimeout(typingTimeout);
  typingDots.style.display = "block";
  typingTimeout = setTimeout(function() {
    typingDots.style.display = "none";
  }, 1000); // Adjust the delay here (milliseconds)
});


