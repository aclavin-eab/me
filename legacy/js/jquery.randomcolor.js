//Andrew Clavin, Nov 16, 2012
//getRGB(color) function sampled from jquery.color.js

/*
 * jQuery Color Animations
 * Copyright 2007 John Resig
 * Released under the MIT and GPL licenses.
 */
 
//When Changing Defualts use CAUTION for the seizure proned user

/* Main function is written twice, first in its interval call
*  and again where it is called for the mouseout portion of hover area,
*  which is the first time its called written in the script.
*  Storing the function appropriately in a variable creates error
*  "SyntaxError: missing ] after element list
*  [Break On This Error] 	
*
*  [object Object]"
*/

(function($) {
  //used for case when color can not be increased/decreased
  var rfix = 1, bfix = 1,gfix = 1;

  function getRGB(color) {
		var result;
		// Check if we're already dealing with an array of colors
		if ( color && color.constructor == Array && color.length == 3 )
			return color;
		// Look for rgb(num,num,num)
		if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
			return [parseInt(result[1]), parseInt(result[2]), parseInt(result[3])];
		// Look for rgb(num%,num%,num%)
		if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
			return [parseFloat(result[1])*2.55, parseFloat(result[2])*2.55, parseFloat(result[3])*2.55];
		// Look for #a0b1c2
		if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
			return [parseInt(result[1],16), parseInt(result[2],16), parseInt(result[3],16)];
		// Look for #fff
		if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
			return [parseInt(result[1]+result[1],16), parseInt(result[2]+result[2],16), parseInt(result[3]+result[3],16)];
		return color;
  };

  $.fn.smoothChange = function(options) {
    var obj = $(this);
    //set defaults
    options = options || {};
    options.range = options.range || 5;
    options.scale = options.scale || 1;
    options.speed = options.speed || 40;
    options.red = options.red || 'on';
    options.green = options.green || 'on';
    options.blue = options.blue || 'on';

    $(this).hover(function() {
      clearInterval(flicker)
    }, function() {flicker = obj.each(function() {setInterval(function() {
 	  var rando = Math.floor(Math.random() * options.range) * options.scale;
 	  var r = (startColor[0] + rando * rfix);
 	  if (options.red == 'off') {
 	    r = (startColor[0]);
 	  };
 	  if (!isNaN(options.red)) {
 	    r = (startColor[0] + rando * rfix * options.red);
 	  };
      var g = (startColor[1] + rando * gfix);
 	  if (options.green == 'off') {
 	    g = (startColor[1]);
 	  };
 	  if (!isNaN(options.green)) {
 	    g = (startColor[1] + rando * gfix * options.green);
 	  };
 	  var b = (startColor[2] + rando * bfix);
 	  if (options.blue == 'off') {
 	    b = (startColor[2]);
 	  };
 	  if (!isNaN(options.blue)) {
 	    b = (startColor[2] + rando * bfix * options.blue);
 	  };
 	  if (r > 256) {
 	    r = 256;
 	    rfix = -1;
 	  };
 	  if (g > 256) {
 	    g = 256;
 	    gfix = -1;
 	  };
 	  if (b > 256) {
 	    b = 256;
 	    bfix = -1;
 	  };
 	  if (r < 16) {
 	    rfix = 1;
 	  };
 	  if (g < 16) {
 	    gfix = 1;
 	  };
 	  if (b < 16) {
 	    bfix = 1;
 	  };
 	  r = r.toString(16);
 	  b = b.toString(16);
 	  g = g.toString(16);
      var colour = '#' + r + g + b;

      return obj.each(function() {
        // Do something to each item
        $(this).css('background-color', colour);
      }); }, options.speed);
    });
    });

    $(this).data("originalColor", $(this).css('background-color'));
    var startColor = getRGB($(this).data("originalColor"));
 	//randomize color and set to interval
 	var flicker = obj.each(function() {setInterval(function() {
 	  var rando = Math.floor(Math.random() * options.range) * options.scale;
 	  var r = (startColor[0] + rando * rfix);
 	  if (options.red == 'off') {
 	    r = (startColor[0]);
 	  };
 	  if (!isNaN(options.red)) {
 	    r = (startColor[0] + rando * rfix * options.red);
 	  };
 	  var g = (startColor[1] + rando * gfix);
 	  if (options.green == 'off') {
 	    g = (startColor[1]);
 	  };
 	  if (!isNaN(options.green)) {
 	    g = (startColor[1] + rando * gfix * options.green);
 	  };
 	  var b = (startColor[2] + rando * bfix);
 	  if (options.blue == 'off') {
 	    b = (startColor[2]);
 	  };
 	  if (!isNaN(options.blue)) {
 	    b = (startColor[2] + rando * bfix * options.blue);
 	  };
 	  if (r > 256) {
 	    r = 256;
 	    rfix = -1;
 	  };
 	  if (g > 256) {
 	    g = 256;
 	    gfix = -1;
 	  };
 	  if (b > 256) {
 	    b = 256;
 	    bfix = -1;
 	  };
 	  if (r < 16) {
 	    rfix = 1;
 	  };
 	  if (g < 16) {
 	    gfix = 1;
 	  };
 	  if (b < 16) {
 	    bfix = 1;
 	  };
 	  r = r.toString(16);
 	  b = b.toString(16);
 	  g = g.toString(16);
 	  var colour = '#' + r + g + b;

      //return colors
      return obj.each(function() {
        // Do something to each item
        $(this).css('background-color', colour);
      }); }, options.speed);
    });
  };

})(jQuery);