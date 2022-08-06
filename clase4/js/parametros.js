let caja = document.querySelector('#caja');

function cambiarColor( fondo, color, texto )
{
    caja.style.backgroundColor = fondo;
    caja.style.color = color;
    caja.innerText = texto;
}
