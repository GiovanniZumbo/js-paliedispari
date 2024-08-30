// PLANNING

/*
Generare un numero random da 1 a 5
Generare una funzione per pari e dispari
Chiedere all'utente di scegliere tra pari e dispari
Chiedere all'utente di scegliere un numero da 1 a 5
Generare un numero casuale per la CPU
Sommare i due numeri
Stabilire se la somma è pari o dispari
Trasformare il risultato numerico in una stringa per confrontarla con l'input dell'utente
Stampare il risultato
*/

// # STAGING

//@ FUNCTIONS

function getRandomNumber(min = 1, max = 5, isMaxIncluded = true) {
    if (isMaxIncluded) max++;
    return Math.floor(Math.random() * (max - min)) + min;
}

function isEven(number) {
    return number % 2 === 0;
}


// # DATA GATHERING

//* Chiedere all'utente di scegliere tra pari e dispari
let userChoice = prompt("Scegli tra pari o dispari", 'pari').trim();
console.log("L'utente ha scelto:", userChoice);

//* Chiedere all'utente di scegliere un numero da 1 a 5
const userNumber = parseInt(prompt("Dammi un numero da 1 a 5", 3));
console.log("L'utente ha scelto:", userNumber);

// # PROCESSING

//* Generare un numero casuale per la CPU

const cpuRandomNumber = getRandomNumber();
console.log("La CPU ha scelto:", cpuRandomNumber)

//* Sommare i due numeri

let sum = userNumber + cpuRandomNumber;
console.log(sum);
//* Stabilire se la somma è pari o dispari


//* Trasformare il risultato numerico in una stringa per confrontarla con l'input dell'utente

sum = isEven(sum) ? 'pari' : 'dispari';

// if (isEven(sum)) {
//     sum = 'pari';
// } else {
//     sum = "dispari";
// }


// # OUTPUT

//* Stampare il risultato

if (userChoice === sum) {
    console.log("Complimenti hai vinto!");
} else {
    console.log("Mi dispiace, hai perso");
}
