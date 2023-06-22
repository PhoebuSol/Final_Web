function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


$(document).ready(function() {
  $('#filter-high').click(function() {
    filterItems('high');
  });

  $('#filter-hot').click(function() {
    filterItems('hot');
  });

  $('#lastbtn').click(function() {
    filterItems('low');
  });

  $('#firstbtn').click(function() {
    showAllItems();
  });

  function filterItems(category) {
    $("[id='reviewrow']").hide(); // Hide all items

    // Filter items based on the category
    var filteredItems = $("[id='reviewrow']").filter(function() {
      return $(this).data('category') === category;
    });

    $('#filtered-items').empty(); // Clear previously filtered items

    if (filteredItems.length > 0) {
      filteredItems.show(); // Show filtered items
    } else {
      $('#filtered-items').text('No items found.');
    }
  }

  function showAllItems() {
    $("[id='reviewrow']").show(); // Show all items
    $('#filtered-items').empty(); // Clear filtered items message
  }
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

