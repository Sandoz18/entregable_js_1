//funciones de órden superior//
/*Pueden recibir otras funciones de argumento, retornar valores como resultado o ambas cosas*/ 

const numeros = [1, 2, 3, 4];
function porCadaUno(array, fn) {     
    for (let i = 0; i < array.length; i++) {      
        fn(array[i]);       
    }
}
porCadaUno(numeros, console.log);
// 1
// 2
// 3
// 4

//creo una variable y le asigno un array de números del 1 al 4
//creo la funcion porCadaUno();
/*la funcion porCadaUno(); recibe un array[] como parametro
y una fn() que se ejecuta para cada elemento del array

//bucle for que recorra cada uno de los elementos del array
    //i se inicializa en 0 y se incrementa en uno
    //  El bucle contiuna mientras i sea menor que la longitud del array 

/*En cada iteración del bucle se llama a la función fn y se le pasa
como argumento un elemento del array*/

    /*se muestra por console log cada elemento*/ 

    /*****************************************************************************/ 

    //retomar funciones//
    function mayorQue(n) {
        return function(m) {
            return m > n;
        }
    }
    
    let mayorQueDiez = mayorQue(10);
    
    console.log(mayorQueDiez(12)); // true
    console.log(mayorQueDiez(8));  // false

/*las funciones de orden superior son la base de técnicas de programación funcional como mapear, filstrar o reducir colecciones de datos.
*/ 

/*Métodos comunes que usan funciones del orden superior
forEach : Itera sobre un array y ejecuta una función por cada elemento (importantisimo!!
esto evita el desbordamiento de arrays y los bucles infinitos, una ventaja que tiene este método
sobre for)

map: crea un array con los resultados de la función aplicada a cada elemento del array original.
filter: crea un nuevo array con todos los elementos que pasan una prueba definida por la función
reduce: ejecuta una función reductora sobre cada elemento del array, resultando en un único valor de retorno.
find: retoma el primer elemento que cumple con una condición  
definida en la función.
some: Verifica si al menos un elemento en el array cumple con la condición implementada
 de la función 

*/ 

    /***********************Clase función orden superior*********************/ 
    /*******programa que utilice el método forEach para clasificar los números en dos grupos: números pares y números impares.
El programa debe recorrer el array y:
Almacenar los números pares en un array llamado pares.
Almacenar los números impares en un array llamado impares.**********************************************/ 

    const numerosArray = [4,6,12,53,11,30,7,33,45]
   const pares= [];
   const impares= [];

   //array plural elemento singular//

   /*Tienes un array de objetos que representan estudiantes, donde cada objeto contiene el nombre de un estudiante y su calificación en una materia. Usa el método forEach para clasificar a los estudiantes en dos grupos:
Los que aprobaron (calificación mayor o igual a 6) en un array llamado aprobados.
Los que reprobaron (calificación menor a 6) en un array llamado reprobados.*/

/*
    const estudiantes= [
        { nombre:"luis",
            nota: 8           
        },
        {
            nombre:"jesus",
            nota: 4
        },
        {
            nombre:"antonella",
            nota: 2
        },
        {
            nombre:"ruperto",
            nota: 7
        },
        {
            nombre:"pepe",
            nota: 10
        },
    ]

const aprobados = [];
const reprobados= [];
estudiantes.forEach(estudiante =>
    (if estudiante.nota>=6)
    {aprobados.push(estudiante);} 

     )
 
 else{
    desaprobados.push(estudiante)
 })*/

    /*const usuarios = [
    {
        nombre:"cami",
        activo:true,
        rol: "admin"
    },
    {
        nombre:"seba",
        activo:false,
        rol: "admin"
    },
    {
        nombre:"angel",
        activo:true,
        rol: "usuario"
    },
    {
        nombre:"angel",
        activo:true,
        rol: "usuario"
    },
    {
        nombre:"braian",
        activo:true,
        rol: "admin"
    },
]*/ 


//Array de productos con función constructora//
/*function Producto(nombre, precio, stock);
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;

    Acá uso "const" porque lo que no puede cambiar es valor de la variable pero
    en este caso como es un objeto puedo modificar las propiedades dentro del objeto
    const producto1 = new Producto("laptop", 1000, true);
    const producto2 = new Producto("Celular", 500, false);    
    const producto3 = new Producto("Teclado", 50, true);
    const producto4 = new Producto("Mouse", 25, false);
    const producto5 = new Producto("Monitor", precio, 200, true);
   
*/ 



//Array de productos//
const productos = [ { nombre: "Laptop", precio: 1000, stock: true },
                    { nombre: "Celular", precio: 500, stock: false }, 
                    { nombre: "Teclado", precio: 50, stock: true },
                    { nombre: "Mouse", precio: 25, stock: false },
                    { nombre: "Monitor", precio: 200, stock: true } ];

                    /**/ 

          /*función de órden con función flecha para buscar un producto*/    
let rangoStock = productos.filter(producto => producto.nombre === "Laptop");
console.log(rangoStock); 

function buscarProducto(productos, nombreProducto) {
    return productos.filter(producto => producto.nombre === nombreProducto);
  }
  
  const productosFiltrados = buscarProducto(productos, "Celular");
  console.log(productosFiltrados);

  /*Si yo quiero buscar un producto que no existe me tira por consola undefenied porque no está "definido" */
  
  //Seguir desde métodos de transformación y ver de nuevo la clase//