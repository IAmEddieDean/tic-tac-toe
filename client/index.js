'use strict';
$(document).ready(init);

function init(){
  $('#reset').click(reset);
  $('#start').click(start);
  $('td').click(selecting);
}
function selecting(){
  var color = $('.active').css('background-color');
  $(this).css('background-color', color).attr('player', $('.active').text());
  $('.player').toggleClass('active');
  winCon();
  if($(this).css('background-color')){

  }
}
function winCon(){
  var sq1 = $('#1').attr('player');
  var sq2 = $('#2').attr('player');
  var sq3 = $('#3').attr('player');
  var sq4 = $('#4').attr('player');
  var sq5 = $('#5').attr('player');
  var sq6 = $('#6').attr('player');
  var sq7 = $('#7').attr('player');
  var sq8 = $('#8').attr('player');
  var sq9 = $('#9').attr('player');
  if (sq1 === sq2 && sq2 === sq3 && sq1){
    console.log('something stupid');
  }
  else if ((sq4 === sq5 && sq5 === sq6 && sq4)){
    console.log('something else stupid1');
  }
  else if ((sq7 === sq8 && sq8 === sq9 && sq7)){
    console.log('somthing else stupid');
  }
  else if ((sq1 === sq4 && sq4 === sq7 && sq1)){
    console.log('somthing else stupid');
  }
  else if ((sq2 === sq5 && sq5 === sq8 && sq2)){
    console.log('somthing else stupid');
  }
  else if ((sq3 === sq6 && sq6 === sq9 && sq3)){
    console.log('somthing else stupid');
  }
  else if ((sq1 === sq5 && sq5 === sq9 && sq1)){
    console.log('somthing else stupid');
  }
  else if ((sq3 === sq5 && sq5 === sq7 && sq3)){
    console.log('somthing else stupid');
  }
  else if (sq1 && sq2 && sq3 && sq4 && sq5 && sq6 && sq7 && sq8 && sq9){
    console.log('no one wins');
  }
}

function reset(){
  $('#chooser').show();
  $('#players').hide();
  $('td').css('background-color', 'initial');
}
function start(){
  $('#players').show();
  var p1 = $('#p1-choose').val();
  var p2 = $('#p2-choose').val();
  $('#p1').css('background-color', p1);
  $('#p2').css('background-color', p2);
  $('#chooser').hide();


  var rnd = Math.floor(Math.random() * 2) + 1;
  $('.player').removeClass('active');
  $('#p' + rnd).addClass('active');
}


/*function win(){
  switch{
    case (parseInt(p1)
  }
}*/
