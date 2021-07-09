import cipher from './cipher.js'
//console.log(cipher);

function mostrarMensaje() {
    let mensajeEscrito = document.getElementById("mensajeEscrito").value;
    let desplazamiento = document.getElementById("desplazamiento").value;
    desplazamiento = parseInt(desplazamiento);
    document.getElementById("mensajeCifrado").value = cipher.encode(desplazamiento, mensajeEscrito);
}

document.getElementById("cifrarBTN").addEventListener("click", mostrarMensaje);

function mostrarMensajeDescifrado() {
    let mensajeEscrito = document.getElementById("mensajeEscrito").value;
    let desplazamiento = document.getElementById("desplazamiento").value;
    desplazamiento = parseInt(desplazamiento);
    document.getElementById("mensajeCifrado").value = cipher.decode(desplazamiento, mensajeEscrito);
}

document.getElementById("descifrarBTN").addEventListener("click", mostrarMensajeDescifrado);

function borrar() {
    document.getElementById("mensajeEscrito").value = "";
    document.getElementById("mensajeCifrado").value = "";
    document.getElementById("desplazamiento").value = 1;

}

document.getElementById("borrarBTN").addEventListener("click", borrar);