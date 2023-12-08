/*
Напишите программу, которая берет исходное количество евро, записанное в переменную eurosCount, переводит евро в доллары и выводит на экран. Затем полученное значение переводит в юани и выводит на новой строчке.

Пример вывода для 100 евро:
125
863.75

Считаем, что:
- 1 евро = 1.25 долларов
- 1 доллар = 6.91 юаней
*/

/* eslint prefer-const: 0 */

let eurosCount = 100;

// BEGIN
let dollarsPerEuro = 1.25;
let yuansPerDollar = 6.91;

let dollarsCount = eurosCount * dollarsPerEuro;
console.log(dollarsCount);
let yuansCount = dollarsCount * yuansPerDollar;
console.log(yuansCount);
// END



/* eslint prefer-const: 0 */


/*
let eurosCount = 100;

// BEGIN (write your solution here)
let dollarsPerEuro = 1.25;
let yuansPerDollar = 6.91;

let dollarsCount = eurosCount * dollarsPerEuro;
console.log(dollarsCount);



let yuansCount = dollarsCount * yuansPerDollar;
console.log(yuansCount);



// END console.log('The price is ' + yuansCount + ' yuans');
// END console.log('The price is ' + yuansCount + ' yuans');
*/