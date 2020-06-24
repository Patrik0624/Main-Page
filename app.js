$(document).ready(function(){
  $('img').click(function(){
    $('body').css('background-color', 'black');
    $('button').show();
    $('h1').text('BLM').css('color', 'white');
    $(this).hide();
  });
  $('button').click(function(){
    $(this).hide();
    $('body').css('background-color', 'white');
    $('h1').text('Ez az oldal jelenleg készítés alatt áll...').css('color', 'black');
    $('img').show();
  });
});
