//BUSINESS LOGIC
//Our Pizza Prices, entered here for easy editing
var smlPizzaPrice = 10.99;
var medPizzaPrice = 13.99;
var lrgPizzaPrice = 15.99;
var toppingPrice = 1.5;
var toppings = ["Pepperoni","Pineapple","Sausage","Bacon","Ham","Onions","Salami","Artichoke","Prosciutto"];
var sizes = ["small", "medium", "large"];

//Our cart object constructor
function Cart(){
  this.items = [];
  this.preTaxTotal = function(){
    calculatedTotal = 0;
    this.items.forEach(function(item){
      calculatedTotal+=parseFloat(item.price());
    });
    return calculatedTotal;
  }
  this.tax = function() {
    this.taxRate = .099;
    return 3.45;
  }
} // end of Cart

//The Pizza object constructor
function Pizza(){
  this.size;
  this.toppings = [];
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

    //add price per topping
    this.toppings.forEach(function(topping){
      calculatedPrice+=toppingPrice;
    });

    return calculatedPrice.toFixed(2);
  }

} //end of pizza

//create a cart when the page loads
var newCart = new Cart();



//UI LOGIC
// function capitalized(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }



$(document).ready(function() {

  function initialize() {
    
  }

  function sizeSelected() {
    var clicked = this.firstChild.innerHTML;
    if (newPizza.size!=clicked){
      //change size of pizza
      newPizza.size = clicked;
      //highlight new
      $(".size").removeClass("selected");
      $("."+clicked+"PizzaDiv").addClass("selected");
    } else {
      //nothing happens here...we have to have a size
    }
    console.log(newPizza,", will cost:",newPizza.price());
  }

  function toppingSelected() {
    var clicked = this.firstChild.innerHTML;
    if (!_.includes(newPizza.toppings,clicked)) {
      //add topping to pizza
      newPizza.toppings.push(clicked);
      // highlight the topping
      $(this).addClass("selected");
    } else {
      //remove it from pizza
      _.pull(newPizza.toppings,clicked);

      // remove highlight
      $(this).removeClass("selected");
    }
    console.log(newPizza,", will cost:",newPizza.price());

  }

function ResetPressed(){
  newPizza.size = "";
  newPizza.topping = [];
  $(".selected").removeClass("selected");
}


  //build the sizes html
  sizes.forEach(function(size){
    $("#sizesDiv").append("<div class='col-sm-4 size "+size+"PizzaDiv'><h3>"+size+"</h3></div>");
    $(".size").last().click(sizeSelected);
  });

  // build the toppings html
  toppings.forEach(function(topping){
    $("#toppingsDiv").append("<div class='col-sm-2 topping'><p>"+topping+"</p></div>");
    $(".topping").last().click(toppingSelected);
  });

  //create a new pizza item and
  var newPizza = new Pizza();



  //add pizza to cart
  newCart.items.push(newPizza);

  console.log(newCart, "cart total price is ", newCart.preTaxTotal());

  //add the pizza to the cart item
});
