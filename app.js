$(document).ready(function(){
  $('.notready').click(function(){
    alert('Figyelem! Ez az oldal még nem készült el!');
  });
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      $('.scrollbutton').fadeIn();
    } else {
      $('.scrollbutton').fadeOut();
    };
  };
  $('.scrollbutton').click(function(){
    $("html, body").animate({scrollTop: 0}, "slow");
  });
});
