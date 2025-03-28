// Condicionales If / Else If / Else

let age = 16

if (age >= 18) {
    console.log('Eres mayor de edad')
} else if (age === 17) {
    console.log('Casi eres mayor de edad')
}
else {
    console.log('Eres menor de edad')
}

// Switch

switch (age) {
    case 18:
        console.log('Tienes 18 años')
        break
    case 17:
        console.log('Tienes 17 años')
        break
    default:
        console.log('No tienes 17 ni 18 años')
        break
}