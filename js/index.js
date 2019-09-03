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
  var productname = ("Produto");
  var productprice = ("Preço");
  var cart = sessionStorage.getItem("cart");
  if (cart !== null) {
    cart = JSON.parse(cart);
    console.info("Carrinho 1 produto", cart[0].name);
    console.info("Carrinho 1 produto", cart[0].price);

    for (var i = 0; i < cart.length; i++) {
      //$("#test").html(i);
      //$("#result").append('<div>' + productname + cart[i].name + ' ' + 
      //productprice + cart[i].price + "</div>" + 
      //'<button class="btn btn-primary" onClick="removeToCart(' + i + ')" "id="reset' + i + '" type="reset">Excluir Produto</button>'
      //+ "</br>")

      $("#test").html(i);
      $("#result").append('<div class="container">' + '<form class="mt-1"' +
      '<div class="col-md-6">' + productname + '</div>' +
      '<input type="text" name="name" value= " '+ cart[i].name +' " id="name" class="form">'
      +  ' ' + 
      '<div class="col-md-6">' + productprice + '</div>' +
      '<input type="text" name="price" "value=" '+ cart[i].price +' " id="price" class="form">' + 
      '<div class="col-md-12 mt-4">' +
      '<button class="btn btn-primary" onClick="removeToCart(' + i + ')" "id="reset' + i + '" type="reset">Excluir Produto</button>'
      + '</div>' + '</form>' + '</div>')
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
