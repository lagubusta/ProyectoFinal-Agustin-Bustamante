// Token de acceso
const token = 'BQATp2SwfIv5xofwoMK1n5q6ef3Hda66xjhJ5-HATiloczmKtv21If0xVmbZCdL5S-gaimpeO9To53xqryhEhy8S5FqIoYzZnIMBn0wOeKoSldMyQt3Y4u9hJAqz6heJkP9KzYsESD8NTf6J3UiAZETjunn08OIFnOT3Dq-Qy-KX8gSLJDq1h5cj9i1AuMbGQ_AsVbhrT7HtYL8bRxZllFuqctewURoliK9u2jmfmrdOPIWea8jR8I2johzbb1N-bDYvzg';

// Definir la función fetchWebApi
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(body)
  });
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return await res.json();
}
// Obtener el ID del artista
async function getArtistId(artistName) {
  const response = await fetchWebApi(`v1/search?q=${encodeURIComponent(artistName)}&type=artist&limit=1`, 'GET');
  return response.artists.items[0].id;
}

// Obtener los álbumes del artista
async function getAlbumsArtist(artistId) {
  const response = await fetchWebApi(`v1/artists/${artistId}/albums?include_groups=album&limit=50`, 'GET');
  return response.items;
}

// Mostrar los álbumes en la página
async function displayAlbums() {
  try {
    const artistId = await getArtistId('Pink Floyd');
    const albums = await getAlbumsArtist(artistId);

    const container = document.createElement('div');
    container.id = 'albums-container';
    document.body.appendChild(container);

    albums.forEach(album => {
      const cardAlbum = document.createElement('div');
      cardAlbum.id = 'cardAlbum';

      const albumImage = document.createElement('img');
      albumImage.className = 'imgAlbum'
      albumImage.src = album.images[0].url;
      albumImage.alt = album.name;

      const albumName = document.createElement('h3');
      albumName.className = 'titelAlbum';
      albumName.innerText = album.name;

      cardAlbum.appendChild(albumImage);
      cardAlbum.appendChild(albumName);
      container.appendChild(cardAlbum);
    });
  } catch (error) {
    console.error('Error albums:', error);
    const container = document.createElement('div');
    container.id = 'albums-container';
    container.innerText = 'Error al cargar albums.';
    document.body.appendChild(container);
  }
}

displayAlbums();



