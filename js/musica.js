const peticionSha = async () => {
	const respu = await fetch (
	'https://shazam.p.rapidapi.com/artists/get-details?id=567072&l=en-US');
	const datoss = await respu.json();
    const dataa = await datoss.results
	for ( item of dataa){
		const card = document.createElement('div');
		card.innerHTML = `
            <div class="card" style="width: 18rem; height: 32rem;">
                <img class="card-img-top" src=${item.name} alt=${item.title} />
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


const urll = 'https://shazam.p.rapidapi.com/artists/get-details?id=567072&l=en-US'
const X_RAPIDAPI_KEY = ''
const X_RAPIDAPI_HOST = ''

async function run() {
  const respuesta = await fetch(urll, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'b936a52aa9msh333397d6af2f23fp158bb6jsne985c870d611',
      'x-rapidapi-host': 'shazam.p.rapidapi.com'
    }
  })

  return await respuesta.text()
}

run().then(console.log).catch(console.error)




