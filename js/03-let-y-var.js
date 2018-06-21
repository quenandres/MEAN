'use strict'

/*
DIFERENCIA ENTRE var y let

let permite usar una variable temporal en el bloque de codigo {...} sin alterarlo por fuera de este.
var un cambio en la variable var funcionara desde el cambio en adelante del codigo.

*/


var numero = 1;
console.log("Numero="+numero);
if(true){
    numero=2;
    console.log("Numero="+numero);
}
console.log("Numero="+numero);


var nombre  = "Jhonatan";
console.log("nombre="+nombre);
if(true){
    let nombre="Andres";
    console.log("nombre="+nombre);
}
console.log("nombre="+nombre);
