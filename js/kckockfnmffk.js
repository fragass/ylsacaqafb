// ======================
// LISTA DE EPISÓDIOS
// ======================

// Temporada 1
const temporada1 = [
  "1QWaysW331GmlZvzBxUemfo09oqDS_DW0",  // ep 1
  "1XXSr7b1cCDXxR0x3lqAcodPIwapWVz4i",  // ep 2
  "1ptmyim9emfNEkCWvXzY_F640JWkwUk03",  // ep 3
  "1pyCiBkd_TmBpT9CPB4e8w18uTS5KpNcO",  // ep 4
  "1q-t9Sh9_L1kJLzHEct-qkJ8Z4tThOVh3",  // ep 5
  "1_Jp3S8iq3EDg3NyRXsbWdxxHuHiMJtHP",  // ep 6
  "1_pLBTCNcExwxOMuWb9fSbnsr7CnKn2JL",  // ep 7
  "1_rkgWOll0nlpk7wMiHHbVOFFI6ySGK6n",  // ep 8
  "1_wT3p99T2p-QhSne61ck_e4DiGPVF3hp",  // ep 9
  "1_xFQd8GAGMOpuUFNhsW0-uc67s1IOd5X",  // ep 10
  "1b-mOxJt6Scb00zbQVDht4QvsgpEwhchy",  // ep 11
  "1b3R1nNevxcsyjkdBj9hlNGXyR-WyfzrI",  // ep 12
  "1b9ZbLq3gKWw6jpJPdL0dSl-DTanNusus",  // ep 13
  "1bASBi_5570o4rMQ5rSN3x_oCOAF5_dmm",  // ep 14
  "1btr8ldi3DzkfE1c3f9CN0SaTPPj3xu74",  // ep 15
  "1bu-LXh8ulQLJbApZKbg8A3R11bpt1xgU",  // ep 16
  "1bvzdzAPfszCRDAKNJs6Ek0uox0LmoOlc",  // ep 17
  "1byu-1xr25oIAf9nH83x0eBgcNk0bgKUu",  // ep 18
  "1ePMiW51fuioUoimzJQGHVqHBqijJawBU",  // ep 19
  "1eQvFG8Ys2V6hT04V75jzNmR4GLoEwTuX",  // ep 20
  "1f3hBd8BxtZ7VoOgCFfQJ4m1HSGdiSUM_",  // ep 21
  "1f6EglCBOatECkNzTaQMPLe_QZ7Io7CuN",  // ep 22
  "1fxvsvqnjwq0xsjvPdBZ1wYiPc3MF3kpp",  // ep 23
  "1g3gO-qRKN7HzoO678DT4beVxGyBuDqSK"   // ep 24
];

// Temporada 2 (exemplo, substitua pelos IDs corretos do Drive da temporada 2)
const temporada2 = [
  "1hKU-gsVG8Lo4JCIW6mfMvNoCp5NsXcSB",  // ep 1
  "1hM2CqfidD95uH2q8uiA8-lrNV8Evqnn4",  // ep 2
  "1hvixNn6b-3WBxF5c8adw2e_Pg0XGKC7K",  // ep 3
  "1i1WSMOUA6dGQEEPZM0-ZmnQtuK858XJU",  // ep 4
  "1i3FshrJPRilC13JokPeP6GGvkuykDwEd",  // ep 5
  "1ijyoyZbhOR2NRmp09sa1B2Q8EERbJc2V",  // ep 6
  "1jFKP06iZ1hw23uJLMhVB4BkTN2mfyMr2",  // ep 7
  "1jQ8SXmHPDjByoevHKNq6ckr9mxr-c9qL",  // ep 8
  "1k33AY-MdB3uCdYwf9rgY76hYqIW2vJ_L",  // ep 9
  "1k52TobnRHJd-9LpsInZkHGwvzMRfa46i",  // ep 10
  "1kA27J1LCH8z9N21jnjus3rlnszxSfbAl",  // ep 11
  "1kIE3dht4GTEQls_jXwBYBdnKG1bLeiJ8",  // ep 12
  "1kIT9Q3YVFfJBzgqCQ3jCFJGODtoKZlIM",  // ep 13
  "1kPPtqloqvEtA-Y3Ia3JZSI3GOiXn1d3D",  // ep 14
  "1kP_NhbHKPUC_pjGOlZMUIXfokurKI6_B",  // ep 15
  "1n8wMlRCWqMa2bsLvu0WbSJ-cd5YLcNCs",  // ep 16
  "1n9nNvn6wIIEG-724e50LEsdKioM0rgp0",  // ep 17
  "1nCfkTXF0_GkTN9lkF1UR7NAXCuGIG6ef",  // ep 18
  "1nhRtIHfpfXr623oXhBa9_ln_Nsf2w8H4",  // ep 19
  "1nhRwhzGh3LiSinw8xHAh-5YH6AV8J6EF",  // ep 20
  "1ovxhgQZ7eonNa37zSGy0onf6mQxzY2p8",  // ep 21
  "1pN7SDrW5QiJAad5bZ1Z6xOu6jzgRtb5x",  // ep 22
  "1pS5XbANVWlzV8GRdNvfSXYV89st0jGYl",  // ep 23
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
