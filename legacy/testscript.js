$(document).ready(function() {
 $('li.proj').click(function() {
   if ($(this).next().length == 0) {
     $(this).parent().children(':first').animate({
     'position': 'absolute',
     'left': '0', }, 100);
   } else {
     $(this).fancyNext().animate({
       'position': 'absolute',
       'left': '0', }, 100);
   };
 });

});