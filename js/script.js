const animeCapa = "imgs/spyxfamily.webp";
const animeCapa2 = "imgs/demonslayer.png";

const catalogo = document.getElementById("catalogo");

// card1
const card1 = document.createElement("div");
card1.className = "card";
card1.id = "card1";

const img = document.createElement("img");
img.src = animeCapa;
img.loading = "lazy";

card1.appendChild(img);
catalogo.appendChild(card1);

// redirecionamento ao clicar
card1.addEventListener("click", () => {
  window.location.href = "oixdtwfvgt.html";
});
// ===== CARD 2 =====
const card2 = document.createElement("div");
card2.className = "card";
card2.id = "card2";

const img2 = document.createElement("img");
img2.src = animeCapa2;
img2.loading = "lazy";

card2.appendChild(img2);
catalogo.appendChild(card2);

card2.addEventListener("click", () => {
  window.location.href = "wpszkutfjh.html";
});






