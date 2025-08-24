const themeToggle = document.getElementById("theme-toggle");
const themeIconDark = document.getElementById("theme-icon-dark");
const themeIconLight = document.getElementById("theme-icon-light");
const htmlEl = document.documentElement;

// Função para aplicar o tema
const applyTheme = (theme) => {
  if (theme === "light") {
    htmlEl.classList.add("light");
    htmlEl.classList.remove("dark");
    themeIconDark.classList.add("hidden");
    themeIconLight.classList.remove("hidden");
  } else {
    htmlEl.classList.remove("light");
    htmlEl.classList.add("dark");
    themeIconDark.classList.remove("hidden");
    themeIconLight.classList.add("hidden");
  }
};

// Verifica o tema salvo no localStorage ou a preferência do sistema
const currentTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark");
applyTheme(currentTheme);

// Evento de clique no botão
themeToggle.addEventListener("click", () => {
  const newTheme = htmlEl.classList.contains("dark") ? "light" : "dark";
  localStorage.setItem("theme", newTheme);
  applyTheme(newTheme);
});
