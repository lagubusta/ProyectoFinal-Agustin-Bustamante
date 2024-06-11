// declaraciones generales
// boddy
const cuerpo = document.body;
cuerpo.style.backgroundColor = 'pink';
//header
const header = document.createElement('header');
header.id=('header');
cuerpo.appendChild(header);

// nav bar
const navBar = document.createElement('nav');
navBar.style.backgroundColor = ('yellow');
navBar.textContent = 'hola';

header.appendChild(navBar);

const listaNavBar = ['Inicio', 'Prodcutos', 'Contacto'];

for (let i = 0 ; i< listaNavBar.length ; i++){
    const nuevoItem = document.createElement('li');
    nuevoItem.textContent = listaNavBar[i];
    navBar.appendChild(nuevoItem);
}