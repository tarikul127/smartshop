fetch("../reviews.json")
  .then(res => res.json())
  .then(reviews => {
    const container = document.getElementById("review-container");
    reviews.forEach(r => {
      const card = document.createElement("div");
      card.className = "bg-white shadow p-4 rounded";
      card.innerHTML = `
        <p class="italic">"${r.comment}"</p>
        <h4 class="mt-2 font-semibold">${r.name}</h4>
        <p class="text-yellow-500">⭐ ${r.rating}</p>
        <p class="text-sm text-gray-500">${r.date}</p>
      `;
      container.appendChild(card);
    });
  });
