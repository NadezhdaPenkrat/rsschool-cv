/*
Реализуйте функцию getHiddenCard(), которая принимает 
на вход номер кредитки (состоящий из 16 цифр) в виде 
строки и возвращает его скрытую версию, которая может
 использоваться на сайте для отображения. Если исходная 
 карта имела номер 2034399002125581, то скрытая версия 
 выглядит так ****5581. Другими словами, функция заменяет 
 первые 12 символов, 
на звездочки. Количество звездочек регулируется вторым
 необязательным параметром. Значение по умолчанию — 4.
 // Кредитка передается внутрь как строка
getHiddenCard('1234567812345678', 2); // **5678
getHiddenCard('1234567812345678', 3); // ***5678
getHiddenCard('1234567812345678');    // ****5678
getHiddenCard('2034399002121100', 1); // *1100

Для выполнения задания вам понадобится метод строки repeat(), 
который повторяет строку указанное количество раз

'+'.repeat(5); // +++++
'o'.repeat(3); // ooo
*/

// BEGIN
const getHiddenCard = (cardNumber, starsCount = 4) => {
    const visibleDigitsLine = cardNumber.slice(12);
    return `${'*'.repeat(starsCount)}${visibleDigitsLine}`;
  };
  // END
  
  export default getHiddenCard;


  
  /*

  // BEGIN (write your solution here)
const getHiddenCard = (a, i = 4) => {
    return '*'.repeat(i) + a.slice(12, 16);
}
// END

export default getHiddenCard;
  */