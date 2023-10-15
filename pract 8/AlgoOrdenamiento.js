/*//EJERCICIO BASICO ORDENAMIENTO POR BURBUJA: ORDENAR UN ARRAY DE NUMEROS EN ORDEN ASCENDENTE
//Ejercico 1
function bubbleSort(arr){
    let len = arr.length;

    for (let i = 0; i < len; i++){

        for (let j = 0; j < len - 1; j++){

            if (arr[j] > arr[ j + 1 ]){

                let temp = arr[j];

                arr[j] = arr[j + 1];

                arr[j + 1] = temp;

            }
        }
    }
    return arr;
}

let arr = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(arr)); // tiene que mostrarnos el areglo en ascendente
*/



/*
//EJERCICIO INTERMEDIO: ORDENAR UN ARRAY DE OBJETOS POR UNA PROPIEDAD ESPECIFICA
function bubbleSort(arr, prop){
    let len = arr.length;
    
    for (let i = 0; i < len; i++){

        for (let j = 0; j < len - 1; j++){

            if(arr[j][prop] > arr[j + 1][prop]){

                let temp = arr[j];

                arr[j] = arr[j + 1];

                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
let arr = [
    {name: "John", age: 25},
    {name: "Mary", age: 30},
    {name: "Bob", age: 20},
    
];

console.log(bubbleSort(arr, "age")); 

*/


/*
// EJERCICIO BASICO DE ORDENAMIENTO POR SELECCION: ORDENAR UN ARRAY DE NUMEROS EN ORDEN ASCENDENTES

function selectionSort(arr){
    let len = arr.length

    for (let i = 0; i < len - 1; i++){
        let min = i;

        for (let j = i + 1; j < len; j++){

            if (arr[j] < arr[min]){
                min = j
            }
        }

        if (min !== i){

            let temp = arr[i];
            
            arr[i] = arr[min];

            arr[min] = temp;
        }

    }
    return arr;
}

let arr = [64, 34, 25, 12, 22, 11, 90];
console.log(selectionSort(arr)); 
*/



/*
// EJERCICIO INTERMEDIO DE ORDENAMIENTO POR SELECCION: ORDENAR UN ARRAY DE OBJETOS POR UNA PROPIEDAD ESPEIFICA

function selectionSort(arr, prop){
    let len = arr.length;

    for(let i = 0; i < len - 1; i++){
        let min = i;

        for ( let j = i + 1; j < len; j++){

            if (arr[j][prop] < arr[min][prop]){
                min = j;
            }
        }

        if (min !== i){

            let temp = arr[i];

            arr[i] = arr[min];

            arr[min] = temp;

        }
    }
    return arr;
}

let arr = [
    {name: "John", age: 25},
    {name: "Mary", age: 30},
    {name: "Bob", age: 20},
];

console.log(selectionSort(arr, "age"));

*/



/*
//EJERCICIO BASICO ORDENAMIENTO POR INSERCCION : ORDENAR UN ARRAY DE NUMEROS EN ORDEN ASCENDENTE
function insertionSort(arr){
    let len = arr.length;

    for (let i = 0; i < len; i++){
        let key = arr[i];
        let j = i - 1;

        while(j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        
        arr[j + 1] = key
   }

   return arr;
}

let arr = [64, 34, 25, 12, 22, 11, 90];
console.log(insertionSort(arr));
*/

//EJERCICIO INTERMEDIO ORDENAMIENTO POR INSERCCION: ORDENAR UN ARRAY DE OBJETOS POR UNA PROPIEDAD ESPECIFICA

function insertionSort(arr, prop){
    let len = arr.length;

    for (let i = 0; i < len; i++){
        let key = arr[i];
        let j = i - 1;

        while(j >= 0 && arr[j][prop] > key[prop]){
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        
        arr[j + 1] = key
   }

   return arr;
}

let arr = [
    {name: "John", age: 25},
    {name: "Mary", age: 30},
    {name: "Bob", age: 20},
];

console.log(insertionSort(arr, "age"));