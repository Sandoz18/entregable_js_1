//crear un Array de productos Existentes //
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

//mostrar elementos en el console.log//
console.log(productos);

//acceder a sus elementos//
console.log(productos[5])

//array números//
let numeros = [1, 2, 3, 4, 5, 6, 7,]
console.log(numeros);

//Array palabras//
let palabra = ["auto", "perro", "canilla", "caja", "paraguas"];
console.log(palabra[4]);

//Array booleanos//
let booleanos = ["true", "false"];
console.log(booleanos);

//una matriz es un array dentro de otro array//
let matriz = [
    [1, 2, 3, 4, 5],
    [3, 4, 5, 6],
    [7, 8, 9, 10],
];

/*muestro la matriz y con el segundo console.log muestro
el array y la posición del elemento que quiero se muestre*/

console.log(matriz);
console.log[1], [3];

//Recorrido de arrays//
//estructuras de bucles for para iterar sobre arrays y uso propiedad .lenght//

const numero = [10, 20, 30, 40, 50, 60];
console.log(numero);

//lo recorremos con la propiedad lenght y el i++ que significa i+i incrementa un numero pero muestra el numero anterior al incremento en consola//

//para la variable i mostrar mostrar todos los numeros//
for (let i = 0; i < numero.length; i++) {
    console.log(numero[i]); // Esto imprimirá cada número del array en la consola
}
//acceso a elementos//

let frutas = ["Manzana", "Banana", "Cereza"];
//Acceso a Elementos Específicos//
//Primer Elemento: El primer elemento está en el índice 0.//
console.log(frutas[0]); // Salida: Manzana

//Elemento Medio: Acceso al segundo elemento, en el índice 1.
console.log(frutas[1]); // Salida: Banana

//Último Elemento: Utilizamos length - 1 para acceder al último elemento.
console.log(frutas[frutas.length - 1]); // Salida: Cereza

//Métodos//

//PUSH añade uno o más elementos al final del array//
let frutaPush = ['manzana', 'banana'];
frutaPush.push('naranja');
console.log(frutaPush);  // Salida: ['manzana', 'banana', 'naranja']

//POP elimina el último elemento
//  de un array y lo devuelve. Este método cambia la longitud del array.//


let frutaPop = ['manzana', 'banana', 'naranja'];
let frutaEliminada = frutaPop.pop();
console.log(frutaEliminada);  // Salida: 'naranja'
console.log(frutaPop);  // Salida: ['manzana', 'banana']

//SHIFT elimina el primer elemento del array y lo devuelve,
//  desplazando todos los elementos restantes a una posición inferior.


let frutaShift = ['manzana', 'banana', 'naranja'];
let primeraFruta = frutaShift.shift();
console.log(primeraFruta);  // Salida: 'manzana'
console.log(frutaShift);  // Salida: ['banana', 'naranja']

//UNSHIFT 
//añade uno o más elementos al inicio del array
//  y devuelve la nueva longitud del array.
let frutaUnshift = ['banana', 'naranja'];
frutas.unshift('manzana');
console.log(frutas);  // Salida: ['manzana', 'banana', 'naranja']

//Métodos de búsqueda indexOf e includes//
/*indexOf devuelve el primer índice en el que se puede encontrar
un elemento dado en el array, o -1 si el elemento no está presente.
Es útil para localizar la posición exacta de un elemento y es sensible a tipos de datos,
es decir, diferencia entre números, strings, etc.*/

let nombres = ['Ana', 'Juan', 'Carlos', 'Marta'];
let indice = nombres.indexOf('Carlos');
console.log(indice);  // Salida: 2

/*casos de uso: validación de entrada(verificar si un elemento existe antes de 
agregarlo a un array), localización de elementos para su manipulación
 (Determinar la posición para actualizar o eliminar un elemento.) */

/*includes determina si un array contiene un determinado elemento,
retornando true o false según corresponda.
solo proporciona la confirmación de su existencia
es ideal para condiciones y verificaciones rápidas.*/
frutas = ['manzana', 'naranja', 'banana'];
let contiene = frutas.includes('naranja');
console.log(contiene);  // Salida: true

/* usos: Condiciones: Ejecutar código basado en la presencia de un elemento en un array.
Filtrado de opciones: Verificar rápidamente la inclusión de elementos
sin preocuparse por su ubicación exacta.*/

/*El método sort() se utiliza para ordenar los elementos de un array.
Comportamiento por defecto:
Ordena por Unicode: Por defecto, sort() ordena los elementos como si fueran cadenas de texto,
comparando sus códigos Unicode.(si son números toma el primer dígito si son letras primero mayusculas)
Esto significa que si tienes un array de números,
los ordenará como si fueran cadenas, lo que puede llevar a resultados inesperados
(por ejemplo, "25" puede ser considerado menor que "10").
Modifica el array original: Es importante tener en cuenta que sort()
modifica el array original. Si necesitas preservar el array original,
debes crear una copia antes de aplicar sort().*/ 

numeros = [25, 8, 7, 10];
numeros.sort();
console.log(numeros); // Output: [10, 25, 7, 8]

