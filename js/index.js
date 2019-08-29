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

  var cart = sessionStorage.getItem("cart");
  if (cart !== null) {
    cart = JSON.parse(cart);
    console.info("Carrinho 1 produto", cart[0].name);
    console.info("Carrinho 1 produto", cart[1].name);
  }
})
