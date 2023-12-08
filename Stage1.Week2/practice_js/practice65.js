/*
Реализуйте функцию joinNumbersFromRange(),
 которая объединяет все числа из диапазона в строку:

joinNumbersFromRange(1, 1); // 1
joinNumbersFromRange(2, 3); // 23
joinNumbersFromRange(5, 10); // 5678910
*/
/* eslint operator-assignment: 0 */

// BEGIN
const joinNumbersFromRange = (start, finish) => {
    let i = start;
    let result = '';
  
    while (i <= finish) {
      result = `${result}${i}`;
      i = i + 1;
    }
  
    return result;
  };
  // END
  
  export default joinNumbersFromRange;

  /*
  // BEGIN (write your solution here)
function joinNumbersFromRange(start, finish) {
    let res = "";
    let i = start;
    while (i <= finish) {
        res = res + i;
        i++;
    }
    return res;
}
// END

export default joinNumbersFromRange;
*/