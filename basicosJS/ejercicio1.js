console.log("Hola, Mundo:");
//declarar las variables

//declarar la funcion
/**
 * suma dos números y devuelve el resultado
 * @param {number} [a=0] - primer número a sumar con valor por defecto 0
 * @param {number} [b=0] - segundo numero a sumar con valor por defecto 0
 * @returns {number} -la suma de a y b
 */
function suma(a=0, b=0){
    return a+b;
}

//Inicializar la aplicacion

console.log(suma(3,5));
console.log(suma(10,15));
console.log(suma(7));
console.log(suma());

suma(4,6); //10

