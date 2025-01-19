//Función constructora//
/*Se usa para INICIALIZAR un nuevo objeto */
/*Antes de ES6 se usaba function() para simular las clases,
ahora se utiliza class*/
//El NOMBRE DE LA FUNCIÓN CONSTRUCTORA EMPIEZA EN MAYUSCÚLA, dentro usamos this para referirnos a 
// las propiedades y métodos que tendrá cada objeto creado a partir de esta plantilla//
//La función constructira nos sirve para crear objetos reiteradas veces con un solo bloque de código//
class Persona { //El nombre de la función constructora va la primera letra en mayuscúla//
    constructor(nombre, edad, calle) {
        this.nombre = nombre;  //""Esto es nombre y es  = al parametro que le paso"//
        this.edad = edad;
        this.calle = calle;
    }

    //creo la función para que me devuelva los datos del objeto//
    describir() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Calle: ${this.calle}`;
    }
}

// Crear un nuevo objeto Persona 
const persona1 = new Persona("Ana", 25, "Calle Falsa 123"); /*new es el operador que invoca a la función 
constructora y es el que le pasa el argumento para que cree un nuevo objeto */
console.log(persona1.describir());

/*Puedo usar funciones y funciones anidadas para hacer cosas más complejas*//*
class Producto
const = new Product ("nombre", "precio", "stock") {
this.nombre = nombre;
this.precio = precio;
this.stock = stock;
}*/

/************API de almacenamiento web: localStorage y sessionStorage********
Local storage guarda las acciones que realiza el usuario, es una API del navegador que nos
deja almacenar datos clave-valor de manera persistente********/

/********************Características localStorage
permite almacenar datos de forma indefinida hasta que sean eliminados
explicitamente por el usuario o el sitio web (Los datos PERSISTEN despúes de cerrar el navegador y reiniciar el sistema
Compartición Disponible en todas las pestañas y ventanas
Uso típico	Guardar preferencias del usuario a largo plazo
localStorage es ideal para:
Guardar preferencias de usuario que no requieren ser borradas al cerrar el navegador.
Almacenar datos para el autocompletado de formularios en visitas futuras.
Guardar tokens de autenticación y configuraciones para uso a largo plazo.*/

	
/***************Caracteristicas sessionStorage
Persistencia solo durante la sesión de la pestaña del navegador
Compartición Disponible solo en la pestaña que creó el almacenamiento
Uso típico Guardar información sobre el estado de la sesión actual
sessionStorage se recomienda para:
Información que debe desaparecer después de la sesión, como datos de un formulario en progreso en una compra o configuraciones temporales de visualización.
Datos sensibles que no deben persistir más allá de la sesión actual, como detalles de una transacción financiera.
*/ 

/**Ejemplos prácticos***/ 

//localStorage
/*El método setItem permite guardar  pares clave-valor, donde tanto la clave como el valor deben ser cadenas de texto. La sintaxis general es:*/ 
localStorage.setItem('clave', 'valor');

//  Guardar datos //
localStorage.setItem('usuario', 'JuanPerez');

// Obtener datos
let usuario = localStorage.getItem('usuario');
console.log(usuario); // 'JuanPerez'

// Eliminar datos
localStorage.removeItem('usuario');

/*Ejemplos de Uso
Almacenar una cadena de texto:
Guarda un saludo en el almacenamiento local: jsx localStorage.setItem('saludo', 'Hola, mundo!');
Almacenar un número: Aunque localStorage solo puede almacenar cadenas de texto, puedes guardar números como texto y luego convertirlos de vuelta a números cuando los leas: jsx localStorage.setItem('puntuacion', '10'); Para recuperar el número y convertirlo a su tipo original: jsx let puntuacion = parseInt(localStorage.getItem('puntuacion')); console.log(puntuacion);  10
Almacenar datos complejos (como objetos o arrays): Para guardar objetos o arrays, primero debes convertirlos a una cadena JSON:
 jsx let usuario = { nombre: 'Ana', edad: 25 }; localStorage.setItem('usuario', JSON.stringify(usuario)); Para recuperarlo, usa JSON.parse: jsx let usuarioRecuperado = JSON.parse(localStorage.getItem('usuario')); console.log(usuarioRecuperado.nombre); // Ana

Consideraciones al usar localStorage
Limitación de Tipo: localStorage solo almacena cadenas. Cualquier otro tipo de dato, incluidos los números, booleanos o arrays, debe ser convertido a cadena antes de almacenarse y revertido a su tipo original al ser leído.

Seguridad: No es seguro almacenar datos sensibles, como información de autenticación o datos personales, porque el localStorage es accesible desde el cliente y podría ser leído por cualquier script en la página.

Capacidad de Almacenamiento: localStorage tiene una capacidad limitada (aproximadamente 5MB por dominio), por lo que es importante gestionar lo que se almacena y evitar guardar grandes cantidades de datos.

El uso efectivo de localStorage con el método setItem puede mejorar significativamente la experiencia del usuario al permitir la personalización y la persistencia del estado entre sesiones de navegación.

*/ 

/*recuperar y eliminar datos

*/


//sessionStorage//

// Guardar datos
sessionStorage.setItem('detalleCompra', 'Libro de JavaScript');

// Obtener datos
let detalle = sessionStorage.getItem('detalleCompra');
console.log(detalle); // 'Libro de JavaScript'

// Eliminar datos al cerrar la pestaña
sessionStorage.removeItem('detalleCompra');

