const catalogo = document.getElementById("catalogo");
const detalhes = document.getElementById("detalhes");
const temporadasSelect = document.getElementById("temporadas");
const episodiosDiv = document.getElementById("episodios");
const voltarBtn = document.getElementById("voltar");
const btnLer = document.getElementById("btnLer");
const btnAssistir = document.getElementById("btnAssistir");
const tituloSpan = document.getElementById("titulo-selecionado");

let modoAtual = "pdf";
let tituloAtual = null;

function resetarDetalhes() {
  tituloAtual = null;
  temporadasSelect.innerHTML = '<option value="">Selecione</option>';
  episodiosDiv.innerHTML = "";
  detalhes.style.display = "none";
  catalogo.style.display = "grid";
  tituloSpan.textContent = ""; // <<< limpa o título
}

function carregarCatalogo() {
  catalogo.innerHTML = "";
  Object.keys(data).forEach(titulo => {
    if (data[titulo].tipo !== modoAtual) return;

    const card = document.createElement("div");
    card.className = "card";
    card.dataset.titulo = titulo;
    card.style.backgroundImage = `url(${data[titulo].capa})`;

    catalogo.appendChild(card);
  });
}

btnLer.onclick = () => {
  modoAtual = "pdf";
  btnLer.classList.add("active");
  btnAssistir.classList.remove("active");
  resetarDetalhes();
  carregarCatalogo();
};

btnAssistir.onclick = () => {
  modoAtual = "mp4";
  btnAssistir.classList.add("active");
  btnLer.classList.remove("active");
  resetarDetalhes();
  carregarCatalogo();
};

catalogo.addEventListener("click", e => {
  const card = e.target.closest(".card");
  if (!card) return;

  tituloAtual = card.dataset.titulo;

  catalogo.style.display = "none";
  detalhes.style.display = "block";

  // >>> MOSTRA O TÍTULO NO TOPO
  tituloSpan.textContent = tituloAtual;

  carregarTemporadas();
});

voltarBtn.addEventListener("click", resetarDetalhes);
temporadasSelect.addEventListener("change", carregarEpisodios);

function carregarTemporadas() {
  temporadasSelect.innerHTML = '<option value="">Selecione</option>';
  const temporadas = data[tituloAtual];

  Object.keys(temporadas).forEach(nome => {
    if (nome === "tipo" || nome === "capa") return;

    const option = document.createElement("option");
    option.value = nome;
    option.textContent = nome;
    temporadasSelect.appendChild(option);
  });
}

function carregarEpisodios() {
  episodiosDiv.innerHTML = "";
  const temporada = temporadasSelect.value;
  if (!temporada) return;

  const eps = data[tituloAtual][temporada];
  const tipo = data[tituloAtual].tipo;

  eps.forEach((id, index) => {
    const a = document.createElement("a");
    a.href = `https://drive.google.com/uc?id=${id}&export=download`;

    a.textContent = tipo === "pdf"
      ? `BAIXAR PDF ${temporada.replace(/volume/i,"").trim()}`
      : `Episódio ${index + 1}`;

    a.target = "_blank";
    episodiosDiv.appendChild(a);
  });
}

carregarCatalogo();

const popup = document.getElementById("popup-changelog");
const fecharPopup = document.getElementById("fecharPopup");

fecharPopup.onclick = () => {
  popup.style.display = "none";
};
