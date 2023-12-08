/*

Реализуйте функцию, которая проверяет формат указанного телефона.
 Если телефон начинается с +, значит это международный формат.

isInternationalPhone('89602223423'); // false
isInternationalPhone('+79602223423'); // true

*/

// BEGIN
const isInternationalPhone = (phone) => phone[0] === '+';
// END

export default isInternationalPhone;

/*
// BEGIN (write your solution here)
const isInternationalPhone = (phoneNumber) => {
    return phoneNumber.startsWith('+')
};


// END

export default isInternationalPhone;
*/