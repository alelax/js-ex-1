const array = [5,7,8,9,10];


const numeriPari = array.filter(function (n) {
  if(n% 2 == 0) {
    return true;
  }
});

/* const cb = function (n) {
  if (n%2 == 0){
    return true;
  }
}; */


//numero diventa la funzione che posso richiamare, dunque:
//var numeriPari = array.filter(cb);

console.log(numeriPari);