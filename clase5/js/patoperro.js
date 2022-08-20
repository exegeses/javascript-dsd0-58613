const patoperro = document.querySelector('#patoperro');
let grados = 0;

function rotar()
{
    //patoperro.style.transform = 'rotate('+ grados +'deg)';
    patoperro.style.transform = `rotate(${grados}deg)`;
    grados++;
}

rotar();
setInterval( rotar, 50 );