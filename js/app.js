//PHOTO LOOPER:
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

$(document).ready(function(){
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();
//SCROLLBUTTON:
    if ($(document).scrollTop() > $("#introduction").offset().top - 1) {
      $('.scrollbutton').fadeIn();
    } else {
      $('.scrollbutton').fadeOut();
    };
//FIXED NAV:
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
//CONTACT:
    $(window).on("scroll", function() {
	     if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
	        $('#contactButton1').addClass("current");
	       } else {
          $('#contactButton1').removeClass('current');
        };
    });
//SCROLLBUTTON UP:
    if ($(document).scrollTop() > $("#footer").offset().top) {
      if ($(window).width() < 1000) {
        $('.scrollbutton').addClass('scrollbuttonup');
      };
    } else {
      $('.scrollbutton').removeClass('scrollbuttonup');
    }
  };
//SCROLLBUTTON:
  $('.scrollbutton').click(function(){
    $("html, body").animate({scrollTop: 0}, "slow");
    if ($(window).width() < 1000) {
      $('nav .fas').addClass('fa-bars');
      $('nav .fas').removeClass('fa-times');
      $('.normalnav').fadeOut(300);
      $('.mobilenav').removeClass('navopacity');
    };
  });
//JUMP ON PAGE:
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
//MOBILE NAV:
  $('nav .fas').click(function(){
    $('nav .fas').toggleClass('fa-bars');
    $('nav .fas').toggleClass('fa-times');
    $('.mobilenav').toggleClass('navopacity');
    $('.normalnav').toggle('swing');
  });
//NORMAL NAV:
  if ($(window).width() < 1000) {
    $('.normalnav a').click(function(){
      $('.normalnav').fadeOut(300);
      $('nav .fas').addClass('fa-bars');
      $('nav .fas').removeClass('fa-times');
      $('.mobilenav').removeClass('navopacity');
    });
  };
//PHOTO VIEWER:
  $('.photos img').click(function(){
    $('.photoviewerpanel').fadeIn('fast');
    $('.focusedphoto').attr('src', $(this).attr('src'));
    $('.photoselector img').removeClass('active');
    var id = this.id;
    $('#s' + id).addClass('active').prev().prevAll().appendTo('.photoselector');
  });
  $('.photoselector img').click(function(){
    $('.focusedphoto').attr('src', $(this).attr('src'));
    $(this).addClass('active');
    $('.photoselector img').not(this).removeClass('active');
    $('.photoselector img').addClass('transition');
  });
  $('.closephoto').click(function(){
    $('.photoviewerpanel').fadeOut('fast');
  });
  $('.slider-prev').click(function(){
    $('.photoselector img:last').prependTo('.photoselector').next();
  });
  $('.slider-next').click(function(){
    $('.photoselector img:first').next().end().appendTo('.photoselector');
  });
  $('.next').click(function(){
    $('.focusedphoto').attr('src', $('.active').next().attr('src'));
    $('.active').next().addClass('active');
    $('.active:first').removeClass('active');
    $('.photoselector img:first').appendTo('.photoselector');
    $('.photoselector img').removeClass('transition');
  });
  $('.prev').click(function(){
    $('.focusedphoto').attr('src', $('.active').prev().attr('src'));
    $('.active').prev().addClass('active');
    $('.active:last').removeClass('active');
    $('.photoselector img:last').prependTo('.photoselector');
    $('.photoselector img').removeClass('transition');
  });
});
