/*

Crea una serie di oggetti che rappresentano film, contenenti: nome del film, un array
di attori, la durata in minuti, un array di voti ricevuti dalla critica e un genere. Scrivere
un software che:
a. Calcoli la durata media dei film
b. Stampi i nomi del film che durano più di 180 minuti
c. Stampi il voto medio dei film in cui hanno recitato sia “Brad Pitt” che “Angelina
Jolie” (l’output dovrà quindi essere del tipo “Mr & Mrs Smith = 4.3”)
d. Indicare la media dei voti per tutti i film appartenenti ad un genere (l’output
dovrà essere del tipo “Azione = 3.8”, “Romantici = 39”...etc)

*/

var listaFilm = [{ "nome" : "Mr. & Mrs. Smith", "attori" : ["Brad Pitt", "Angelina Jolie", "Adam Brody", "Vince Vaugh"], "durata" : 120, "genere" : "azione", "voti" : [4, 5, 5, 7] },
                 { "nome" : "By the Sea", "attori" : ["Brad Pitt", "Angelina Jolie", "Melanie Laurent", "Richard Bohringer"], "durata" : 132, "genere" : "drammatico", "voti" : [6, 4, 5, 6] },
                 { "nome" : "A mighty heart", "attori" : ["Brad Pitt", "Angelina Jolie", "Colin Firth", "Vince Vaugh"], "durata" : 108, "genere" : "azione", "voti" : [6, 6, 5, 7] },
                 { "nome" : "Il discorso del re", "attori" : ["Andrew Havill", "Colin Firth", "Derek Jacobson", "Boam Carter"], "durata" : 136, "genere" : "drammatico", "voti" : [7, 6, 7, 7] },
                 { "nome" : "Inception", "attori" : ["Leonardo Di Caprio", "Cillian Murphy", "Dileep Rao", "Ellen Page"], "durata" : 150, "genere" : "azione", "voti" : [6, 6, 7, 7] },
                 { "nome" : "Bastardi senza gloria", "attori" : ["Brad Pitt", "August Diehl", "Cristoph Waltz", "Diane Kruger"], "durata" : 150, "genere" : "avventura", "voti" : [6, 6, 7, 8] },
                 { "nome" : "Il miglio verde", "attori" : ["Barry Pepper", "Bonnie Hunt", "David Morse", "Graham Greene"], "durata" : 189, "genere" : "drammatico", "voti" : [8, 8, 8, 7] },
                 { "nome" : "Schindler's list", "attori" : ["Ben Kingsley", "Caroline Goodall", "Embeth Davidtz", "Jonathan Sagall"], "durata" : 195, "genere" : "drammatico", "voti" : [7, 8, 8, 6] },
                 { "nome" : "Into the Wild", "attori" : ["Brian H. Dieker", "Catherine Keener", "Emile Hirssh", "Hal Holbrook"], "durata" : 145, "genere" : "biografico", "voti" : [6, 7, 8, 7] }
                ];

console.log("Durata media dei film:");
console.log( media(listaFilm) );
console.log("--------------");
console.log("Film con durata maggiore di 180 min:");
print180(listaFilm);
console.log("--------------");
console.log("Voti film con B. Pitt e A. Jolie:");
for (var i = 0; i < listaFilm.length; i++) {
   if (listaFilm[i].attori.includes("Brad Pitt") && listaFilm[i].attori.includes("Angelina Jolie")) {
      console.log(listaFilm[i].nome + " = " + mediaVotiObj(listaFilm[i]) );
   }
}
console.log("--------------");
//Array bidimensionale: la prima riga contiene i generi disponibili; la seconda riga contiene un array ad ogni posizione.
//ogni array verrà riempito con la media voti dei film del relativo genere.
var generi = [ ["azione", "drammatico", "avventura", "biografico"], [ [],[],[],[] ] ];

for (var i = 0; i < listaFilm.length; i++) {
   switch (listaFilm[i].genere) {
      case "azione":
         generi[1][0].push( mediaVotiObj(listaFilm[i]) );
         break;
      case "drammatico":
         generi[1][1].push( mediaVotiObj(listaFilm[i]) );
         break;
      case "avventura":
         generi[1][2].push( mediaVotiObj(listaFilm[i]) );
         break;
      case "biografico":
         generi[1][3].push( mediaVotiObj(listaFilm[i]) );
         break;
   }
}

console.log(generi);

for (var i = 0; i < generi[0].length; i++) {
   console.log("La media voti del genere " + generi[0][i] + " è: " + mediaVoti(generi[1][i]) );
}



//Funzione che calcola la durata media dei film
function media(arr) {
   var sum = 0;
   for (var i = 0; i < arr.length; i++) {
      sum += arr[i].durata;
   }
   return sum / arr.length ;
}

//Funzione che stampa i film con una durata superiore a 180min
function print180(arr) {
  /*  for (var i = 0; i < arr.length; i++) {
      if (arr[i].durata > 180) {
         console.log(arr[i].nome);
      }
   } */

   const d = arr.filter( film =>{
     if (film.durata > 180) console.log(film.nome)
   })
   
}

//Funzione che restituisce la media dei voti di un determinato film, riceve in ingresso una lista di oggetti
function mediaVotiObj(objList) {
   var media = 0;
   for (var i = 0; i < objList.voti.length; i++) {
      media += objList.voti[i];
   }
   return media / objList.voti.length;
}

//Funzione che restituisce la media dei voti di un determinato film, riceve in ingresso un array di numeri
function mediaVoti(arr) {
   var media = 0;
   for (var i = 0; i < arr.length; i++) {
      media += arr[i];
   }
   return media / arr.length;
}