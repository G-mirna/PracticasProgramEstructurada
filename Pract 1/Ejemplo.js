/*alert("Mensaje de alerta en javascript!!")

console.log("Estas utilizando la consola")
console.log(20)
console.log(1.2)
console.log(true)
console.log(flase)*/

//VAR

/*
var x = 10
console.log(x)

x = 20
console.log(x)

var x = 100
console.log(x)
*/

//LET

//no podemos volver a declara un let, solo podemos reasignarlo
/*
let y = 5
console.log(y)

y=20
console.log(y)
*/

//CONST
//este no se puede volver a declarar ni reasignarle otro valor
/*
const pi = 3.1415
console.log(pi)
*/


//MOSTRAR EL NUESTRO NOMBRE Y EDAD
/*
let nombre = "Mirna Rivas"
let edad = 25

let mensaje = "Mi nombre es " + nombre + " y tengo " + edad 
console.log(mensaje)
*/

//MOSTRAR UN MENSAJE DE ALERTA
/*
alert("Mi nombr es Mirna Rivas y Tengo 25 años")
*/


//TABLA DE MULTIPLICAR
/*
const numero = parseInt(prompt("Ingrese un numero para generar la table de multiplicar: "));

console.log(`Tabla de multiplicar del ${numero}`);

for (let i = 1; i <=10; i++){
    const result = numero * i;
    
    console.log(`${numero} x ${i} = ${result}`)
}
*/

//EVALUAR SI EL NUMERO ES POSITIVO O NEGATIVO

const numero = parseInt(prompt("Ingrese el numero a evaluar: "));

if (numero > 0 ){
    console.log(`El numero ${numero} es positivo`)
}else if(numero < 0){
    console.log(`El numero ${numero} es negativo`)
}else{
    console.log(`El numero ingresado e 0`)
}


