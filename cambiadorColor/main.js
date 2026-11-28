const card = document.getElementById("card");
const color = document.getElementById("colors");

color.addEventListener("change", function () {
    switch (color.value) {
        case "azul":
            card.classList.remove(
                "bg-blue-400",
                "bg-green-400",
                "bg-yellow-400",
                "bg-pink-400"
            );
            card.classList.add("bg-blue-400")
            break;

        case "verde":
            card.classList.remove(
                "bg-blue-400",
                "bg-green-400",
                "bg-yellow-400",
                "bg-pink-400"
            );
            card.classList.add("bg-green-400")
            break;

        case "amarillo":
            card.classList.remove(
                "bg-blue-400",
                "bg-green-400",
                "bg-yellow-400",
                "bg-pink-400"
            );
            card.classList.add("bg-yellow-400")
            break;

        case "rosa":
            card.classList.remove(
                "bg-blue-400",
                "bg-green-400",
                "bg-yellow-400",
                "bg-pink-400"
            );
            card.classList.add("bg-pink-400")
            break;
    }
})
