// navbar
$(window).scroll(function(){
    if($(document).scrollTop() > 100){
      $('nav').addClass('animate');
    }else{
      $('nav').removeClass('animate');
    }
  })
  
   //home
  
   var typed = new Typed('.auto-type', {
          strings:[ "INNOVATION", "CREATIVITY", "TRUTHFULNESS","AWARENESS", "POPULAR"],
          typeSpeed:150,
          backSpeed:120,
          loop:true
        });
  
  
    //dark-theme
  
    var icon= document.getElementById("icon");
  
    icon.onclick=function(){
      document.body.classList.toggle("dark-theme");
      if(document.body.classList.contains("dark-theme")){
        icon.src="logo/sun.png";
      }
      else{
        icon.src="logo/moon.png";
      }
    }
  
  // Initialize the carousel
  $(document).ready(function() {
    $('#myCarousel').carousel({
      interval: 3000 // Auto change interval in milliseconds (e.g., 3000 = 3 seconds)
    });
  });

  //refresh code
  document.addEventListener("DOMContentLoaded", function() {
    // Get the row container and col-md-8 and col-md-4 columns
    const rowContainer = document.getElementById("rowContainer");
    const colMd8 = document.getElementById("colMd8");
    const colMd4 = document.getElementById("colMd4");

     // Get the current state from local storage
     let shouldSwap = localStorage.getItem("shouldSwap") === "true";

     // Toggle the state
     shouldSwap = !shouldSwap;

     if (shouldSwap) {
         // Remove existing columns from the row
         rowContainer.removeChild(colMd8);
         rowContainer.removeChild(colMd4);

         // Re-insert the columns in reverse order
         rowContainer.appendChild(colMd4);
         rowContainer.appendChild(colMd8);
     }

     // Store the updated state in local storage
     localStorage.setItem("shouldSwap", shouldSwap.toString());
});