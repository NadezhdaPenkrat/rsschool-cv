/*
В коде программы определены две константы,
 содержащие имена компаний.
 Посчитайте их общую длину в символах 
 и выведите ее на экран.
*/

import { length } from 'hexlet-basics/string';

const company1 = 'Apple';
const company2 = 'Samsung';

// BEGIN
const company1Length = length(company1);
const company2Length = length(company2);

console.log(company1Length + company2Length);
// END






/*
import { length } from 'hexlet-basics/string';

const company1 = 'Apple';
const company2 = 'Samsung';

// BEGIN (write your solution here)
const res = length(company1 + company2);
console.log(res);
// END
*/