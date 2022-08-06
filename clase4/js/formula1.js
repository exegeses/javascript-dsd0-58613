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
    if ( team == 'redbull' ){
        redbull.style.display = 'flex';
        ferrari.style.display = 'none';
        mercedes.style.display = 'none';
        mclaren.style.display = 'none';
    }
    else if ( team == 'ferrari' ){
        redbull.style.display = 'none';
        ferrari.style.display = 'flex';
        mercedes.style.display = 'none';
        mclaren.style.display = 'none';
    }
    else if ( team == 'mercedes' ){
        redbull.style.display = 'none';
        ferrari.style.display = 'none';
        mercedes.style.display = 'flex';
        mclaren.style.display = 'none';
    }
    else if ( team == 'mclaren' ){
        redbull.style.display = 'none';
        ferrari.style.display = 'none';
        mercedes.style.display = 'none';
        mclaren.style.display = 'flex';
    }
}