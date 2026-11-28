const contadorClicks = document.getElementById("contadorClicks");
const btnSuma = document.getElementById("btnSuma");
const btnReinicio = document.getElementById("btnReinicio");

btnSuma.addEventListener("click", function(){
    contadorClicks.textContent = Number(contadorClicks.textContent) + 1;
    
    if(contadorClicks.textContent == 10){
    contadorClicks.classList.add("bg-green-400", "px-4", "py-2", "rounded-lg", "text-white");
    }
})
btnReinicio.addEventListener("click", function(){
    contadorClicks.textContent = 0;
    
    contadorClicks.classList.remove("bg-green-400", "px-4", "py-2", "rounded-lg", "text-white");
})



