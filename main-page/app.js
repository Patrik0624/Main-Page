$(document).ready(function(){
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      $('.scrollbutton').fadeIn();
    } else {
      $('.scrollbutton').fadeOut();
    };
    if($(document).scrollTop() > $("#introduction").offset().top - 14){
      $("nav").addClass("shrink");
    } else {
      $("nav").removeClass("shrink");
    };
    if ($(document).scrollTop() > $("#introduction").offset().top - 86 && $(document).scrollTop() < $("#photos").offset().top - 86) {
      $('#introButton1').addClass("current");
    } else {
      $('#introButton1').removeClass('current');
    };
    if ($(document).scrollTop() > $("#photos").offset().top - 86 && $(document).scrollTop() < $("#videos").offset().top - 86) {
      $('#photosButton1').addClass("current");
    } else {
      $('#photosButton1').removeClass('current');
    };
    if ($(document).scrollTop() > $("#videos").offset().top - 86 && (scrollHeight - scrollPosition) / scrollHeight > 0) {
      $('#videosButton1').addClass("current");
    } else {
      $('#videosButton1').removeClass('current');
    };

    $(window).on("scroll", function() {
	     if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
	        $('#contactButton1').addClass("current");
	       } else {
          $('#contactButton1').removeClass('current');
        };
    });
  };

  $('.scrollbutton').click(function(){
    $("html, body").animate({scrollTop: 0}, "slow");
  });
  $('#introButton, #introButton1').click(function(){
    $("html, body").animate({scrollTop: $("#introduction").offset().top}, "slow");
  });
  $('#photosButton, #photosButton1').click(function(){
    $("html, body").animate({scrollTop: $("#photos").offset().top}, "slow");
  });
  $('#videosButton, #videosButton1').click(function(){
    $("html, body").animate({scrollTop: $("#videos").offset().top}, "slow");
  });
  $('#contactButton, #contactButton1').click(function(){
    $("html, body").animate({scrollTop: $("#contact").offset().top}, "slow");
  });
});

$(document).ready(function looper() {
    $('#bg1').css('right', '-100%');
    $('#bg2').css('right', '-100%');
    $('#bg3').css('right', '-100%');
    $('#bg1').animate({right: '0'}, 600);
    setTimeout(function(){
      $('.point1').addClass('currentpoint');
      $('.point3').removeClass('currentpoint');
    }, 300);
    $('#bg2').delay(4000).animate({right: '0'}, 600);
    setTimeout(function(){
      $('.point2').addClass('currentpoint');
      $('.point1').removeClass('currentpoint');
    }, 4300);
    $('#bg3').delay(8000).animate({right: '0'}, 600);
    setTimeout(function(){
      $('.point3').addClass('currentpoint');
      $('.point2').removeClass('currentpoint');
    }, 8300);
    setTimeout(looper,12000)
});
