'use strict'

//Arrays

//dos formas de inicializar un arreglo

//1.
var Marcas = ["HP","Xiaomi","Intel","Apple","Microsoft"];

//2.

var Lenguajes = new Array("PHP","JS","Java","python","C++","Go","html","C#");


console.log(Marcas);

console.log(Lenguajes);

/*
var seleccion = parseInt(prompt("Ingrese la opcion :",0));

if(seleccion >= Marcas.length){
    alert("Introduzca un dato valido menos a: "+Marcas.length);
}else{
    alert("Su marca favorita es: "+Marcas[seleccion]);
}*/


document.write("<h2>Lenguajes de programacion</h2>");
document.write("<ul>");

for(var i=0;i<Lenguajes.length;i++){
    document.write("<li>"+Lenguajes[i]+"</li>");    

}


document.write("</ul>");


document.write("<ol>");

Lenguajes.forEach((elemento, index , arreglo)=>{
   
    console.log(arreglo);
    
    document.write("<li>"+index+" - "+elemento+"</li>");   
});
document.write("</ol>");


document.write("<h2>Lenguajes de programacion con IN</h2>");

document.write("<ul>");

for(let Lenguaje in Lenguajes){
    document.write("<li>"+Lenguajes[Lenguaje]+"</li>");    
}

document.write("</ul>");



//Busqueda

var busqueda = Lenguajes.find(function(Lenguaje){
    return Lenguaje == "PsHP";
});

//metodo some para comparar numeros en un array

console.log(busqueda);