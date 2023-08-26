//METODOS DE MANIPULACION


//PUSH(); Agrega uno o mas elementos al final del array

let numeros = [1,2,3]
numeros.push(4,5)
console.log(numeros)

//POP(): Elimina y devuelve el ultimo elemento del areglo

let frutas = ["manzana", "banana", "uva"]
let ultimaf = frutas.pop();
console.log(ultimaf)
console.log(frutas)

//UNSHIF(): Agrega uno o mas elementos al inicio del areglo

let colores = ["Verde", "Amarillo"]
colores.unshift("Celeste","Morado")
console.log(colores)

//SHIFT(): Elimina y devuelve el primer elemento del array.

let paises = ["El Salvador", "Peru", "Rusia"]
let primerP = paises.shift
console.log(primerP)
console.log(paises)

// CONCAT(): Combina dos o más arrays para crear un nuevo array.

let array1 = [1,2,3]
let array2 = [4,5]
let combinarArray = array1.concat(array2)
let combinarArray2 = array2.concat(array1)
console.log(combinarArray)
console.log(combinarArray2)

//SLICE(): Crea una copia superficial (shallow copy) del array con los elementos seleccionados.

let arrayOriginal = [1,2,3,4,5]
let copiaArray = arrayOriginal.slice(1,4)
console.log(copiaArray)

//SPLICE(): Cambia el contenido de un array eliminando, reemplazando o agregando elementos.

let Frutas = ["Banana","Naranja","Kiwi","Pera","Manzana"]
let removerFrutas = Frutas.splice(2,1,"Uva")
console.log(Frutas)
console.log(removerFrutas)