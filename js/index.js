function addToCart(product) {
  var cart = JSON.parse(sessionStorage.getItem("cart"));
  if (!cart) {
    cart = [];
  }
  cart.push(product);
  sessionStorage.setItem("cart", JSON.stringify(cart));
}

$(document).ready(function () {
  $('form').submit(function () {
      var productName = $('#product').val();
      var productPrice = $('#price').val();
      addToCart({
        name: productName,
        price: productPrice
      });
  });
  var productname = ("Produto = ");
  var productprice = ("Preço = R$ ");
  var cart = sessionStorage.getItem("cart");
  if (cart !== null) {
    cart = JSON.parse(cart);
    //console.info("Carrinho 1 produto", cart[0].name);
    //console.info("Carrinho 1 produto", cart[0].price);

    for (var i = 0; i < cart.length; i++) {
      $("#test").html(i);
      $("#result").append('<div>' + productname + cart[i].name + ' ' + 
      productprice + cart[i].price + "</div>" + 
      '<button class="btn btn-primary" onClick="removeToCart(' + i + ')" "id="reset' + i + '" type="reset">Excluir Produto</button>'
      + "</br>")
    }    
  }
})


function removeToCart(value) {
  var cart = sessionStorage.getItem("cart");
  cart = JSON.parse(cart);
  var removeItem = cart[value];
  var newcart = [];
  newcart = cart.splice($.inArray(removeItem, cart), 1);
  location.reload();
  return sessionStorage.setItem("cart", JSON.stringify(cart));
}
