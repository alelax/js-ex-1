/*

Crea il gioco carta sasso e forbice: una manche è formata da 3 giocate. In ogni
giocata il computer chiede all’utente di scegliere tra carta, sasso e forbice. Al termine
della manche, il computer deve comunicare il punteggio.


*/

var a = ["carta", "forbice", "sasso"];
var players = ["Cpu", "User", "pareggio"];
var winner = "";

// Giocata casuale della cpu
var cpu = Math.floor( ( Math.random() * 3 ) );
var player1 = a[cpu];

// Scelta utente
do {
   var userChoice = prompt("Scegli carta, forbice o sasso: \n[0] Carta\n[1] Forbice\n[2] Sasso");
} while ( (userChoice < 0) || (userChoice > 2) );

var player2 = a[userChoice];

//Controllo risultato
if (player1 == "carta") {
   if (player2 == "forbice") {
      winner = players[1];
   } else if ( player2 == "sasso") {
      winner = players[0];
   }
   else {
      winner = players[2];
   }

}


else if (player1 == "forbice") {
   if (player2 == "sasso") {
      winner = players[1];
   } else if ( player2 == "carta") {
      winner = players[0];
   }
   else {
      winner = players[2];
   }

}

else {
   if (player2 == "carta") {
      winner = players[1];
   } else if ( player2 == "forbice") {
      winner = players[0];
   }
   else {
      winner = players[2];
   }
}

document.getElementById('result1').innerHTML = player1;
document.getElementById('result2').innerHTML = player2;
document.getElementById('winner').innerHTML = winner;