/*debemos generar una función comparativa para solucionar este problema en sort()
Esta función recibirá dos elementos del array y debe devolver:
Un número negativo: Si el primer elemento debe ir antes que el segundo.
Cero: Si los elementos son iguales.
Un número positivo: Si el segundo elemento debe ir antes que el primero.*/ 
/*función flecha en sort()*/ 

numeros = [25, 8, 7, 10];
numeros.sort((a, b) => a - b);
console.log(numeros); // Output: [7, 8, 10, 25]
/*La función (a, b) => a - b compara dos elementos del array.
Si a es menor que b, la función devuelve un número negativo, lo que indica que a debe ir antes que b.
Si a es mayor que b, la función devuelve un número positivo, lo que indica que b debe ir antes que a.
Si a y b son iguales, la función devuelve 0.*/


/*método reverse*/ 
/*Iniverte el órden de los elementos de un array*/ 

/*CONCATENAR ARRAYS*/
/*join toma un único argumento opcional: el separador, que determina qué string se utiliza para separar los elementos del array en la nueva cadena resultante. Si no se proporciona un separador, los elementos se concatenarán con una coma (,). Si el separador es una cadena vacía (''), los elementos se concatenarán sin ningún espacio entre ellos.*/ 

/*1. Uso básico con coma (default)*/
let colores = ['Rojo', 'Verde', 'Azul'];
let resultado = colores.join();
console.log(resultado);  // "Rojo,Verde,Azul"

/*1. Uso con separador de espacio*/
nombres = ['Ana', 'Juan', 'Carlos'];
let listaNombres = nombres.join(' ');
console.log(listaNombres);  // "Ana Juan Carlos"


/*1. Uso con separador de guión*/
let elementos = ['Hidrógeno', 'Oxígeno', 'Carbono'];
let formula = elementos.join('-');
console.log(formula);  // "Hidrógeno-Oxígeno-Carbono"

/*Uso con separador vacio*/ 
let letras = ['J', 'a', 'v', 'a'];
let palabraA = letras.join('');
console.log(palabraA);  // "Java"

/*Casos de Uso
Formato de visualización: Transformar un array de datos en una forma legible para ser mostrada en interfaces de usuario o en documentos.

Preparación de datos para envío: Convertir arrays a strings para ser enviados a través de peticiones de red donde solo se pueden enviar strings.

Logs y depuración: Facilitar la revisión de datos en desarrollo, permitiendo ver fácilmente el contenido de arrays complejos.*/ 

/*Objetos literales y su  Relación */
//Sirven para crear un objeto y asignarle propiedades, es una forma ordenada y concisa de crear un objeto//

const usuario = {nombre : "Juan",
    apellido: " Perez",
    edad: "32",
};

/*A diferencia de los arrays, que son colecciones indexadas de elementos, los objetos literales no mantienen un orden específico de sus elementos y no se accede a sus valores mediante índices numéricos. En los arrays, el acceso a los elementos se realiza a través de índices comenzando desde 0, mientras que en los objetos, el acceso se realiza a través de las claves definidas.*/


// Array
const coloress = ["rojo", "verde", "azul"];
console.log(coloress[0]); // Accede al primer elemento: "rojo"

// Objeto Literal
const semaforo = {
    rojo: "Detenerse",
    verde: "Avanzar",
    azul: "Cuidado"
};
console.log(semaforo.rojo); // Accede al valor de la clave 'rojo': "Detenerse"

/*los arrays pueden almacenar varios tipos de datos, incluidos objetos literales. Esto es especialmente útil en aplicaciones donde se manejan colecciones de datos complejos. Los métodos de array como push, sort, y otros se pueden utilizar eficientemente en arrays que contienen objetos literales, lo que permite manipular datos de formas potentes y flexibles.*/

/*Para agregar nuevos objetos a un array, se utiliza el método push.*/

const usuarios = [];
usuarios.push({ nombre: "Ana", edad: 25 });
usuarios.push({ nombre: "Luis", edad: 30 });

console.log(usuarios);
// Resultado: [{ nombre: "Ana", edad: 25 }, { nombre: "Luis", edad: 30 }]

//ordenar objetos con sort()//
usuarios.sort((a, b) => a.edad - b.edad);
console.log(usuarios);
// Resultado: [{ nombre: "Ana", edad: 25 }, { nombre: "Luis", edad: 30 }]

//Filtrar con filter//
const mayoresDe25 = usuarios.filter(usuario => usuario.edad > 25);
console.log(mayoresDe25);
// Resultado: [{ nombre: "Luis", edad: 30 }]

//buscar con find//

const luis = usuarios.find(usuario => usuario.nombre === "Luis");
console.log(luis);
// Resultado: { nombre: "Luis", edad: 30 }

//Resumen unidad//
// Puedes añadir, modificar y eliminar propiedades de un objeto de forma dinámica.//
persona.profesion = "Ingeniera";
console.log(persona); // {nombre: "Ana", edad: 32, ciudad: "Madrid", profesion: "Ingeniera"}

delete persona.edad;
console.log(persona); // {nombre: "Ana", ciudad: "Madrid", profesion: "Ingeniera"}

