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
  });

  $('#close-button').click(function() {
    chatWindow.slideUp();
  });

  $('#send-button').click(function() {
    var message = $('#message-input').val();
    if (message !== '') {
      var messageElement = $('<div class="message user">' + message + '</div>');
      $('#chat-body').append(messageElement);
      $('#message-input').val('');
    }
  });

// Initially show a welcome message in the chat bubble
  var initialMessage = 'Welcome to our chat!';
  var initialMessageElement = $('<div class="message">' + initialMessage + '</div>');
  $('#chat-body').append(initialMessageElement);
  
  // Automatically show chat window after 5 seconds
  setTimeout(function() {
    chatWindow.slideDown();
  }, 5000);
});