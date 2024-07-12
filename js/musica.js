
const h1Albums = document.createElement('h1');
h1Albums.textContent = ('Discografia completa');
h1Albums.className = ('h1Albums');
cuerpo.appendChild(h1Albums);

// Contenedor albums
const albumsContainer =document.createElement('div');
albumsContainer.id = 'albumsContainer';
cuerpo.appendChild(albumsContainer);

const url = 'https://spotify23.p.rapidapi.com/artist_albums/?id=0k17h0D3J5VfsdmQ1iZtE9&offset=0&limit=100';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'b936a52aa9msh333397d6af2f23fp158bb6jsne985c870d611',
                'x-rapidapi-host': 'spotify23.p.rapidapi.com'
            }
        };

        fetch(url, options)
        .then(response => response.json())
        .then(data => {
            const albumsContainer = document.getElementById('albumsContainer');
            const albums = data.data.artist.discography.albums.items;
            albums.forEach(album => {
                const albumDiv = document.createElement('div');
                albumDiv.className = 'album';

                const albumImage = document.createElement('img');

                albumImage.className = 'albumImage';
                albumImage.src = album.releases.items[0].coverArt.sources[0].url;
                albumImage.alt = album.releases.items[0].name;

                const albumName = document.createElement('h3');
                albumName.className = 'albumName';
                albumName.innerText = album.releases.items[0].name;

                albumDiv.appendChild(albumImage);
                albumDiv.appendChild(albumName);
                albumsContainer.appendChild(albumDiv);
            });
        })
        .catch(err => console.error(err));