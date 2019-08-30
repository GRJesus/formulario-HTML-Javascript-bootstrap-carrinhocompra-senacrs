function addToCart (product) {
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

  var cart = sessionStorage.getItem("cart" + i);
  if (cart !== null) {
    cart = JSON.parse(cart);
    console.info("Carrinho 1 produto", cart[0].name);
    console.info("Carrinho 1 produto", cart[0].price);
    console.info("Carrinho 1 produto", cart[1].name);
    console.info("Carrinho 1 produto", cart[1].price);

    for (var i = 0; i < cart.lenght ; i++) {
      $("#result").html("</br>");
  }}
});
