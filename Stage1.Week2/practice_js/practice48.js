/*
Реализуйте функцию sayHurrayThreeTimes(), 
которая возвращает строку 'hurray! hurray! hurray!'.

const hurray = sayHurrayThreeTimes();
console.log(hurray); // => hurray! hurray! hurray!
*/
/* eslint-disable arrow-body-style */

// BEGIN
const sayHurrayThreeTimes = () => {
    const word = 'hurray!';
    return `${word} ${word} ${word}`;
  };
  // END
  
  export default sayHurrayThreeTimes;

  /*
 

// BEGIN (write your solution here)
const sayHurrayThreeTimes = () => {
    
    const hurray = 'hurray! hurray! hurray!';
    return hurray;
};
// END

export default sayHurrayThreeTimes;

*/