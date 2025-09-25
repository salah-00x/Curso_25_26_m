console.log("Hola, Mundo:");
//declarar las variables

//declarar la funcion
/**
 * suma dos números y devuelve el resultado
 * @param {number} [a=0] - primer número a sumar con valor por defecto 0
 * @param {number} [b=0] - segundo numero a sumar con valor por defecto 0
 * @returns {number} - la suma de a y b
 */

function suma(a=0, b=0){
    return a+b;
}

//Inicializar la aplicacion

//condicion ? se realiza si es true : se realiza si es false

let edad = 18;

let condicion = edad > 18? alert("Eres mayor de edad") : alert("Eres menor de edad");
condicion;

//En caso de que sea null o undefined ?? haré esto;

/*

function saludar(nombreUsuario){
    //return 'Bienvenido@ ${nombreUsuario}';
    return 'Bienvenido@ ${nombreUsuario ?? "Usuario"}';
}

let nombre = "Salah";
console.log(saludar(nombre));

//hacer una funcion que la pase como parametro una nota, aprobados, numero y me diga si estoy aprobado o no estoy aprobado
//crear una version 2.0 que le pase como param un numero y validar si el numero es sobresaliente, aprobado, suspenso

function aprobados(){

}

const aprobados = (nota=0) => {
    return nota >= 5 ? "Aprobado" : "Suspenso";
}
*/



const aprobados = (nota = 0) => nota >= 5 ? "Aprobado" : "Suspenso";
const aprobados2 = (nota = 0) => nota > 5 ? "Sobresaliente" : aprobados;

console.log(aprobados(5));
