//ubicamos elemento dentro del DOM
let caja = document.getElementById('caja');

/**
 * modificamos atributos SIN interactividad
    caja.style.backgroundColor = '#0a2';
    caja.innerText = 'color verde';
    caja.style.color = '#ff0';    
 * */

//declaración
function verde()
{
    caja.style.backgroundColor = '#0a2';
    caja.innerText = 'color verde';
    caja.style.color = '#ff0';
}

function negro()
{
    caja.style.backgroundColor = '#222';
    caja.innerText = 'negro';
    caja.style.color = '#fff';
}

function azul()
{
    caja.style.backgroundColor = '#02b';
    caja.innerText = 'color azul';
    caja.style.color = '#ff0';
}