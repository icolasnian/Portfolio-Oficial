//Troca texto e anima logo //
$(".desk-logo").hover(function() {
    $(this).animate({
        left: "10px"
    }, 100);
    $(this).text("nicolas.com");
  }, function() {
    $(this).animate({
        left: "0px"
    }, 100)
    $(this).text("nicolas.");
  });

 //animacao habilidades //
  $(window).ready(function(){ 
    $('.progress .progress-bar').css("width",
              function() {
                  return $(this).attr("aria-valuenow") + "%";
              }
      )
  });

// auto show slider //
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("sliderino");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


