// const containerSpotify = document.createElement('div');
// containerSpotify.className = 'containerSpotify';
// containerSpotify.textContent = 'hola';
// containerSpotify.style.backgroundColor ='red';
// cuerpo.appendChild(containerSpotify);


// const ENDPOINT_URL = 'https://spotify23.p.rapidapi.com/search/?q=PinkFloyd&type=multi&offset=0&limit=10&numberOfTopResults=5';
// const X_RAPIDAPI_KEY = 'b936a52aa9msh333397d6af2f23fp158bb6jsne985c870d611';
// const X_RAPIDAPI_HOST = 'spotify23.p.rapidapi.com'

// async function run() {
//   const response = await fetch(ENDPOINT_URL, {
//     method: 'GET',
//     headers: {
//       'x-rapidapi-key': X_RAPIDAPI_KEY,
//       'x-rapidapi-host': X_RAPIDAPI_HOST
//     }
//   })

//   return await response.text()
// }

// run().then(console.log).catch(console.error)


const containerSpotify = document.createElement('div');
containerSpotify.className = 'containerSpotify';
document.body.appendChild(containerSpotify);

const ENDPOINT_URL = 'https://spotify23.p.rapidapi.com/artists/?q=PinkFloyd&ids=2w9zwq3AktTeYYMuhMjju8';
const X_RAPIDAPI_KEY = 'b936a52aa9msh333397d6af2f23fp158bb6jsne985c870d611';
const X_RAPIDAPI_HOST = 'spotify23.p.rapidapi.com'

async function run() {
  try {
    const response = await fetch(ENDPOINT_URL, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': X_RAPIDAPI_KEY,
        'x-rapidapi-host': X_RAPIDAPI_HOST
      }
    });

    if (!response.ok) {
      throw new Error('Error en la solicitud a la API');
    }

    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

function displayData(data) {
  const albums = data.albums.items;
  const ul = document.createElement('ul');

  albums.forEach(album => {
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    h3.textContent = album.data.artists.items[0].profile.name;
    li.appendChild(h3);
    ul.appendChild(li);
  });

  containerSpotify.appendChild(ul);
}

run();
