          "use strict";
var imageCounter = 1;
showDiv(imageCounter);
function changeImage(m) {
    showDiv(imageCounter = imageCounter + m);
}
function showDiv(n) {
    var i;
    var imageArray = document.getElementsByClassName("mySlides");
    if (n > imageArray.length) {
        imageCounter = 1;
    }
    if (n < 1) {
        imageCounter = imageArray.length;
    }
    for (i = 0; i < imageArray.length; i++) {
        imageArray[i].style.display = "none";
    }
    imageArray[imageCounter - 1].style.display = "block";
}



/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }