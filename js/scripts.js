
$(document).ready(function(event) {
  $('#pickUp').click(function() {
    $("#pickUpOption").show();
    $('#displayLocation').hide();
    $('#displayNumber').hide();
  })
  $('#deliver').click(function() {
    $('#displayLocation').show();
    $('#displayNumber').show();
    $("#pickUpOption").hide();
  })
  
    
})