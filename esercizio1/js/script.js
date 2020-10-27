// Palindroma ESERCIZIO 1
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// <<<<<<<<<<<<<<<<<<<<< INIZIO ESERCIZIO 1 >>>>>>>>>>>>>>>>>>>>>>

// STEP 1 Chiedere all'utente di inserire una parola, utilizzeremo un prompt
// e di conseguenza dichiareremo alcune variabili che avranno il contenuto
// del prompt e della funzione

// prompt utente
var inputUser = prompt("Inserisci una parola").toLowerCase();
document.getElementById('input_user').innerHTML = inputUser;
// invertiamo la parola inserita dall'utente creando una funzione
inputUserReverse = inputUserReverse(inputUser);
document.getElementById('input_reverse').innerHTML = inputUserReverse;

// STEP 2 creare una funzione e delle condizioni if&else
// per capire se la parola inserita dall'utente sarà palindroma o no.
// potremmo usare un ciclo per riordinare la parola inserita dall'utente all'interno della funzione

// Inizio funzione
 function inputUserReverse(inputUser) {
   // creo una variabile di output vuota nella funzione per la parola scritta al contrario
   reverseWord = "";

   // inizio ciclo for

   // dichiaro che la variabile i è uguale alla parola inserita dall'utente -1, e decremento ad ogni ciclo
   // la variabile contatore "i" così che "i" sia uguale all'ultima lettera di "inputUser" e ad
   // ogni ciclo il for scrive nella variabile "reverseWord" esattamente la parola al contrario
   for (var i = inputUser.length -1; i >=0;  i--) {
     reverseWord+= inputUser[i];
   }
   // fine ciclo for

   // dichiaro un return della variabile vuota inserita sopra, così avrà come valore la parola
   // inserita dall'utente ma scritta al contrario
   return reverseWord;
 }
// fine funzione

// inizio condizione if & else
  if (inputUser == inputUserReverse) {
    document.getElementById('result').innerHTML = "La parola è palindroma";
  }else {
    document.getElementById('result').innerHTML = "La parola non è palindroma";
  }
// fine condizione if & else

// <<<<<<<<<<<<<<<<<<<<< FINE ESERCIZIO 1 >>>>>>>>>>>>>>>>>>>>>>
