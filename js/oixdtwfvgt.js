const episodesData = [
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

const container = document.getElementById("episodes");
const modal = document.getElementById("modal");
const frame = document.getElementById("playerFrame");
const playerBox = document.getElementById("playerBox");

/* Evita fechar ao clicar dentro do player */
playerBox.addEventListener("click", e => e.stopPropagation());

/* Fecha ao clicar fora */
modal.addEventListener("click", closePlayer);

document.getElementById("season").addEventListener("change", e => {
  container.innerHTML = "";
  if (e.target.value !== "1") return;

  episodesData.forEach((id, i) => {
    const ep = document.createElement("div");
    ep.className = "episode";
    ep.innerHTML = `<strong>Episódio ${i + 1}</strong><br><span>Clique para assistir</span>`;
    ep.onclick = () => openPlayer(id);
    container.appendChild(ep);
  });
});

function openPlayer(id) {
  frame.src = `https://drive.google.com/file/d/${id}/preview`;
  modal.classList.add("active");
}

function closePlayer() {
  frame.src = "";
  modal.classList.remove("active");
}