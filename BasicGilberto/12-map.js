// Map

// Declaracion

let myMap = new Map()
console.log(myMap)

// Initialize

myMap = new Map([["name", "Gilberto"], ["age", 25],["email", "susuki42@hotmail.com"]])
console.log(myMap)

// Methods

// set

myMap.set("twitter", "@gilberto")
console.log(myMap)

myMap.set("twitter", "@gilberto42")
console.log(myMap)

// get

console.log(myMap.get("twitter"))
console.log(myMap.get("twitter42"))

// has 

console.log(myMap.has("twitter"))
console.log(myMap.has("twitter42"))

//delete

console.log(myMap.delete("twitter"))
console.log(myMap)

// keys

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// size

console.log(myMap.size)

// clear

myMap.clear()
console.log(myMap)
