/*Palidroma
- Chiedere all’utente di inserire una parola
- Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
- L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
- Sommiamo i due numeri
- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
- Dichiariamo chi ha vinto.

Consigli del giorno:
- Scriviamo sempre in italiano i passaggi che vogliamo fare
- Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

Domande da  farsi quando si crea una funzione:
- Come dovrebbe chiamarsi?
- Ho bisogno di parametri?
- Devo restituire un valore?
- Se sì, di che tipo? */

//PALINDROMA

const palWord = prompt("Per favore, inserisci una parola:"); //Richiesta parola

function isPalindrome(word) { //Creazione della funzione

    let reversedWord = "";

    let cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, ""); //Converte tutto in minuscolo e "pulisce" la parola da eventuali caratteri speciali
    let reversedWord = cleanWord.split("").reverse().join(""); //Divide la stringa in un array, ne inverte l'ordine e riunisce tutto in una nuova stringa

    return reversedWord; //Chiusura della funzione
}



//PARI & DISPARI

