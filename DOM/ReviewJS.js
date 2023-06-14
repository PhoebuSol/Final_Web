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