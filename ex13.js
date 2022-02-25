// Trasforma le variabili funzione in arrow functions e concatenale in modo tale che venga stampato sulla console la seguente
// operazione matematica: ((2 + 4) * (5 + 2) - 2) / 5

const sum = function (a, b) {
  return a + b;
}

const subtract = function (a, b) {
  return a - b;
}

const multiply = function (a, b) {
  return a * b;
}

const divide = function (a, b) {
  return a / b;
}

const log = function (value) {
  console.log(value);
}


const arrowSum = (a, b) => a + b;

const arrowSubtract = (a, b) => a - b;

const arrowMultiply = (a, b) => a * b;

const arrowDivide = (a, b) => a / b;

const arrowLog = value => console.log(value);


const primaSomma = arrowSum(2, 4) // 6
const secondaSomma = arrowSum(5, 2) // 7
const moltiplicazione = arrowMultiply(primaSomma, secondaSomma) // 42
const sottrazione = arrowSubtract(moltiplicazione, 2) // 40
const divisione = arrowDivide(sottrazione, 5) // 8

// primaSomma * secondaSomma === arrowSum(2,4) * arrowSum(5, 2)

// moltiplicazione === arrowMultiply(primaSomma, secondaSomma) === arrowMultiply(arrowSum(2,4) * arrowSum(5, 2))

// sottrazione === arrowSubtract(moltiplicazione, 2)  === arrowSubtract( arrowMultiply(arrowSum(2,4) * arrowSum(5, 2)), 2)

// divisione === arrowDivide(sottrazione, 5) === arrowDivide( arrowSubtract( arrowMultiply(arrowSum(2,4) * arrowSum(5, 2)), 2), 5)


//arrowSubtract( arrowMultiply(primaSomma * secondaSomma), 2 )
// arrowLog(divisione)

arrowLog( arrowDivide( arrowSubtract( arrowMultiply( arrowSum(2,4), arrowSum(5, 2) ), 2), 5))
