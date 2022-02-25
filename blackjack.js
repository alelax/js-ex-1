/*

   *** Blackjack ***

   Il computer sceglie un numero da 1 a 21.
   Il compito del giocatore è superarlo, senza “sballare”, cioè andare oltre 21.
   Il giocatore deve decidere se chiedere un numero random da 1 a 10 o “fermarsi”
   Se il giocatore va oltre 21 ha perso.
   Quando si ferma,il programma deve mostrare il punteggio del computer e il punteggio
   dell’utente e dire chi ha vinto (o se è patta)

*/

let cpuScore = randomNumber(1, 21);
let userScore = 0;
let gameStatus = "risk"; // Stato del gioco ["risk", "end"]

//do-while che pesca una carta per il giocatore. Se il risultato è maggiore di 21
//imposta gameStatus = "end" e il gioco finise. Altrimenti chiede all'utente se
//continuare o meno la partita.
do {
  let currentLaunch = randomNumber(1, 10);

  userScore += currentLaunch;

  if (userScore > 21){
    console.log(userScore);
    alert ("Il tuo punteggio è: " + userScore + "\n\nHAI PERSO!!!");
    gameStatus = "end";
  } else {

    //Il ciclo consente di controllare la scelta dell'utente limitandola ai soli due
    //valori consentite. Riproponendo la domanda ogni volta che un valore non coincide
    //con uno di quelli ammessi
    let answer
    do {
        answer = prompt("Il tuo punteggio è: " + userScore + "\n\nVuoi pescare un'altra carta?\n\nSI [1]\nNO [0]");
        if ( (answer != 0) && (answer != 1) ) {
        alert("\nPuoi digitare solo SI (1) oppure NO (0) ");
        }
    } while ( (answer != 0) && (answer != 1)  );

    let carryOn = decidi(answer);

    if(!carryOn) {
        gameStatus = "end";
        showResult(cpuScore, userScore);
    }
  }
} while (gameStatus == "risk");


// Funzione che stabilisce e visualizza il risultato della partita
function showResult(cpuScore, userScore) {
   if (userScore > cpuScore) {
      res = "HAI VINTO!!!";
   } else if (userScore < cpuScore) {
      res = "HAI PERSO!!!";
   }
   else {
      res = "PAREGGIO";
   }
   alert("CPU Score: " + cpuScore + "\nUSER Score: " + userScore + "\n\n" + res);
}

//Funzione che genera un numero casuale compreso tra l'estremo inferiore start
//e l'estremo superiore end, inclusi.
function randomNumber(start, end) {
   return Math.floor(Math.random() * (end - start + 1)) + start;

}

// Funzione che limita la scelta a soli due valori. 1 = si, 0 = no.
function decidi(value){
   if (value == 1) {
      return true;
   } else {
      return false;
   }
}