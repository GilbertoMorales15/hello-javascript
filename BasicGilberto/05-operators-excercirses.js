// 1. Crea una variable para cada operación aritmética

let suma = 5 + 2
let resta = 5 - 2
let multiplicacion = 5 * 2
let division = 5 / 2
let modulo = 5 % 2
let exponente = 5 ** 2

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

suma += 2
resta -= 2
multiplicacion *= 2
division /= 2
modulo %= 2
exponente **= 2

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(5 > 2)
console.log(5 < 10)
console.log(5 >= 5)
console.log(5 <= 5)
console.log(5 === 5)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(5 < 2)
console.log(5 > 10)
console.log(5 <= 4)
console.log(5 >= 6)
console.log(5 !== 5)

// 5. Utiliza el operador lógico and

console.log(5 > 2 && 5 < 10)
console.log(10 > 2 && 10 > 2)
console.log(20/2 > 2 && 20/2 < 10)

// 6. Utiliza el operador lógico or

console.log(5 > 2 || 5 < 10)
console.log(10 > 2 || 10 > 2)

// 7. Combina ambos operadores lógicos

console.log(5 > 2 && 5 < 10 || 5 > 10)
console.log( 10 < 2 && 20 < 4 || 5*10 < 10)

// 8. Añade alguna negación

console.log(!(5 > 2 && 5 < 10 || 5 > 10))
console.log(!(10 < 2 && 20 < 4 || 5*10 < 10))

// 9. Utiliza el operador ternario

const a = 5
console.log(a > 2 ? 'Verdadero' : 'Falso')

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log(5 + 2 > 2 && 5 < 10 ? 'Verdadero' : 'Falso')