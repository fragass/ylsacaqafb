const temporada1 = [
  "1udaFP6UgQoQ-KGxk76GPRfBB7MVCEn1w",
  "1hOe-HdseKTJiIikGe_OYPRuOG9o7d9_J",
  "1ZNt9lpMdHaCVb0WFRlgypKwhc55retQy",
  "14bWWqG3i-6HY2d9Dq7_ufBdHEtXMvhfn",
  "1LVdEbuyuyGZCLvsNTpEoAo_S7UvNYj0x",
  "1AyFG9WsQSF-jVfP0SoeO52YwY8KtValo",
  "1OFzezbdIZmwpL8Wv1EHrJX55bLnvOqHV",
  "1NNYhKAgCsLPPqqUg5ZBMor-Fvc8djPx2",
  "13Qtu0peuNv2yhtkyuXfZSlttaHlQPCe8",
  "18nIa2KnPhi9ohQ6Un-QGkGOeFRGz0c_P",
  "14nv0_BXk_cuAzZtDiFUuOnzvEGRo3hAP",
  "1GjAfuFoGwyVu9T8QP_NpZH1MvS8Qy__m",
  "1jQeN4LK3hrNopQGDIRPNUUusEmdCdGgE",
  "1DV3b1qMNgSRAnIvwaTBQ23FmGenEkKZb",
  "1T5XbJk3uoY9oqp_ZNMOtFNdMn70PvLMl",
  "1J-aGsPbGmSLU36HKAZGX2NBPsXsSBYIm",
  "1oW2g6a4ZA3AvDTdk_WhOmLp6VpxwRhYl",
  "1sxCfds2eti14JCTpfEu8YbTpmJfchKbb",
  "1i9A1zxjw8NMm4CzeC7Pf-E2JawfPO1nn",
  "1pEVpQinsvAdP7E3UkM95kyQIczlmxX7X",
  "1w6qtVZoED7TB75SuGX2tHuLIfH7lAJtk",
  "1Am8XRt27OorqXyXvdmnSiCV8UQ0ORcxX",
  "1nkRGHOF-VdZqDMuUpg8a8mqiZM2lOU6h",
  "1XqcqQNUZVo2WnZ9-bWNzjsEHFYVYR2p8",
  "1Suuf2Rcmmb6ELB8ulLyYe3yQj_5_WGI7"
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