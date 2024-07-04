


// Titular
const gallery = document.createElement('section');
gallery.style.backgroundColor = 'black';
gallery.style.height = '20rem';
cuerpo.appendChild(gallery);

const foto = document.createElement('img');
foto.className = 'fondoInde';
foto.src = `img/banda1.jpg`;

gallery.appendChild(foto);








//div articulos
const divArticulos = document.createElement('div');
cuerpo.appendChild(divArticulos);
divArticulos.style.display = 'flex';
////////////////////////////////////////////////////////////////////
// articulo 1
const articulo1 = document.createElement('article');
divArticulos.appendChild(articulo1);
articulo1.style.backgroundColor = colorAmarillo;
articulo1.style.margin = '2rem';
articulo1.style.width = '50%';
articulo1.style.padding = '1rem';
articulo1.style.fontFamily = 'buda';
articulo1.style.overflow = 'hidden';

const titularArticle1 = document.createElement('h2');
articulo1.appendChild(titularArticle1);
titularArticle1.textContent = '¿Quienes somos?';

const parraA1 = document.createElement('p');
parraA1.textContent = 'Somos tienda oficial de venta de productos de Pink Floyd. Vedemos desde buzos hasta remeras y merchandising. Somos la unica tienda autorizada.';
parraA1.style.display = 'none';
parraA1.style.fontFamily = 'buda';
parraA1.style.color = colorAmarillo;
articulo1.appendChild(parraA1);
articulo1.addEventListener('mouseover', () => {
    articulo1.style.color = colorAmarillo;
    articulo1.style.backgroundColor = 'black';
    articulo1.style.height = 'cover';
    parraA1.style.display = 'block';
    parraA1.style.fontFamily = 'buda';
    parraA1.style.color = 'white';
    parraA1.style.fontSize = '1.2rem';
    parraA1.style.textAlign = 'left';
    parraA1.style.padding = '1rem';
    articulo1.style.transition = 'background-color 0.3s, color 0.3s';
});
articulo1.addEventListener('mouseout', () => {
    articulo1.style.color = 'Black';
    articulo1.style.backgroundColor = colorAmarillo;
    articulo1.style.width = '50%';
    articulo1.style.padding = '1rem';
    articulo1.style.fontFamily = 'buda';
    parraA1.style.display = 'none';
});
////////////////////////////////////////////////////////////////////
// articulo 2
const articulo2 = document.createElement('article');
divArticulos.appendChild(articulo2);
articulo2.style.backgroundColor = colorAmarillo;
articulo2.style.margin = '2rem';
articulo2.style.width = '50%';
articulo2.style.padding = '1rem';
articulo2.style.fontFamily = 'buda';
articulo2.style.textAlign = 'right';
articulo2.style.alignItems = 'right';
articulo2.style.justifyContent = 'right';
articulo2.style.overflow = 'hidden';

const titularArticle2 = document.createElement('h2');
articulo2.appendChild(titularArticle2);
titularArticle2.textContent = '¿Donde nos encotras?';

const parraA2 = document.createElement('p');
parraA2.textContent = 'Nos podes encontrar en 9 de Julio 900. Enfrente al obelisco. Estamos de Lunes a Viernes de 9 a 19 hs. Sábados de 9 a 16 hs.';
parraA2.style.display = 'none';
parraA2.style.fontFamily = 'buda';
parraA2.style.color = colorAmarillo;
articulo2.appendChild(parraA2);

articulo2.addEventListener('mouseover', () => {
    articulo2.style.color = colorAmarillo;
    articulo2.style.backgroundColor = 'black';
    articulo2.style.height = 'cover';
    parraA2.style.display = 'block';
    parraA2.style.fontFamily = 'buda';
    parraA2.style.color = 'white';
    parraA2.style.fontSize = '1.2rem';
    parraA2.style.textAlign = 'left';
    parraA2.style.padding = '1rem';
    articulo2.style.transition = 'background-color 0.3s, color 0.3s';
});
articulo2.addEventListener('mouseout', () => {
    articulo2.style.color = 'Black';
    articulo2.style.backgroundColor = colorAmarillo;
    articulo2.style.width = '50%';
    articulo2.style.padding = '1rem';
    articulo2.style.fontFamily = 'buda';
    articulo2.style.textAlign = 'right';
    articulo2.style.alignItems = 'right';
    articulo2.style.justifyContent = 'right';
    parraA2.style.display = 'none';
});

