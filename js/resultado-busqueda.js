const API_KEY = '15879dad47bfb7f22061a18ffdf1b790'; // Reemplaza 'tu_api_key' con tu API key de TMDb
      const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
  
      const searchBox = document.getElementById('search-box');
      const resultsContainer = document.getElementById('results');
  
      searchBox.addEventListener('keyup', function(event) {
        const searchTerm = event.target.value;
  
        if (searchTerm.length > 2) {
          searchMovies(searchTerm);
        } else {
          resultsContainer.innerHTML = ''; // Limpiar resultados si la búsqueda es corta
        }
      });
  
      async function searchMovies(query) {
        const url = `${BASE_URL}?api_key=${API_KEY}&query=${query}`;
        
        try {
          const response = await fetch(url);
          const data = await response.json();
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
          const movieTitle = movie.title;
          const movieReleaseDate = movie.release_date || 'Fecha de lanzamiento no disponible';
          const movieOverview = movie.overview || 'Descripción no disponible';
          const moviePoster = movie.poster_path ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}` : 'https://via.placeholder.com/150';
  
          const movieElement = `
            <div>
              <img src="${moviePoster}" alt="${movieTitle}">
              <h3>${movieTitle}</h3>
              <p><strong>Fecha de lanzamiento:</strong> ${movieReleaseDate}</p>
              <p>${movieOverview}</p>
            </div>
          `;
          resultsContainer.innerHTML += movieElement;
        });
      }
