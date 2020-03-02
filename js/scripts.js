
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
  function pizza (size, crust, top1, top2) {
    this.size = size;
    this.crust = crust;
    this.top1= top1;
    this.top2= top2;
  }
  
  pizza.prototype.fullOrder= function() {
    return "You ordered a " + this.size + " " +this.crust +" pizza with " + this.top1 + " and " + this.top2;
  }
  
  //user-interface
  $(document).ready(function() {
    $("button#another").click(function() {
      $("div#size").append( '<select class="form-control" id="size">'+
                        '<option>Large</option>'+
                        '<option>Medium</option>'+
                        '<option>Small</option>'+
                        '</select>'
                            );
          
      $(".crust").append( '<select class="form-control" id="crust">'+
                    '<option>Thin</option>'+
                    '<option>Deep</option>'+
                    '<option>Cheese-stuffed</option>'+
                    '</select>'
                    );
      $(".top").append('<h4>toppings 1</h4>'+
                      '<select class="form-control" id="top1">'+
                      '<option>beef stripes(sh.200)</option>'+
                      '<option>chicken cubes(sh.200)</option>'+
                      '<option>pepperoni(sh.200)</option>'+
                      '</select>'+
                      '<h4>toppings2</h4>'+
                      '<select class="form-control" id="top2">'+
                      '<option>cheese layer(sh.200)</option>'+
                      '<option>pineapples(sh.200)</option>'+
                     ' <option>sweet corn(sh.200)</option>'+
                    '</select>')
      });
    $("button#deliver").click(function(event) {
      event.preventDefault();
      var address=prompt("Enter your Address :");
      alert("Your order has been received and will be delivered to you in " + address)    
      var size=$("#size").val();
      var crust=$("#crust").val();
      var top1=$("#top1").val();
      var top2=$("#top2").val();
      var newOrder= new pizza (size , crust, top1, top2)
      
      $("ul#customer-order").append("<li><span class=order>" + newOrder.fullOrder() + "Delivered(sh.100)" + "</span></li>");
    });
      $("button#make-order").click(function(event) {
        event.preventDefault();
        var size=$("#size").val();
        var crust=$("#crust").val();
        var top1=$("#top1").val();
        var top2=$("#top2").val();
        var newOrder= new pizza (size , crust, top1, top2)
        
        $("ul#customer-order").append("<li><span class=order>" + newOrder.fullOrder() + "</span></li>"); 
      })
  })
    
})