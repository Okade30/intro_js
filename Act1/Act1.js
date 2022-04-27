// 1. En la consola del navegador, crea un pequeño programa
// que le pida al usuario que ingrese un número, multiplica ese número por 2
// y muestra en salida el resultado de esa operacion

var numberUser = prompt("Escribe un numero")
var resultado = numberUser * 2
alert("La multiplicacion * 2 es: " + resultado)

// 2. En la consola del navegador escribe un programa que reciba 2 números e imprime
// en pantalla la resta de ambos.

var number1 = prompt("Escribe el primer numero")
var number2 = prompt("Escribe el segundo numero")
var resultado2 = number1 - number2
alert("La resta es: " + resultado2)

// 3. Escribe un programa que calcule el area de un circulo con un radio 
// r = 5.3. Imprime el area en pantalla. (Formula: pi*r2)

const Pi = 3.1416
let radio = 5.3
var resultado3 = Pi * Math.pow(radio, 2)
console.log("El area de un circulo con 5.3 de radio es: " + resultado3)
alert("El area de un circulo con 5.3 de radio es: " + resultado3)

// 4. Escribe un programa que calcule el area de un rombo, sabiendo que D=8cm, d=6cm 
// (Formula: a=D*d/2)

let D = 8
let d = 6
var area = (D * d) / 2
console.log("El area del rombo es: " + area)
alert("El area del rombo es: " + area)