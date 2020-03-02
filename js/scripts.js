//Beginning of Business logic


//Beginning of UI
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
  $('#placeOrder').click(function() {
    var location = $('input#location').val();
    var phoneNumber = $('input#number').val();
    var newContact = new contact (phoneNumber, location)
    $('#deliverOption').show();
    $('#contactAddress').text( + newContact.deliveryAddress);

    var type = $('select#pizzaType').val();
    var size = $('select#pizzaSize').val();
    var crust = $('select#crust').val();

    var toppings = [];
    $.each($("input[name='toppings']:checked"), function(){
      toppings.push($(this).val());
    });
    var allTopings = toppings.join(", ");
    var pizzaDetails=(size + " " + type+", " +crust+" crust. Toppings: " +allTopings);
    var newOrder = new order (pizzaSize,crust);
    newOrder.pizzaCost();
    totalPriceArray.push(newOrder.pizzaPrice);
    $('#orderDetails').append(+ pizzaDetails);
  })
})