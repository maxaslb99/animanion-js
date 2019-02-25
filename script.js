$( ".open" ).click(function() {
    $( ".first-part" ).addClass("hide-left");
    $( ".second-part" ).addClass("hide-right");
    $( ".scroll" ).removeClass("scroll");
    $('.open').addClass('remove')
  });


let numberOfItems = $('.date-js').length;
let index = 0
let y_scale = 0
let x_scale = 0
setInterval(function() {
   index = Math.floor(numberOfItems*Math.random())

   y_scale = 500 - Math.floor(1000*Math.random())
   x_scale = 500 - Math.floor(1000*Math.random())
  $('.date-js').eq(index).css('top', y_scale + 'px');
  $('.date-js').eq(index).css('left', x_scale + 'px');


   index = (index + 1) % numberOfItems;
}, 200);
