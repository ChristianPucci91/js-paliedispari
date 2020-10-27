
// Pari e Dispari ESERCIZIO 2

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// Consigli del giorno


// <<<<<<<<<<<<<<<<<<<<< INIZIO ESERCIZIO 2 >>>>>>>>>>>>>>>>>>>>>>

// STEP 1 chiedere all'utente di scegliere tra pari o dispari e di inserire un numero da 1 a 5
// utilizzo 2 prompt uno con il parseInt e uno a stringa

selectionUser = prompt("Scegli tra pari o dispari");
// console.log("scelta dell'utente ",selectionUser);

// utilizziamo un ciclo while per dire finchè la parola che non inserisce
// l'utente non sarà uguale a "pari" && "dispari" non andrà avanti.

// inizio ciclo while
  while (selectionUser != "pari" && selectionUser != "dispari") {
  selectionUser = prompt("Per favore, scrivi pari o dispari")
}
// fine ciclo while
console.log("scelta dell'utente ",selectionUser);
document.getElementById('user_selection').innerHTML = "Selezione user: " + selectionUser;


numberUser = parseInt(prompt("Scegli un numero tra 1 e 5"));

// console.log("numero sbagliato user", numberUser);

// inserisco un ciclo while per obbligare l'utente ad inserire un numero compreso
// // tra 1 e 5

// inizio ciclo while
  while (numberUser < 1 || numberUser > 5 ) {
  numberUser = parseInt(prompt("Per favore, scrivi un numero tra 1 e 5"));
}
// fine ciclo while

console.log("numero inserito dall'utente ",numberUser);
document.getElementById('user_number').innerHTML ="Numero user: " + numberUser;

// STEP 2 creo una funzione che mi dia dei numeri random usando "math.random()" per
// il computer.

// creo una variabile e dichiaro che sia uguale alla funzione che mi da un numero random per il computer
var numberCpu = randomCpu();
// creo una variabile "sumNumbers" per ottenere la somma dei 2 numeri
var sumNumbers = numberUser + numberCpu;
// creo una variabile e dichiaro che sia uguale alla funzione che mi dice se la somma è para o dispara
var result = evenOdd();

// inizio funzione
 function randomCpu() {
     return Math.floor(Math.random()* 5 +1);
 }
 // fine funzione

 console.log("numero random del pc ", numberCpu);
 document.getElementById('cpu_number').innerHTML = "Numero cpu: "+ numberCpu;
 console.log("la somma è ", sumNumbers);
 document.getElementById('sum_number').innerHTML = "Somma : "+ sumNumbers;


 //  STEP 4 con una funzione dovrò stabilire se la somma è uguale a pari o dispari e a seconda
 // della scelta fatta dall'utente scrivere hai vinto o hai perso.

 // inizio funzione
  function evenOdd() {

      if (sumNumbers % 2 == 0 ) {
        return "pari"
      }
    return "dispari"
  }
  // fine funzione
  console.log("Il risultato è: ",result);
  document.getElementById('result').innerHTML = "Il risultato è : "+ result;


  // creiamo una condizione if & else per stabilire chi ha vinto

// inizio condizione if
if (selectionUser == result) {
  console.log("Hai vinto!");
  document.getElementById('winner').innerHTML = "Hai vinto!!!";
}else {
  console.log("Hai perso!");
  document.getElementById('winner').innerHTML = "Hai perso!!!";
}
// fine condizione if

// <<<<<<<<<<<<<<<<<<<<< INIZIO ESERCIZIO 2 >>>>>>>>>>>>>>>>>>>>>>
