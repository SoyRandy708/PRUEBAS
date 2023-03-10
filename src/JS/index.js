const modal = document.getElementById("modal");
const abrirModal = document.getElementById("open-modal");
const cerrarModal = document.getElementById("cerrar-modal");

abrirModal.onclick = function() {
    modal.style.display = "block";
} 

cerrarModal.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
