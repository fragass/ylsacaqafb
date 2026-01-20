// ======================
// LISTA DE EPISÓDIOS
// ======================

// Temporada 1
const temporada1 = [
  "16aNGk6VRz-MuHXO2-7gDuAYoshxWNm2h", // Ep 01
  "1hrPQ6tQnABHIohVs1LFBheD0uyTYlFpx", // Ep 02
  "1-ZPQ5IwL31VokUUAawdfALx74891LQCp", // Ep 03
  "18nx6bRkyqWa_RKsjbkfbbCGofZP1csFB", // Ep 04
  "1t3vkce1HSGOi6v6va273RKDEE3yZW8ZZ", // Ep 05
  "1IdrW8_MkcAjkIqN3hFDnCDh-pS5JJrYB", // Ep 06
  "17VIjjPUYwuNQGPaOWFtwyIW7sk5DR9-4", // Ep 07
  "1XeG7a2c3FEXbmi6xdC6c6KUJ4Eiak4lB", // Ep 08
  "1p2yTVrL5q-1apYHNzfT4PxA3okQzX0iL", // Ep 09
  "1NkxMNVOxrce8za69pqt5KuCZrovkZ1EP", // Ep 10
  "1q8lUDBZ5l6i0YnHhTwRfT8q4wU-a0zvp", // Ep 11
  "1kFsOon29B6O-vqJTBcDLDuLreX3NSZ5k", // Ep 12
];

// Temporada 2 (exemplo, substitua pelos IDs corretos do Drive da temporada 2)
const temporada2 = [
  "1wflsf879OJgeUppnVJ72oM6wmcWrcssv", // Ep 01
  "1aX_NapNC0EmurC1FerJ3X1hy_a-zSwxV", // Ep 02
  "1Ajy_BD1z6ZocSUWBf4-hFYpBN6pMNl04", // Ep 03
  "1T80Ehp9aIoEWgjPDyIpMttuj1mtaSqvP", // Ep 04
  "1W2VUOX9h50LBQquikokLOq1tU28tx6Uq", // Ep 05
  "123Z3K-5FnvzVOFetcP9X59ZMMBa1l4y9", // Ep 06
  "1w2yiEFc8129iej2UOxcT3sxoT6FQqD-S", // Ep 07
  "1Y-VABRSOPFYU75BdEXha62dNoo9idUcV", // Ep 08
  "1WF2ZQTWKjUZp4asi8r3X1oid9dPER_zN", // Ep 09
  "1hq7_3zVMp85S2WNDGyuIUfMltjqixMus", // Ep 10
  "1QSa-I1kn70xiDMbk-YrCCs7yVH-OG_tH", // Ep 11
  "1_IC5YdCi8op6vsHoMyWMHHzZzg02pUor", // Ep 12
  "14Z74F0cl660qqme1KUUdQ7OJUOedODFK", // Ep 13
];


// ======================
// ELEMENTOS DO DOM
// ======================
const select = document.getElementById("season");
const container = document.getElementById("episodes");
const modal = document.getElementById("modal");
const frame = document.getElementById("playerFrame");
const title = document.getElementById("episodeTitle");

// ======================
// FUNÇÃO PARA CRIAR CARD
// ======================
function createEpisodeCard(id, index) {
  const epNum = String(index + 1).padStart(2, "0");
  const card = document.createElement("div");
  card.className = "episode";
  card.innerHTML = `
    <img loading="lazy" src="https://drive.google.com/thumbnail?id=${id}&sz=w600" alt="Episódio ${epNum}">
    <span>Episódio ${epNum}</span>
  `;

  card.addEventListener("click", () => {
    title.textContent = `Episódio ${epNum}`;
    frame.src = `https://drive.google.com/file/d/${id}/preview`;
    modal.classList.add("active");
  });

  return card;
}

// ======================
// CARREGAR EPISÓDIOS
// ======================
select.addEventListener("change", () => {
  container.innerHTML = "";
  let temporadaSelecionada;

  if (select.value === "1") {
    temporadaSelecionada = temporada1;
  } else if (select.value === "2") {
    temporadaSelecionada = temporada2;
  } else {
    return;
  }

  temporadaSelecionada.forEach((id, index) => {
    const card = createEpisodeCard(id, index);
    container.appendChild(card);
  });
});

// ======================
// FUNÇÃO FECHAR PLAYER
// ======================
function closePlayer() {
  modal.classList.remove("active");
  frame.src = "";
  title.textContent = "Episódio";
}

// Fechar ao clicar fora do player
modal.addEventListener("click", (e) => {
  if (e.target === modal) closePlayer();
});