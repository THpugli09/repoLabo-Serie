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
