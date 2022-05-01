/* Solicitar al usuario un número, y determinar
si es divisible entre dos o No. Mostrando
un mensaje si es divisible o No */

var num = prompt('Escribame un numero compadre')
if (num % 2 == 0) {
    console.log('El numero', num, 'es divisible entre 2')
    alert('El numero ' + num + ' es divisible entre 2')
} else {
    console.log('El numero', num, 'no es divisible entre 2')
    alert('El numero ' + num + ' no es divisible entre 2')
}
