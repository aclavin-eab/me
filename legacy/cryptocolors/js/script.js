

/*  $("#sortable1").fixedsortable({
        fixed: "> .static"
    });
*/


$(document).ready(function() {
	//set an array for the color values and variables for completion check;
	var corder = [],
	    blockTotal = 0;
	    blockProgress = 0,
	    firstCount = 0,
	    secondCount = 0,
	    thirdCount = 0,
	    fourthCount = 0,
	    fifthCount = 0,
	    sixthCount = 0,
	    seventhCount = 0,
	    eighthCount = 0,
	    ninthCount = 0,
	    tenthCount = 0,
	    eleventhCount = 0,
	    twelfthCount = 0,
	    thirteenthCount = 0,
	    fourteenthCount = 0,
	    fifteenthCount = 0,
	    sixteenthCount = 0,
	    seventeenthCount = 0,
	    eighteenthCount = 0,
	    nineteenthCount = 0,
	    twentiethCount = 0,
	    twentyfirstCount = 0,
	    twentysecondCount = 0,
	    twentythirdCount = 0,
	    twentyfourthCount = 0,
	    twentyfifthCount = 0,
	    twentysixthCount = 0,
	    twentyseventhCount = 0,
	    twentyeighthCount = 0,
	    twentyninthCount = 0,
	    thirtiethCount = 0,
	    level = 0,
	    blockScore = 0,
	    gameTotal = 0;
	    
    //Checking if any squares need to be locked
    var checkLocks = function(){
            if ($('#sortable').children('li:first').hasClass('first')) {
                $('#sortable').children('li:first').addClass('locked');
                if (firstCount < 1) {
                    firstCount += 1;
                    blockProgress += 1;
                    blockScore += 1;
                };
            };
            if ($('#sortable').children('li:first').next().hasClass('second')) {
                $('#sortable').children('li:first').next().addClass('locked');
                if (secondCount < 1) {
                    secondCount += 1;
                    blockProgress += 1;
                    blockScore += 1;
                };
            };
            if ($('#sortable').children('li:first').next().next().hasClass('third')) {
                $('#sortable').children('li:first').next().next().addClass('locked');
                if (thirdCount < 1) {
                    thirdCount += 1;
                    blockProgress += 1;
                    blockScore += 1;
                };
            };
            if ($('#sortable').children('li:first').next().next().next().hasClass('fourth')) {
                $('#sortable').children('li:first').next().next().next().addClass('locked');
                if (fourthCount < 1) {
                    fourthCount += 1;
                    blockProgress += 1;
                    blockScore += 1;
                };
            };
            if ($('#sortable').children('li:first').next().next().next().next().hasClass('fifth')) {
                $('#sortable').children('li:first').next().next().next().next().addClass('locked');
                if (fifthCount < 1) {
                    fifthCount += 1;
                    blockProgress += 1;
                    blockScore += 1;
                    
                };
            };
            if ($('#sortable').children('li:first').next().next().next().next().next().hasClass('sixth')) {
                $('#sortable').children('li:first').next().next().next().next().next().addClass('locked');
                if (sixthCount < 1) {
                    sixthCount += 1;
                    blockProgress += 1;
                    blockScore += 1;
                };
            };
            if ($('#sortable').children('li:first').next().next().next().next().next().next().hasClass('seventh')) {
                $('#sortable').children('li:first').next().next().next().next().next().next().addClass('locked');
                if (seventhCount < 1) {
                    seventhCount += 1;
                    blockProgress += 1;
                    blockScore += 1;
                };
            };
            if ($('#sortable').children('li:first').next().next().next().next().next().next().next().hasClass('eighth')) {
                $('#sortable').children('li:first').next().next().next().next().next().next().next().addClass('locked');
                if (eighthCount < 1) {
                    eighthCount += 1;
                    blockProgress += 1;
                    blockScore += 1;
                };
            };
            if ($('#sortable').children('li:first').next().next().next().next().next().next().next().next().hasClass('ninth')) {
                $('#sortable').children('li:first').next().next().next().next().next().next().next().next().addClass('locked');
                if (ninthCount < 1) {
                    ninthCount += 1;
                    blockProgress += 1;
                    blockScore += 1;
                };
            };
            if ($('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().hasClass('tenth')) {
                $('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().addClass('locked');
                if (tenthCount < 1) {
                    tenthCount += 1;
                    blockProgress += 1;
                    blockScore += 1;
                };
            };
            if ($('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().hasClass('eleventh')) {
                $('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().addClass('locked');
                if (eleventhCount < 1) {
                    eleventhCount += 1;
                    blockProgress += 1;
                    blockScore += 1;
                };
            };
            if ($('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().hasClass('twelfth')) {
                $('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().addClass('locked');
                if (twelfthCount < 1) {
                    twelfthCount += 1;
                    blockProgress += 1;
                    blockScore += 1;
                };
            };
            if ($('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().next().hasClass('thirteenth')) {
                $('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().next().addClass('locked');
                if (thirteenthCount < 1) {
                    thirteenthCount += 1;
                    blockProgress += 1;
                    blockScore += 1;
                };
            };
            if ($('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().next().next().hasClass('fourteenth')) {
                $('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().next().next().addClass('locked');
                if (fourteenthCount < 1) {
                    fourteenthCount += 1;
                    blockProgress += 1;
                    blockScore += 1;
                };
            };
            if ($('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().next().next().next().hasClass('fifteenth')) {
                $('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().next().next().next().addClass('locked');
                if (fifteenthCount < 1) {
                    fifteenthCount += 1;
                    blockProgress += 1;
                    blockScore += 1;
                };
            };
            if ($('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().hasClass('sixteenth')) {
                $('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().addClass('locked');
                if (sixteenthCount < 1) {
                    sixteenthCount += 1;
                    blockProgress += 1;
                    blockScore += 1;
                };
            };
            if ($('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().hasClass('seventeenth')) {
                $('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().addClass('locked');
                if (seventeenthCount < 1) {
                    seventeenthCount += 1;
                    blockProgress += 1;
                    blockScore += 1;
                };
            };
            if ($('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().hasClass('eighteenth')) {
                $('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().addClass('locked');
                if (eighteenthCount < 1) {
                    eighteenthCount += 1;
                    blockProgress += 1;
                    blockScore += 1;
                };
            };
            if ($('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().hasClass('nineteenth')) {
                $('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().addClass('locked');
                if (nineteenthCount < 1) {
                    nineteenthCount += 1;
                    blockProgress += 1;
                    blockScore += 1;
                };
            };
            if ($('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().hasClass('twentieth')) {
                $('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().addClass('locked');
                if (twentiethCount < 1) {
                    twentiethCount += 1;
                    blockProgress += 1;
                    blockScore += 1;
                };
            };
            if ($('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().hasClass('twentyfirst')) {
                $('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().addClass('locked');
                if (twentyfirstCount < 1) {
                    twentyfirstCount += 1;
                    blockProgress += 1;
                    blockScore += 1;
                };
            };
            if ($('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().hasClass('twentysecond')) {
                $('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().addClass('locked');
                if (twentysecondCount < 1) {
                    twentysecondCount += 1;
                    blockProgress += 1;
                    blockScore += 1;
                };
            };
            if ($('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().hasClass('twentythird')) {
                $('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().addClass('locked');
                if (twentythirdCount < 1) {
                    twentythirdCount += 1;
                    blockProgress += 1;
                    blockScore += 1;
                };
            };
            if ($('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().hasClass('twentyfourth')) {
                $('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().addClass('locked');
                if (twentyfourthCount < 1) {
                    twentyfourthCount += 1;
                    blockProgress += 1;
                    blockScore += 1;
                };
            };
            if ($('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().hasClass('twentyfifth')) {
                $('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().addClass('locked');
                if (twentyfifthCount < 1) {
                    twentyfifthCount += 1;
                    blockProgress += 1;
                    blockScore += 1;
                };
            };
            if ($('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().hasClass('twentysixth')) {
                $('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().addClass('locked');
                if (twentysixthCount < 1) {
                    twentysixthCount += 1;
                    blockProgress += 1;
                    blockScore += 1;
                };
            };
            if ($('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().hasClass('twentyseventh')) {
                $('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().addClass('locked');
                if (twentyseventhCount < 1) {
                    twentyseventhCount += 1;
                    blockProgress += 1;
                    blockScore += 1;
                };
            };
            if ($('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().hasClass('twentyeighth')) {
                $('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().addClass('locked');
                if (twentyeighthCount < 1) {
                    twentyeighthCount += 1;
                    blockProgress += 1;
                    blockScore += 1;
                };
            };
            if ($('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().hasClass('twentyninth')) {
                $('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().addClass('locked');
                if (twentyninthCount < 1) {
                    twentyninthCount += 1;
                    blockProgress += 1;
                    blockScore += 1;
                };
            };
            if ($('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().hasClass('thirtieth')) {
                $('#sortable').children('li:first').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().addClass('locked');
                if (thirtiethCount < 1) {
                    thirtiethCount += 1;
                    blockProgress += 1;
                    blockScore += 1;
                };
            };      
    };
    
    //Add sorting functionability (this is where most functions are called from
    var makeSortable = function(){   $( "#sortable" ).sortable({
        items: ':not(.locked)',
        cancel: 'li.locked',
        start: function(){
            $('.locked', this).each(function(){
                var $this = $(this);
                $this.data('pos', $this.index());
            });
        },
        change: function(){
            $sortable = $(this);
            $statics = $('.locked', this).detach();
            $helper = $('<li></li>').prependTo(this);
            $statics.each(function(){
                var $this = $(this);
                var target = $this.data('pos');
                $this.insertAfter($('li', $sortable).eq(target));
            });
            $helper.remove();
        },
        update: function(){
            blockMove();
        },
        stop: function() {
            checkCompletion();
        }
    });
    $( "#sortable" ).disableSelection();
    };
  
    var clearBoard = function() {
    $('#sortable li').removeClass('locked').removeClass('first').removeClass('second')
    .removeClass('third').removeClass('fourth').removeClass('fifth').removeClass('sixth')
    .removeClass('seventh').removeClass('eighth').removeClass('ninth').removeClass('tenth')
    .removeClass('eleventh').removeClass('twelfth')
    .removeClass('thirteenth').removeClass('fourteenth').removeClass('fifteenth').removeClass('sixteenth')
    .removeClass('seventeenth').removeClass('eighteenth').removeClass('ninteenth').removeClass('twentieth')
    .removeClass('twentyfirst').removeClass('twentysecond')
    .removeClass('twentythird').removeClass('twentyfourth').removeClass('twentyfifth').removeClass('twentysixth')
    .removeClass('twentyseventh').removeClass('twentyeighth').removeClass('twentyninth').removeClass('thirtieth');
    moves = 0;
    blockTotal = 0;
    blockProgress = 0;
    firstCount = 0,
	    secondCount = 0,
	    thirdCount = 0,
	    fourthCount = 0,
	    fifthCount = 0,
	    sixthCount = 0,
	    seventhCount = 0,
	    eighthCount = 0,
	    ninthCount = 0,
	    tenthCount = 0,
	    eleventhCount = 0,
	    twelfthCount = 0,
	    thirteenthCount = 0,
	    fourteenthCount = 0,
	    fifteenthCount = 0,
	    sixteenthCount = 0,
	    seventeenthCount = 0,
	    eighteenthCount = 0,
	    nineteenthCount = 0,
	    twentiethCount = 0,
	    twentyfirstCount = 0,
	    twentysecondCount = 0,
	    twentythirdCount = 0,
	    twentyfourthCount = 0,
	    twentyfifthCount = 0,
	    twentysixthCount = 0,
	    twentyseventhCount = 0,
	    twentyeighthCount = 0,
	    twentyninthCount = 0,
	    thirtiethCount = 0;
	    corder = [];
    $('#moves').html(moves);
    };
    
    //SCOREKEEPING
    
    //TIME KEEPING    
    var counter_number = 0;
    var timer = setInterval(function() {
        counter_number += 1;
        $('#time').html(counter_number);
    }, 1000);
    
    //MOVE COUNTING    
    var moves = 0;
    var blockMove = function() {
        moves +=1;
        $('#moves').html(moves);
    };    
    //COMPLETION
    var checkCompletion = function() {
        checkLocks();
        var blockComplete = blockProgress / blockTotal;
        //$('#completion').html(blockProgress + "/" + blockTotal);
        $('#completion').html(Math.round(blockComplete * 100));
        if (blockTotal != 0){
          if (blockProgress == blockTotal) {
                clearInterval(timer);
                $('#scores').removeClass('hide');
                $('#scores p.complete span').html(blockProgress);
                $('#scores p.time span').html(counter_number);
                var tbonus = Math.floor(((blockTotal * 3) - counter_number) / 2);
                if (tbonus > 0){
                    $('#scores p.tbonus span').html(tbonus);
                } else {
                    $('#scores p.tbonus span').html('0');
                };
                $('#scores p.moves span').html(moves);
                var mbonus = ((blockTotal - moves) * 2);
                if (mbonus > 0){
                    $('#scores p.mbonus span').html(mbonus);
                } else {
                    $('#scores p.mbonus span').html('0');
                };
                var levelTotal = blockProgress + tbonus + mbonus;
                $('#scores p.points span').html(levelTotal);
                gameTotal += levelTotal;
                $('#scores h1.total span').html(gameTotal);
                if (levelTotal < 0) {
                  $('#next').html('Game Over').click(function() {
                     location.reload();
                  });
                };
        };
      };
    };
    $('#next').click(function(){
        $('#scores').addClass('hide'); 
        clearBoard();
        runGame();
        counter_number = 0;
        timer = setInterval(function() {
            counter_number += 1;
            $('#time').html(counter_number);
                }, 1000);
    });

  var runGame = function() {
      level += 1;
      $('#level').html(level);
      var populateBoard = function (level) {
          $('#sortable').html('');
          if (level == 1) {
              squares = 5;
          }
          if (level == 2) {
              squares = 5;
          }
          if (level == 3) {
              squares = 10;
          }
          if (level == 4 ) {
              squares = 10;
          }
          if (level == 5 ) {
              squares = 20;
          }
          if (level == 6) {
              squares = 20;
          }
          if (level == 7) {
              squares = 30;
          }
          if (level == 8) {
              squares = 30;
          }
          if (level == 9 ) {
              squares = 30;
          }
          if (level == 10 ) {
              squares = 30;
          }
          if (level > 20 ) {
              squares = 30;
          }
      for (i = 0; i < squares; i += 1) {
          $('#sortable').html($('#sortable').html() + '<li><div></div></li>');
      };
      
      $('#sortable li').each(function () {
        var r = Math.floor(Math.random() * 256) + 1;
        var g = Math.floor(Math.random() * 256) + 1;
        var b = Math.floor(Math.random() * 256) + 1;
        if (level == 1) {
          r = g + Math.floor(Math.random() * 10) + 1;
          b = g + Math.floor(Math.random() * 30) + 1;
        };
        if (level == 4) {
          g = Math.floor(Math.random() * 50) + 1;
          b = Math.floor(Math.random() * 50) + 1;
          r = Math.floor(Math.random() * 150) + 100;
        };
        if (level == 6) {
          r = Math.floor(Math.random() * 50) + 1;
          b = Math.floor(Math.random() * 50) + 1;
          g = Math.floor(Math.random() * 150) + 100;
        };
        if (level == 7) {
          g = Math.floor(Math.random() * 100) + 125;
          b = Math.floor(Math.random() * 100) + 125;
          r = Math.floor(Math.random() * 100) + 125;
        };
        if (level == 9) {
          g = Math.floor(Math.random() * 60) + 196;
          b = Math.floor(Math.random() * 60) + 196;
          r = Math.floor(Math.random() * 60) + 196;
        };
        if (level == 10) {
          g = Math.floor(Math.random() * 110) + 1;
          b = Math.floor(Math.random() * 110) + 1;
          r = Math.floor(Math.random() * 110) + 1;
        };
        if (level == 11) {
          g = Math.floor(Math.random() * 60) + 16;
          b = Math.floor(Math.random() * 60) + 16;
          r = Math.floor(Math.random() * 60) + 16;
        };
        if (level == 12) {
          g = Math.floor(Math.random() * 90) + 96;
          b = Math.floor(Math.random() * 40) + 136;
          r = Math.floor(Math.random() * 60) + 96;
        };
        if (level == 13) {
          g = Math.floor(Math.random() * 10) + 56;
          b = Math.floor(Math.random() * 100) + 156;
          r = Math.floor(Math.random() * 15) + 36;
        };
        if (level == 15) {
          g = Math.floor(Math.random() * 50) + 206;
          b = Math.floor(Math.random() * 50) + 206;
          r = Math.floor(Math.random() * 100) + 1;
        };
    	var hue = 'rgb(' + r + ',' + g + ',' + b + ')';
    	var cvalue = (r * 0.377 ) + (g * 0.475) + (b * 0.168);
    	$(this).css("background-color", hue);
    	//set the value as a data in the li;
    	$(this).data('colorValue', cvalue);
    	//$(this).html(cvalue);
    	corder.push(cvalue);
    	blockTotal += 1;
      });

    };
    populateBoard(level);
    makeSortable();
    //timer;
	//give the li's random colors;
    
    //order the array to know your brightest and dullest in order;
    corder.sort(function(a,b){return b-a});
    
    /*asign classes according to the value of the li referenced against;
    **the array containing the ordered values in the list*/
    $('#sortable li').each(function () {
        var cvalue = $(this).data('colorValue');
        if (cvalue == corder[0]) {
            $(this).addClass('first');
        } else  if (cvalue == corder[1]) {
            $(this).addClass('second');
        }else if (cvalue == corder[2]) {
            $(this).addClass('third');
        }else if (cvalue == corder[3]) {
            $(this).addClass('fourth');
        }else if (cvalue == corder[4]) {
            $(this).addClass('fifth');
        }else if (cvalue == corder[5]) {
            $(this).addClass('sixth');
        }else if (cvalue == corder[6]) {
            $(this).addClass('seventh');
        }else if (cvalue == corder[7]) {
            $(this).addClass('eighth');
        }else if (cvalue == corder[8]) {
            $(this).addClass('ninth');
        }else if (cvalue == corder[9]) {
            $(this).addClass('tenth');
        }else if (cvalue == corder[10]) {
            $(this).addClass('eleventh');
        }else if (cvalue == corder[11]) {
            $(this).addClass('twelfth');
        }else if (cvalue == corder[12]) {
            $(this).addClass('thirteenth');
        }else if (cvalue == corder[13]) {
            $(this).addClass('fourteenth');
        }else if (cvalue == corder[14]) {
            $(this).addClass('fifteenth');
        }else if (cvalue == corder[15]) {
            $(this).addClass('sixteenth');
        }else if (cvalue == corder[16]) {
            $(this).addClass('seventeenth');
        }else if (cvalue == corder[17]) {
            $(this).addClass('eighteenth');
        }else if (cvalue == corder[18]) {
            $(this).addClass('nineteenth');
        }else if (cvalue == corder[19]) {
            $(this).addClass('twentieth');
        }else if (cvalue == corder[20]) {
            $(this).addClass('twentyfirst');
        }else if (cvalue == corder[21]) {
            $(this).addClass('twentysecond');
        }else if (cvalue == corder[22]) {
            $(this).addClass('twentythird');
        }else if (cvalue == corder[23]) {
            $(this).addClass('twentyfourth');
        }else if (cvalue == corder[24]) {
            $(this).addClass('twentyfifth');
        }else if (cvalue == corder[25]) {
            $(this).addClass('twentysixth');
        }else if (cvalue == corder[26]) {
            $(this).addClass('twentyseventh');
        }else if (cvalue == corder[27]) {
            $(this).addClass('twentyeighth');
        }else if (cvalue == corder[28]) {
            $(this).addClass('twentyninth');
        }else if (cvalue == corder[29]) {
            $(this).addClass('thirtieth');
        };
    });
    
    //checking for initially locked squares and updating completion
    checkCompletion();
  };
  
  runGame();
  
  //showing about and hiding about
  $('footer span.about').click(function() {
    $('div.score p.about').removeClass('hide');
  });
  $('p.about span').click(function() {
    $('div.score p.about').addClass('hide');
  });

});


