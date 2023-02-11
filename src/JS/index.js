const boton = document.querySelector(".activador")
const resultado = document.querySelector("#resultado")

boton.addEventListener("click", numeroAleatorio)

function numeroAleatorio() {    
    let minimo = parseInt(document.getElementById("min").value) || 0
    let maximo = parseInt(document.getElementById("max").value) || 0
    let aleatorio = Math.floor(Math.random() * (maximo - minimo + 1) + minimo)
    resultado.innerText = `Numero aleatorio: ${aleatorio}`
}
