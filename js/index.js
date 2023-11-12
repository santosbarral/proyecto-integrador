let cargarPeliculas = async () => {
    try {
        let respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=aad4ccb8efdd15fad341576d3301e95e`);
        let datos = await respuesta.json();
        let peliculas = '';

        // Limitar a un máximo de 8 películas
        datos.results.slice(0, 12).forEach((pelicula, index) => {
            peliculas += `
                <div class="pelicula">
                    <img class="imgB" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                    <h3 class="titulo">${pelicula.title}</h3>
                    <p>Fecha de estreno: <br>${pelicula.release_date}</p>
                </div>
            `;
        });

        document.getElementById('pelPopulares').innerHTML = peliculas;

    } catch (error) {
        console.log(error);
    }
}
cargarPeliculas();


let cargarSeries = async () => {
    try {
        let respuesta = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=aad4ccb8efdd15fad341576d3301e95e`);
        let datos = await respuesta.json();
        let series = '';

        // Limitar a un máximo de 8 películas
        datos.results.slice(0, 12).forEach((serie, index) => {
            series += `
                <div class="pelicula">
                    <img class="imgB" src="https://image.tmdb.org/t/p/w500/${serie.poster_path}">
                    <h3 class="titulo">${serie.name}</h3>
                    <p>Fecha de estreno: <br>${serie.first_air_date}</p>
                </div>
            `;
        });

        document.getElementById('serPopulares').innerHTML = series;

    } catch (error) {
        console.log(error);
    }
}
cargarSeries();

let cargarMejorCalificadas = async () => {
    try {
        let respuesta = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=aad4ccb8efdd15fad341576d3301e95e`);
        let datos = await respuesta.json();
        let peliculas = '';

        // Limitar a un máximo de 8 películas
        datos.results.slice(0, 12).forEach((pelicula, index) => {
            peliculas += `
                <div class="pelicula">
                    <img class="imgB" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                    <h3 class="titulo">${pelicula.title}</h3>
                    <p>Fecha de estreno: <br>${pelicula.release_date}</p>
                </div>
            `;
        });

        document.getElementById('mejorCalificado').innerHTML = peliculas;

    } catch (error) {
        console.log(error);
    }
}
cargarMejorCalificadas();
