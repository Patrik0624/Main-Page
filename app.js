$(document).ready(function(){
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
  $('#introButton').click(function(){
    $("html, body").animate({scrollTop: $("#introduction").offset().top}, "slow");
  });
  $('#photosButton').click(function(){
    $("html, body").animate({scrollTop: $("#photos").offset().top}, "slow");
  });
  $('#videosButton').click(function(){
    $("html, body").animate({scrollTop: $("#videos").offset().top}, "slow");
  });
  $('#contactButton').click(function(){
    $("html, body").animate({scrollTop: $("#contact").offset().top}, "slow");
  });
});
