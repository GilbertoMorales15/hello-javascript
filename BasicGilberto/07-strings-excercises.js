// 1. Concatena dos cadenas de texto

let myName = "Gilberto"
let myCompleteName = myName + " Morales"

console.log(myCompleteName)

// 2. Muestra la longitud de una cadena de texto

console.log(myCompleteName.length)

// 3. Muestra el primer y último carácter de un string

console.log(myCompleteName[0])
console.log(myCompleteName[myCompleteName.length - 1])

// 4. Convierte a mayúsculas y minúsculas un string

console.log(myCompleteName.toUpperCase())
console.log(myCompleteName.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

let myText = `Hola,
este 
es un texto
de varias líneas`

console.log(myText)

// 6. Interpola el valor de una variable en un string

console.log(`Hola, ${myName}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(myCompleteName.replace(" ","-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(myCompleteName.includes("Gilberto"))

// 9. Comprueba si dos strings son iguales

console.log(myCompleteName === myName)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(myCompleteName.length === myName.length)