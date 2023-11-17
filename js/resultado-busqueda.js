let API_KEY = '15879dad47bfb7f22061a18ffdf1b790'; 
let BASE_URL = 'https://api.themoviedb.org/3/search/movie';

let searchBox = document.getElementById('search-box');
let resultsContainer = document.getElementById('results');

searchBox.addEventListener('keyup', function(event) {
  let searchTerm = event.target.value;

  if (searchTerm.length > 2) {
    searchMovies(searchTerm);
  } else {
    resultsContainer.innerHTML = ''; 
  }
});

async function searchMovies(query) {
  let url = `${BASE_URL}?api_key=${API_KEY}&query=${query}`;
  
  try {
    let response = await fetch(url);
    let data = await response.json();
    displayResults(data.results);
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
}

function displayResults(movies) {
  resultsContainer.innerHTML = '';

  if (movies.length === 0) {
    resultsContainer.innerHTML = '<p>No se encontraron películas</p>';
    return;
  }

  movies.forEach(movie => {
    let movieTitle = movie.title;
    let movieReleaseDate = movie.release_date || 'Fecha de lanzamiento no disponible';
    let movieOverview = movie.overview || 'Descripción no disponible';
    let moviePoster = movie.poster_path ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}` : 'https://via.placeholder.com/150';

    let movieElement = document.createElement('div');
    movieElement.classList.add('cajaBusqueda');
    movieElement.innerHTML = `
      <img src="${moviePoster}" alt="${movieTitle}" class="imgB">
      <h3 class="titulo">${movieTitle}</h3>
      <p class="hide"><strong>Fecha de lanzamiento:</strong> ${movieReleaseDate}</p>
      <p>Duración: ${movie.runtime} minutos</p>
      <p class="hide">Descripción: ${movieOverview}</p>
    `;

    movieElement.addEventListener('click', function() {
      let id = movie.id;
      let detalleURL = `detalle.html?id=${encodeURIComponent(id)}&tipo=pelicula`;
      window.location.href = detalleURL;
    });

    resultsContainer.appendChild(movieElement);
  });
}
