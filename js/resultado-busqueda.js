let string = location.search
let data = new URLSearchParams(string);
let busqueda = data.get("busqueda")
let criterio = data.get("criterio")
console.log(criterio);

if (criterio === 'peliculas') {
    DetallePelicula = `https://api.themoviedb.org/3/search/movie?api_key=aad4ccb8efdd15fad341576d3301e95e&query=${busqueda};`
} else if (criterio === 'series') {
    DetallePelicula = `https://api.themoviedb.org/3/search/tv?api_key=aad4ccb8efdd15fad341576d3301e95e&query=${busqueda}`
} else {
    DetallePelicula = `https://api.themoviedb.org/3/search/multi?api_key=aad4ccb8efdd15fad341576d3301e95e&query=${busqueda}`
}

let cargarResultados = async() => {
    try {
        let respuesta = await fetch(DetallePelicula);
        let datos = await respuesta.json();
        let series = '';

     
        datos.results.slice(0, 12).forEach((resultado, index) => {
            resultados += `
                <div class="pelicula">
                    <img class="imgB" src="https://image.tmdb.org/t/p/w500/${resultado.poster_path}">
                    <h3 class="titulo">${resultado.name}</h3>
                    <p>Fecha de estreno: <br>${resultado.first_air_date}</p>
                    <p><br>${resultado.overview}</p>
                </div>
            `;
        });

        document.getElementById('resultadoBusqueda').innerHTML = resultados;

    } catch(error) {
        console.log(error);
    }
}
cargarResultados();
        
 //let imagen = document.querySelector('#imagen');
        //imagen.src = "https://image.tmdb.org/t/p/w500/" + data.poster_path

        //let titulo = document.querySelector('#Titulo');
        //titulo.innerHTML = data.title

        //let sinopsis = document.querySelector('#sinopsis');
        //sinopsis.innerHTML = data.overview

        //fechaestreno = document.querySelector('#fechaestrenoid');
        //fechaestreno.innerHTML = 'Fecha de estreno:' + ' ' + data.release_date

        //valoracion = document.querySelector('#valoracion');
        //valoracion.innerHTML = 'Valoración: ' + data.vote_average + ' / 10'

        //for (let index = 0; index < data.genres.length; index++) {


