$(document).ready(function() {
  alert('Make sure to click on anything and everything.');
  setInterval(function() {
    $('#one').changeColour();
    $('#two').changeColour();
    $('#three').changeColour();
    $('#onea').changeColour();
    $('#twoa').changeColour();
    $('#threea').changeColour();
    $('#oneb').changeColour();
    $('#twob').changeColour();
    $('#threeb').changeColour();
    $('#onec').changeColour();
    $('#twoc').changeColour();
    $('#threec').changeColour();
    $('#oned').changeColour();
    $('#twod').changeColour();
    $('#threed').changeColour();
    $('#onee').changeColour();
    $('#twoe').changeColour();
    $('#threee').changeColour();
  }, 50);
  setInterval(function() {
    $('#four').smoothChange();
    $('#five').smoothChange();
    $('#six').smoothChange();
    $('#foura').smoothChange();
    $('#fivea').smoothChange();
    $('#sixa').smoothChange();
    $('#fourb').smoothChange();
    $('#fiveb').smoothChange();
    $('#sixb').smoothChange();
    $('#fourc').smoothChange();
    $('#fivec').smoothChange();
    $('#sixc').smoothChange();
    $('#fourd').smoothChange();
    $('#fived').smoothChange();
    $('#sixd').smoothChange();
    $('#foure').smoothChange();
    $('#fivee').smoothChange();
    $('#sixe').smoothChange();
  }, 50);
  
  $('div').click(function(event) {
    $('div').css('background-color', $(this).css('background-color'));
    event.stopPropagation();
  });
  
  $('#reset').toggle(function() {
    $('#reset').css('background-color', '#000');
  }, function() {
    $('#reset').css('background-color', '#aaa');
  }, function() {
    $('#reset').css('background-color', '#fff');
  })
});