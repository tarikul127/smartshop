// ----------- Banner Auto Slide -----------
const slides = document.querySelectorAll('.slide');
let current = 0;
const total = slides.length;
const intervalTime = 3500; 
let slideInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.opacity = i === index ? '1' : '0';
  });
}

function nextSlide() {
  current = (current + 1) % total;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + total) % total;
  showSlide(current);
}

function startSlide() {
  slideInterval = setInterval(nextSlide, intervalTime);
}

function stopSlide() {
  clearInterval(slideInterval);
}

document.getElementById('next').addEventListener('click', () => {
  stopSlide();
  nextSlide();
  startSlide();
});

document.getElementById('prev').addEventListener('click', () => {
  stopSlide();
  prevSlide();
  startSlide();
});

// Initialize slider
showSlide(current);
startSlide();


// ----------- Product Preview -----------
fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById("product-container");

  
    const previewProducts = products.slice(0, 4);

    previewProducts.forEach(p => {
      const card = document.createElement("div");
      card.className = "bg-white shadow rounded-lg p-4 text-center relative";

      card.innerHTML = `
        <img src="${p.image}" class="h-40 mx-auto object-contain mb-3" alt="${p.title}">
        <h3 class="font-semibold text-sm mb-2">${p.title}</h3>
        <p class="text-green-500 font-bold">$${p.price}</p>
        <button 
          class="add-cart mt-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-blue-700"
          data-title="${p.title}"
          data-price="${p.price}"
          data-image="${p.image}">
          Add to Cart
        </button>
      `;
      container.appendChild(card);
    });
    
    fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById("product-container1");
    const previewProducts = products.slice(12, 16);

    container.innerHTML = previewProducts.map(p => `
<div class="bg-white shadow rounded-lg p-4 text-center relative">
        <img src="${p.image}" class="h-40 mx-auto object-contain mb-3" alt="${p.title}">
        <h3 class="font-semibold text-sm mb-2">${p.title}</h3>
        <p class="text-green-500 font-bold">$${p.price}</p>
        <button 
          class="add-cart mt-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-blue-700"
          data-title="${p.title}"
          data-price="${p.price}"
          data-image="${p.image}">
          Add to Cart
        </button>
      </div>
    `).join('');
  })
  .catch(err => console.error("Error loading products:", err));

    
    //  View All Button
    const btnDiv = document.createElement("div");
    btnDiv.className = "text-center mt-10";
    btnDiv.innerHTML = `
      <a href="products.html"
         class="inline-block bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 transition-all duration-300">
        View All Products
      </a>
    `;
    container.after(btnDiv);
  })
  .catch(err => console.error("Error loading products:", err));



// ----------- Add to Cart Function -----------
document.addEventListener("click", e => {
  if (e.target.classList.contains("add-cart")) {
    const product = {
      title: e.target.dataset.title,
      price: e.target.dataset.price,
      image: e.target.dataset.image
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
    alert(" Added to Cart!");
  }
});


// ----------- Cart Count Function -----------
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = document.getElementById("cart-count");

  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}
// Toggle mobile menu
  document.getElementById("menu-btn").addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.toggle("hidden");
  });