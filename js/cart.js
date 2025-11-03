const cartContainer = document.getElementById("cart-items");
const totalEl = document.getElementById("total");
const paymentBtn = document.getElementById("pay-btn");

// Load Cart Items
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {
  cartContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += parseFloat(item.price);
    const div = document.createElement("div");
    div.className = "flex justify-between items-center bg-white p-3 rounded shadow mb-2";
    div.innerHTML = `
      <div class="flex items-center space-x-3">
        <img src="${item.image}" class="w-16 h-16 object-contain">
        <p class="font-semibold">${item.title}</p>
      </div>
      <p class="text-blue-600 font-bold">$${item.price}</p>
      <button class="text-red-500" onclick="removeItem(${index})">❌</button>
    `;
    cartContainer.appendChild(div);
  });

  totalEl.textContent = "$" + total.toFixed(2);
}

function removeItem(i) {
  cart.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

paymentBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert(" Your cart is empty!");
  } else {
    alert("✅ Payment Successful!");
    localStorage.removeItem("cart");
    displayCart();
  }
});

displayCart();
