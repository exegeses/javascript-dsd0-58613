/*
mostrar la fecha actual
formato: 30/07/2022
*/
//ubicar elemento dentro del DOM
let txt = document.getElementById('txt');

//creamos un objeto de fecha
let fecha = new Date();
    console.log(fecha);

//obtenemos número del día del mes
let diaMes = fecha.getDate();
//agregamos 0 para dos caractéres
if( diaMes < 10 ){
    diaMes = '0'+ diaMes;
}

//obtenemos número del mes actual
let mes = fecha.getMonth() + 1;
//agregamos 0 para dos caractéres
if( mes < 10 ){
    mes = '0'+ mes;
}


//obtenemos número del año
let anio = fecha.getFullYear();

//imprimimos en el span
txt.innerText = diaMes +'/'+ mes +'/'+ anio;
