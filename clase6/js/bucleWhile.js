let n = 1;
while ( n < 15 )
{
    //bloque de código a iterar
    document.write( n + '<br>' );
    n++; //n = n + 1;
}

document.write('<hr>');

let marcas = [
    'Hermès', 'Zara', 'Boss',
    'Aeropostale', 'Tommy', 'Hollister'
];
//reseteamos variable n
n = 0;
console.log(marcas);
let cantidad = marcas.length;
document.write('<ul id="listaMarcas">');
while ( n < cantidad )
{
    document.write('<li>');
    document.write( marcas[ n ] );
    document.write('</li>');
    n++;
}
document.write('</ul>');