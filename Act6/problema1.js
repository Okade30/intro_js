/* 1. Concatena los siguientes arreglos:
var animals = ['eagle', 'parrot','monkey', 'boar', 'lion']
var comingSoonAnimals = ['panter', 'dragon', 'turttle']*/
var animals = ['eagle', 'parrot','monkey', 'boar', 'lion']
var comingSoonAnimals = ['panter', 'dragon', 'turttle']

animals.concat(comingSoonAnimals)

// 1. Acomoda el arreglo de menor a mayor: var arr=[4,6,1,0,8,2]
var arr=[4,6,1,0,8,2]
arr.sort(function(a,b){return(a-b)})

// 2. Agrega un nuevo animal ('cow') al arreglo de animals
var animals = ['eagle', 'parrot','monkey', 'boar', 'lion']
animals.push('cow')
animals

// 3.Retira el elemento 'eagle' del arreglo animals
var animals = ['eagle', 'parrot','monkey', 'boar', 'lion']
animals.shift('eagle')
animals