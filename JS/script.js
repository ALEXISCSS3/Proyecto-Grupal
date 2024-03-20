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

