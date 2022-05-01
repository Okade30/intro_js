
/* Solicitar al usuario que ingrese dos numeros y mostrar cual de los
dos es menor. No considerar el caso en que ambos numeros son iguales */

var number1 = Number(prompt('Hey:D, ingresa un numero'))
var number2 = Number(prompt('ingresa otro, porfavor n.n'))
if (number1 > number2) {
    alert("El numero " + number2 + " es el chiquitin")
} else {
    alert("El numero " + number1 + " es el chiquitin")
}
