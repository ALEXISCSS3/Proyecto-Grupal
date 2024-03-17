const productos = document.querySelector("#productos");

productos.addEventListener("click", function(e) {
    // Verifica si el clic se realizó en un enlace dentro de #productos
    if (e.target.tagName === 'A') {
        e.preventDefault(); // Evita el comportamiento por defecto de los enlaces
        console.log("bien");
    }
});
