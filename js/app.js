$(document).ready(function(){
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();

    if ($(document).scrollTop() > $("#introduction").offset().top - 1) {
      $('.scrollbutton').fadeIn();
    } else {
      $('.scrollbutton').fadeOut();
    };

    if($(document).scrollTop() > $("#introduction").offset().top - 14){
      $(".fixednav, .normalnav").addClass("shrink");
    } else {
      $(".fixednav, .normalnav").removeClass("shrink");
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
    if ($(document).scrollTop() > $("#footer").offset().top) {
      if ($(window).width() < 1000) {
        $('.scrollbutton').addClass('scrollbuttonup');
      };
    } else {
      $('.scrollbutton').removeClass('scrollbuttonup');
    }
  };

  $('.scrollbutton').click(function(){
    $("html, body").animate({scrollTop: 0}, "slow");
    if ($(window).width() < 1000) {
      $('nav .fas').addClass('fa-bars');
      $('nav .fas').removeClass('fa-times');
      $('.normalnav').fadeOut(300);
      $('.mobilenav').removeClass('navopacity');
    };
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

  $('nav .fas').click(function(){
    $('nav .fas').toggleClass('fa-bars');
    $('nav .fas').toggleClass('fa-times');
    $('.mobilenav').toggleClass('navopacity');
    $('.normalnav').toggle('swing');
  });

  if ($(window).width() < 1000) {
    $('.normalnav a').click(function(){
      $('.normalnav').fadeOut(300);
      $('nav .fas').addClass('fa-bars');
      $('nav .fas').removeClass('fa-times');
      $('.mobilenav').removeClass('navopacity');
    });
  };

  $ DEAKTIVÁLVA ('.photos img').click(function(){
    $(this).toggleClass('focusedphoto');
    if ($('.2').hasClass('focusedphoto')) {
      $(this).prev().insertAfter(this);
    } else if (!$('.2').hasClass('focusedphoto')) {
      $(this).next().insertBefore(this);
    };
    if ($('.3').hasClass('focusedphoto')) {
      $(this).next().insertBefore(this);
    } else if (!$('.3').hasClass('focusedphoto')) {
      $(this).prev().insertAfter(this);
    };
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
