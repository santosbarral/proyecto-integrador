let APIKey = "aad4ccb8efdd15fad341576d3301e95e";
let urlparams = new URLSearchParams(location.search);
let id_pelicula = urlparams.get('id');
console.log(id_pelicula);

let cargarPeliculas = async () => {
    try {
        
        let respuesta = await fetch(`https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${APIKey}`);
        let datos = await respuesta.json();
        let peliculas = '';

        datos.results.slice(0, 1).forEach((pelicula, index) => {
            peliculas += `
                <div class="pelicula">
                    <img class="imgB" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                    <h3 class="titulo">${pelicula.title}</h3>
                    <p>Fecha de estreno: <br>${pelicula.release_date}</p>
                </div>
            `;
        });

        document.getElementById('detallePelicula').innerHTML = peliculas;

    } catch (error) {
        console.log(error);
    }

}

cargarPeliculas();