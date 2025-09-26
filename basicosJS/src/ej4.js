/*
/declaracion

const edades=[];
const frutas=["pera","manzana","fresa"];


//

const cp = new Array();
const cc = new Array["sdadsa","dsfsf","sdfsfs"];

//Añadir

edades.push(10); // añadimos al final
edades.unshift(100); // al comienzo

//eliminar

edades.pop() //elimina el ultimo  y retorna lo que ha eliminado
edades.shift() //elmina al principio y retorna lo que ha eliminado

/// ***** slice
//sirve para extraer partes de un array

edades.slice()

//************ map
edades.map((edad) => edad*2);

// *********** filter
edades.filter((edad)=> edad >= 18)

//Practica
//1. dados un array de nombrres crear una funcion llamada mayusculas qqeu popngan como mayusculas todos los datos de ese array que le pase como parametro
//2 .crear una funcion llamada precios con iva que al pasarle un array de precios me los devuelbva con el iva incluido
//3. funcion llamada impares cuadrado que le pase un array de numeros y que pase solo los numeros impares elevados al cudarado
//4. Normalizar email que le pase un arraya de emails que puede llevar espacios al principi o al final del email y quiero que me los devuelva sin espacios
//5. crear una funcion llamada filtrar longitud que le pase com param un array de nombres, un tamaño y me devuleva solo un array con los nombre cuya longitud es mayor o igual al param que le he pasado
//6. normalizar nombres propios que le pase como para un arrays de nombres y me los devuelva con la letra capital de la primera letra e mayúscula
*/

const names = new Array("salah", "pepe", "juan");

function mayusculas(name){

    for (let index = 0; index < nombres.length; index++) {
            name = names[index];

        for (name in names){
            return nombre.toUpperCase();
        }
    }  
}

/*function preciosConIva(array , iva ){
    ret Map.()
}
*/
    

console.log(mayusculas)
