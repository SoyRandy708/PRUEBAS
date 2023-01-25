const numero = document.getElementById("numero")
const boton = document.querySelector(".activador")
const resultado = document.querySelector("#resultado")

boton.addEventListener("click", parImpar)

function parImpar() {
    if (numero.value % 2 === 0) {
        resultado.innerHTML = "El numero es par"
    } else {
        resultado.innerHTML = "El numero es impar"
    }
}