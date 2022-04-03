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




  const sharp = require('sharp');
  const fs = require('fs');
  const directory = './img';
  
  fs.readdirSync(directory).forEach(file => {
    sharp(`${directory}/${file}`)
      .resize(200, 100) // width, height
      .toFile(`${directory}/${file}-val-champions.jpg`);
    });