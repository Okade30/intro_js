/* Mediante una function, y dado un arreglo
de enteros var numbers = [1,2,3,4,10,11]
encuentre la suma de sus elementos */

var numbers = [1,2,3,4,10,11]
var total = 0

numbers.forEach(function(a){total += a;});
console.log(total);


/* otro metodo
const array1 = [1,2,3,4,10,11]
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
console.log(sumWithInitial); */