//Business logic
  function sizeCost() {
    var size=$("#size").val();
    if(size==="Small @ $6"){
      var smallCost = 6;
    }
    else if(size==="Medium @ $9"){
      var smallCost = 9;
    }
    else if(size ==="Large @ $12"){
      var smallCost = 12;
    }
    else if(size ==="Mega Large @16"){
      var smallCost = 16;
    }
    return smallCost;
  }
  function crustCost() {
    var crust = $('#crust').val();
    return parseInt(crust);
  }
  function top1Cost() {
    var top1 = $('#top1').val();
    return parseInt(top1);
  }
  function top2Cost() {
    var top2 = $('#top1').val();
    return parseInt(top2);
  }
  function numberOfPizzasCost() {
    var numberOfPizzas = $('#numberOfPizzas').val();
    return parseInt(numberOfPizzas);
  }

  function calculatePrice (e) {
    var totalPrice = (sizeCost()+crustCost()+top1Cost()+top2Cost()*numberOfPizzasCost());
    console.log (totalPrice);
    
    $('#totalPrice').text( + totalPrice + "  Time: 30 min.")
  }

  function pizza (type, size, crust, top1, top2, numberOfPizzas) {
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.top1= top1;
    this.top2= top2;
    this.numberOfPizzas = numberOfPizzas;
  }
  
  pizza.prototype.fullOrder= function() {
    return "You ordered " +this.numberOfPizzas+" "+ this.size + " " +this.crust +" "+this.type+ " with " + this.top1 + " and " + this.top2 ;
  }
  
  //user-interface
  $(document).ready(function() {
    $('#pickUp').click(function(event) {
      event.preventDefault();
      $("#pickUpOption").show();
      $('#deliverOption').hide();

      var type =$('#type').val(); 
      var size=$("#size").val();
      var crust=$("#crust").val();
      var top1=$("#top1").val();
      var top2=$("#top2").val();
      var numberOfPizzas = $('#numberOfPizzas').val();

      var newOrder= new pizza (type, size , crust, top1, top2, numberOfPizzas)
      
      $('#deliveryOrderDetails').hide();
      $("ul#pickUpOrderDetails").show();
      $("ul#pickUpOrderDetails").append("<li><span class=order>" + newOrder.fullOrder() + "</span></li>");
    })
    
    $("button#deliver").click(function(event) {
      event.preventDefault();
      $("#pickUpOption").hide();
      $('#deliverOption').show();  

      var address=$('#location').val();
      $('#deliverOption').text("YOUR ORDER WILL BE DELIVERED TO YOU AT: " + address)

      var type =$('#type').val(); 
      var size=$("#size").val();
      var crust=$("#crust").val();
      var top1=$("#top1").val();
      var top2=$("#top2").val();
      var numberOfPizzas = $('#numberOfPizzas').val();

      var newOrder= new pizza (type, size , crust, top1, top2, numberOfPizzas)
      
      $('#pickUpOrderDetails').hide();
      $('ul#deliveryOrderDetails').show();
      $("ul#deliveryOrderDetails").append("<li><span class=order>" + newOrder.fullOrder() + " <br> (Delivery Charge: $ 1)" + "</span></li>");
    });
       
  
  })
    
