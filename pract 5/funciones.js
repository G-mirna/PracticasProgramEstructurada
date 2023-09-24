/*
//Declaracion de la funcion saludar

function saludar(){
    //contenido de la funcion
    console.log("Hola, Soy una funcion");
}

saludar()

//FUNCIONES CON PARAMETROS

function tablaDelUno(hasta){
    for (let i=1; i <= hasta; i++){
        console.log("1 x", i, "=", 1 * i);

    }
}

tablaDelUno(10);
tablaDelUno(5);

//FUNCIONES CON PARAMETROS MULTIPLES

function tablaMultiplicar(tabla, hasta){
    for (let i = 1; i <= hasta; i++){
        console.log(tabla + " x " + i + " = " + (tabla * i));
    }
}

tablaMultiplicar(1, 10)
tablaMultiplicar(5, 10)


// FUNCIONES CON PARAMETROS POR DEFECTOS

function TablaMultiplicar( tabla, hasta = 10){
    for(let i = 1; i <= hasta; i++){
        console.log(tabla + " x " + i + " = " + (tabla * i));
    }
}
TablaMultiplicar(2);
TablaMultiplicar(2, 15);



//FUNCIONES CON DEVOLUCION DE VALORES
 
function sumar(a, b) {
    return a + b;
    console.log("Suma realizada.");
}

const resultado = sumar(5, 5);
console.log("Resultado = ", resultado);
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//EJERCICIOS

//1. Crea una función llamada saludo que muestre un mensaje de saludo en la consola cuando se llame.

function saludo(){
    console.log("Hola chicos de Programacion Estructurada");
}

saludo();

//2. Crea una función llamada sumar que tome dos números como parámetros y devuelva la suma de esos números.

function sumar(a,b){
    return a + b;

}

console.log(sumar(5, 3));

//3. Crea una función llamada resta que tome dos números como parámetros y devuelva la resta de esos números.

function resta (a, b){
    return a - b;
}

console.log(resta(18, 4));


//4. Crea una función llamada multiplicar que tome dos números como parámetros y devuelva la multiplicación de esos números.

function multiplicar(a, b){
    return a * b;
}

console.log(multiplicar(5, 10));


//5. Escribe una función llamada calcularAreaRectangulo que tome la longitud y la anchura de un rectángulo como parámetros y devuelva su área.

function calcularAreaRectangulo (longitud, anchura){
    return longitud * anchura;
}

console.log(calcularAreaRectangulo(5, 4));

//6. Crea una función llamada NumeroPar que tome un número como parámetro y devuelva true si es par y false si es impar

function NumeroPar(numero){
    return numero % 2 === 0;

}

console.log(NumeroPar(6));
console.log(NumeroPar(7))

//7. Crea una función llamada obtenerCalificacion que tome una puntuación como parámetro, en un rango del 1 al 10, y devuelva una calificación descriptiva

function obtenerCalificacion(puntuación){
    if(puntuación >= 9 && puntuación <=10){
        return "Excelente";  
    }else if(puntuación >= 8 && puntuación <= 9){
        return "Muy Bueno"
    }else if(puntuación >= 7 && puntuación <= 8){
         return "Bueno"
    }else if(puntuación >= 6 && puntuación <= 7){
        return "Regular"
    }else if(puntuación >= 1 && puntuación <= 6){
        return "Deficiente"
    }else{
    return "Puntuacion no valida"
    }
}

console.log(obtenerCalificacion(8.5));
console.log(obtenerCalificacion(4));
console.log(obtenerCalificacion(9.5));
console.log(obtenerCalificacion(100));