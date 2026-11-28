const ingresarTarea = document.getElementById("ingresarTarea");
const resultado = document.getElementById("resultado")

ingresarTarea.addEventListener("keydown",(event) => {
    if(event.key === "Enter"){
        const li = document.createElement("li");
        li.textContent = `Nueva tarea: ${ingresarTarea.value}`
        resultado.appendChild(li)

        ingresarTarea.value = "";
    }
})