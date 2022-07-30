//ubicar elemento dentro del DOM
let caja = document.getElementById('caja');

//declaramos función/es de control
function ocultar()
{
    caja.style.display = 'none';
    //caja.style.opacity = '0';
    //caja.style.visibility = 'hidden';
}
function mostrar()
{
    caja.style.display = 'block';
    //caja.style.opacity = '1';
    //caja.style.visibility = 'visible';
}