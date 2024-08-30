/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

// PLANNING

/*
Prendo gli elementi dal DOM
Leggi la parola da destra verso sinistra
Confronta i due risultati e logga

*/

// # STAGING

const form = document.querySelector('form');
const inputWord = document.getElementById('word');
const button = document.querySelector('button');
const resultElement = document.getElementById('result');

form.addEventListener('submit', function (e) {

    e.preventDefault();
    const userWord = inputWord.value.trim();
    const result = isPalindrome(userWord);

    console.log(result);

    const not = result ? '' : 'non';
    const message = `La parola ${userWord} ${not} è palindroma`;

    resultElement.innerHTML = message;

})

// # DATA GATHERING

// const userWord = prompt("Vuoi sapere se la tua parola è palindroma? Scrivila qui sotto.", 'ottetto').trim();


// # PROCESSING

//* Leggi la parola da destra verso sinistra

function isPalindrome(string) {

    //! Validazione

    if (!userWord.trim().toLowerCase()) {
        console.error("Non hai inserito una parola valida");
        return;
    }

    // * Leggi la parola da destra verso sinistra
    const reversedWord = string.split("").reverse().join("");
    return reversedWord === string;
}

// button.addEventListener('click', function () {

//     isPalindrome(userWord);

//     console.log(isPalindrome(userWord));

//     message = (userWord === reversedWord) ? "La tua parola è un palindromo." : "La tua parola non è un palindromo.";

//     // # OUTPUT

//     resultElement.innerHTML = message;
// })

// //* Confronta i due risultati e logga






