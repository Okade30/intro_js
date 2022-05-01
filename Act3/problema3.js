
/* Solicitar al usuario un número. Si el numero es el
1000, imprimir "Ganaste un premio", en caso contrario
mostrar el numero y el mensaje "Lo sentimos, sigue participando"
 */

var numUser = prompt('Ingrese un numero')
if (numUser == 1000) {
    alert("¡¡Felicidades ganaste un premio!!")
} else {
    alert("Lo sentimos, el numero " + numUser + " no fue ganador, ¡Sigue participando!")
}