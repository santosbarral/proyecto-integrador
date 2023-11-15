let TMDB_API_BASE_URL = 'https://api.themoviedb.org/3';

let API_KEY = '/genre/movie/list'

let MOVIE_GENRES_ENDPOINT = '/genre/movie/list';

let SERIES_GENRES_ENDPOINT = '/genre/series/list';

async function obtenerGenerosPeliculas() {
    try {
        let response = await fetch(`${'https://api.themoviedb.org/3'}${'/genre/movie/list'}?api_key=${API_KEY}`); 
        let data = await response.json();
        return data.genres;
    } catch (error) {
        console.error('Error al obtener géneros de películas:', error);
        return [];
    }
}


