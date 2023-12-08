/*
Реализуйте функцию с именем printMotto(), которая выведет на экран фразу Winter is coming.

printMotto(); // => Winter is coming

В задачах, в которых нужно реализовать функцию, эту функцию вызывать не нужно. 
Вызывать функцию будут автоматизированные тесты, которые проверяют её работоспособность.
 Пример с вызовом выше показан только для того, 
чтобы вы понимали, как ваша функция будет использоваться.
*/

// BEGIN
const printMotto = () => {
    console.log('Winter is coming');
  };
  // END
  
  // exports are studied on Hexlet
  export default printMotto;


/*
  три способа:
- function declaratoin (обычная функция):
function printMotto() {
console.log('Winter is coming')
}
- function expression (функциональное выражение):
const printMotto = function() {
console.log('Winter is coming')
}
- arrow function (стрелочная функция):
const printMotto = ()=> {
console.log('Winter is coming')
}

основное различие между ними в том, что обычную функцию можно вызвать до её определения и она будет работать, остальные же не будут:
printMotto() // вызов будет работать
function printMotto() {
console.log('Winter is coming')
}
printMotto() // работать не будет
const printMotto = ()=> {
console.log('Winter is coming')
}

*/