const numero1 = 10;
const numero2 = 20;
const numero3 = 30;
// 1
if(numero1 > numero2 && numero1 > numero3){
    console.log("el numero mayor es: " + numero1);
}
else if(numero2 > numero1 && numero2 > numero3){
    console.log("el numero mayor es: " + numero2);
}
else {
    console.log("el numero mayor es: " + numero3);
}

// 2
if(numero1 < numero2 && numero1 < numero3){
    console.log("el numero menor es: " + numero1);
}
else if(numero2 < numero1 && numero2 < numero3){
    console.log("el numero menor es: " + numero2);
}
else {
    console.log("el numero menor es: " + numero3);
}
// 3
if(numero1 % 2 == 0){
    console.log("el numero " + numero1 + "es par");
} else {
    console.log("el numero " + numero1 + "es impar");
}
// 4
if(numero2 % 2 == 0){
    console.log("el numero " + numero2 + "es par");
} else {
    console.log("el numero " + numero2 + "es impar");
}
// 5
if(numero2 % 2 == 0){
    console.log("el numero " + numero3 + "es par");
} else {
    console.log("el numero " + numero3 + "es impar");
}
//
if(numero1 % 5 == 0){
    console.log("el numero " + numero1 + "es multiplo de 5");
} else {
    console.log("el numero " + numero1 + "no es multiplo de 5");
}
// 4
if(numero2 % 5 == 0){
    console.log("el numero " + numero2 + "es multiplo de 5");
} else {
    console.log("el numero " + numero2 + "no es multiplo de 5");
}
// 5
if(numero2 % 5 == 0){
    console.log("el numero " + numero3 + "es multiplo de 5");
} else {
    console.log("el numero " + numero3 + "no es multiplo de 5");
}