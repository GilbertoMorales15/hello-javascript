// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usuario = "Gilberto";
let password = "1234";

if (usuario === "Gilberto" && password === "root") {
    console.log("Bienvenido");
} else {
    console.log("Usuario o contraseña incorrectos");
}


// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero = -2;

if (numero == 0) {
    console.log("El número es 0");
} else if (numero > 0) {
    console.log("El número es positivo");
} else {
    console.log("El número es negativo");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 16;

if (edad >= 18) {
    console.log("Puede votar");
} else {
    console.log(`No puede votar, le faltan ${18 - edad} años`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let edad2 = 20;

let tipo = edad2 >= 18 ? "adulto" : "menor";

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 1;

switch (mes) {
    case 12,1,2:
        console.log("Estamos en invierno")
        break;
    case 3,4,5:
        console.log("Estamos en primavera")
        break;
    case 6,7,8:
        console.log("Estamos en verano")
        break;
    case 9,10,11:
        console.log("Estamos en otoño")
        break;
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior


switch (mes) {
    case 12,1,2:
        console.log("31 días")
        break;
    case 3,4,5:
        console.log("30 días")
        break;
    case 6,7,8:
        console.log("31 días")
        break;
    case 9,10,11:
        console.log("30 días")
        break;
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "es";

switch (idioma) {
    case "es":
        console.log("Hola");
        break;
    case "en":
        console.log("Hello");
        break;
    case "fr":
        console.log("Bonjour");
        break;
    default:
        console.log("Idioma no soportado");
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

let mes2 = 1;

switch (mes2) {
    case 12,1,2:
        console.log("Estamos en invierno")
        break;
    case 3,4,5:
        console.log("Estamos en primavera")
        break;
    case 6,7,8:
        console.log("Estamos en verano")
        break;
    case 9,10,11:
        console.log("Estamos en otoño")
        break;
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch (mes2) {
    case 12,1,2:
        console.log("31 días")
        break;
    case 3,4,5:
        console.log("30 días")
        break;
    case 6,7,8:
        console.log("31 días")
        break;
    case 9,10,11:
        console.log("30 días")
        break;
}