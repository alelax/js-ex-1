/* 
Implementare la funzione calculate che restituisce un oggetto che dia la possibilità di 
eseguire le quattro operazioni matematiche (somma, sottrazione, moltiplicazione e divisione) 
su uno stesso numero e infine consente di stamparne il risultato.

TIP: Per concatenare i metodi basta restituire il riferimento all'oggetto stesso ($this)

calculator
  .add(2) // 2
  .add(4) // 6
  .multiply(3) // 18
  .sub(1) // 17
  .sub(3) // 14
  .divide(2) // 7
  .printResult();

*/


function calculate() {

  let result = 0;

  return {
    
    add(i) {
      result += i;
      return this;
    },
    
    sub(i) {
      result -= i;
      return this;
    },
    
    multiply(i) {
      result *= i;
      return this;
    },
    
    divide(i) {
      result /= i;
      return this;
    },
    
    printResult() {
      console.log("Final result: " + result)
    }

  }

};

const calculator = calculate();
calculator
  .add(2)
  .add(4)
  .multiply(3)
  .sub(1)
  .sub(3)
  .divide(2)
  .printResult(); //Final result: 7



const operazioni = {

  result: 0,

  addizione: function add(i) {
    this.result += i;
    return this;
  },

  sottrazione: function sub(i) {
    this.result -= i;
    return this;
  },
  
  
}


const oggettoProva = operazioni.addizione(3).sottrazione(1)
console.log(oggettoProva.result);

const oggettoProva2 = operazioni.addizione(6).sottrazione(3)
console.log(oggettoProva2.result);


// ============================== //

const ciao = Object.create(operazioni).addizione(3).sottrazione(1)
console.log(ciao.result);

const wow = Object.create(operazioni).addizione(6).sottrazione(3)
console.log(wow.result);