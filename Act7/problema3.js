/* Desarrolla un metodo para verificar
si una palabra es un palindromo. Casos
de prueba: var word1= 'madam' var word2='computadora' */
var word1= 'madam'
var word2='computadora'
function palindromeChecker(str) {

    // Dar la vuelta a una cadena usando split()
    const strReversed = str.split('').reverse().join("");
    /* .split('') lo separa en un array.

    .reverse() revierte el arreglo.
    
    .join('') Lo vuelve a convertir en string.
     */
    return strReversed === str ? "Es palindromo:D" : "No es palindromo:c";
  }
  console.log(palindromeChecker(word1));
  console.log(palindromeChecker(word2));
  console.log(palindromeChecker("omo"));
