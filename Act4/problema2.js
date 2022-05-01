// Crea el mismo problema 1, ahora usando Do while

let userNumber = Number(prompt('Hola, porfavor escribe un numero'))
let i = 0
do {
    i = i + 5
    console.log(i + ' es multiplo de 5')
} while (i < userNumber);