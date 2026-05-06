let cart = [];

function addToCart(name, price){
  cart.push({name, price});
  displayCart();
}

function displayCart(){
  const cartItems = document.getElementById("cart-items");
  const total = document.getElementById("total");

  cartItems.innerHTML = "";

  let totalPrice = 0;

  cart.forEach((item, index) => {
    totalPrice += item.price;

    cartItems.innerHTML += `
      <div class="cart-item">
        <span>${item.name}</span>
        <span>${item.price.toLocaleString()} IQD</span>
      </div>
    `;
  });

  total.innerText = `Total: ${totalPrice.toLocaleString()} IQD`;
}

function checkoutWhatsApp(){
  let message = "Hello Nivra, I want to order:%0A";

  cart.forEach(item => {
    message += `- ${item.name} | ${item.price} IQD%0A`;
  });

  window.open(`https://wa.me/9647741478145?text=${message}`);
}
