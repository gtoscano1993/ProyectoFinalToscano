// Render Productos
function renderProductos() {
    const producto = buscarProducto();
    let contenido = `<div class = 'row'>
    <div class = "col-md-6 offset-md-3 text-center">          
    <img src = "${producto.imagen}" alt="${producto.nombre}" class="img-fluid" />
    </div>
    </div>
    <div class = 'row'>
    <div class = "col-md-8 offset-md-2 text-center">
    <h2 class = "colorFuente bangers-regular"> ${producto.nombre}</h2>
    <p class = "colorFuente bangers-regular"> ${producto.descripcion}</p>
    <p class = "colorFuente bangers-regular"> $${producto.precio}</p>
    <p><button class="btn colorFondo2 bangers-regular" onclick="agregarProductoCarrito()"> (+) Agregar</button></p>
    </div>
    </div>`;
    
    document.getElementById("producto").innerHTML = contenido;
}

renderProductos();
// Render Productos hasta acá
renderBotonCarrito();
