let cargarPeliculas = async () => {
    try {
        let tipo = "pelicula"
        let respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=aad4ccb8efdd15fad341576d3301e95e`);
        let datos = await respuesta.json();
        let peliculas = '';

        datos.results.slice(0, 12).forEach((pelicula, index) => {
            peliculas += `
                <div class="pelicula" data-id="${pelicula.id}">
                    <img class="imgB" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                    <h3 class="titulo">${pelicula.title}</h3>
                    <p class="id" style="display: none;">${pelicula.id}</p>
                    <p class="hide">Fecha de estreno: <br>${pelicula.release_date}</p>
                </div>
            `;
        });

        document.getElementById('pelPopulares').innerHTML = peliculas;

        let peliculasDOM = document.querySelectorAll('.pelicula');

        peliculasDOM.forEach(function(pelicula) {
            pelicula.addEventListener('click', function() {
                let id = pelicula.getAttribute('data-id');
                let detalleURL = `detalle.html?id=${encodeURIComponent(id)}&tipo=${tipo}`;
                window.location.href = detalleURL;
            });
        });

    } catch (error) {
        console.log(error);
    }
}

let cargarSeries = async () => {
    try {
        let tipo = "serie"
        let respuesta = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=aad4ccb8efdd15fad341576d3301e95e`);
        let datos = await respuesta.json();
        let series = '';

        datos.results.slice(0, 12).forEach((serie, index) => {
            series += `
                <div class="serie" data-id="${serie.id}">
                    <img class="imgB" src="https://image.tmdb.org/t/p/w500/${serie.poster_path}">
                    <h3 class="titulo">${serie.name}</h3>
                    <p class="id hide" style="display: none;">${serie.id}</p>
                    <p class="hide">Fecha de estreno: <br>${serie.first_air_date}</p>
                </div>
            `;
        });

        document.getElementById('serPopulares').innerHTML = series;

        let seriesDOM = document.querySelectorAll('.serie');

        seriesDOM.forEach(function(serie) {
            serie.addEventListener('click', function() {
                let id = serie.getAttribute('data-id');
                let detalleURL = `detalle.html?id=${encodeURIComponent(id)}&tipo=${tipo}`;
                window.location.href = detalleURL;
            });
        });

    } catch (error) {
        console.log(error);
    }
}

let cargarMejorCalificadas = async () => {
    try {
        let tipo = "pelicula"
        let respuesta = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=aad4ccb8efdd15fad341576d3301e95e`);
        let datos = await respuesta.json();
        let peliculas = '';

        datos.results.slice(0, 12).forEach((pelicula, index) => {
            peliculas += `
                <div class="pelicula" data-id="${pelicula.id}">
                    <img class="imgB" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                    <h3 class="titulo">${pelicula.title}</h3>
                    <p class="id" style="display: none;">${pelicula.id}</p>
                    <p class="hide">Fecha de estreno: <br>${pelicula.release_date}</p>
                </div>
            `;
        });

        document.getElementById('mejorCalificado').innerHTML = peliculas;

        let peliculasDOM = document.querySelectorAll('.pelicula');

        peliculasDOM.forEach(function(pelicula) {
            pelicula.addEventListener('click', function() {
                let id = pelicula.getAttribute('data-id');
                let detalleURL = `detalle.html?id=${encodeURIComponent(id)}&tipo=${tipo}`;
                window.location.href = detalleURL;
            });
        });

    } catch (error) {
        console.log(error);
    }
}

cargarPeliculas();
cargarSeries();
cargarMejorCalificadas();