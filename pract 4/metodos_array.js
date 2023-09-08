
//forEach(): Ejecuta una función para cada elemento del array.

let numbers = [1, 2, 3]
numbers.forEach(function(number){

    console.log(number * 2)
})


//Ejercicio 2 de forEach

const product = [
    {name:'Camisa', precio: 20},
    {name:'Jeans', precio: 25},
    {name:'Zapatos', precio: 80},
    {name:'Sombrero', precio: 10},
]

let precio_total = 0;

product.forEach(function(producto){
    precio_total += producto.precio;
});

console.log('Precio total a pagar es de: $', precio_total);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//map(): Crea un nuevo array aplicando una función a cada elemento del array original

let numbers1 = [1, 2, 3]
let nuevoAreglo = numbers1.map(function(number){
    return number * 2
});

console.log(nuevoAreglo)



//Ejercicio 2 de map()
//Convertimos grados centigrados a grados farenheith

const grados_celcius = [0, 15, 30, 5, 10]
const grados_farenheith = grados_celcius.map(function(celcius){
    //formula para convertir grados celcius a farenheith
    return (celcius * 9/5) + 32
});

console.log('Grados celcius:', grados_celcius);
console.log('Grados farenheith:', grados_farenheith);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// filter(): Crea un nuevo array con todos los elementos que pasan una prueba (función proporcionada).

//Ejercicio 1,

const nums = [2,8,3,6,10,4,7]

const nums2 = nums.filter(function(number){
    return number > 5
});

console.log(nums2);


//Ejericio 2 de filter

const personas = [
    {nombre: 'Yancy', Edad: 24},
    {nombre: 'Jose', Edad: 17},
    {nombre: 'Luciana', Edad: 30},
    {nombre: 'Kevin', Edad: 15},
    {nombre: 'Plutarca', Edad: 20},
]

const adultos = personas.filter(function(person){
    return person.Edad > 18
});

console.log(adultos);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




//reduce(): Aplica una función a un acumulador y a cada elemento de un arreglo (de izquierda a derecha) para reducirlo a un solo valor.

let num = [1,2,3,4]
let sum = num.reduce(function(acumulador, valorActual){
    return acumulador + valorActual

},0)

console.log(sum)



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




//every(): Comprueba si todos los elementos de un arreglo cumplen una condición dada y devuelve true o false.

let number = [1,2,3,4,5]
let mayorCero = number.every(function(number){
    return number > 0
});

console.log(mayorCero)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//some(): Comprueba si al menos un elemento de un arreglo cumple una condición dada y devuelve true o false.

let number2 = [1,2,3,4,5]
let numeroPar = number2.some(function(numero){
   return numero % 2 === 0
});

console.log(numeroPar)


//sort(): Ordena los elementos de un arreglo en orden alfabetico (sin crear un nuevo arreglo).

let nombres = ['Margarita', 'Alberto', 'Cecia', 'Santiago', 'Zuleima']
nombres.sort();
console.log(nombres);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//EJERCICIOS DE ACTIVIDAD

//Ejercicio 1 - Metodo Filter

const Empleados = [
    {nombre: 'Karla', apellido: 'Benitez', Edad: 24, ingreso: 2009},
    {nombre: 'Maria', apellido: 'Rubio', Edad: 17, ingreso: 2009},
    {nombre: 'Fernando', apellido: 'Márquez', Edad: 30, ingreso: 2020},
    {nombre: 'Ilsia', apellido: 'Benitez', Edad: 15, ingreso: 2010},
    {nombre: 'Gerardo', apellido: 'Benitez', Edad: 20, ingreso: 2019},
]

const año_ingreso = Empleados.filter(function(emp){
    return emp.ingreso >= 2010
});

console.log(año_ingreso);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Ejercicio 2 - Metodo sort()

//Ordenar en orden alfabetica las marcas de autos

let marcas_autos = ['Toyota', 'KIA', 'Isuzu', 'Audi', 'Mercedes_Benz']
marcas_autos.sort();
console.log(marcas_autos);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Ejercicio 3 - Metodo map()

//que cada numero se multiplique por el mismo

let resta_numero = [8, 7, 3, 4, 2]
let resultado_resta = resta_numero.map(function(numers){
    return numers * numers
});

console.log('El rsultado de la resta es:', resultado_resta)