'use strict'

/*
    Programa que pida dos numeros y que nos diga cual es el mayor, menos y si son iguales
*/



var numero1 = prompt("Introduce el primero numero",0);
var numero2 = prompt("Introduce el segundo numero",0);

numero1 = Number(numero1);

numero2 = Number(numero2);


if(numero1 > numero2){
    alert("El numero 1 es mayor");
}else if(numero1 < numero2){
    alert("El numero 2 es mayor");
}else{
    alert("Los numeros son iguales");
}