$(document).ready(function() {
  var hovColors = 'start';
  var hoverConfigs = {
    on: { 
      over: function() {
        $(this).stop(false, true)
        .addClass('hov')
        .css({'cursor': 'pointer'});
        var disable = $(this).parent().hasClass('faded');
        if (disable == true) {
          $(this).removeClass('hov').css({'cursor': 'default'});
        };
      },
      timeout: 175,
      out: function() {
        $(this).stop(false, true)
        .removeClass('hov');
        $('li.proj div div').css('background-position', '');
        $(this).css('transition', '');
      },
      interval: 0
    },
    call: function(size) {
      $('li.proj div.on').hoverIntent(size);
    },
    off: { 
      over: function() {
        $(this).stop(false, true)
        .addClass('hovSecondary')
        .css({'cursor': 'pointer'});
      },
      timeout: 175,
      out: function() {
        $(this).stop(false, true)
        .removeClass('hovSecondary');
      },
      interval: 0
    },
  };
  
  //set height dynamically for projects
  if ($('body').width() > 640) {
    $('ul.projects').height($('ul.projects').width());
  };
  if ($('body').width() < 641) {
    $('ul.projects').css('height', '');
  };
  
  
  $(window).resize(function() {
    //setting height dynamically so top locations adjust
    if ($('body').width() > 640) {
      $('ul.projects').height($('ul.projects').width());
    };
    if ($('body').width() < 641) {
      $('ul.projects').css('height', '');
    };
  });
  
  //call hover 
  hoverConfigs.call(hoverConfigs.on);
  
  //clicking on projects
  $('li.proj div.on').live('click', function() {
    $('li.proj').removeClass('active')
      .addClass('arranged');
    $('ul.projects').addClass('arranged');
    $('#projwrap').addClass('arranged');
    $('footer.work').addClass('arranged');
    $('li.proj div.on').removeClass('on').removeClass('hov')
      .addClass('arranged').hoverIntent(hoverConfigs.off);
    $(this).parent().addClass('active')
      .fancyNext().addClass('next')
      .fancyNext().addClass('secondnext')
      .fancyNext().addClass('thirdnext')
      .fancyNext().addClass('fourthnext')
      .fancyNext().addClass('fifthnext')
      .fancyNext().addClass('sixthnext')
      .fancyNext().addClass('seventhnext')
      .fancyNext().addClass('eighthnext')
      .fancyNext().addClass('ninthnext')
      .fancyNext().addClass('tenthnext')
      .fancyNext().addClass('eleventhnext')
      .fancyNext().addClass('twelfthnext')
      .fancyNext().addClass('thirteenthnext')
      .fancyNext().addClass('fourteenthnext');
  });
  
  $('li.proj div.arranged').live('click', function() {
    $('li.proj div.active').removeClass('active').addClass('arranged');
    $('li.proj').removeClass('active').removeClass('next')
      .removeClass('secondnext').removeClass('thirdnext')
      .removeClass('fourthnext').removeClass('fifthnext')
      .removeClass('sixthnext').removeClass('seventhnext')
      .removeClass('eighthnext').removeClass('ninthnext')
      .removeClass('tenthnext').removeClass('eleventhnext')
      .removeClass('twelfthnext').removeClass('thirteenthnext')
      .removeClass('fourteenthnext');
    $(this).removeClass('hovSecondary')
      .parent().addClass('active')
      .fancyNext().addClass('next')
      .fancyNext().addClass('secondnext')
      .fancyNext().addClass('thirdnext')
      .fancyNext().addClass('fourthnext')
      .fancyNext().addClass('fifthnext')
      .fancyNext().addClass('sixthnext')
      .fancyNext().addClass('seventhnext')
      .fancyNext().addClass('eighthnext')
      .fancyNext().addClass('ninthnext')
      .fancyNext().addClass('tenthnext')
      .fancyNext().addClass('eleventhnext')
      .fancyNext().addClass('twelfthnext')
      .fancyNext().addClass('thirteenthnext')
      .fancyNext().addClass('fourteenthnext');
  });
  
  $('li.active div.arranged').live('click', function (e) {
     hovColors = 'start';
     $.removeHovColor();
     $('ul.filters li.all').addClass('on' + hovColors);
     $('li.proj').removeClass('active').removeClass('next')
      .removeClass('secondnext').removeClass('thirdnext')
      .removeClass('fourthnext').removeClass('fifthnext')
      .removeClass('sixthnext').removeClass('seventhnext')
      .removeClass('eighthnext').removeClass('ninthnext')
      .removeClass('tenthnext').removeClass('eleventhnext')
      .removeClass('twelfthnext').removeClass('thirteenthnext')
      .removeClass('fourteenthnext').removeClass('arranged');
     $(this).removeClass('active').addClass('on');
     $('li.proj div.arranged').removeClass('arranged').addClass('on');
     hoverConfigs.call(hoverConfigs.on);
     $('ul.projects').removeClass('arranged');
     $('#projwrap').removeClass('arranged');
     $('footer.work').removeClass('arranged');
     setTimeout(function(){
     $('.colorchange').css({'color': '', 'background-color': ''});
     }, 300);
  });
  
  $('a.bx-close').live('click', function () {
     hovColors = 'start';
     $.removeHovColor();
     $('ul.filters li.all').addClass('on' + hovColors);
     $('li.proj').removeClass('active').removeClass('next')
      .removeClass('secondnext').removeClass('thirdnext')
      .removeClass('fourthnext').removeClass('fifthnext')
      .removeClass('sixthnext').removeClass('seventhnext')
      .removeClass('eighthnext').removeClass('ninthnext')
      .removeClass('tenthnext').removeClass('eleventhnext')
      .removeClass('twelfthnext').removeClass('thirteenthnext')
      .removeClass('fourteenthnext').removeClass('arranged');
     $(this).removeClass('active').addClass('on');
     $('li.proj div.arranged').removeClass('arranged').addClass('on');
     hoverConfigs.call(hoverConfigs.on);
     $('ul.projects').removeClass('arranged');
     $('#projwrap').removeClass('arranged');
     $('footer.work').removeClass('arranged');
     $('.colorchange').css({'color': '', 'background-color': ''});
  });
  
  //calling the flickering on each project  
  $('li.projone div.on').smoothChange({range: 7});
  $('li.projtwo div.on').smoothChange();
  $('li.projthree div.on').smoothChange();
  $('li.projfour div.on').smoothChange({range: 3});
  $('li.projfive div.on').smoothChange({range: 6});
  $('li.projsix div.on').smoothChange({range: 6});
  $('li.projseven div.on').smoothChange({range: 3});
  $('li.projeight div.on').smoothChange();
  $('li.projnine div.on').smoothChange({range: 4});
  $('li.projten div.on').smoothChange();
  $('li.projeleven div.on').smoothChange({range: 4});
  $('li.projtwelve div.on').smoothChange({range: 6});
  $('li.projthirteen div.on').smoothChange({range: 4});
  $('li.projfourteen div.on').smoothChange({range: 7});
  $('li.projfifteen div.on').smoothChange();
  
  //open and close sections
  $('a.aboutswitch').click( function (e) {
    hovColors = 'start';
    $.removeHovColor();
     $('ul.filters li.all').addClass('on' + hovColors);
    $('li.proj').removeClass('faded');
    $('div.divideTop').removeClass('divideTopHov');
    $('#wrapper').removeClass('trans');
    $('section.about').removeClass('hide');
    $('footer.about').removeClass('hide');
    $('section.workwrap').delay(50).queue(function () {$(this).addClass('hide');
      $(this).dequeue();});
    $('div.divideTop').removeClass('divideTop').addClass('divideBottom');
    e.preventDefault();
    $('a.aboutswitch').delay(50).queue(function () {$(this).addClass('hide');
      $(this).dequeue();});
    $('a.workswitch').removeClass('hide');
    $('li.proj').removeClass('active').removeClass('next')
      .removeClass('secondnext').removeClass('thirdnext')
      .removeClass('fourthnext').removeClass('fifthnext')
      .removeClass('sixthnext').removeClass('seventhnext')
      .removeClass('eighthnext').removeClass('ninthnext')
      .removeClass('tenthnext').removeClass('eleventhnext')
      .removeClass('twelfthnext').removeClass('thirteenthnext')
      .removeClass('fourteenthnext').removeClass('arranged');
     $('li.proj div.arranged').removeClass('arranged').addClass('on');
     hoverConfigs.call(hoverConfigs.on);
     $('ul.projects').removeClass('arranged');
     $('#projwrap').removeClass('arranged');
     $('footer.work').removeClass('arranged');
     $('.colorchange').css({'color': '', 'background-color': ''});
     $('html').animate({ scrollTop: 0 }, "slow");
  }).hover(
     function(){
       $('div.divideTop').addClass('divideTopHov');
       
     },
     function () {
       $('div.divideTop').removeClass('divideTopHov');
       
  });  
  
  $('a.workswitch').click( function (e) {
    hovColors = 'start';
    $.removeHovColor();
     $('ul.filters li.all').addClass('on' + hovColors);
    $('li.proj').removeClass('faded');
    $('#wrapper').removeClass('trans');
    $('div.divideBottom').removeClass('divideBottomHov');
    $('section.workwrap').removeClass('hide');
    $('footer.about').addClass('hide');
    $('section.about').addClass('hide');
    $('div.divideBottom').removeClass('divideBottom').addClass('divideTop');
    e.preventDefault();
    $('a.workswitch').delay(50).queue(function () {$(this).addClass('hide');
      $(this).dequeue();});
    $('a.aboutswitch').removeClass('hide');
    $('html').animate({ scrollTop: 0 }, "slow");
  }).hover(
     function(){
       $('div.divideBottom').addClass('divideBottomHov');
       
     },
     function () {
       $('div.divideBottom').removeClass('divideBottomHov');
       
  });
    
  $('ul.filters li').hover(
     function(){
       $(this).addClass('hov' + hovColors);
     },
     function () {
       $(this).removeClass('hov' + hovColors);       
  });
  
  //removing all color classes for returning to main
  $.removeHovColor = function(){
    $('ul.filters li').removeClass('onstart')
        .removeClass('onone')
        .removeClass('ontwo')
        .removeClass('onthree')
        .removeClass('onfour')
        .removeClass('onfive')
        .removeClass('onsix')
        .removeClass('onseven')
        .removeClass('oneight')
        .removeClass('onnine')
        .removeClass('onten')
        .removeClass('oneleven')
        .removeClass('ontwelve')
        .removeClass('onthirteen')
        .removeClass('onfourteen')
        .removeClass('onfifteen')
        .removeClass('hovone')
        .removeClass('hovtwo')
        .removeClass('hovthree')
        .removeClass('hovfour')
        .removeClass('hovfive')
        .removeClass('hovsix')
        .removeClass('hovseven')
        .removeClass('hoveight')
        .removeClass('hovnine')
        .removeClass('hovten')
        .removeClass('hoveleven')
        .removeClass('hovtwelve')
        .removeClass('hovthirteen')
        .removeClass('hovfourteen')
        .removeClass('hovfifteen')
    };
  
  $('ul.filters li.all').addClass('on' + hovColors).click( function() {
    hovColors = 'start';
    $('li.proj').removeClass('active').removeClass('next')
      .removeClass('secondnext').removeClass('thirdnext')
      .removeClass('fourthnext').removeClass('fifthnext')
      .removeClass('sixthnext').removeClass('seventhnext')
      .removeClass('eighthnext').removeClass('ninthnext')
      .removeClass('tenthnext').removeClass('eleventhnext')
      .removeClass('twelfthnext').removeClass('thirteenthnext')
      .removeClass('fourteenthnext').removeClass('arranged');
     $(this).removeClass('active').addClass('on');
     $('li.proj div.arranged').removeClass('arranged').addClass('on');
     hoverConfigs.call(hoverConfigs.on);
     $('ul.projects').removeClass('arranged');
     $('#projwrap').removeClass('arranged');
     $('footer.work').removeClass('arranged');
     $('.colorchange').css({'color': '', 'background-color': ''});
    $('li.proj').removeClass('faded');
    $.removeHovColor();
    $(this).addClass('on' + hovColors);
  });
  
  $('ul.filters li.web').click( function() {
    hovColors = 'start';
    $('li.proj').removeClass('active').removeClass('next')
      .removeClass('secondnext').removeClass('thirdnext')
      .removeClass('fourthnext').removeClass('fifthnext')
      .removeClass('sixthnext').removeClass('seventhnext')
      .removeClass('eighthnext').removeClass('ninthnext')
      .removeClass('tenthnext').removeClass('eleventhnext')
      .removeClass('twelfthnext').removeClass('thirteenthnext')
      .removeClass('fourteenthnext').removeClass('arranged');
     $(this).removeClass('active').addClass('on');
     $('li.proj div.arranged').removeClass('arranged').addClass('on');
     hoverConfigs.call(hoverConfigs.on);
     $('ul.projects').removeClass('arranged');
     $('#projwrap').removeClass('arranged');
     $('footer.work').removeClass('arranged');
     $('.colorchange').css({'color': '', 'background-color': ''});
    $('li.proj:not(.web)').addClass('faded');
    $('li.web').removeClass('faded');
    $.removeHovColor();
    $(this).addClass('on' + hovColors);
  });
  
  $('ul.filters li.design').click( function() {
    hovColors = 'start';
    $('li.proj').removeClass('active').removeClass('next')
      .removeClass('secondnext').removeClass('thirdnext')
      .removeClass('fourthnext').removeClass('fifthnext')
      .removeClass('sixthnext').removeClass('seventhnext')
      .removeClass('eighthnext').removeClass('ninthnext')
      .removeClass('tenthnext').removeClass('eleventhnext')
      .removeClass('twelfthnext').removeClass('thirteenthnext')
      .removeClass('fourteenthnext').removeClass('arranged');
     $(this).removeClass('active').addClass('on');
     $('li.proj div.arranged').removeClass('arranged').addClass('on');
     hoverConfigs.call(hoverConfigs.on);
     $('ul.projects').removeClass('arranged');
     $('#projwrap').removeClass('arranged');
     $('footer.work').removeClass('arranged');
     $('.colorchange').css({'color': '', 'background-color': ''});
    $('li.proj:not(.design)').addClass('faded');
    $('li.design').removeClass('faded');
    $.removeHovColor();
    $(this).addClass('on' + hovColors);
  });
  
  $('ul.filters li.art').click( function() {
    hovColors = 'start';
    $('li.proj').removeClass('active').removeClass('next')
      .removeClass('secondnext').removeClass('thirdnext')
      .removeClass('fourthnext').removeClass('fifthnext')
      .removeClass('sixthnext').removeClass('seventhnext')
      .removeClass('eighthnext').removeClass('ninthnext')
      .removeClass('tenthnext').removeClass('eleventhnext')
      .removeClass('twelfthnext').removeClass('thirteenthnext')
      .removeClass('fourteenthnext').removeClass('arranged');
     $(this).removeClass('active').addClass('on');
     $('li.proj div.arranged').removeClass('arranged').addClass('on');
     hoverConfigs.call(hoverConfigs.on);
     $('ul.projects').removeClass('arranged');
     $('#projwrap').removeClass('arranged');
     $('footer.work').removeClass('arranged');
     $('.colorchange').css({'color': '', 'background-color': ''});
    $('li.proj:not(.art)').addClass('faded');
    $('li.art').removeClass('faded');
    $.removeHovColor();
    $(this).addClass('on' + hovColors);
  });
  
  //footer contact hovers
  $('li.twitter').hover(
    function () {
    $('li.result').html('twitter')
    .addClass('twitter');
    },
    function () {
    $('li.result').removeClass('twitter');
  });
  
  $('li.facebook').hover(
    function () {
    $('li.result').html('facebook')
    .addClass('facebook');
    },
    function () {
    $('li.result').removeClass('facebook');
  });
    
  $('li.linkedin').hover(
    function () {
    $('li.result').html('linkedIn')
    .addClass('linkedin');
    },
    function () {
    $('li.result').removeClass('linkedin');
  });
    
  $('li.instagram').hover(
    function () {
    $('li.result').html('instagram')
    .addClass('instagram');
    },
    function () {
    $('li.result').removeClass('instagram');
  });
  
  $('li.github').hover(
    function () {
    $('li.result').html('github')
    .addClass('github');
    },
    function () {
    $('li.result').removeClass('github');
  });
  
  $('a.email').hover(
    function () {
    $('li.result').html('andrewclavin8@gmail.com')
    .addClass('email');
    },
    function () {
    $('li.result').removeClass('email');
  });
  
  //CALLING SLIDESHOWS
  $('#mfest').click(function () {
    hovColors = 'fifteen';
    $.removeHovColor();
    $('li.proj').removeClass('faded');
    $('ul.filters li.design').addClass('on' + hovColors);
    $('#slidewrapper').html(
      '<ul class="bxslider"><li><img src="images/identity/mone.jpg"/></li><li><img src="images/identity/mtwo.jpg"/></li><li><img src="images/identity/mthree.jpg"/></li><li><img src="images/identity/mfive.jpg"/></li></ul>'
    );
    setTimeout( function (){
      $('.bxslider').bxSlider();
      $('<a class="bx-close" href="">&#215;</a>').appendTo('div.bx-controls-direction');
      $('#slidewrapper a').addClass('colorchange');
      $('.explain h1').addClass('colorchange');
      $('.colorchange').css('color', '#249089');
      $('div.colorchange').css('background-color', '#249089');
      setTimeout( function (){
        $('#slidewrapper a.colorchange').css('background-color', '#249089');
        $('#slidewrapper a.colorchange').css({'color': '#eee'});
        $('html,body').animate({scrollTop: $("#title").offset().top -35}, 200);
        $(window).resize(function(){
            $('#slidewrapper a.colorchange').css('background-color', '#249089');
        });
      }, 400);
    }, 200);
    $('a.bx-pager-link').ready( function() {
        $('a.bx-pager-link').css('background-color', '#249089');
    });
    $('<section class="explain"><h1>Mfest <span>| Brand&nbsp;Identity</span></h1><p>Mfest is a mental health festival at the University of Dayton; its  identity is developed each year by a team of four designers. 2012 was my third year working on the project, and the first year I was one of the two designers heading the project.</p></section>')
          .appendTo('#slidewrapper');
  });
  
  $('#motherwell').click(function () {
    hovColors = 'one';
    $.removeHovColor();
    $('li.proj').removeClass('faded');
    $('ul.filters li.web').addClass('on' + hovColors);
    $('#slidewrapper').html(
      '<ul class="bxslider"><li><img src="images/web/one.jpg"/></li><li><img src="images/web/two.jpg"/></li><li><img src="images/web/three.jpg"/></li><li><img src="images/web/four.jpg"/></li></ul>'
    );
    setTimeout( function (){
      $('.bxslider').bxSlider();
      $('<a class="bx-close" href="">&#215;</a>').appendTo('div.bx-controls-direction');
      $('<a class="bx-site" href="motherwell" target="_blank">Visit</a>').appendTo('div.bx-controls-direction');
      $('#slidewrapper a').addClass('colorchange');
      $('.explain h1').addClass('colorchange');
      $('.colorchange').css('color', '#551108');
      $('div.colorchange').css('background-color', '#551108');
      setTimeout( function (){
        $('#slidewrapper a.colorchange').css('background-color', '#551108');
        $('#slidewrapper a.colorchange').css({'color': '#eee'});
        $('html,body').animate({scrollTop: $("#title").offset().top -35}, 200);
        $(window).resize(function(){
            $('#slidewrapper a.colorchange').css('background-color', '#551108');
        });
        $('a.bx-pager-link').ready( function() {
            $('a.bx-pager-link').css('background-color', '#551108');
        });
      }, 400);
    }, 200);
    $('a.bx-pager-link').ready( function() {
            $('a.bx-pager-link').css('background-color', '#551108');
    });
    $('<section class="explain"><h1>Motherwell <span>| Web Information&nbsp;System</span></h1><p>Robert Motherwell was an Abstract-Expressionist painter known as the spokesperson of the movement. I created a website dedicated to his writing, painting, and general life in the form of a dynamic abstract collage. </p></section>')
      .appendTo('#slidewrapper');
  });
  
  $('#alasite').click(function () {
    hovColors = 'eight';
    $.removeHovColor();
    $('li.proj').removeClass('faded');
    $('ul.filters li.web').addClass('on' + hovColors);
    $('#slidewrapper').html(
      '<ul class="bxslider"><li><img src="images/web/alaone.jpg"/></li><li><img src="images/web/alatwo.jpg"/></li><li><img src="images/web/alathree.jpg"/></li><li><img src="images/web/alafour.jpg"/></li><li><img src="images/web/alasix.jpg"/></li></ul>'
    );
    setTimeout( function (){
      $('.bxslider').bxSlider();
      $('<a class="bx-close" href="">&#215;</a>').appendTo('div.bx-controls-direction');
      $('<a class="bx-site" href="http://www.anotherlanguage.info/" target="_blank">Visit</a>').appendTo('div.bx-controls-direction');
      $('#slidewrapper a').addClass('colorchange');
      $('.explain h1').addClass('colorchange');
      $('.colorchange').css('color', '#74A695');
      $('div.colorchange').css('background-color', '#74A695');
      setTimeout( function (){
        $('#slidewrapper a.colorchange').css('background-color', '#74A695');
        $('#slidewrapper a.colorchange').css({'color': '#eee'});
        $('html,body').animate({scrollTop: $("#title").offset().top -35}, 200);
        $(window).resize(function(){
            $('#slidewrapper a.colorchange').css('background-color', '#74A695');
        });
      }, 400);
    }, 200);
    $('a.bx-pager-link').ready( function() {
        $('a.bx-pager-link').css('background-color', '#74A695');
    });
    $('<section class="explain"><h1>Another Language Altogether <span>| In&nbsp;Progress</span></h1><p>Another Language Altogether is a touring group of posters that accompany poetic work by Wendy McVicker. I have been creating the website as a freelance project. It features around thirty posters created in a Typography II course at the University of Dayton.</p></section>')
      .appendTo('#slidewrapper');
  });
  
  $('#carsondrome').click(function () {
    hovColors = 'fourteen';
    $.removeHovColor();
    $('li.proj').removeClass('faded');
    $('ul.filters li.web').addClass('on' + hovColors);
    $('#slidewrapper').html(
      '<ul class="bxslider"><li><img src="images/web/pdone.jpg"/></li><li><img src="images/web/pdtwo.jpg"/></li><li><img src="images/web/pdthree.jpg"/></li></ul>'
    );
    setTimeout( function (){
      $('.bxslider').bxSlider();
      $('<a class="bx-close" href="">&#215;</a>').appendTo('div.bx-controls-direction');
      $('<a class="bx-site" href="carsondrome" target="_blank">Visit</a>').appendTo('div.bx-controls-direction');
      $('#slidewrapper a').addClass('colorchange');
      $('.explain h1').addClass('colorchange');
      $('.colorchange').css('color', '#674020');
      $('div.colorchange').css('background-color', '#674020');
      setTimeout( function (){
        $('#slidewrapper a.colorchange').css('background-color', '#674020');
        $('#slidewrapper a.colorchange').css({'color': '#eee'});
        $('html,body').animate({scrollTop: $("#title").offset().top -35}, 200);
        $(window).resize(function(){
            $('#slidewrapper a.colorchange').css('background-color', '#674020');
        });
      }, 400);
    }, 200);
    $('a.bx-pager-link').ready( function() {
        $('a.bx-pager-link').css('background-color', '#674020');
    });
    $('<section class="explain"><h1>David Carsondromes <span>| Webpage</span></h1><p>David Carsondrome is a javascript project I created that tests whether words are palindromes or not. If they pass the test the become part of a David Carson&ndash;esque type collage.</p></section>')
      .appendTo('#slidewrapper');
  });
  
  $('#colordecay').click(function () {
    hovColors = 'three';
    $.removeHovColor();
    $('li.proj').removeClass('faded');
    $('ul.filters li.web').addClass('on' + hovColors);
    $('#slidewrapper').html(
      '<ul class="bxslider"><li><img src="images/web/cdone.jpg"/></li><li><img src="images/web/cdtwo.jpg"/></li><li><img src="images/web/cdthree.jpg"/></li></ul>'
    );
    setTimeout( function (){
      $('.bxslider').bxSlider();
      $('<a class="bx-close" href="">&#215;</a>').appendTo('div.bx-controls-direction');
      $('<a class="bx-site" href="colordecay" target="_blank">Visit</a>').appendTo('div.bx-controls-direction');
      $('#slidewrapper a').addClass('colorchange');
      $('.explain h1').addClass('colorchange');
      $('.colorchange').css('color', '#9C8BBE');
      $('div.colorchange').css('background-color', '#9C8BBE');
      setTimeout( function (){
        $('#slidewrapper a.colorchange').css('background-color', '#9C8BBE');
        $('#slidewrapper a.colorchange').css({'color': '#eee'});
        $('html,body').animate({scrollTop: $("#title").offset().top -35}, 200);
        $(window).resize(function(){
            $('#slidewrapper a.colorchange').css('background-color', '#9C8BBE');
        });
      }, 400);
    }, 200);
    $('a.bx-pager-link').ready( function() {
        $('a.bx-pager-link').css('background-color', '#9C8BBE');
    });
    $('<section class="explain"><h1>Color Decay <span>| Webpage</span></h1><p>This project is a javascript color experiment exhibiting color relationships in hexidecimal nature. It was created as research for a color manipulation plugin I created for my portfolio.</p></section>')
      .appendTo('#slidewrapper');
  });
  
  $('#suburbs').click(function () {
    hovColors = 'two';
    $.removeHovColor();
    $('li.proj').removeClass('faded');
    $('ul.filters li.design').addClass('on' + hovColors);
    $('#slidewrapper').html(
      '<ul class="bxslider"><img src="images/posters/poone.jpg"/><li><img src="images/posters/potwo.jpg"/></li><li><img src="images/posters/pothree.jpg"/></li></ul>'
    );
    setTimeout( function (){
      $('.bxslider').bxSlider();
      $('<a class="bx-close" href="">&#215;</a>').appendTo('div.bx-controls-direction');
      $('#slidewrapper a').addClass('colorchange');
      $('.explain h1').addClass('colorchange');
      $('.colorchange').css('color', '#F5AE30');
      $('div.colorchange').css('background-color', '#F5AE30');
      setTimeout( function (){
        $('#slidewrapper a.colorchange').css('background-color', '#F5AE30');
        $('#slidewrapper a.colorchange').css({'color': '#eee'});
        $('html,body').animate({scrollTop: $("#title").offset().top -35}, 200);
        $(window).resize(function(){
            $('#slidewrapper a.colorchange').css('background-color', '#F5AE30');
        });
      }, 400);
    }, 200);
    $('a.bx-pager-link').ready( function() {
        $('a.bx-pager-link').css('background-color', '#F5AE30');
    });
    $('<section class="explain"><h1>Suburbs, 1955 <span>| Poster</span></h1><p>This poster was created as an interpretation of the poem Suburbs, 1955 by Wendy McVicker. It was selected to tour throughout Ohio as part of the Another Language Altogether poster exhibit.</p></section>')
      .appendTo('#slidewrapper');
  });
  
  $('#paintings').click(function () {
    hovColors = 'thirteen';
    $.removeHovColor();
    $('li.proj').removeClass('faded');
    $('ul.filters li.art').addClass('on' + hovColors);
    $('#slidewrapper').html(
      '<ul class="bxslider"><li><img src="images/paintings/paone.jpg"/></li><li><img src="images/paintings/pathree.jpg"/><li><img src="images/paintings/pafour.jpg"/><li><img src="images/paintings/pafive.jpg"/></li></ul>'
    );
    setTimeout( function (){
      $('.bxslider').bxSlider();
      $('<a class="bx-close" href="">&#215;</a>').appendTo('div.bx-controls-direction');
      $('#slidewrapper a').addClass('colorchange');
      $('.explain h1').addClass('colorchange');
      $('.colorchange').css('color', '#77CCF5');
      $('div.colorchange').css('background-color', '#77CCF5');
      setTimeout( function (){
        $('#slidewrapper a.colorchange').css('background-color', '#77CCF5');
        $('#slidewrapper a.colorchange').css({'color': '#eee'});
        $('html,body').animate({scrollTop: $("#title").offset().top -35}, 200);
        $(window).resize(function(){
            $('#slidewrapper a.colorchange').css('background-color', '#77CCF5');
        });
      }, 400);
    }, 200);
    $('a.bx-pager-link').ready( function() {
        $('a.bx-pager-link').css('background-color', '#77CCF5');
    });
    $('<section class="explain"><h1>Paintings <span>| Fine Art</span></h1><p>These paintings were created with enamel, plexiglass, and other various structural materials. They have been an educational outlet to experiment in linear relationships, color relativity, and optic perception.</p></section>')
      .appendTo('#slidewrapper');
  });
  
  $('#cryptocolors').click(function () {
    hovColors = 'four';
    $.removeHovColor();
    $('li.proj').removeClass('faded');
    $('ul.filters li.web').addClass('on' + hovColors);
    $('#slidewrapper').html(
      '<ul class="bxslider"><li><img src="images/web/ccone.jpg"/></li><li><img src="images/web/cctwo.jpg"/></li><li><img src="images/web/ccthree.jpg"/></li></ul>'
    );
    setTimeout( function (){
      $('.bxslider').bxSlider();
      $('<a class="bx-close" href="">&#215;</a>').appendTo('div.bx-controls-direction');
      $('<a class="bx-site" href="cryptocolors" target="_blank">Visit</a>').appendTo('div.bx-controls-direction');
      $('#slidewrapper a').addClass('colorchange');
      $('.explain h1').addClass('colorchange');
      $('.colorchange').css('color', '#BBBBAA');
      $('div.colorchange').css('background-color', '#BBBBAA');
      setTimeout( function (){
        $('#slidewrapper a.colorchange').css('background-color', '#BBBBAA');
        $('#slidewrapper a.colorchange').css({'color': '#eee'});
        $('html,body').animate({scrollTop: $("#title").offset().top -35}, 200);
        $(window).resize(function(){
            $('#slidewrapper a.colorchange').css('background-color', '#BBBBAA');
        });
      }, 400);
    }, 200);
    $('a.bx-pager-link').ready( function() {
        $('a.bx-pager-link').css('background-color', '#BBBBAA');
    });
    $('<section class="explain"><h1>CryptoColors <span>| Javascript&nbsp;Game</span></h1><p>This game was created using jQuery/JavaScript during a week long game jam put on by the University of Portsmouth, Hampshire, England. The competition was a group final project for a JavaScript class at Lakeland Community College. The object of the game is to organize the colors from light to dark as efficiently as possible.</p></section>')
      .appendTo('#slidewrapper');
  });
  
  $('#freehand').click(function () {
    hovColors = 'five';
    $.removeHovColor();
    $('li.proj').removeClass('faded');
    $('ul.filters li.design').addClass('on' + hovColors);
    $('#slidewrapper').html(
      '<ul class="bxslider"><li><img src="images/identity/ffour.jpg"/></li><li><img src="images/identity/fone.jpg"/></li><li><img src="images/identity/fthree.jpg"/></li><li><img src="images/identity/ftwo.jpg"/></li></ul>'
    );
    setTimeout( function (){
      $('.bxslider').bxSlider();
      $('<a class="bx-close" href="">&#215;</a>').appendTo('div.bx-controls-direction');
      $('#slidewrapper a').addClass('colorchange');
      $('.explain h1').addClass('colorchange');
      $('.colorchange').css('color', '#781030');
      $('div.colorchange').css('background-color', '#781030');
      setTimeout( function (){
        $('#slidewrapper a.colorchange').css('background-color', '#781030');
        $('#slidewrapper a.colorchange').css({'color': '#eee'});
        $('html,body').animate({scrollTop: $("#title").offset().top -35}, 200);
        $(window).resize(function(){
            $('#slidewrapper a.colorchange').css('background-color', '#781030');
        });
      }, 400);
    }, 200);
    $('a.bx-pager-link').ready( function() {
        $('a.bx-pager-link').css('background-color', '#781030');
    });
    $('<section class="explain"><h1>Freehand Creative Magazine <span>| Brand&nbsp;Identity</span></h1><p>Freehand is a hypothetical magazine brand that mixes magazine content with a sketchbook for all types of creatives. It was created as the final part of a capstone course at the University of Dayton.</p></section>')
      .appendTo('#slidewrapper');
  });
  
  $('#photo').click(function () {
    hovColors = 'seven';
    $.removeHovColor();
    $('li.proj').removeClass('faded');
    $('ul.filters li.art').addClass('on' + hovColors);
    $('#slidewrapper').html(
      '<ul class="bxslider"><li><img src="images/photography/markone.jpg"/></li><li><img src="images/photography/beckyone.jpg"/></li><li><img src="images/photography/mark2.jpg"/></li><li><img src="images/photography/beckytwo.jpg"/></li></ul>'
    );
    setTimeout( function (){
      $('.bxslider').bxSlider();
      $('<a class="bx-close" href="">&#215;</a>').appendTo('div.bx-controls-direction');
      $('#slidewrapper a').addClass('colorchange');
      $('.explain h1').addClass('colorchange');
      $('.colorchange').css('color', '#808C94');
      $('div.colorchange').css('background-color', '#808C94');
      setTimeout( function (){
        $('#slidewrapper a.colorchange').css('background-color', '#808C94');
        $('#slidewrapper a.colorchange').css({'color': '#eee'});
        $('html,body').animate({scrollTop: $("#title").offset().top -35}, 200);
        $(window).resize(function(){
            $('#slidewrapper a.colorchange').css('background-color', '#808C94');
        });
      }, 400);
    }, 200);
    $('a.bx-pager-link').ready( function() {
        $('a.bx-pager-link').css('background-color', '#808C94');
    });
    $('<section class="explain"><h1>Photography <span>| Fine&nbsp;Art</span></h1><p>These crops are from selected photos from a final project in a studio lighting course. My subject was the artist and the studio; the photographs were taken of fellow University of Dayton art students.</p></section>')
      .appendTo('#slidewrapper');
  });
  
  $('#personalposter').click(function () { 
    hovColors = 'nine';
    $.removeHovColor();
    $('li.proj').removeClass('faded');
    $('ul.filters li.design').addClass('on' + hovColors);
    $('#slidewrapper').html(
      '<ul class="bxslider"><li><img src="images/posters/pone.jpg"/></li><li><img src="images/posters/ptwo.jpg"/></li><li><img src="images/posters/pthree.jpg"/></li></ul>'
    );
    setTimeout( function (){
      $('.bxslider').bxSlider();
      $('<a class="bx-close" href="">&#215;</a>').appendTo('div.bx-controls-direction');
      $('#slidewrapper a').addClass('colorchange');
      $('.explain h1').addClass('colorchange');
      $('.colorchange').css('color', '#7C7CA3');
      $('div.colorchange').css('background-color', '#7C7CA3');
      setTimeout( function (){
        $('#slidewrapper a.colorchange').css('background-color', '#7C7CA3');
        $('#slidewrapper a.colorchange').css({'color': '#eee'});
        $('html,body').animate({scrollTop: $("#title").offset().top -35}, 200);
        $(window).resize(function(){
            $('#slidewrapper a.colorchange').css('background-color', '#7C7CA3');
        });
      }, 400);
    }, 200);
    $('a.bx-pager-link').ready( function() {
        $('a.bx-pager-link').css('background-color', '#7C7CA3');
    });
    $('<section class="explain"><h1>Personal Maps <span>| Poster</span></h1><p>This poster was created as an exploration of the use and definition of maps, specifically to map a specific extended weekend during a graphic design course. The imagery in the poster is high resolution scans of a graph printed on vellum.</p></section>')
      .appendTo('#slidewrapper');
  });
  
  $('#ourvinyl').click(function () {
    hovColors = 'six';
    $.removeHovColor();
    $('li.proj').removeClass('faded');
    $('ul.filters li.design').addClass('on' + hovColors);
    $('#slidewrapper').html(
      '<ul class="bxslider"><li><img src="images/random/botrone.jpg"/></li><li><img src="images/random/botrtwo.jpg"/></li><li><img src="images/random/botrthree.jpg"/></li></ul>'
    );
    setTimeout( function (){
      $('.bxslider').bxSlider();
      $('<a class="bx-close" href="">&#215;</a>').appendTo('div.bx-controls-direction');
      $('#slidewrapper a').addClass('colorchange');
      $('.explain h1').addClass('colorchange');
      $('.colorchange').css('color', '#334477');
      $('div.colorchange').css('background-color', '#334477');
      setTimeout( function (){
        $('#slidewrapper a.colorchange').css('background-color', '#334477');
        $('#slidewrapper a.colorchange').css({'color': '#eee'});
        $('html,body').animate({scrollTop: $("#title").offset().top -35}, 200);
        $(window).resize(function(){
            $('#slidewrapper a.colorchange').css('background-color', '#334477');
        });
      }, 400);
    }, 200);
    $('a.bx-pager-link').ready( function() {
        $('a.bx-pager-link').css('background-color', '#334477');
    });
    $('<section class="explain"><h1>Back of the Rack <span>| Digital Album&nbsp;Cover</span></h1><p>Back of the Rack is an online free monthly music download distributed by Our Vinyl, a startup record label out of Nashville, Tennessee. This cover was used in their September 2012 edition.</p></section>')
      .appendTo('#slidewrapper');
  });
  
  $('#books').click(function () {
    hovColors = 'ten';
    $.removeHovColor();
    $('li.proj').removeClass('faded');
    $('ul.filters li.design').addClass('on' + hovColors);
    $('#slidewrapper').html(
      '<ul class="bxslider"><li><img src="images/books/bone.jpg"/></li><li><img src="images/books/btwo.jpg"/></li><li><img src="images/books/bthree.jpg"/></li><li><img src="images/books/bfour.jpg"/></li></ul>'
    );
   setTimeout( function (){
      $('.bxslider').bxSlider();
      $('<a class="bx-close" href="">&#215;</a>').appendTo('div.bx-controls-direction');
      $('#slidewrapper a').addClass('colorchange');
      $('.explain h1').addClass('colorchange');
      $('.colorchange').css('color', '#667766');
      $('div.colorchange').css('background-color', '#667766');
      setTimeout( function (){
        $('#slidewrapper a.colorchange').css('background-color', '#667766');
        $('#slidewrapper a.colorchange').css({'color': '#eee'});
        $('html,body').animate({scrollTop: $("#title").offset().top -35}, 200);
        $(window).resize(function(){
            $('#slidewrapper a.colorchange').css('background-color', '#667766');
        });
      }, 400);
    }, 200);
    $('a.bx-pager-link').ready( function() {
        $('a.bx-pager-link').css('background-color', '#667766');
    });
    $('<section class="explain"><h1>Various Book Covers <span>| Print&nbsp;work</span></h1><p>I designed book covers for Player Piano, The Autobiography of Alice B. Toklas, and Einsteins Dreams. They were created in a graphic design course at the University of Dayton.</p></section>')
      .appendTo('#slidewrapper');
  });
  
  $('#waste').click(function () {
    hovColors = 'eleven';
    $.removeHovColor();
    $('li.proj').removeClass('faded');
    $('ul.filters li.design').addClass('on' + hovColors);
    $('#slidewrapper').html(
      '<ul class="bxslider"><li><img src="images/posters/sone.jpg"/></li><li><img src="images/posters/stwo.jpg"/></li><li><img src="images/posters/sthree.jpg"/></li></ul>'
    );
    setTimeout( function (){
      $('.bxslider').bxSlider();
      $('<a class="bx-close" href="">&#215;</a>').appendTo('div.bx-controls-direction');
      $('#slidewrapper a').addClass('colorchange');
      $('.explain h1').addClass('colorchange');
      $('.colorchange').css('color', '#B3A338');
      $('div.colorchange').css('background-color', '#B3A338');
      setTimeout( function (){
        $('#slidewrapper a.colorchange').css('background-color', '#B3A338');
        $('#slidewrapper a.colorchange').css({'color': '#eee'});
        $('html,body').animate({scrollTop: $("#title").offset().top -35}, 200);
        $(window).resize(function(){
            $('#slidewrapper a.colorchange').css('background-color', '#B3A338');
        });
      }, 400);
    }, 200);
    $('a.bx-pager-link').ready( function() {
        $('a.bx-pager-link').css('background-color', '#B3A338');
    });
    $('<section class="explain"><h1>Sustainability Week <span>| Poster</span></h1><p>This poster was created for Sustainability week at the University of Dayton. Each day of the week is dedicated to a different sustainablitiy cause; this poster addresses the issue of waste.</p></section>')
      .appendTo('#slidewrapper');
  });

  $('#logos').click(function () {
    hovColors = 'twelve';
    $.removeHovColor();
    $('li.proj').removeClass('faded');
    $('ul.filters li.design').addClass('on' + hovColors);
    $('#slidewrapper').html(
      '<ul class="bxslider"><li><img src="images/logos/one.jpg"/></li><li><img src="images/logos/two.jpg"/></li><li><img src="images/logos/three.jpg"/></li><li><img src="images/logos/four.jpg"/></li><li><img src="images/logos/five.jpg"/></li></ul>'
    );
    setTimeout( function (){
      $('.bxslider').bxSlider();
      $('<a class="bx-close" href="">&#215;</a>').appendTo('div.bx-controls-direction');
      $('#slidewrapper a').addClass('colorchange');
      $('.explain h1').addClass('colorchange');
      $('.colorchange').css('color', '#BD4542');
      $('div.colorchange').css('background-color', '#BD4542');
      setTimeout( function (){
        $('#slidewrapper a.colorchange').css('background-color', '#BD4542');
        $('#slidewrapper a.colorchange').css({'color': '#eee'});
        $('html,body').animate({scrollTop: $("#title").offset().top -35}, 200);
        $(window).resize(function(){
            $('#slidewrapper a.colorchange').css('background-color', '#BD4542');
        });
      }, 400);
    }, 200);
    $('a.bx-pager-link').ready( function() {
        $('a.bx-pager-link').css('background-color', '#BD4542');
    });
    $('<section class="explain"><h1>Logos</h1><p>A selection of various logos I have created, many of which were created as part of a Trademark Design course.</p></section>')
      .appendTo('#slidewrapper');                   
  });

  //slideshow functionality
  $('.bxslider').bxSlider();

  //correcting possible wrong color in image links under slideshow
  $("html").mousemove(function(event){
    var newColor = $('div.colorchange').css('background-color');
    $('a.bx-pager-link').css('background-color', newColor);
  });
  
  //allowing title to bring you back to main page
  $('#title').live('click', function () {
     hovColors = 'start';
     $.removeHovColor();
     $('ul.filters li.all').addClass('on' + hovColors);
     $('li.proj').removeClass('active').removeClass('next')
      .removeClass('secondnext').removeClass('thirdnext')
      .removeClass('fourthnext').removeClass('fifthnext')
      .removeClass('sixthnext').removeClass('seventhnext')
      .removeClass('eighthnext').removeClass('ninthnext')
      .removeClass('tenthnext').removeClass('eleventhnext')
      .removeClass('twelfthnext').removeClass('thirteenthnext')
      .removeClass('fourteenthnext').removeClass('arranged');
     $(this).removeClass('active').addClass('on');
     $('li.proj div.arranged').removeClass('arranged').addClass('on');
     hoverConfigs.call(hoverConfigs.on);
     $('ul.projects').removeClass('arranged');
     $('#projwrap').removeClass('arranged');
     $('footer.work').removeClass('arranged');
     $('.colorchange').css({'color': '', 'background-color': ''});
  });
  
  //setting the scroll hover functionality for small resolutions
  var lastwidth = $('body').width();

  $(window).resize(function(){
    newwidth = $('body').width();
    if ((lastwidth < 641) && (newwidth > 640)) {
      $('li.proj > div').removeClass('hov');
    };
  });
  $(window).scroll(function(){
    if ($('body').width() < 641){
      $('li.proj > div').each(function() {
        var offset = $(this).offset().top - $(window).scrollTop();
        if ((offset < 225) && (offset > -75)) {
          $(this).addClass('hov');
        }; 
        if ((offset > 225) || (offset < -75)) {
          $(this).removeClass('hov');
        };
      });
    };
  });
  
//GET SCROLLUPS TO WORK ON MOBILE
});