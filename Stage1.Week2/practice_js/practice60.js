/*
На электронной карте Вестероса, 
которую реализовал Сэм, 
союзники Старков отображены зеленым кружком,
 враги — красным, а нейтральные семьи — серым.

Напишите для Сэма функцию whoIsThisHouseToStarks(), 
которая принимает на вход фамилию семьи и 
возвращает одно из трёх значений: 'friend', 'enemy', 'neutral'.

Правила определения:

Друзья ('friend'): 'Karstark', 'Tally'
Враги ('enemy'): 'Lannister', 'Frey'
Любые другие семьи считаются нейтральными
Примеры вызова:

whoIsThisHouseToStarks('Karstark'); // friend
whoIsThisHouseToStarks('Frey');     // enemy
whoIsThisHouseToStarks('Joar');     // neutral
whoIsThisHouseToStarks('Ivanov');   // neutral
*/


// BEGIN
const whoIsThisHouseToStarks = (houseName) => {
    let status;
  
    if (houseName === 'Karstark' || houseName === 'Tally') {
      status = 'friend';
    } else if (houseName === 'Lannister' || houseName === 'Frey') {
      status = 'enemy';
    } else {
      status = 'neutral';
    }
  
    return status;
  };
  // END
  
  export default whoIsThisHouseToStarks;

  /*
  // BEGIN (write your solution here)
function whoIsThisHouseToStarks(lastNameOfFamily) {
    if (lastNameOfFamily === 'Karstark' || lastNameOfFamily === "Tally") {
        return 'friend'
    }
    else if (lastNameOfFamily === 'Lannister' || lastNameOfFamily === 'Frey') {
        return 'enemy'
    }
    else {
        return 'neutral'
    }
}
// END

export default whoIsThisHouseToStarks;
*/