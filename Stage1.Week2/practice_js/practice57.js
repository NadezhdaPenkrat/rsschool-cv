/*
Реализуйте функцию getLetter(), которая извлекает из
 переданной строки указанный символ (по порядковому номеру,
     а не по его индексу) и возвращает его наружу. 
     Если такого символа нет, то функция возвращает пустую строку.

Примеры вызова:

const name = 'Hexlet';

// Обычное обращение возвращает undefined
name[10]; // undefined

// 11 символ соответствует 10 индексу
getLetter(name, 11); // ''

getLetter(name, 1); // 'H'
getLetter(name, 0); // ''
getLetter(name, 6); // 't'
*/

// BEGIN
const getLetter = (text, position) => text[position - 1] || '';
// END

export default getLetter;



/*
// BEGIN (write your solution here)
const getLetter = (name, i) => {
    const hexlet = name[i - 1];
    return hexlet || '';
};
getLetter('hexlet', 0)
// END

export default getLetter;*
*/