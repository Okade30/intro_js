/* 1. Construye un codigo bajo las siguientes reglas:
*itera un arreglo={1, 4, 6, 10, 22, 55, 46, 2, 5, 0}
utilizando un ciclo for
*imprime en consola los valores que sean mayores a 3 */

var array= [1, 4, 6, 10, 22, 55, 46, 2, 5, 0]
for (let index=0; index<array.length; index++){
    if (array[index]>3) {
        console.log(array[index])
    }
}


