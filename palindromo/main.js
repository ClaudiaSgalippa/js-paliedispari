/*Palidroma
- Chiedere all’utente di inserire una parola
- Creare una funzione per capire se la parola inserita è palindroma*/

const palWord = prompt("Per favore, inserisci una parola:"); //Richiesta parola

function isPalindrome(word) { //Creazione della funzione

    let cleanWord = word.toLowerCase(); //Converte tutto in minuscolo
    let reversedWord = cleanWord.split("").reverse().join(""); //Divide la stringa in un array, ne inverte l'ordine e riunisce tutto in una nuova stringa

    return reversedWord; //Chiusura della funzione
}
 
const newWord = isPalindrome(palWord); //Parola invertita ricavata dalla funzione

 if (palWord === newWord) {
    console.log("La parola" + " " + palWord + " " + "è un palindromo")
 } else {
    console.log("La parola" + " " + palWord + " " + "non è un palindromo")
 }
