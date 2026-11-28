const vistaPrevia = document.getElementById("vistaPrevia");
const texto = document.getElementById("texto");

texto.addEventListener("input", () => {
    vistaPrevia.textContent = texto.value;
})