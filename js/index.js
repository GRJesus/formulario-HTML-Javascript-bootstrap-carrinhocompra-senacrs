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
  //https://www.blogson.com.br/carrinho-de-compras-com-localstorage-do-html-5/
for (var i = 0; i < cart.lenght ; i++){}
  var cart = sessionStorage.getItem("cart" + i);
  if (cart !== null) {
    cart = JSON.parse(cart);
    console.info("Carrinho 1 produto", cart[0].name);
    console.info("Carrinho 1 produto", cart[0].price);
    console.info("Carrinho 1 produto", cart[1].name);
    console.info("Carrinho 1 produto", cart[1].price);

    for (var i = 0; i < cart.lenght ; i++) {
      $("#result").html(cart.name + " " + cart.price + "</br>");
  }}
});

for(i=1; i<=99; i++) // verifica até 99 produtos registrados na localStorage
 {
	 var prod = localStorage.getItem("produto" + i + ""); // verifica se há recheio nesta posição.
	 if(prod != null)
	 {
		 // exibe os dados da lista dentro da div itens
		 document.getElementById("itens").innerHTML += localStorage.getItem("qtd" + i) + " x ";
		 document.getElementById("itens").innerHTML += localStorage.getItem("produto" + i);
		 document.getElementById("itens").innerHTML += " ";
		 document.getElementById("itens").innerHTML += "R$: " + localStorage.getItem("valor" + i) + "<hr>";

		 // calcula o total dos recheios
		 valor = parseFloat(localStorage.getItem("valor" + i)); // valor convertido com o parseFloat()
		 total = (total + valor); // arredonda para 2 casas decimais com o .toFixed(2)
	 }
 }
