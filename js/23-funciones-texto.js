'use strict'

//Transformacion de textos de cadenas

var numero = 444;
var texto1 = "   texto Busqueda de texto en js texto fin";
var texto2 = "texto2";

var dato = texto1.indexOf("texto");

var dato2 = texto1.match(/texto/gi);
var dato = texto1.match(/texto/g);

var dato3 = texto1.substr(3,4);

var dato4 = texto1.charAt(9);

var dato5 = texto1.startsWith("texto");

var dato6 = texto1.endsWith("texto fin");

//includes busca en todo el texto tal cual, es de cuidar las mayusculas y minusculas
var dato7 = texto1.includes("teaxto");


var dato8 = texto1.replace("js","Javascript");

//slice corta desde el caracter que se le indica
var dato9 = texto1.slice(7,20);

//split funciona como el explode de php
var dato10 = texto1.split();


//quita espacios por delante y por detras de la variable
var dato11 = texto1.trim();



console.log(dato);

console.log(dato2);

console.log(dato3);

console.log(dato4);

console.log(dato5);

console.log(dato6);

console.log(dato7);

console.log(dato8);

console.log(dato9);

console.log(dato10);

console.log(dato11);
