//Creamosu un areglo

let paises = [ "Panama", "Perú", "Japón", "El Salvador", "Suecia"]

//mostramos los datos
/*console.log(paises)*/

//mostrar Japon
/*console.log(paises[2])*/

//mostramos suecia con un alert

/*alert(paises)*/

//Areglo #2

/*let numeros = [1,2,6,7]*/
 /*console.log(numeros)
  console.log(numeros[3])

 let longitudnumeros = numeros.length;
 console.log("El tamaño del areglo es: " + longitudnumeros);
 */

 /*console.log(`El arreglo contiene ${paises.length} paises`)*/

 let nElementos = prompt("Ingrese cuantos elementos decea agregar al elemento: ")
 let elementos = [];

 for (let i = 0; i < nElementos; i++){
    let elemento = prompt(`Ingrese el elemento ${i+1}`)
    elementos.push(elemento)
 }
 console.log(elementos)


