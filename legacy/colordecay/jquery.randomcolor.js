(function($) {
  //Shell for your plugin code
  rfix = 1;
  bfix= 1;
  gfix = 1;
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

		// Otherwise, we're most likely dealing with a named color
		return colors[jQuery.trim(color).toLowerCase()];
	}

  $.fn.smoothChange = function() {
    // Plugin code
    $(this).data("originalColor", $(this).css('background-color'));
    var startColor = getRGB($(this).data("originalColor"));
 	var rando = Math.floor(Math.random() * 3);
 	var rred = (startColor[0] + rando * rfix);
 	var gred = (startColor[1] + rando * gfix);
 	var bred = (startColor[2] + rando * bfix);
 	if (rred > 256) {
 	  rred = 256;
 	  rfix = -1;
 	};
 	if (gred > 256) {
 	  gred = 256;
 	  gfix = -1;
 	};
 	if (bred > 256) {
 	  bred = 256;
 	  bfix = -1;
 	};

 	if (rred < 17) {
 	  rred = 16;
 	  rfix = 1;
 	};
 	if (gred < 17) {
 	  gred = 16;
 	  gfix = 1;
 	};
 	if (bred < 17) {
 	  bred = 16;
 	  bfix = 1;
 	};
 	rred = rred.toString(16);
 	bred = bred.toString(16);
 	gred = gred.toString(16);
 	var colour = '#' + rred + gred + bred;

    return this.each(function() {
      // Do something to each item
      $(this).css('background-color', colour);

    });

  };

  $.fn.changeColour = function() {
    // Plugin code
    $(this).data("originalColor", $(this).css('background-color'));
    var startColor = getRGB($(this).data("originalColor"));
 	var rando = Math.floor(Math.random() * 3);
 	var rred = (startColor[0] + rando);
 	var gred = (startColor[1] + rando);
 	var bred = (startColor[2] + rando);
 	if (rred > 256) {
 	  rred = 17;
 	};
 	if (gred > 256) {
 	  gred = 17;
 	};
 	if (bred > 256) {
 	  bred = 17;
 	};
 	rred = rred.toString(16);
 	bred = bred.toString(16);
 	gred = gred.toString(16);
 	var colour = '#' + rred + gred + bred;

    return this.each(function() {
      // Do something to each item
      $(this).css('background-color', colour);
    });

  };

  $.fn.changeTextColour = function() {
    // Plugin code
    $(this).data("originalColor", $(this).css('color'));
    var startColor = getRGB($(this).data("originalColor"));
 	var rando = Math.floor(Math.random() * 3);
 	var rred = (startColor[0] + rando);
 	var gred = (startColor[1] + rando);
 	var bred = (startColor[2] + rando);
 	if (rred > 256) {
 	  rred = 17;
 	};
 	if (gred > 256) {
 	  gred = 17;
 	};
 	if (bred > 256) {
 	  bred = 17;
 	};
 	rred = rred.toString(16);
 	bred = bred.toString(16);
 	gred = gred.toString(16);
 	var colour = '#' + rred + gred + bred;

    return this.each(function() {
      // Do something to each item
      $(this).css('color', colour);
    });

  };

})(jQuery);
