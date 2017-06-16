//BUSINESS LOGIC
var smlPizzaPrice = 10.99;
var medPizzaPrice = 13.99;
var lrgPizzaPrice = 15.99;
var toppingPrice = 2;


function Cart(){
  this.items = [];
  this.preTaxTotal = function(){
    ptTotal = 0;
    this.items.forEach(function(item){
      ptTotal+=3;
    });
    return ptTotal;
  }
  this.tax = function() {
    this.taxRate = .099;
    return 3.45;
  }
} // end of Cart

function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
  this.price = function() {
    var calculatedPrice = 0;
    //add price of pizza
    if (this.size==="small") {
      calculatedPrice += smlPizzaPrice;
    } else if (this.size==="medium") {
      calculatedPrice += medPizzaPrice;
    } else {
      calculatedPrice += lrgPizzaPrice;
    }

    this.toppings.forEach(function(topping){
      calculatedPrice+=toppingPrice;
    });

    return calculatedPrice.toFixed(2);
  }

} //end of pizza

var toppings = ["Pepperoni","Pineapple","Sausage","Bacon","Ham","Onions","Salami","Artichoke","Prosciutto"];
var newCart = new Cart();

$(document).ready(function() {

$("#add2Cart").on("click",function(){
  //get the size and toppings

  //create a new pizza item and
  var newPizza = new Pizza("small",["Pepperoni","Pineapple","Sausage"]);

  //add pizza to cart
  newCart.items.push(newPizza);
  console.log(newCart, "pizza is ", newPizza.price());

  //add the pizza to the cart item
});

});
