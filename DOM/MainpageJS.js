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