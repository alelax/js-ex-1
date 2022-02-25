var numeri = [];


var calcolo = document.getElementById('calcolo');

calcolo.addEventListener('click',function (){
  
  chiediNumeri(numeri, 5);
  var sum = sommaNumeri(numeri);
  console.log(sum);
  alert(`la somma è: ${sum}`);

});


function chiediNumeri(contenitoreNumeri, numeriAccettati){
  
  while (contenitoreNumeri.length < numeriAccettati){
    const nuovoNumero = parseInt(prompt('Inserisci un numero'));
    contenitoreNumeri.push(nuovoNumero);
  }
  return contenitoreNumeri;

}

function sommaNumeri(array){
  var somma = 0;
  for (var i = 0; i< array.length; i++){
    somma += array[i];
  }
  return somma;
}