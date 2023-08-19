
//1
/*
let animals = ["Conejos","Mariposas","Perros","Loros","Ardillas"]
console.log(animals);
*/

//2
/*
let marcAutos = ["Audi","Bentley","Cupra","Lamborghini","Porsche"]
console.log(marcAutos[3]);
*/

//3
/*
let fruits = ["Manzana","Peras","Uvas","Piña","Cerezas"]
alert(fruits[1]);
*/

//4  Crea un arreglo con 5 datos y modifica el tercer dato.
/*
let numeros = [1,2,3,4,5]
const mod = numeros.splice(2, 1, 8)
console.log("El numero eliminado fue el 3")
console.log(numeros);
*/

//5
/*
let colonias = ["Col. Los Angeles", "Col. Guzmán","Col.Panamaericana","Col. Hirleman","Col. Belen"]

let tamañoAreglo = colonias.length
alert(`El arreglo contiene ${tamañoAreglo} colonias`);
*/

//6

let CantElemet = prompt("Cuantos estudiantes decea registar: ")
 let students = [];

 for (let i = 0; i < CantElemet; i++){
    let student = prompt(`Registro numero: ${i+1}`)
    students.push(student)
 }
 console.log(students)
