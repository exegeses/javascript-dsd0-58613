//ubicar elemento dentro del DOM
const txt = document.querySelector('#txt');

//declaramos función de control
function reloj()
{
    //creamos un objeto de fecha
    let fecha = new Date();
    //obtemenos número de las horas
    let horas = fecha.getHours();
    //obtemenos número de los minutos
    let minutos = fecha.getMinutes();
    if( minutos < 10 ){
        minutos = '0'+ minutos;
    }
    //obtemenos número de los segundos
    let segundos = fecha.getSeconds();
    if( segundos < 10 ){
        segundos = '0'+ segundos;
    }
    //imprimimos dentro del span
    txt.innerText = horas +':'+ minutos +':'+ segundos;
}

//invocamos la función
reloj();
//actualizamos el llamado a la función reloj
setInterval( reloj );