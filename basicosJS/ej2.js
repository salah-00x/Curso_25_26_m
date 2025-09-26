//crear un juego de un dado que utilazando una funcion llamada tirar dado permita tirar dados de 6 caras con valores del 1 al 6.
//Ademas crear una funcion llamada simular que le pase el numero de tiradas y me devuelva que numero se repite mas veces


const numCaras = 6; //numero de caras del dado

function tirarDado(numCaras) {
     return Math.random(0,numCaras + 1); //llamamos a la funcion Math.random para generar de forma aleatoria del 0<=x<1.
     //En este caso es de 0<=x<numCaras
}

function simular(numTiradas) {
    //creamos un array para almacenar 
    const tiradas = new Array();
    let tirada = 0; //inicializo una variable llamada tirada

    for (let i = 0; i < numTiradas; i++) {
        tirada = tirarDado(numCaras); // le asigno a la variable la funcion tirarDado pasando como parametro el numero de caras
        
    }
    // encontramos el número que más se repite con Math.max
    const maxRep = Math.max(...tirada);
    const numMasRep = tirada.indexOf(maxRep) + 1;

    console.log('Después de ${numTiradas} tiradas, el número que más se repite es el ${numMasRep} con ${maxRep} repeticiones.');
    return numMasRep;
}
