//DEFINICION DE CLASES DE NODO

//Definimos la estructura de un nodo del arbol binario
class Nodo{
    constructor(valor){
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }
}

//Definimos la clase arbol binario
class ArbolBinario {
    constructor(){
        this.raiz = null;
    }
    //Insertamos un valor en el arbol
    insertar(valor){
        const nuevoNodo = new Nodo(valor);

        if(!this.raiz){
            this.raiz = nuevoNodo;
        }else{
            this.insertarNodo(this.raiz, nuevoNodo);

        }
    }
    //Creamos el metodo de insertar nodo
    insertarNodo(nodo, nuevoNodo){
        if(nuevoNodo.valor < nodo.valor){
            if(!nodo.izquierda){
                nodo.izquierda = nuevoNodo;
            }else{
                this.insertarNodo(nodo.izquierda, nuevoNodo);
            }
        }else{
            if(!nodo.derecha){
                nodo.derecha = nuevoNodo;
            }else{
                this.insertarNodo(nodo.derecha, nuevoNodo);
            }
        }
    }

    //Crear el recorrido de amplitud
    recorridoAmplitud(){
        const resultado = [];
        const cola = [];

        if(!this.raiz){
            return resultado;
        }

        cola.push(this.raiz);

        while(cola.length > 0){
            const nodoActual = cola.shift();
            resultado.push(nodoActual.valor);

            if(nodoActual.izquierda){
                cola.push(nodoActual.izquierda);
            }

            if(nodoActual.derecha){
                cola.push(nodoActual.derecha);
            }
        }
        return resultado;
    }

    //Crear el recorrido en profundidad de preorden
    recorridoPreorden(){
        return this.recorridoPreordenNodo(this.raiz, []);

    }
    recorridoPreordenNodo(nodo, resultado){
        if (nodo){
            resultado.push(nodo.valor);
            this.recorridoPreordenNodo(nodo.izquierda, resultado);
            this.recorridoPreordenNodo(nodo.derecha, resultado);
        }
        return resultado;
    }

    //Crear recorrido en profundidad de Orden Central
    recorridoOrdenCentral(){
        return this.recorridoOrdenCentralNodo(this.raiz, []);

    }
    recorridoOrdenCentralNodo(nodo, resultado){
        if(nodo){
            this.recorridoOrdenCentralNodo(nodo.izquierda, resultado);
            resultado.push(nodo.valor);
            this.recorridoOrdenCentralNodo(nodo.derecha, resultado);

        }
        return resultado;

    }

    //Creamos el recorrido en profundidad de PostOrden
    recorridoPostOrden(){
        return this.recorridoPostOrdenNodo(this.raiz, []);
        
    }

    recorridoPostOrdenNodo(nodo, resultado){
        if (nodo){
            this.recorridoPostOrdenNodo(nodo.izquierda, resultado);
            this.recorridoPostOrdenNodo(nodo.derecha, resultado);
            resultado.push(nodo.valor);
        }
        return resultado;
    }

}

//Crearemos un arbol binario de ejemplo y prueba de los recorridos

const arbol = new ArbolBinario();
arbol.insertar(10)
arbol.insertar(5)
arbol.insertar(15)
arbol.insertar(3)
arbol.insertar(7)
arbol.insertar(12)
arbol.insertar(18)

console.log("Recorrido en amplitud:", arbol.recorridoAmplitud());
console.log("Recorrido en profundidad de PreOrden:", arbol.recorridoPreorden());
console.log("Recorrido en profundidad de Orden Central:", arbol.recorridoOrdenCentral());
console.log("Recorrido en profundidad de Post Orden:", arbol.recorridoPostOrden());

