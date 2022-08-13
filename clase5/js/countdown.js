//ubicamos elementos dentro del DOM
const txtDias = document.querySelector('#txtDias');
const txtHoras = document.querySelector('#txtHoras');
const txtMinutos = document.querySelector('#txtMinutos');
const txtSegundos = document.querySelector('#txtSegundos');

//declaramos función de control+
function finalCountDown()
{
    //objetos de fecha
    const ahora = new Date();
    const final = new Date(2023, 0, 1, 0);

    //conversion a unix timestamp
    // tiempo transcurrido en milisegundos desde el 1º de enero de 1970
    let actual = ahora.getTime();
    let evento = final.getTime();
    console.log( actual );
    console.log( evento );

    //diferencia entre fechas
    let diferencia = evento - actual;
    console.log(diferencia);
    //obtenemos el tiempo expresado en segundos, minutos, horas y días
    let segundos = Math.trunc(diferencia/1000);
    console.log(segundos);
    let minutos =  Math.trunc(segundos/60);
    console.log(minutos);
    let horas = Math.trunc(minutos/60);
    console.log(horas);
    let dias = Math.trunc(horas/24);
    console.log(dias);

    //calculamos el tiempo sobrante
    // en horas, minutos y segundos
    horas = horas%24;
    minutos = minutos%60;
    segundos = segundos%60;

    // agregamos 0 para dos dígitos
    if( horas < 10 ){
        horas = '0'+ horas;
    }
    if( minutos < 10 ){
        minutos = '0'+ minutos;
    }
    if( segundos < 10 ){
        segundos = '0'+ segundos;
    }

    //imprimimos en el HTML
    txtDias.innerText = dias;
    txtHoras.innerText = horas;
    txtMinutos.innerText = minutos;
    txtSegundos.innerText = segundos;
}

finalCountDown();
setInterval(finalCountDown);