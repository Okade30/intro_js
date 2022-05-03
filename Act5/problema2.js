/* Declara un array vacio con un ciclo WHILE que se ejecute
5 veces, agrega los elementos al array */

var arreglo = []
var userInput
while (!(userInput == 5 )){
userInput = prompt('ingresa un caracter')
arreglo.push(userInput)
}
console.log('introduciste estos valores:' + arreglo)
