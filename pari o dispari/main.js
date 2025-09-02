/*Pari e Dispari
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
- Se sì, di che tipo? 

1) Poniamo la scelta pari/dispari al giocatore ✓
2) Poniamo la scelta del numero da 1 a 5 ✓
3) Generazione random da parte della CPU di un numero da 1 a 5 (con funzione) ✓
4) Somma dei due numeri generati
5) Impostare if/else in base alla parità o disparità del numero generato
6) Dichiarazione del vincitore */

console.log("Giochiamo a pari o dispari!");

const sceltaGiocatore = prompt("Scegli fra pari o dispari"); //Facciamo scegliere pari o dispari
console.log("Il giocatore ha scelto" + " " + sceltaGiocatore);

const numGiocatore = parseInt(prompt("Scegli un numero da 1 a 5")); //Facciamo scegliere il numero trasformandolo subito in decimale
console.log("Il giocatore ha scelto" + " " + numGiocatore);

console.log("Ora sceglie il PC..");

const numPc = randomNum(1,5);

function randomNum(min, max) { //Funzione di generazione casuale di un numero da un min(1) a un max(5)
    return Math.floor(Math.random() * (max - min)) + min;

}
console.log("Il PC ha scelto" + " " + randomNum(1,5));

const resultSum = numGiocatore + numPc; //Somma dei due numeri
console.log("Il risultato della somma dei due numeri è" + " " + resultSum);

const resultPoD = checkPariDispari();

function checkPariDispari(resultSum) {

    if (resultSum % 2 === 0) {
        risultato = "pari";

    } else {
        risultato = "dispari";

    }

    return risultato
}
console.log("Il numero sommato è" + " " + resultPoD);




