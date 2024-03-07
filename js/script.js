// Render Productos
function renderProductos() {
    const productos = obtenerProductosLS();
    const categoria = obtenerIdCategoriaLS();
    const productosFiltrados = categoria == 'todos' ? productos : productos.filter(item => item.categoria === categoria);

    let contenido = "";

    for (const producto of productosFiltrados){
        contenido += `<div class = "col-md-4 text-center">
        <a href="producto.html" onclick="verProducto(${producto.id});" class="text-decoration-none">
        <img src = "${producto.imagen}" alt="${producto.nombre}" height="260" />
        <p class = "colorFuente bangers-regular"> ${producto.nombre}</p>
        </a>
        </div>`;
    } 
    document.getElementById("productos").innerHTML = contenido;
}
renderProductos();
// Render Productos hasta acá

renderBotonCarrito();
