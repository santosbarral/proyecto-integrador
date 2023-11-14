let string = location.search
let data = new URLSearchParams(string);
let Busqueda = data.get("buscador")
let searchcriteria = data.get("criterio")
console.log(searchcriteria);


if (searchcriteria === 'peliculas') {
    endpointBusqueda = `https://api.themoviedb.org/3/search/movie?api_key=aad4ccb8efdd15fad341576d3301e95e&query=${busqueda};`
} else if (searchcriteria === 'series') {
    endpointBusqueda = `https://api.themoviedb.org/3/search/tv?api_key=aad4ccb8efdd15fad341576d3301e95e&query=${busqueda}`
} else {
    endpointBusqueda = `https://api.themoviedb.org/3/search/multi?api_key=aad4ccb8efdd15fad341576d3301e95e&query=${busqueda}`

}

