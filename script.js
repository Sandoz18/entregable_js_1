//declaro e inicializo la variable ofertas//
let ofertas = document.getElementById('ofertas');
ofertas.textContent = "20% descuento en productos seleccionados";
ofertas.style.color = "#04fd";
ofertas.style.fontFamily = "roboto-bold";
ofertas.style.fontSize = "40px";
console.log('ofertas');

//Array productos Existentes//
let productos = [ 
{nombre: 'vanity', colores: ['rosa', 'verde',  'negro' ], precioLista: '15000', productId:'1231'},
{nombre: 'lotus_flower', colores: [ 'verde',  'negro' ], precioLista: '19000', productId:'1238'},
{nombre: 'redox', colores: ['rosa', 'verde',  'azul' ], precioLista: '28000', productId:'1235'},
{nombre: 'summertime', colores: ['rosa', 'rojo',  'negro' ], precioLista: '1900', productId:'1234'},
{nombre: 'focus', colores: [ 'verde',  'negro' ], precioLista: '260000', productId:'1232'},
{nombre: 'rocket', colores: ['rosa', 'verde',  'violeta' ], precioLista: '38000', productId:'1239' },
{nombre: 'shali', colores: ['rosa', 'verde',  'negro' ], precioLista: '50000', productId:'1244'},
{nombre: 'bubble', colores: [ 'verde',  'negro' ], precioLista: '32000',  productId:'1245'},
{nombre: 'linger', colores: ['negro', 'amarillo',  'azul' ], precioLista: '28000', productId:'1246' }

];

//Array vacio para ingresar productos//
let productosNuevos = [ ];

//Array de objetos//
let productosConDescuento =[

];
console.log('productosConDescuento');

precioLista = prompt;
console.log('precioLista');

 precioFinal = precioLista - precioLista/5;
console.log('precioFinal');

function buscadorProducto(nombre, precio_lista, precio_final, color){
const resultadosBusqueda = [];

}




