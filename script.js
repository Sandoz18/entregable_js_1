//declaro e inicializo la variable ofertas//
let ofertas = document.getElementById('ofertas');

//le doy estilo con propiedades de js"//
ofertas.textContent = "descuentos de hasta el 20% en productos seleccionados";
ofertas.style.color = "#ffffff";
ofertas.style.fontFamily = "roboto-bold";
ofertas.style.fontSize = "40px";
console.log('ofertas');

//Array productos Existentes//
let productos = [
    { nombre: 'vanity', colores: ['rosa', 'verde', 'negro'], precioLista: 15000, productId: '1231', descripcionProducto: 'Lentes de sol de acetato y plata' },
    { nombre: 'lotus_flower', colores: ['verde', 'negro'], precioLista: 19000, productId: '1238', descripcionProducto: 'Lentes de sol de acetato y plata' },
    { nombre: 'redox', colores: ['rosa', 'verde', 'azul'], precioLista: 28000, productId: '1235', descripcionProducto: 'Lentes de sol de acetato y plata' },
    { nombre: 'summertime', colores: ['rosa', 'rojo', 'negro'], precioLista: 1900, productId: '1234', descripcionProducto: 'Lentes de sol de acetato y plata'},
    { nombre: 'focus', colores: ['verde', 'negro'], precioLista: 260000, productId: '1232', descripcionProducto: 'Lentes de sol de acetato y plata' },
    { nombre: 'rocket', colores: ['rosa', 'verde', 'violeta'], precioLista: 38000, productId: '1239', descripcionProducto: 'Lentes de sol de acetato y plata'},
    { nombre: 'shali', colores: ['rosa', 'verde', 'negro'], precioLista: 50000, productId: '1244', descripcionProducto: 'Lentes de sol de acetato y plata'},
    { nombre: 'bubble', colores: ['verde', 'negro'], precioLista: 32000, productId: '1245', descripcionProducto: 'Lentes de sol de acetato y plata'},
    { nombre: 'linger', colores: ['negro', 'amarillo', 'azul'], precioLista: 28000, productId: '1246', descripcionProducto: 'Lentes de sol de acetato y plata'}

];

console.log(productos);

//Array vacio para ingresar productos//
let productosNuevos = [];

//Array de objetos//
let productosConDescuento = [
    { nombre: 'vanity', colores: ['rosa', 'verde', 'negro'], precioLista: 15000, productId: '1231', descripcionProducto: 'Lentes de sol de acetato y plata' },
    { nombre: 'lotus_flower', colores: ['verde', 'negro'], precioLista: 19000, productId: '1238', descripcionProducto: 'Lentes de sol de acetato y plata' },
    { nombre: 'redox', colores: ['rosa', 'verde', 'azul'], precioLista: 28000, productId: '1235', descripcionProducto: 'Lentes de sol de acetato y plata' },
];
console.log('productosConDescuento');

let precioLista = parseInt(prompt);
console.log(typeof precioLista);

let porcentajeDescuento = precioLista*0.20;

precioFinalDescuento = precioLista - porcentajeDescuento;
console.log("El precio del producto con descuento es:" + precioFinalDescuento);



function buscadorProducto(nombre, precio_lista, precio_final, color) {
    const resultadosBusqueda = [];
}




