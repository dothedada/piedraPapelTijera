const aves = ["pato", "ganzo", "buho"]
console.log(aves)
let ave = aves.shift() //elimina el primer elento y lo retorna
console.log(ave)
console.log(aves)
const animalitus = ["lucy", "matilda", "manchas", "velú"]
console.log(animalitus.toString())// convierte el array en una cadena con los elementos concatenados
animalitus.toString()
console.log(animalitus)
const myArr = [[[1,2],[1,2]],[3,4],[5,6,[7,8,9]]];
pato = myArr.flat(2) // quita (X) dimensiones al array 
console.log(myArr)
console.log(pato)

const ropa = ["camisa", "pantalon", "chanclas"]
ropa.splice(1,0,"pantaloneta", "yiyos") // en este caso, splice inserta los parámetros en el array, luego del primer indice y elimina la cantidad de indices especificados en el segundo parámetro
console.log(ropa)

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3); // retorna un nuevo array con los elementos de los índices que van desde el primér parámetro hasta el segundo:s
console.log(fruits)
console.log(citrus)
