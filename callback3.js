// alert('L\'area del rettangolo è ' + area(5, 15, areaRettangolo));
// richiama la funzione area con 3 argomenti di cui l'ultimo è la funzione di callback
// alert('L\'area del triangolo è ' + area(5, 15, areaTriangolo));


var num1 = parseInt(prompt('Inserisci primo numero'));
var num2 = parseInt(prompt('Inserisci secondo numero'));

alert('L\'area del rettangolo è ' + area(num1, num2, areaRettangolo));
alert('L\'area del triangolo è ' + area(num1, num2, areaTriangolo));

//**** funzioni ****//
function area(x, y, callback) {
    return callback(x, y);
}

function areaRettangolo(a,b) {
  return a * b;
}

function areaTriangolo(a,b){
    return a * b / 2;
}