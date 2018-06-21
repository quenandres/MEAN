'use strict'

var nombre = prompt("Ingresa tu nombre");


var apellido = prompt("Ingresa tu apellido");


var texto = `
    <h1>Hola</h1>
    <h3>Mi nombre es ${nombre}</h3>
    <h3>Mis apellidos son ${apellido}</h3>
    

    `;


    document.write(texto);
