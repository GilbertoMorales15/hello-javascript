// array

//Declaración de un array

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

myArray = [1]
myArray2 = new Array(1)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4, 5]
myArray2 = new Array(1, 2, 3, 4, 5)

console.log(myArray)
console.log(myArray2)

myArray = ["gilberto", "jose", "luis", "pedro", "juan"]
myArray2 = new Array("gilberto", "jose", "luis", "pedro", "juan")

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Gilberto"
// myArray2[0] = "Gil"
myArray2[1] = "gilberto"
myArray2[4] = " gilberto"

console.log(myArray2)

myArray = []
myArray[2] = "Gilberto"
// myArray[0] = "Gil"
myArray[1] = "gilberto"

console.log(myArray)


//Métodos comunes

myArray = []

// push y pop

myArray.push("Gilberto") //Agrega un elemento al final del array
myArray.push("Jose")
myArray.push("Luis")
myArray.push(50)
console.log(myArray)

myArray.pop() //Elimina el último elemento del array
myArray.pop()
console.log(myArray)

// shift y unshift

myArray.shift() //Elimina el primer elemento del array
console.log(myArray)

myArray.unshift("Hola", "Juan") //Agrega uno o más elementos al inicio del array
console.log(myArray)

// length

myArray.length //Devuelve la cantidad de elementos del array
console.log(myArray.length)


//clear

//myArray = []
console.log(myArray)//Elimina todos los elementos del array

//slice 

myArray.slice(1, 3) //Crea un nuevo array con los elementos seleccionados del array original
console.log(myArray.slice(1, 3))

//splice

myArray.splice(1, 2) //Elimina los elementos seleccionados del array original
console.log(myArray)