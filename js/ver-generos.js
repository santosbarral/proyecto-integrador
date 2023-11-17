let apiKey = '15879dad47bfb7f22061a18ffdf1b790';
let baseURL = 'https://api.themoviedb.org/3';

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
  let genreDetailsElement = document.getElementById('genreDetails');
  genreDetailsElement.innerHTML = '';

  if (genreDetails.length === 0) {
    const errorParagraph = document.createElement('p');
    errorParagraph.textContent = `No movies found for ${genreName}.`;
    genreDetailsElement.appendChild(errorParagraph);
  } else {
    genreDetails.forEach(detail => {
      let movieElement = document.createElement('div');
      movieElement.classList.add('cajaPelicula');
      let movieTitle = document.createElement('h3');
      movieTitle.textContent = detail.title;
      movieElement.appendChild(movieTitle);

      if (detail.poster_path) {
        let moviePoster = document.createElement('img');
        moviePoster.src = `https://image.tmdb.org/t/p/w200${detail.poster_path}`;
        movieElement.appendChild(moviePoster);
      }

      movieElement.onclick = function() {
        console.log(`Clicked on ${detail.title}`);
      };

      genreDetailsElement.appendChild(movieElement);
    });
  }
}

window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const genreId = urlParams.get('genreId');
  const genreName = urlParams.get('genreName');

  if (genreId && genreName) {
    fetchGenreDetails(genreId, decodeURIComponent(genreName));
  } else {
    console.error('Genre ID and Name not provided in the URL.');
  }
};
