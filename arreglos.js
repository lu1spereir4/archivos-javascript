// 1
function suma(array){
    var longitud = array.lenght;
    for(let i = 0; i < longitud; i++){
        var suma;
        suma = suma + array[i];
    }
    return suma;
}
// 2 
function suma(array){
    var longitud = array.lenght;
    for(let i = 0; i < longitud; i++){
        var suma;
        suma = suma + array[i];
    }
    let promedio = suma/longitud;
    return promedio;
}
// 3
function arregloStrings(array){
    return array.map(str => str.toUpperCase());
}
// 4
function filtrarNumerosPares(array) {
    return array.filter(numero => numero % 2 === 0);
}
