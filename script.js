// Obtener el modal
var modal = document.getElementById("videoModal");

// Obtener el botón que abre el modal
var btn = document.getElementById("openModal");

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en la portada, abre el modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// Cuando el usuario hace clic en <span> (x), cierra el modal
span.onclick = function() {
    modal.style.display = "none";
    // Detiene el video al cerrar el modal
    var video = modal.querySelector('video');
    video.pause();
    video.currentTime = 0; // Reinicia el video al cerrar
}

// Cuando el usuario hace clic fuera del modal, cierra el modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        var video = modal.querySelector('video');
        video.pause();
        video.currentTime = 0;
    }
}