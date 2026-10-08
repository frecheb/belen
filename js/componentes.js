document.addEventListener("DOMContentLoaded", () => {
  cargarHeader();
});

function cargarHeader() {
  fetch("components/header.html")
    .then((response) => {
      if (!response.ok) throw new Error("Error al cargar el header");
      return response.text();
    })
    .then((html) => {
      document.getElementById("header-container").innerHTML = html;
      inicializarMenuDrawer();
    })
    .catch((error) => console.error(error));
}

function inicializarMenuDrawer() {
  const menuToggle = document.getElementById("menuToggle");
  const drawerClose = document.getElementById("drawerClose");
  const navDrawer = document.getElementById("navDrawer");
  const navOverlay = document.getElementById("navOverlay");

  if (!menuToggle || !navDrawer || !navOverlay) return;

  const abrirMenu = () => {
    navDrawer.classList.add("is-active");
    navOverlay.classList.add("is-active");
  };

  const cerrarMenu = () => {
    navDrawer.classList.remove("is-active");
    navOverlay.classList.remove("is-active");
  };

  menuToggle.addEventListener("click", abrirMenu);
  drawerClose.addEventListener("click", cerrarMenu);
  navOverlay.addEventListener("click", cerrarMenu);
}







document.addEventListener("DOMContentLoaded", () => {
  cargarHeader();
  cargarFooter(); // <--- Añade esta llamada
});

function cargarFooter() {
  fetch("components/footer.html")
    .then((response) => {
      if (!response.ok) throw new Error("Error al cargar el footer");
      return response.text();
    })
    .then((html) => {
      document.getElementById("footer-container").innerHTML = html;
    })
    .catch((error) => console.error(error));
}
