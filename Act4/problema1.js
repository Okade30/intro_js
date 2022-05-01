/* Usando while, crea un programa que pregunte al usuario
un numero. Mostrar los numeros que son multiplos
de 5 desde 1 hasta el numero introducido por el usuario */

let userNumber = Number(prompt('Hola, porfavor escribe un numero'))
let i = 0
while (i < userNumber) {
    i = i + 5
    console.log(i + ' es multiplo de 5')
}