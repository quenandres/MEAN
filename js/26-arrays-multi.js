
'use strict'

var marca = ["Xiaomi","apple","Mazda"];

var producto = ["iphone","mi a1","Mazda 3"];

var revista = [marca,producto];

console.log(revista[0][0]);
console.log(revista[1][1]);

var elemento="";

do{
    elemento = prompt("Agrega marca: ");
    
        marca.push(elemento);
    
}while(elemento != "ACABAR");



console.log(marca);



var indice = marca.indexOf("apple");
if(indice > -1){
    marca.splice(indice,1);
    //indice es el espacio y el 1 es cuantos se eliminaran apartir del indice
}

console.log("string");

var marca_join = marca.join("|");

console.log(marca_join);

var marca_split = marca_join.split("|");

console.log(marca_split);


var ordenarDeAtoZ = marca_split.sort();
console.log("Ordenado A a Z >"+ordenarDeAtoZ);


var ordenarDeZtoA = marca_split.reverse();
console.log("Ordenado Z a A >"+ordenarDeZtoA);

