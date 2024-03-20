window.addEventListener("scroll", transicion);

function transicion() {
    let header = document.querySelector("header");
    header.classList.toggle("transicion", window.scrollY > 0);
}

let whatsapp = document.querySelector(".whatsapp");
let numero = document.querySelector(".numero");
let instagram = document.querySelector(".instagram");

// Agregamos un "event listener" para el evento 'mouseover' en el elemento numero
numero.addEventListener("mouseover", mostrarNumero);

// Agregamos un "event listener" para el evento 'mouseover' en el elemento whatsapp
whatsapp.addEventListener("mouseover", mostrarNumero);

// Definimos la función para mostrar el número
function mostrarNumero() {
  // Mostramos el número de teléfono
  numero.style.display = "block";
}












const imagen1 = document.getElementById("imagen1");
const imagen2 = document.getElementById("imagen2");
const imagen3 = document.getElementById("imagen3");
const imagen4 = document.getElementById("imagen4");
const imagen5 = document.getElementById("imagen5");
const imagen6 = document.getElementById("imagen6");
const imagen7 = document.getElementById("imagen7");
const imagen8 = document.getElementById("imagen8");
const imagen9 = document.getElementById("imagen9");

const imagenes = [
    "recursos/reseña1.jpeg",
    "recursos/reseña2.jpeg",
    "recursos/reseña3.jpeg",
    "recursos/reseña4.jpeg",
    "recursos/reseña5.jpeg",
    "recursos/reseña6.jpeg",
    "recursos/reseña7.jpeg",
    "recursos/reseña8.jpeg",
    "recursos/reseña9.jpeg",
];

let index = 0;

function cambiarImagenes() {
    const imagen1 = document.getElementById("imagen1");
    const imagen2 = document.getElementById("imagen2");

    imagen1.src = imagenes[index];
    imagen2.src = imagenes[(index + 1) % imagenes.length];

    index = (index + 2) % imagenes.length;
}

setInterval(cambiarImagenes, 5000);