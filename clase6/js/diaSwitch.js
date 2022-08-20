let txt = document.querySelector('#txt')

let fecha = new Date();
let nDia = fecha.getDay();

/* if / elseif */

if( nDia == 0 ){
    txt.innerText = 'Domingo';
}else if( nDia == 1 ){
    txt.innerText = 'Lunes';
}else if( nDia == 2 ){
    txt.innerText = 'Martes';
}

/* switch */
switch ( nDia )
{
    case 0:
        txt.innerText = 'Domingo';
        break;
    case 1:
        txt.innerText = 'Lunes';
        break;
    case 2:
        txt.innerText = 'Martes';
        break;
    case 3:
        txt.innerText = 'Miércoles';
        break;
    case 4:
        txt.innerText = 'Jueves';
        break;
    case 5:
        txt.innerText = 'Viernes';
        break;
    default:
        txt.innerText = 'Sábado';
        break;
}