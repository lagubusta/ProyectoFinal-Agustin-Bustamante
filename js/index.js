const divContenedor1 = document.createElement('div');
cuerpo.appendChild(divContenedor1);
divContenedor1.style.backgroundColor ='black';
divContenedor1.style.height ='20rem';

const titular = document.createElement('h1');
divContenedor1.appendChild(titular);
titular.textContent = 'Esta es la Pre Entrega 3';
// titular.style.color = '#d6a505';
titular.style.marginLeft = '3rem';
titular.style.paddingTop = '4rem';
titular.style.color = colorAmarillo;
titular.style.fontSize = '6rem';



// articulo 1
const articulo1 = document.createElement('article');
cuerpo.appendChild(articulo1);

const titularArticle1 = document.createElement('h2');
articulo1.appendChild(titularArticle1);
titularArticle1.textContent = ('¿Quienes somos?');

articulo1.style.backgroundColor = colorAmarillo;
articulo1.style.margin = '2rem';
articulo1.style.width = '50%';
articulo1.style.padding ='1rem';
articulo1.style.fontFamily ='buda';



// class Vendedor {
//     constructor(nombre, apellido, edad, ciudad, zona) {
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.edad = parseInt(edad);
//         this.ciudad = ciudad;
//         this.zona = zona;
//     }
// };
// const empleadosVendedores = [];

// function agregarVendedor() {
//     const nombreNvendedor = prompt("Ingresa el nombre del nuevo vendedor/ra.");
//     const apellidoNvendedor = prompt("Ingresa el apellido de " + nombreNvendedor);
//     const edadNvendedor = parseInt(prompt("Ingresa la edad de " + nombreNvendedor));
//     const ciudadNvendedor = prompt("Ingresa la ciudad donde opera " + nombreNvendedor);
//     const zonaNvendedor = prompt("Si Bs. As. capital es el centro, ¿" + ciudadNvendedor + " donde se encuentra?");

//     const nuevoVendedor = new Vendedor(nombreNvendedor, apellidoNvendedor, edadNvendedor, ciudadNvendedor, zonaNvendedor);
//     empleadosVendedores.push(nuevoVendedor);
// }
// agregarVendedor();




// articulo1.addEventListener('mouseover', () => {
//     articulo1.style.color = 'black';
//     articulo1.style.backgroundColor ='pink';
// });

// articulo1.addEventListener('mouseout', () => {
//     articulo1.style.color = 'white';
//     articulo1.style.backgroundColor ='grey';
// });








// articulo 2
const articulo2 = document.createElement('article');
cuerpo.appendChild(articulo2);
articulo2.style.backgroundColor = 'green'
articulo2.style.margin = '2rem';
articulo2.style.width = '50%';
articulo2.style.textAlign = 'right';
articulo2.style.alignItems = 'right';
articulo2.style.justifyContent = 'right';

const titularArticle2 = document.createElement('h2');
articulo2.appendChild(titularArticle2);
titularArticle2.textContent = ('articulo2');