//declaracion

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
//dados un array de nombrres crear una funcion llamada mayusculas qqeu popngan como mayusculas todos los datos de ese array que le pase como parametro
//crear una funcin llamada precios con iva que al pasarle un array de precios me los devuelbva con el iva incluido
//funcion llamada impares cuadrado que le pase un array de numeros y que pase solo los numeros impares elevados al cudarado
//Normalizar email que le pase un arraya de emails que puede llevar espacios al principi o al final del email y quiero que me los devuelva sin espacios
//crear una funcion llamada filtarr longitud que le pase com param un array de nombres, un tamaño y me devuleva solo un array con los nombre cuya longitud es mayor o igual al param que le he pasado
//normalizar nombres propios que le pase como para un arrya de nombres y me los devuelva con la letra capital de la primera letra e mayúscula