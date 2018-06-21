'use strict'

//parametros rest y spread

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
    console.log("fruta 1 = ",fruta1);
    console.log("fruta 2 = ",fruta2);
    console.log(resto_de_frutas);
}


listadoFrutas("pera","Manzana","uva","banano","coco");