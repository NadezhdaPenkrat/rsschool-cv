/*
Реализуйте функцию normalizeUrl(), которая выполняет 
так называемую нормализацию данных. 
Она принимает адрес сайта и возвращает его с https:// в начале.

Функция принимает адреса в виде АДРЕС
 или https://АДРЕС, но всегда возвращает адрес 
 в виде https://АДРЕС

Можно использовать метод startsWith(), 
чтобы проверить, начинается ли строка с 
префикса https://. А потом на основе этого добавлять 
или не добавлять https://.

Примеры вызова:

normalizeUrl("google.com"); // "https://google.com"
normalizeUrl("https://ai.fi"); // "https://ai.fi"

*/

// BEGIN
const normalizeUrl = (site) => {
    let normalizedUrl;
  
    if (site.startsWith('https://')) {
      normalizedUrl = site;
    } else {
      normalizedUrl = `https://${site}`;
    }
  
    return normalizedUrl;
  };
  // END
  
  export default normalizeUrl;

  /*

  // BEGIN (write your solution here)
const normalizeUrl = (adres) => {
if (adres.startsWith('https://')) {
return adres;
} else {
return 'https://' + adres;
}
}
// END

export default normalizeUrl;
*/