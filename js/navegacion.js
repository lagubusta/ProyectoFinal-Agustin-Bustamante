// declaraciones generales
// boddy
const cuerpo = document.body;
cuerpo.style.backgroundColor = '#23003a';
//cabecera
const cabecera = document.createElement('cabecera');
cabecera.id = ('cabecera');
cuerpo.appendChild(cabecera);

//// //// //// nav bar
const navBar = document.createElement('nav');
navBar.className = ('NavBarClase')

cabecera.appendChild(navBar);

//// //// //// lista de items navbar
const ulNavBar = document.createElement('ul');
navBar.style.display = 'flex';


navBar.appendChild(ulNavBar);
//// Nombre Navbar
const listaNavBar = ['Inicio', 'Prodcutos', 'Contacto'];
for (const item of listaNavBar) {
    const lista = document.createElement('li');
    lista.innerHTML = `<a href="${listaNavBar.toLowerCase()}.html" >${item}</a>`;
    ulNavBar.appendChild(lista);


    item.textContent = listaNavBar[i];
    item.className = 'claseItemNav'
}  


// const origen = document.createElement('a');

