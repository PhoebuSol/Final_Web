function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

window.addEventListener('scroll', updateScrollProgress);

function updateScrollProgress() {
  const windowHeight = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight;
  const scrollTop = window.pageYOffset;
  const scrollProgress = (scrollTop / (fullHeight - windowHeight)) * 100;

  const scrollProgressBar = document.getElementById('scroll-progress');
  scrollProgressBar.style.width = scrollProgress + '%';
}



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



//................................................................
//

//

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


const zoomElements = document.querySelectorAll('.sc');
 zoomElements.forEach((element) => {
   element.addEventListener('mouseover', () => {
     element.classList.add('hovered');
   });
   element.addEventListener('mouseout', () => {
      element.classList.remove('hovered');
   });
  });