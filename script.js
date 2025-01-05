//declaro e inicializo la variable ofertas//
let ofertas = document.getElementById('ofertas');
ofertas.textContent = "20% descuento en productos seleccionados";
ofertas.style.color = "#04fd";
ofertas.style.fontFamily = "roboto-bold";
ofertas.style.fontSize = "40px";
console.log('ofertas');

//Array productos Exitentes//
let productos = [];

//Array vacio para ingresar productos//
let productosNuevos = [ ]

//Array de objetos//
let productosConDescuento =[
{nombre: 'vanity', colores: ['rosa', 'verde',  'negro' ], precio_lista: '150000',},
{nombre: 'lotus_flower', colores: [ 'verde',  'negro' ], precio_lista: '190000', },
{nombre: 'redox', colores: ['rosa', 'verde',  'azul' ], precio_lista: '280000', }
];
console.log('productosConDescuento');

precioLista = prompt;
console.log('precioLista');

 precioFinal = precioLista - precioLista/5;
console.log('precioFinal');

function buscadorProducto(nombre, precio_lista, precio_final, color){
const resultadosBusqueda = [];

}




