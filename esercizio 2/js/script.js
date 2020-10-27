
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
console.log("scelta dell'utente ",selectionUser);

numberUser = parseInt(prompt("Scegli un numero tra 1 e 5"));
console.log("numero inserito dall'utente ",numberUser);

// STEP 2 creo una funzione che mi dia dei numeri random usando "math.random()" per
// il computer.

// creo una variabile e dichiaro che sia uguale alla funzione che mi da un numero random per il computer
var numberCpu = randomCpu(1,5);

 function randomCpu(min,max) {
     return Math.floor(Math.random()* max) +min;
 }
 console.log("numero random del pc ", numberCpu);

// STEP 3 faccio la somma tra il numero inserito dall'utente e quello random dal pc
// creando una variabile

//  STEP 4 con una funzione dovrò stabilire se la somma è uguale a pari o dispari e a seconda
// della scelta fatta dall'utente scrivere hai vinto o hai perso.
