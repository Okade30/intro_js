/* Usando for, crea un programa que imprima
en consola los numeros impares del 1 al 50 */

var contador = 0
for (let index=0; index<=50; index++){
if(index%2 != 0){
    contador = contador +=1
    console.log(`${index} es impar`)
}
}

console.log(`De 0 a 50 existen ${contador} numeros impares`)
