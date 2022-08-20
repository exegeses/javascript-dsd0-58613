let txt = document.querySelector('#txt');

//crear objeto de fecha
let fecha = new Date();
//obtenemos el número del día de la semana
let nDia = fecha.getDay(); // Dom = 0 | Lun = 1 ...

let diasSemana = [
                    'Domingo', 'Lunes', 'Martes',
                    'Miércoles', 'Jueves', 'Viernes',
                    'Sábado'
                 ];

//imprimimos en el txt
txt.innerText = diasSemana[ nDia ];