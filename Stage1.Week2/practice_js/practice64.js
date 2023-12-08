/*
Реализуйте функцию multiplyNumbersFromRange(), 
которая перемножает числа в указанном диапазоне 
включая границы диапазона. Пример вызова:

multiplyNumbersFromRange(1, 5); // 1 * 2 * 3 * 4 * 5 = 120
multiplyNumbersFromRange(2, 3); // 2 * 3 = 6
multiplyNumbersFromRange(6, 6); // 6

*/
/* eslint operator-assignment: 0 */

// BEGIN
const multiplyNumbersFromRange = (start, finish) => {
    let i = start;
    let result = 1;
  
    while (i <= finish) {
      result = result * i;
      i = i + 1;
    }
  
    return result;
  };
  // END
  
  export default multiplyNumbersFromRange;

  /*
  // BEGIN (write your solution here)
const multiplyNumbersFromRange = (start, finish) => {
    let i = start;
    let sum = 1;
    while (i <= finish) {
        sum *= i; // тоже самое что sum = sum * i
        i++; // тоже самое что i = i + 1
    }
    return sum;
}
// END

export default multiplyNumbersFromRange;
*/