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
function mostrarOcultar(){
    if( caja.style.display == "none" ){
        mostrar();
    } else if( caja.style.display == "block" ){
        ocultar();
    }
}

function ocultarMostrar()
{
    if (caja.style.display === 'none') {
        caja.style.display = 'block';
    } else{
        caja.style.display = 'none';
    }
}