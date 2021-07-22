// select the modal
var modal = document.querySelector("#myModal");

// select the button that opens the modal
var btn = document.querySelector("#myBtn");

// select the span element that closes the modal
var span = document.querySelector(".close");

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
  }

span.onclick = function() {
    modal.style.display = "none";
 }

 window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }



// Modal Tab

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();