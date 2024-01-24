
document.getElementById('icono-nav').addEventListener('click', function() {
    document.getElementById('nav').style.display = 'block'; // O alguna clase para mostrar el menú
});
//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}
///para la caida letra por letra
function animarBienvenida() {
    const bienvenida = document.querySelector('.bienvenida');
    bienvenida.innerHTML = bienvenida.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    const letras = document.querySelectorAll('.bienvenida .letter');
    letras.forEach((letra, index) => {
        // Quita la animación y luego la vuelve a agregar para reiniciarla
     
        letra.style.animation = 'none';
        letra.offsetHeight; // Provoca un reflow para reiniciar la animación
        letra.style.animation = '';
        letra.style.animationDelay = `${index * 0.1}s`;
    });
}

animarBienvenida(); // Iniciar la animación al cargar la página

setInterval(animarBienvenida, 30000); // Reiniciar la animación cada 30 segundos


//función que muestra el menu responsive

//para el slider de certificados
let indice = 0;
const imagenes = document.querySelectorAll('.contenedor-foto img');
const totalImagenes = imagenes.length;
let intervalo;

function moverSlider() {
    indice = (indice + 1) % totalImagenes;
    actualizarSlider();
}

function actualizarSlider() {
    document.querySelector('.contenedor-foto').style.transform = `translateX(-${indice * 100}%)`;
}

// Iniciar la galería automáticamente
intervalo = setInterval(moverSlider, 5000); // Cambia la imagen cada 30 segundos

document.getElementById('siguiente').addEventListener('click', () => {
    clearInterval(intervalo); // Detiene el bucle automático
    moverSlider();
    intervalo = setInterval(moverSlider, 5000); // Reinicia el bucle automático
});

document.getElementById('anterior').addEventListener('click', () => {
    clearInterval(intervalo); // Detiene el bucle automático
    indice = (indice - 1 + totalImagenes) % totalImagenes;
    actualizarSlider();
    intervalo = setInterval(moverSlider, 30000); // Reinicia el bucle automático
});
//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function() { efectoHabilidades() };

//funcion que aplica la animación de la barra de habilidades
window.addEventListener('scroll', animarHabilidades);

function animarHabilidades() {
    var distancia_skills = window.innerHeight - document.getElementById("skills").getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.querySelectorAll('.skill-percentage').forEach(function(el) {
            el.style.width = el.parentElement.getAttribute('data-skill') + '%';
        });
    }
}


