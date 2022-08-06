let redbull = document.querySelector('#redbull');
let ferrari = document.querySelector('#ferrari');
let mercedes = document.querySelector('#mercedes');
let mclaren = document.querySelector('#mclaren');


/* estado inicial */
ferrari.style.display = 'none';
mercedes.style.display = 'none';
mclaren.style.display = 'none';

function mostrarOcultar( team )
{
    switch ( team ){
        case 'redbull':
            redbull.style.display = 'flex';
            ferrari.style.display = 'none';
            mercedes.style.display = 'none';
            mclaren.style.display = 'none';
        break;
        case 'ferrari':
            redbull.style.display = 'none';
            ferrari.style.display = 'flex';
            mercedes.style.display = 'none';
            mclaren.style.display = 'none';
            break;
        case 'mercedes':
            redbull.style.display = 'none';
            ferrari.style.display = 'none';
            mercedes.style.display = 'flex';
            mclaren.style.display = 'none';
            break;
        case 'mclaren':
            redbull.style.display = 'none';
            ferrari.style.display = 'none';
            mercedes.style.display = 'none';
            mclaren.style.display = 'flex';
            break;
    }
}