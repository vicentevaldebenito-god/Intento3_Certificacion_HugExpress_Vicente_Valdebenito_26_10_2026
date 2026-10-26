document.addEventListener("DOMContentLoaded", () => {
  // 1. Funcionalidad del botón "¿Cómo funciona?"
  const howItWorksBtn = document.getElementById("how-it-works");
  if (howItWorksBtn) {
    howItWorksBtn.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Busca a tus Amigos y reparte a través de nuestra página abrazos a todos.");
    });
  }

  // 2. Funcionalidad de incremento en "Enviar Abrazo"
  const sendHugButtons = document.querySelectorAll(".btn-send-hug");
  sendHugButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const counterEl = document.getElementById(targetId);
      if (counterEl) {
        let currentHugs = parseInt(counterEl.textContent, 10) || 0;
        counterEl.textContent = currentHugs + 1;
      }
    });
  });

  // 3. Funcionalidad de eliminar la sección de cookies
  const acceptCookiesBtn = document.getElementById("accept-cookies-btn");
  const cookiesBanner = document.getElementById("cookies-banner");

  if (acceptCookiesBtn && cookiesBanner) {
    acceptCookiesBtn.addEventListener("click", () => {
      cookiesBanner.style.display = "none";
    });
  }
});