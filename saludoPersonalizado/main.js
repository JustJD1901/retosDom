const button = document.getElementById("btn");
const name = document.getElementById("name");
const output = document.getElementById("output");

button.addEventListener("click", function () {
    if (name.value != "") {
        output.textContent = `¡Hola, ${name.value}! Bienvenid@.`;
    } else {
        output.textContent = "Por favor, ingresa un nombre."
    }
})