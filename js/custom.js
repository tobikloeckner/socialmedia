jQuery(document).ready(function($) {
  var counter = 10;

  $('#catchMeIfYouCan').on({
    mouseover:function() {
      if(counter != 1) {
        counter = counter - 1;

        animateDiv();
        animateDivTwo();

        var newq = makeNewPosition();

        $(this).css({
          left: newq[1],
          top: newq[0]
        });

        $(this).html(counter);
      } else {
        location.reload();
      }
    }
  });
});

function makeNewPosition(){
  var h = $(window).height() - 50;
  var w = $(window).width() - 50;
  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh,nw];
}

function animateDiv(element){
  var newq = makeNewPosition();
  var oldq = $('.move').offset();
  var speed = calcSpeed([oldq.top, oldq.left], newq);

  $(element).animate({ top: newq[0], left: newq[1] }, speed, function(){
    animateDiv(element);
  });
}

function animateDivTwo(){
  var newq = makeNewPosition();
  var oldq = $('.move').offset();
  var speed = calcSpeed([oldq.top, oldq.left], newq);

  $('.move').animate({ top: newq[0], left: newq[1] }, speed, function(){
    animateDiv(this);
  });
}

function calcSpeed(prev, next) {
  var x = Math.abs(prev[1] - next[1]);
  var y = Math.abs(prev[0] - next[0]);
  var greatest = x > y ? x : y;
  var speedModifier = .2;
  var speed = Math.ceil(greatest/speedModifier);

  return speed;
}