/* Crea un programa, el cual sirva para convertir temperaturas
De celsius a Fahrenheit y viceversa. Utiliza las expresiones
matematicas necesarias para la conversion. Que dicho programa
reciba como argumentos la temperatura y regresa el resultado
imprimiendo en pantalla la conversion. */

var value = 0
value = parseInt(prompt('Menu de opciones: \n\t1. celsius a fahrenheit\n\t2. fahrenheit a celsius'));

switch (value) {
    case 1:
        var celsius = Number(prompt("Ingresa la temperatura en celsius"))
        temperatureF = (celsius*(9/5))+ 32
        console.log('La temperatura en Fahrenheit es: ' + temperatureF)
        break;
    case 2:
        var fahrenheit = Number(prompt("Ingresa la temperatura en fahrenheit"))
        temperatureC = (fahrenheit - 32) * (5/9)
        console.log('La temperatura en Fahrenheit es: ' + temperatureC)
        break;
    default:
        console.log('Porfavor ingresa solo alguna de las opciones validas')

}