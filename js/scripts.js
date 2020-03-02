//Business logic

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
    
