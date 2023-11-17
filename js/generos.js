let apiKey = '15879dad47bfb7f22061a18ffdf1b790';
let baseURL = 'https://api.themoviedb.org/3';

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
  let targetElement = document.getElementById(targetElementId);
  targetElement.innerHTML = '';

  genres.forEach(genre => {
    let listItem = document.createElement('li');
    let link = document.createElement('a');
    link.href = `ver-generos.html?genreId=${genre.id}&genreName=${encodeURIComponent(genre.name)}`;
    link.textContent = genre.name;
    listItem.appendChild(link);
    targetElement.appendChild(listItem);
  });
}

window.onload = function() {
  fetchGenres('/genre/movie/list', 'movieGenres');
  fetchGenres('/genre/tv/list', 'tvGenres');
};