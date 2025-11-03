// ---------------- login.js ----------------


const userArea = document.getElementById("login");
const username = localStorage.getItem("username");



if (username) {
  userArea.innerHTML = `
    <span class="text-green-600 font-semibold">👋 Hi, ${username}</span>
    <button id="logout" class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-sm ml-2">Logout</button>
  `;

  
  document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("username");
    alert("👋 Logged out successfully!");
    window.location.reload();
  });
}
else {
  userArea.innerHTML = `
    <a href="login.html" class="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm">
      Login
    </a>
  `;
}
// 🔹 Responsive Navbar Toggle
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
