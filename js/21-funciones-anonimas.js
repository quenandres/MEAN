'use strict'

//funciones anonimas y callbacks

function sumame(numero1,numero2, sumaYmuestra,sumaPorDos){
    var suma = numero1 + numero2;

    sumaYmuestra(suma);
    sumaPorDos(suma);

    return suma;
}

sumame(3,4,dato=>{
    console.log("suma es ",dato);
},dato=>{
    console.log("datos Multiplicado", dato * 2);
});