const catalogo = document.getElementById("catalogo");
const detalhes = document.getElementById("detalhes");
const temporadasSelect = document.getElementById("temporadas");
const episodiosDiv = document.getElementById("episodios");
const btnLer = document.getElementById("btnLer");
const btnAssistir = document.getElementById("btnAssistir");
const btnVoltar = document.getElementById("voltar");

let modoAtual = "ler";
let tituloAtual = "";

/* =========================
   BOTÕES LER / ASSISTIR
========================= */

btnLer.addEventListener("click", () => {
  modoAtual = "ler";
  btnLer.classList.add("active");
  btnAssistir.classList.remove("active");
  detalhes.style.display = "none";
  catalogo.style.display = "grid";
  carregarCatalogo();
});

btnAssistir.addEventListener("click", () => {
  modoAtual = "assistir";
  btnAssistir.classList.add("active");
  btnLer.classList.remove("active");
  detalhes.style.display = "none";
  catalogo.style.display = "grid";
  carregarCatalogo();
});

/* =========================
   CARREGAR CATÁLOGO
========================= */

function carregarCatalogo() {
  catalogo.innerHTML = "";

  Object.keys(data).forEach(titulo => {
    if (data[titulo].tipo !== modoAtual) return;

    const card = document.createElement("div");
    card.className = "card";
    card.style.backgroundImage = `url(${data[titulo].capa})`;
    card.dataset.titulo = titulo;

    card.addEventListener("click", () => {
      abrirDetalhes(titulo);
    });

    catalogo.appendChild(card);
  });
}

/* =========================
   ABRIR DETALHES
========================= */

function abrirDetalhes(titulo) {
  tituloAtual = titulo;

  catalogo.style.display = "none";
  detalhes.style.display = "block";

  // cria ou atualiza o título no topo
  let tituloElemento = document.getElementById("titulo-selecionado");
  if (!tituloElemento) {
    tituloElemento = document.createElement("div");
    tituloElemento.id = "titulo-selecionado";
    tituloElemento.style.fontSize = "22px";
    tituloElemento.style.fontWeight = "bold";
    tituloElemento.style.marginLeft = "10px";
    document.getElementById("topo-detalhes").appendChild(tituloElemento);
  }

  tituloElemento.textContent = titulo;

  carregarTemporadas(titulo);
}

/* =========================
   CARREGAR TEMPORADAS
========================= */

function carregarTemporadas(titulo) {
  temporadasSelect.innerHTML = `<option value="">Selecione</option>`;
  episodiosDiv.innerHTML = "";

  const temporadas = data[titulo].temporadas;

  Object.keys(temporadas).forEach(temp => {
    const option = document.createElement("option");
    option.value = temp;
    option.textContent = temp;
    temporadasSelect.appendChild(option);
  });
}

/* =========================
   MUDAR TEMPORADA
========================= */

temporadasSelect.addEventListener("change", () => {
  const temporada = temporadasSelect.value;
  episodiosDiv.innerHTML = "";

  if (!temporada) return;

  const lista = data[tituloAtual].temporadas[temporada];

  lista.forEach((link, index) => {
    const a = document.createElement("a");
    a.href = link;
    a.target = "_blank";
    a.textContent = `Episódio ${index + 1}`;
    episodiosDiv.appendChild(a);
  });
});

/* =========================
   BOTÃO VOLTAR
========================= */

btnVoltar.addEventListener("click", () => {
  detalhes.style.display = "none";
  catalogo.style.display = "grid";
});

/* =========================
   INICIAR
========================= */

carregarCatalogo();
