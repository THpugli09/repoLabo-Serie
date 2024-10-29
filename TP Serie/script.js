let currentIndex = 0;
const images = document.querySelectorAll('.galeria img');
const viewer = document.getElementById('visualizador');
const viewerImage = document.getElementById('portaImagenes');

function openImageViewer(index) {
    currentIndex = index;
    viewerImage.src = images[currentIndex].src;
    viewer.style.display = 'flex';
}

/*function closeImageViewer(event) {
    if (event && event.target === viewer) { // Solo cierra al hacer clic fuera de la imagen o en "X"
        viewer.style.display = 'none';
    } else if (!event) { // Cierra desde el botón "X"
        viewer.style.display = 'none';
    }
}

// Cerrar el visualizador si se hace clic en el contenedor oscuro
viewer.addEventListener('click', function(event) {
    if (event.target === viewer) {
        closeImageViewer();
    }
});*/



function muestraSpoiler() {
    var spoilers = document.getElementsByClassName("Spoiler");
    for (var i = 0; i < spoilers.length; i++) {
        if (spoilers[i].style.visibility == 'hidden') {
            spoilers[i].style.visibility = 'visible';
        } else {
            spoilers[i].style.visibility = 'hidden';
        }
    }
}
function muestraSpoiler2() {
    var spoilers = document.getElementsByClassName("Spoiler2");
    for (var i = 0; i < spoilers.length; i++) {
        if (spoilers[i].style.visibility == 'hidden') {
            spoilers[i].style.visibility = 'visible';
        } else {
            spoilers[i].style.visibility = 'hidden';
        }
    }
}
