
  // pega o telefone do usuário logado
  const phone = sessionStorage.getItem("loggedUserPhone");
  if (phone) {
    document.getElementById("user-phone").textContent = phone;
  }

  // proteção extra: redireciona se não estiver logado
  if (sessionStorage.getItem("auth") !== "true") {
    window.location.href = "index.html";
  }
 // dropdown toggle
    const miniProfile = document.getElementById("mini-profile");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const arrow = document.getElementById("arrow");

miniProfile.addEventListener("click", () => {
  const isVisible = dropdownMenu.style.display === "block";
  dropdownMenu.style.display = isVisible ? "none" : "block";
  arrow.style.transform = isVisible ? "rotate(0deg)" : "rotate(180deg)";
});

    // logout: limpa sessão e volta para login
    document.getElementById("logout").addEventListener("click", () => {
      sessionStorage.clear();
      window.location.href = "index.html";
    });

    // opcional: fecha dropdown clicando fora
    document.addEventListener("click", (e) => {
      if (!miniProfile.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
      }
    });
