'use strict'

//Funciones
//Es una agrupacion reutilizable de instrucciones

alert("funciones");


function calculadora(num1,num2){
    console.log("Suma = "+num1+" + "+num2+ " = "+parseInt(num1+num2));
    console.log("Resta = "+num1+" - "+num2+ " = "+parseInt(num1-num2));
    console.log("Multiplicacion = "+num1+" * "+num2+ " = "+parseInt(num1*num2));
    console.log("Division = "+num1+" / "+num2+ " = "+parseInt(num1/num2));
}

for(var i = 0;i<=10;i++){
    calculadora(i,10);
}