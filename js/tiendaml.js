const containerMain = document.createElement('main');
containerMain.className = 'container';
containerMain.textContent = 'hola';
cuerpo.appendChild(container);

const cardss = document.createElement('div');
cardss.id = 'cards';
cardss.className = 'tarjetas';
containerMain.appendChild(cardss);

const listadoo = document.createElement('ul');
listadoo.id = 'listado';
containerMain.appendChild(listadoo);



// Rutas relativas
const cardsProd = document.getElementById('cards');
const peticionA = async () => {
    const respuesta = await fetch('/productos.json');
    const datos = await respuesta.json();
    const data = await datos
    for( item of data ) {
        const card = document.createElement('div');
        card.innerHTML = `
            <div class="card" style="width: 18rem; height: 32rem;">
                <img class="card-img-top" src=${item.imagen} alt=${item.nombre} />
                <div class="card-body">
                    <h5 class="card-title">${item.nombre}</h5>
                    <p class="card-text">Descripcion: ${item.descripcion}</p>
                    <p class="card-text">Precio: $${item.precio}.-</p>
                    <p class="card-text">Stock: ${item.stock}</p>
                    <a href="#" class="btn btn-success">Comprar</a>
                </div>
            </div>
        `
        cardsProd.appendChild(card);
    }
}
// peticionA();

// Ruta Absoluta
const peticionML = async () => {
    const respuesta = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=Pink Floyd');
    const datos = await respuesta.json();
    const data = await datos.results
    for( item of data ) {
        const card = document.createElement('div');
        card.innerHTML = `
            <div class="card" style="width: 18rem; height: 32rem;">
                <img class="card-img-top" src=${item.thumbnail} alt=${item.title} />
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">Proveedor: ${item.official_store_name}</p>
                    <p class="card-text">Precio: $${item.price}.-</p>
                    <a href="#" class="btn btn-success">Comprar</a>
                </div>
            </div>
        `
        cardsProd.appendChild(card);
    }
}

peticionML();

