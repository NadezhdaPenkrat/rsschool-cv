/*
Сэмвелл обнаружил, что его сообщения перехватываются 
и читаются в замке «Близнецы», поэтому его атаки 
перестали быть внезапными. Немного подумав, 
он разработал программу, которая будет шифровать
 передаваемые сообщения по следующему алгоритму. 
 Программа получает на вход строку и меняет местами
  в ней каждые 2 подряд идущих символа. 
  Если длина строки нечётная, то последний 
  символ остаётся на своём месте.

encrypt('move'); // omev
encrypt('attack'); // taatkc
// Если длина строки нечётное
// то последний символ остается на своем месте
encrypt('go!'); // og!
Реализуйте функцию encrypt(), которая принимает 
на вход исходное сообщение и возвращает зашифрованное.

Подумайте. Может ли эта функция расшифровать зашифрованное сообщение?

*/

// BEGIN
const encrypt = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i += 2) {
      const nextSymbol = str[i + 1] || '';
      result = `${result}${nextSymbol}${str[i]}`;
    }
  
    return result;
  };
  // END
  
  export default encrypt;

  /*
// BEGIN (write your solution here)
const encrypt = (str) => {
let result = '';

for (let i = 0; i < str.length; i += 1) {
if ((i + 1) % 2 === 0) {
result = `${result}${str[i - 1]}`;
} else {
result = `${result}${str[i + 1] || str[i]}`;
}
}
return result;
}
// END

export default encrypt;

  */