
// Titular
const divContenedor1 = document.createElement('div');
cuerpo.appendChild(divContenedor1);
divContenedor1.style.backgroundColor ='black';
divContenedor1.style.height ='20rem';

const titular = document.createElement('h1');
divContenedor1.appendChild(titular);
titular.textContent = 'Esta es la Pre Entrega 3';
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

articulo1.addEventListener('mouseover', () => {
    articulo1.style.color = 'black';
    articulo1.style.backgroundColor = 'pink';
});

articulo1.addEventListener('mouseout', () => {
    articulo1.style.color = 'Black';
    articulo1.style.backgroundColor = colorAmarillo;
});

// articulo 2
const articulo2 = document.createElement('article');
cuerpo.appendChild(articulo2);
articulo2.style.backgroundColor = colorAmarillo;
articulo2.style.margin = '2rem';
articulo2.style.width = '50%';
articulo2.style.padding ='1rem';
articulo2.style.fontFamily ='buda';
articulo2.style.textAlign = 'right';
articulo2.style.alignItems = 'right';
articulo2.style.justifyContent = 'right';

const titularArticle2 = document.createElement('h2');
articulo2.appendChild(titularArticle2);
titularArticle2.textContent = ('¿Donde nos encotras?');

articulo2.addEventListener('mouseover', () => {
    articulo2.style.color = 'White';
    articulo2.style.backgroundColor = 'black';
});

articulo2.addEventListener('mouseout', () => {
    articulo2.style.color = 'Black';
    articulo2.style.backgroundColor = colorAmarillo;
});