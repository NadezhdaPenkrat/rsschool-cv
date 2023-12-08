/*

Вы столкнулись с таким кодом, который выводит на экран 
общее количество комнат во владении нынешнего короля:
let king = 'King Balon the 6th';
console.log(king + ' has ' + (6 * 17) + ' rooms.');

Как видите, это магические числа: непонятно, что такое 6 и что такое 17. 
Можно догадаться, если знать историю королевской семьи: каждый новый король
 получает в наследство все замки от предков и строит 
 новый замок — точную копию родительского.

Эта странная династия просто плодит одинаковые замки…

Избавьтесь от магических чисел, создав новые переменные,
 и выведите текст на экран.

Получится так:
King Balon the 6th has 102 rooms.

*/

/* eslint prefer-const: 0, prefer-template: 0 */

let king = 'King Balon the 6th';

// BEGIN
let numberOfCastles = 6;
let roomsPerCastle = 17;
console.log(king + ' has ' + numberOfCastles * roomsPerCastle + ' rooms.');
// END


/*

let king = 'King Balon the 6th';


let ampountCastles = 6;
let ampountRoomsPerCastles = 17;
let allRoomsInAllCastles = ampountCastles * ampountRoomsPerCastles;
console.log(king + ' has ' + allRoomsInAllCastles + ' rooms.');


*/