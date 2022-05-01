/* Solicitar al usuario que ingrese tres numeros y mostrar cual de los tres
es el numero mayor. Considerar el caso en que 2 numeros sean iguales */
/* 1>2
3>1
2>3 */
var numUser1 = Number(prompt('Hola!, ingresa un numero;)'))
var numUser2 = Number(prompt('ingresa otro, porfavor:p'))
var numUser3 = Number(prompt('ingresa otro, porfavor n.n'))

if (numUser1 != numUser2 && numUser1 != numUser3 && numUser2!=numUser3) {
    if (numUser1>numUser2) {
        if(numUser1>numUser3)
        console.log("El " + numUser1 + " es el mayor")
        else
        console.log("El " + numUser3 + " es el mayor")
    }
    else if(numUser1<numUser2){
        if(numUser2>numUser3)
        console.log("El " + numUser2 + " es el mayor")
        else
        console.log("El " + numUser3 + " es el mayor")
    }
}
else
console.log("Hay por lo menos dos números repetidos")