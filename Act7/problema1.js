/* Crear una function que recibe 2 parametros (una oracion y la palabra a buscar)
Retornar true o false en caso de que una oracion contenga una palabra dada
, es decir, si yo mando 'Hola Mundo' y mando la palabra a buscar 'perro' me debe
retornar un false. En cambio si mando 'mundo' entonces debe retornar true */


function searchWord(oration, word) {
    word = word.toLowerCase();
    oration = oration.toLowerCase();
    if (oration.indexOf(word)!= -1) {  //IndexOf va buscando en los String
        return true;
    } else {
        return false;
    }
}

var prueba = searchWord('Hola mundo', 'mundo')
console.log(prueba)