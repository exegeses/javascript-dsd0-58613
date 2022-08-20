let italianos = [
    'Maseratti', 'Pagani',
    'Larmborghini', 'Ferrari',
    'Alfa Romeo', 'Alpine',
    'Bugatti', 'Lancia',
    'Fiat', 'Mazzanti',
    'Fornassari', 'Abarth'
];
let urls = [
    'https://www.maserati.com/us/en',
    'https://www.pagani.com',
    'https://www.lamborghini.com/en-en',
    'https://www.ferrari.com',
    'https://www.alfaromeo.com/',
    'https://alpineauto.com/',
    'https://www.bugatti.com/',
    'https://www.lancia.com/',
    'https://www.fiat.it/',
    'https://mazzantiautomobili.it/',
    'http://www.fornasaricars.com/',
    'https://www.abarth.com/'
];

let cantidad = italianos.length

document.write('<nav id="autos">');
for (  let n = 0; n < cantidad; n++  )
{
    //document.write('<a href="'+ urls[n] +'" target="_blank">');
    document.write( `<a href="${urls[n]}" target="_blank">` )
    document.write('<i class="fa-solid fa-flag-checkered"></i>');
    document.write( italianos[n] + '<br>' );
    document.write('</a>');
}
document.write('</nav>');