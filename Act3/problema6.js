
/* Con ayuda de la funcion prompt pedir los datos al usuario: Nombre, edad
para luego imprimir en pantalla el siguiente resultado.
-Si el usuario tiene edad de 18 o mayor puede ingresar a la discoteca
-Si el usuario es menor de 18 no puede ingresar a la discoteca
-Si el usuario se llama Mario o Carlos puede ingresar a VIP */

let nombre, edad
nombre= prompt('Escribe tu nombre')
edad= Number(prompt('Ingresa tu edad'))

if (edad>=18) {
    alert('Okay, puedes entrar a la discoteca')
if (nombre == 'Mario' || nombre == 'Carlos' ) {
    alert('Puedes ingresar a la zona VIP')
}
}else{
alert('Lo sentimos, no puedes ingresar')
}