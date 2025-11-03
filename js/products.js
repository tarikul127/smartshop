let allProducts = [];
fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(products => {
    allProducts = products; 
    showProducts(allProducts); 
  });

function showProducts(products) {
  const container = document.getElementById("product-container");
  container.innerHTML = ""; 

  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "bg-white shadow rounded-lg p-4 text-center";
    card.innerHTML = `
      <img src="${p.image}" class="h-30 mx-auto object-contain mb-3" alt="${p.title}">
      <h3 class="font-semibold text-sm mb-2">${p.title}</h3>
      <p class="text-blue-600 font-bold">$${p.price}</p>
      <button 
        class="add-cart mt-2 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
        data-title="${p.title}"
        data-price="${p.price}"
        data-image="${p.image}">
        Add to Cart
      </button>
    `;
    container.appendChild(card);
  });
}


document.addEventListener("click", e => {
  if (e.target.classList.contains("add-cart")) {
    const product = {
      title: e.target.dataset.title,
      price: e.target.dataset.price,
      image: e.target.dataset.image
    };

    // localStorage 
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("✅ Added to Cart!");
  }
});
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = document.getElementById("cart-count");

  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}

// Product Sorting 
document.getElementById("sort-products").addEventListener("change", e => {
  let sorted = allProducts; 
  if (e.target.value === "low") sorted.sort((a, b) => a.price - b.price);
  if (e.target.value === "high") sorted.sort((a, b) => b.price - a.price);
  showProducts(sorted); 
});
// Toggle mobile menu
  document.getElementById("menu-btn").addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.toggle("hidden");
  });