// .at -- acceso con indices negativos

const frutitas = ["manzana", "platano","naranja","uva"];
console.log(frutas.at(-2)); // naranja
console.log(frutas.slice(-2)); // naranja, uva

// splice -- se utiliza para extraer , eliminar  2 elementos de un array mutando el array

frutas.splice(1,2); //elimina 2 elementos desde la posicion 1

//concat <-- concatenar dos arrays*********

frutas.concat([1,2,3,4,5,6]);
const edades = [1,2,3,4,5,6];

const ArrayConcat = [...frutas,...edades]; /// Esta es la que hay que usar;

//SET --- OTRO TIPO DE DATOS(DATOS UNICOS)

const pesos = [4,6,7,7,8,8,9,9,9,2,5,6];
const sinDuplicados = [ ...new Set(pesos)]; // ---************

// .reduce (reducir un array a un único valor) 

//pesos.reduce((acumulador,elemento,indice,array) => aqui va la lógica valorInicial) 
//NO MUTA EL ARRAY

pesos.reduce((suma,peso)=> suma + peso, 0)//el tipo de dato debe ser lo que el resultado quiero que me devuelva)

//TAREA SOBRE UN ARRAY
/*
Calcular el producto 
encontrar el max y el min 
dado un array que sea [manzana, platano, naranja, manzana,manzana, platano, pera, pera] devolverme un objeto clave valor que me diga el nombre de la fruta : cuantas veces aparece esa fruta 
Dado el siguiente array bidimensional [[1,2],[3,4],[5,6]]
*/

pesos.reduce((producto,peso)=> producto * peso, 1);

peso.reduce((max,peso)=>
    peso > max ? peso : max , peso[0]);
peso.reduce((min,peso)=>
    peso < min ? peso : min , peso[0]);

const fruit = [manzana, platano, naranja, manzana,manzana, platano, pera, pera];
frutas2.reduce((acc,fruit) => {
    acc[fruit],{}
    return acc;
})

// array de objetos 

const usuarios = [
    {id: 1, nombre: "Ana", edad: 25, data: {books:100}},
    {id: 2, nombre: "Juan", edad: 30, data: {books:50}},
    {id: 3, nombre: "Maria", edad: 28, data: {books:20}},
    {id: 4, nombre: "Sara", edad: 28, data: {books:20}},   // Se esperaba ','
    {id: 5, nombre: "Carlos", edad: 20, data: {books:10}},
    {id: 6, nombre: "Mario", edad: 38, data: {books:0}}
];


usuarios.find(usuario => usuario.nombre.toLowerCase() === "juan");
let r = usuarios.find(usuario => Number(usuario.edad) >= 28) ?? 0;
//En caso de que sea null o undefined ?? haré esto;

//devolver un array con solo los nombres de los usuarios que tienene en su biblio mas de 20 libros
//obtener el valor promedio total de todos los libros si suponemos un precio de 28 euros
//Decirmew que usuarios no tienen libros

usuarios.find(arr => Number(data.books) > 20);
usuarios.find(data =>{
    let valorPromedio = 28;
    usuarios.find(data[valorPromedio]);

});




