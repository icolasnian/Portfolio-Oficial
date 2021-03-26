
//Mobile tap menu//
$('.wall').click(function(){
    $('.hide-text2, .hide-text1').toggle();
  });

//Change text animate on hover (É possível fazer sem repetição)//
$("#texto1").hover(function() {
  $(this).animate({
      left: "25px"
  }, 100);
  $(this).text("Sobre");
}, function() {
  $(this).animate({
      left: "0px"
  }, 100)
  $(this).text("Olá.");
});

$("#texto2").hover(function() {
  $(this).animate({
      left: "25px"
  }, 100);
  $(this).text("Projetos");
}, function() {
  $(this).animate({
      left: "0px"
  }, 100)
  $(this).text("Sou o");
});

$("#texto3").hover(function() {
  $(this).animate({
      left: "25px"
  }, 100);
  $(this).text("Contato");
}, function() {
  $(this).animate({
      left: "0px"
  }, 100)
  $(this).text("Nícolas.");
});

