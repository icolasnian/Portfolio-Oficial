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