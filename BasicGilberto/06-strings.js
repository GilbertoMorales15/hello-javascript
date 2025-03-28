// Strings

let myName = "Gilberto"
let greeting = "Hola," + " " + myName

console.log(greeting)

// Longitud de un string

console.log(greeting.length)

// Acceso a caracteres

console.log(greeting[2])
console.log(greeting[0])

// Métodos de strings

console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Gilberto"))
console.log(greeting.includes("Hola"))
console.log(greeting.includes("Adios"))
console.log(greeting.slice(1, 9))
console.log(greeting.replace("Hola", "Hello"))

// Template strings

console.log(`Hola, ${myName}`)


let email ="susuki42@hotmail.com"

console.log(`Hola,  ${myName} , tu correo es: " ${email})]`)

