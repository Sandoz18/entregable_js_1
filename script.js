//declaro e inicializo la variable ofertas que se muestra
//  en mi html a traves de document.getElementById//
let ofertas = document.getElementById('ofertas');


//le doy estilo con propiedades de js y le paso el contenido del texto"//
ofertas.textContent = "50";
ofertas.style.color = "#df1515";
ofertas.style.fontFamily = "manrope";
ofertas.style.fontWeight = "500";
ofertas.style.fontSize = "15rem";
console.log('ofertas');


//creo un Array de productos Existentes //
let productos = [
    { nombre: 'vanity', colores: ['rosa', 'verde', 'negro'], precioLista: 15000, productId: '1231', descripcionProducto: 'Lentes de sol de acetato y plata' },
    { nombre: 'lotus_flower', colores: ['verde', 'negro'], precioLista: 19000, productId: '1238', descripcionProducto: 'Lentes de sol de acetato y plata' },
    { nombre: 'redox', colores: ['rosa', 'verde', 'azul'], precioLista: 28000, productId: '1235', descripcionProducto: 'Lentes de sol de acetato y plata' },
    { nombre: 'summertime', colores: ['rosa', 'rojo', 'negro'], precioLista: 1900, productId: '1234', descripcionProducto: 'Lentes de sol de acetato y plata' },
    { nombre: 'focus', colores: ['verde', 'negro'], precioLista: 260000, productId: '1232', descripcionProducto: 'Lentes de sol de acetato y plata' },
    { nombre: 'rocket', colores: ['rosa', 'verde', 'violeta'], precioLista: 38000, productId: '1239', descripcionProducto: 'Lentes de sol de acetato y plata' },
    { nombre: 'shali', colores: ['rosa', 'verde', 'negro'], precioLista: 50000, productId: '1244', descripcionProducto: 'Lentes de sol de acetato y plata' },
    { nombre: 'bubble', colores: ['verde', 'negro'], precioLista: 32000, productId: '1245', descripcionProducto: 'Lentes de sol de acetato y plata' },
    { nombre: 'linger', colores: ['negro', 'amarillo', 'azul'], precioLista: 28000, productId: '1246', descripcionProducto: 'Lentes de sol de acetato y plata' }

];

//muestro el array de productos//
console.log(productos);





//Array vacio para ingresar productos//
let productosNuevos = [];

//Array de objetos (productos con descuento)//
let productosConDescuento = [
    { nombre: 'vanity', colores: ['rosa', 'verde', 'negro'], precioLista: 15000, productId: '1231', descripcionProducto: 'Lentes de sol de acetato y plata' },
    { nombre: 'lotus_flower', colores: ['verde', 'negro'], precioLista: 19000, productId: '1238', descripcionProducto: 'Lentes de sol de acetato y plata' },
    { nombre: 'redox', colores: ['rosa', 'verde', 'azul'], precioLista: 28000, productId: '1235', descripcionProducto: 'Lentes de sol de acetato y plata' },
];
console.log('productosConDescuento');

//creo una clase y uso el constructor  de producto para asignarle parámetros//
class Producto {
    constructor(nombre, colores, precioLista, Id, descripcion) {
        this.nombre = nombre
        this.colores = colores
        this.precioLista = precioLista
        this.Id = Id
        this.descripcion = descripcion
    }    
}

//creo un nuevo objeto "Producto"//

const producto1 = new Producto();
console.log(typeof producto1);

const producto2 = new Producto();
console.log(typeof producto2);

const producto3 = new Producto();
console.log(typeof producto3);



let precioLista = parseInt(prompt);
console.log(typeof precioLista);


//porcentaje de descuento incompleto ver como soluciono una vez tenga creados los productos//
let porcentajeDescuento = parseInt(prompt);

precioFinalDescuento =(parseInt (precioLista - porcentajeDescuento)) ;
console.log("El precio del producto con descuento es:" + precioFinalDescuento);



function buscadorProducto(nombre, precio_lista, precio_final, color) {
    const resultadosBusqueda = [];
}

//cards ocultar y mostrar contenido de product//
/*primero creo la variable cards y le paso el método querySelectorAll
 que va a levantar todos los elementos de html que coincidan con el nombre de la variable*/ 
const cards = document.querySelectorAll("card");

/*luego de que defino la variable cards que contiene la clase "card" (array)
uso forEach para iterar sobre cada elemento dentro del array*/


/*hover de las cards*/
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.classList.add('hover');
      });
      card.addEventListener('mouseout', () => {
        card.classList.remove('hover');
      });
});
 

