var totalPriceArray = [];
function order (pizzaSize, crust) {
  this.type = 5;
  this.size= pizzaSize;
  this.crust = crust;
  this.toppings = 3;
  this.pizzaPrice = 0;
}
order.prototype.pizzaCost = function () {
  if(this.pizzaSize === "Small(serves 1)") {
    this.pizzaPrice += 3;
  }else if(this.pizzaSize ==="Medium(serves 2)") {
    this.pizzaPrice +=6;
  }else if(this.pizzaSize==="Large(serves 3-4)") {
    this.pizzaPrice +=9;
  }else if(this.pizzaSize==="Mega Large(serves 6)") {
    this.pizzaPrice +=9;
  }

  if (this.crust === "") {
    this.pizzaPrice += 0;
  }else if(this.crust==="") {
    this.pizzaPrice +=1;
  }else if(this.crust==="") {
    this.pizzaPrice +=2;
  }

  this.pizzaPrice += this.toppings;
  return this.pizzaPrice;
}
order.prototype.finalCost = function () {
  var totalCartPrice = 0;
  for (var arrayElement = 0; arrayElement<totalPriceArray.length;arrayElement++){
    totalCartPrice += totalPriceArray[arrayElement];
  }
  return totalCartPrice;
}

function Address (phoneNumber, location) {
  this.phoneNumber = phoneNumber;
  this.location = location;
  this.deliveryAddress = (phoneNumber + "  " + location);
}













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