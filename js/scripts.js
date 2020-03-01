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
  $('form').submit(function(event) {
    event.preventDefault();
    var location = $('input#location').val();
    var phoneNumber = $('input#number').val();
    var type = $('select#pizzaType').val();
    var size = $('select#pizzaSize').val();
    var crust = $('select#crust').val();

    var toppings = [];
    $.each($("input[name='toppings']:checked"), function(){
      toppings.push($(this).val());
  });
  alert("My favourite toppings are: " + toppings.join(", "));
  })
})