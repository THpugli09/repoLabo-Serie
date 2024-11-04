function AbrVisualizador(imagen) {
    var visualizador = document.getElementById("visualizador");
    var visualizadorImg = document.getElementById("visual-imagen");

    visualizador.style.display = "flex";
    visualizadorImg.src = imagen.src;

    visualizadorImg.style.width = "100%";
    visualizadorImg.style.height = "auto";
}

function CrrVisualizador() {
    var visualizador = document.getElementById("visualizador");
    visualizador.style.display = "none";
}

/*let currentIndex = 0;
const Imagen = document.querySelectorAll('.Imagenes') ('.galeria img');
const Miro = document.getElementById('portaImagenes');
const Porta = document.getElementById('Visualizador');

function AbreImagen(index) {
    currentIndex = index;
    Porta.src = Imagen[currentIndex].src;
    Miro.style.display = 'flex';
}

function cierraImagen(event) {
    if (event && event.target === Miro) { // Solo cierra al hacer clic fuera de la imagen o en "X"
        Miro.style.display = 'none';
    } else if (!event) { // Cierra desde el botón "X"
        Miro.style.display = 'none';
    }
}

// Cerrar el visualizador si se hace clic en el contenedor oscuro
Miro.addEventListener('click', function(event) {
    if (event.target === Miro) {
        cierraImagen();
    }
});*/



function muestraSpoiler() {
    var spoilers = document.getElementsByClassName("Spoiler");
    for (var i = 0; i < spoilers.length; i++) {
        if (spoilers[i].style.display  === 'none') {
            spoilers[i].style.display = 'block ';
        } else {
            spoilers[i].style.display = 'none';
        }
    }
}
function muestraSpoiler2() {
    var spoilers = document.getElementsByClassName("Spoiler2");
    for (var i = 0; i < spoilers.length; i++) {
        if (spoilers[i].style.display === 'none') {
            spoilers[i].style.display = 'block ';
        } else {
            spoilers[i].style.display = 'none';
        }
    }
}
