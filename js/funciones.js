const productos = [
    {id:1, nombre:"Zapatillas Running Pureboost", imagen:"images/Adidas1.png", descripcion: "Las Zapatillas Running Adidas Pureboost 22 son una mejora de su predecesor, con un calce perfeccionado para el pie y una suela que optimiza tu tracción día a día.", precio:164900, categoria:"zapatillas"},
    {id:2, nombre:"Zapatillas Outdoor Terrex Ax4 Gtx", imagen:"images/Adidas2.png", descripcion: "El aire libre está hecho para ser explorado, y las Zapatillas Outdoor adidas Terrex Ax4 Gtx impermeables de senderismo te permitirán conocer hasta lo más profundo y lejano.", precio:171199, categoria:"zapatillas"},
    {id:3, nombre:"Chomba Argentina Qatar 2022", imagen:"images/Adidas3.png", descripcion: "Esta chomba de fútbol adidas brinda comodidad con su tejido jersey suave y puños y cuello acanalados. A medida que la Selección Argentina se enfrente a los mejores del fútbol mundial.", precio:33590, categoria:"remeras"},
    {id:4, nombre:"Remera adidas Moda Badge Of Sport", imagen:"images/Adidas4.png", descripcion: "Presenta un corte clásico con cuello redondo y mangas cortas, se ajustará de manera perfecta a tu cuerpo y te podrás mover con libertad.", precio:4500, categoria:"remeras"},
    {id:5, nombre:"Shorts Essentials Aeroready 3 Tiras", imagen:"images/Adidas5.png", descripcion: "Estos shorts adidas para jóvenes deportistas te permite moverte con total libertad, ya sea en un partido o un entrenamiento de piernas. ", precio:40900, categoria:"shorts"},
    {id:6, nombre:"Short Fútbol Argentina Qatar 2022", imagen:"images/Adidas6.png", descripcion: "Para los mejores equipos de fútbol, el campo de entrenamiento trae los premios más grandes al alcance. Luciendo una versión termotransferida del famoso escudo.", precio:30900, categoria:"shorts"}
];

// Local Storage Producto
const guardarProductosLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
}

const obtenerProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];   
}
// Local Storage Producto hasta acá

const obtenerIdCategoriaLS = () => {
    return JSON.parse(localStorage.getItem("categoria")) || "";   
}

const obtenerIdProductosLS = () => {
    return JSON.parse(localStorage.getItem("producto")) || 0;   
}

// Local Storage Carrito
const guardarCarritoLS = (productos) => {
    localStorage.setItem("carrito", JSON.stringify(productos));
}

const obtenerCarritoLS = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];   
}
// Local Storage Carrito hasta acá

// Calcular productos de mi carrito
const cantTotalProductos = () => {
    const carrito = obtenerCarritoLS();
    return carrito.length;
} 

const sumaTotalProductos = () => {
    const carrito = obtenerCarritoLS();
    return carrito.reduce((acumulador, item) => acumulador += item.precio , 0);
} 

const eliminarCarrito = () => {
    localStorage.removeItem("carrito");
    renderCarrito();
    renderBotonCarrito();
    notificacion("Carrito Eliminado!")
}

// Calcular productos de mi carrito hasta acá

// Ver Producto Pagina Producto
const verProducto = (id) => {
    localStorage.setItem("producto", JSON.stringify(id));
}
//Obtener producto por categoria
const verProductosPorCategoria = (id) => {
    localStorage.setItem("categoria", JSON.stringify(id));
}
//Obtener producto por categoria Fin

const buscarProducto = () => {
    const productos = obtenerProductosLS();
    const id = obtenerIdProductosLS();
    const producto = productos.find(item => item.id === id);
    return producto;
}

// Ver Producto hasta acá

const agregarProductoCarrito = () => {
    const producto = buscarProducto();
    const carrito = obtenerCarritoLS();
    carrito.push(producto);
    guardarCarritoLS(carrito);
    renderBotonCarrito();
    notificacion("Producto Agregado")
} 

const eliminarProductoCarrito = (id) => {
    const carrito = obtenerCarritoLS();
    const carritoActualizado = carrito.filter(item => item.id != id);
    guardarCarritoLS(carritoActualizado);
    renderCarrito();
    renderBotonCarrito();    
    notificacion("Producto Eliminado!");
}

const renderBotonCarrito = () => {
    document.getElementById("totalCarrito").innerHTML = cantTotalProductos(); 
}

const finalizarCompra = () => {
    Swal.fire({

    title: "Gracias por tu Compra!",
    text: "El total a pagar es: $" + sumaTotalProductos() + " pesos.",
    imageUrl: "./images/logo-adidas.png",
    imageWidth: 120,
    imageAlt: "Adidas",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Aceptar"
    }).then((result) => {
    if (result.isConfirmed) {
        eliminarCarrito();
    }});
  }

const notificacion = (texto) => {
Swal.fire({
    position: "top-end",
    icon: "error",
    title: texto,
    showConfirmButton: false,
    timer: 1000,
  });
}
guardarProductosLS(productos);
