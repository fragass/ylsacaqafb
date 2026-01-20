// ======================
// LISTA DE EPISÓDIOS
// ======================

// Temporada 1
const temporada1 = [
  "12pyVvfOBmWsKd4FVhFkzILnZUVw95uJb", // Ep 01
  "1nhAdMyBAfMXWabFARH5CtYiW35t-mSIQ", // Ep 02
  "16K75KaefUYluEi752KEMj4SBSoN5CdZ5", // Ep 03
  "1rx6w9qkb7o4eMe1HXPrUQMb-qJ0YYeBe", // Ep 04
  "1OGHPi41Da72eheCR5iBQY4BbDcelsUYA", // Ep 05
  "1eX7dznFISjVzrxsc6WNic4K33qnGcZSM", // Ep 06
  "1JCKfg3CajYNcuNT_-WXrUzBs7PIWQnFf", // Ep 07
  "1DZZSyImEOIe7dVWB1vDk1wA8ggrF0gBv", // Ep 08
  "1DXr6ck-oN3wcG6QfOsFzGEndX4H8tM0o", // Ep 09
  "1EbfaePluMxkFcrgqj1oEqpys9Y85OehE", // Ep 10
  "1iYV0hfWOil90Hty7mIoHOip91J5uLQq2", // Ep 11
  "1YKjvGcXLUHbRzlBrfTBAc0VW8ThZietT", // Ep 12
  "1jjmbS9PzWGlXDfhZ1pEYO1K8Y91NXYM9", // Ep 13
  "1ef8CJFH0_kilfDsZf0YFfVsnxpqBQWLq", // Ep 14
  "15iNdMcUXcmzOnaqyTW1cECRzH_6fqtEP", // Ep 15
  "1SgaqEtQcySMBOU5SkTPoXxAxktFN6WQP", // Ep 16
  "1cADX6gGegPCGdKA6QcqcdlHKWW8yD8D6", // Ep 17
  "1m_w-mrW7j71p_EZIsi3Hi3-3aLNCv-u1", // Ep 18
  "1DaGJnbfJH-4TTPyzKDL_uat6Az8tDAWG", // Ep 19
  "1an2aNw-41Pqwu18EenJb-LWZ9_IfXZj8", // Ep 20
  "12bmS8rMphfcZumvqNJJTl4T5JkjSEziQ", // Ep 21
  "16BoPccauXBh2YcaI99d26EXaDMzOq-5Y", // Ep 22
  "1ZRPBRt6Yi9sQ5hRkxyF7Vhy0xDHw0LF_", // Ep 23
  "1DE9OG2SmcxfBDF5JO0GuHOj9iLspBGxT", // Ep 24
  "1-76ULDuHmSVLfpHgwmKHsjn0Pu6wUPKQ", // Ep 25
  "1kYO6YLFZEnw_rElLY6PLax-kaAxZ1JjR", // Ep 26
  "1kOUsPkicHLd0mNpXPpVE92kvcXqyyxG-", // Ep 27
  "1RBRlul_EM3n1uKjtRqmUNtE8vA3Nhtnn", // Ep 28
  "1DaN8ilJgQP-6aq_QAa1dzplufXZ87euJ", // Ep 29
  "17KniOqqwbQom9z6rcphsndiONBLRrheq", // Ep 30
  "1PjidYSh79g-zwithogAQaJfDBELAVBTW", // Ep 31
  "11NBG6Xrg5Ncll707TywDRunz9K_IQeIy", // Ep 32
  "1ZQY5hAb5Vs72nNASzeqixw5zHz9YChNA", // Ep 33
  "1Gr1iNLthx8oNaxbQk6AHNgqM-aXmcXyI", // Ep 34
  "11lIZBVpxbkfq9HtGiggaZROddqJO5mr6", // Ep 35
  "1uYcbap9r-KGPqYH5qPz2RbLeoLm0PPJ1", // Ep 36
  "16M4gITuJdgwOoqgGcVHteVSPsi8q8LgJ"  // Ep 37
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


