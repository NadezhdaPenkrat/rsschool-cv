/*

Реализуйте функцию hasChar(), 
которая проверяет (с учётом регистра), 
содержит ли строка указанную букву. 
Функция принимает два параметра:

Строка
Буква для поиска
hasChar('Hexlet', 'H'); // true
hasChar('Hexlet', 'h'); // false
hasChar('Awesomeness', 'm'); // true
hasChar('Awesomeness', 'd'); // false

*/

// BEGIN (write your solution here)
const hasChar = (str, letter) => {
    let index = 0;

    while (index < str.length) {
        if (str[index] === letter) {
            return true;
        }
        ++index;
    }
    return false;
};
// END

export default hasChar;