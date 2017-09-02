(function($) {
  //Shell for your plugin code
  $.fn.fancyNext = function() {

    if ($(this).next().length == 0) {
        return $(this).parent().children(':first');
      } else {
        return $(this).next();
      };
      
  }
})(jQuery);
