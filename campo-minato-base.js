/*

   Il computer deve generare 16 numeri casuali da 1 a 100.
   In seguito deve chiedere all’utente di inserire un numero da 1 a
   100 alla volta, se il numero è presente nella lista dei numeri
   generati, la partita termina, altrimenti continua chiedendo
   all’utente un altro numero.
   La partita termina quando il giocatore inserisce un numero
   “vietato” o raggiunge il numero massimo possibile di numeri
   consentiti.
   Al termine della partita il software deve comunicare il punteggio,
   cioè il numero di volte che l’utente ha inserito un numero
   consentito.
   BONUS: all’inizio il software richiede anche una difficoltà
   all’utente che cambia il range di numeri casuali.
   Con difficoltà 0=> da 1 a 100, con difficoltà 1 => da 1 a 80 con
   difficoltà 2=> da 1 a 50.

*/

var gameSetting = startGame();
console.log(gameSetting);

var blackListNumber = randomNumber(1, gameSetting.maxNum, gameSetting.howMany); //Array contenitore dei valori vietati
var guessValue = new Array(); //Array contenitore dei valori indovinati
console.log(blackListNumber);

var alreadyInserted = new Array(); //Array contenitore dei valori già inseriti

//Viene richiesto il numero all'utente. Il ciclo verrà effettuati finchè non verrà digitato
//un numero uguale a uno tra quelli vietati, o finchè i tentativi non finiranno
do {

   //Permette l'inserimento di un numero all'utente, e ne verifica la validità
   var correctInput = insertUnivoqueNum(gameSetting.maxNum, alreadyInserted);

   //Verifico se il numero inserito è tra quelli vietati, e assegno il risultato booleano alla variabile
   var numberIsforbidden = checkNumber(correctInput, blackListNumber);

   //Viene verificato se il numero inserito è uno tra quelli vietati
   if ( numberIsforbidden == true ) {
      alert("Hai perso! Il tuo punteggio è: " + gameSetting.score);
   }
   else {
      gameSetting.score++;
      guessValue.push(correctInput); // 
      if( gameSetting.score == gameSetting.maxScore ) {
         alert("Complimenti hai vinto!! Hai fatto il punteggio massimo: " + gameSetting.maxScore);
      }
   }
   gameSetting.tentativi++;
}
while ( (numberIsforbidden == false) && (gameSetting.tentativi < gameSetting.maxScore)  );



// Funzione che chiede all'utente il livello di difficoltà. In base al valore inserito
// verranno settate le impostazioni del gioco all'interno di un oggetto "setting".
// La funzione restituisce l'intero oggetto setting
function startGame() {
  return setting = {
    "maxNum" : 50,
    "score" : 0,
    "tentativi" : 0,
    "howMany" : 10,
    "maxScore" : 40,
    "gameLevel" : 1
  };
}

//Funzione che permette di controllare se il numero inserito ed indovinato in precedenza
// è stato inserito nuovamente
function insertUnivoqueNum(max, alreadyInserted) {
   do {
      var userInput = insertNumber(max);
      var numberIsAlreadyInserted = checkNumber(userInput, alreadyInserted);
      console.log("user input: " + userInput);
      console.log(alreadyInserted);
      if ( numberIsAlreadyInserted == true ) {
         alert("Non fare il furbo! Hai gia inserito questo numero! prova con un altro");
      }
      if (alreadyInserted.includes(userInput) == false) {
         alreadyInserted.push(userInput);
      }
      console.log(alreadyInserted);
   } while (numberIsAlreadyInserted == true);
   return userInput;
}

//Funzione che permette di controllare se il numero inserito dall'utente è compreso
//nell'intervallo indicato
function insertNumber(max) {
   do {
      var usrIn = prompt("Valori indovinati: " + printGuessValue(guessValue) + "\nInserisci un numero tra 1 e " + max + ": ");
      if( (usrIn < 1) || (usrIn > max) ) {
         alert("Inserisci un numero compreso nell'intervallo di valori specificato!");
      }
   } while ( (usrIn < 1) || (usrIn > max) );
   return usrIn;
}

//Funzione che genera una quantità di numeri casuali pari al valore passato in ingresso howMany. tali numeri
//saranno compresi tra l'estremo inferiore start e l'estremo superiore end, inclusi.
function randomNumber(start, end, howMany) {
   var randomNumberList = new Array();
   for (var i = 0; i < howMany; i++) {
      var numberGenerated = Math.floor(Math.random() * (end - start + 1)) + start;
      if (randomNumberList.includes(numberGenerated)){
         i--;
      } else {
         randomNumberList.push(numberGenerated);
      }
   }
   return randomNumberList;
}

//Funzione che accetta in ingrsso un numero ed un array di numeri. Controlla se il numero è presente
//nell'array e nel caso di esito positivo ritornerà true, altrimenti false.
function checkNumber(num, numArray){
   var numIsHere = false;
   for (var i = 0; (i < numArray.length) && (numIsHere != numArray[i]) ; i++) {
      if(num == numArray[i]){
         numIsHere = true;
      }
   }
   return numIsHere;
}

//Funzione  che riceve un array dei numeri indovinati, e li concatena in una stringa
//che sarà il valore di ritorno della funzione e verrà visualizata nell'alert per l'inserimento
//del numero, in modo tale da ricordare all'utente i numeri indovinati fino a quel punto
function printGuessValue(strArray) {
   var str = "";
   for (var i = 0; i < strArray.length; i++) {
      str += strArray[i] + ", ";
   }
   return str;
}