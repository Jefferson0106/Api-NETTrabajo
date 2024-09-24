// Mensajes románticos que aparecerán en el modal de forma aleatoria
const mensajesRomanticos = [
    "Eres la luz que ilumina mis días.",
    "Nuestra amistad es un tesoro que atesoro.",
    "Cada momento contigo es especial.",
    "Gracias por ser quien eres, única y maravillosa.",
    "Tenerte en mi vida es una bendición."
];

// Elementos del DOM
const modal = document.getElementById("modalMensaje");
const modalMensaje = document.getElementById("mensajeModal");
const abrirModalBtn = document.getElementById("abrirModalBtn");
const cerrarModalBtn = document.getElementById("cerrarModalBtn");

// Función para abrir el modal con un mensaje aleatorio
abrirModalBtn.addEventListener('click', () => {
    const mensaje = mensajesRomanticos[Math.floor(Math.random() * mensajesRomanticos.length)];
    modalMensaje.innerText = mensaje;
    modal.style.display = "block";
});

// Función para cerrar el modal
cerrarModalBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

// Cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};