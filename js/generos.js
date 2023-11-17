const apiKey = '15879dad47bfb7f22061a18ffdf1b790';
const baseURL = 'https://api.themoviedb.org/3';

function fetchGenres(endpoint, targetElementId) {
  fetch(`${baseURL}${endpoint}?api_key=${apiKey}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      return response.json();
    })
    .then(data => {
      displayGenres(data.genres, targetElementId);
    })
    .catch(error => {
      console.error('Error fetching genres:', error);
    });
}

function displayGenres(genres, targetElementId) {
  const targetElement = document.getElementById(targetElementId);
  targetElement.innerHTML = '';

  genres.forEach(genre => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = genre.name;
    link.onclick = function() {
      fetchGenreDetails(genre.id, genre.name);
    };
    listItem.appendChild(link);
    targetElement.appendChild(listItem);
  });
}

function fetchGenreDetails(genreId, genreName) {
  fetch(`${baseURL}/discover/movie?api_key=${apiKey}&with_genres=${genreId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok for ${genreName}.`);
      }
      return response.json();
    })
    .then(data => {
      displayGenreDetails(data.results, genreName);
    })
    .catch(error => {
      console.error(`Error fetching genre details for ${genreName}:`, error);
      displayGenreDetailsError();
    });
}

function displayGenreDetails(genreDetails, genreName) {
  const genreDetailsElement = document.getElementById('genreDetails');
  genreDetailsElement.innerHTML = '';

  if (genreDetails.length === 0) {
    const errorParagraph = document.createElement('p');
    errorParagraph.textContent = `No movies found for ${genreName}.`;
    genreDetailsElement.appendChild(errorParagraph);
  } else {
    genreDetails.forEach(detail => {
      const movieElement = document.createElement('div');
      const movieTitle = document.createElement('p');
      movieTitle.textContent = detail.title;
      movieElement.appendChild(movieTitle);

      if (detail.poster_path) {
        const moviePoster = document.createElement('img');
        moviePoster.src = `https://image.tmdb.org/t/p/w200${detail.poster_path}`;
        movieElement.appendChild(moviePoster);
      }

      movieElement.onclick = function() {
        // Handle click on movie/series for more details
        console.log(`Clicked on ${detail.title}`);
        // Redirect to movie/series details page or perform any other action
      };

      genreDetailsElement.appendChild(movieElement);
    });
  }
}

// Fetch movie and TV series genres when the page loads
window.onload = function() {
  fetchGenres('/genre/movie/list', 'movieGenres');
  fetchGenres('/genre/tv/list', 'tvGenres');
};