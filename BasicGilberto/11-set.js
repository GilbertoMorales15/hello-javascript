// set

// Declaracion

let mySet = new Set()

// Initialize

mySet = new Set([1,"Gilberto", true])
console.log(mySet)

// Methods

// add and delete

mySet.add("Gil")
console.log(mySet)

mySet.delete("Gil")
console.log(mySet)

// has 

console.log(mySet.has("Gilberto")) // Indica si el elemento se encuentra en el set


// size 

console.log(mySet.size) // Indica el tamaño del set

// Convertir un set a un array

let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a un set

mySet = new Set([myArray])
console.log(mySet)


// No admite duplicados 

mySet.add("Gil")
console.log(mySet)