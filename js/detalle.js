let APIKey = "aad4ccb8efdd15fad341576d3301e95e";

let cargarDetalle = async (id, tipo) => {
    try {
        let endpoint = '';

        if (tipo === 'pelicula') {
            endpoint = `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}`;
        } else if (tipo === 'serie') {
            endpoint = `https://api.themoviedb.org/3/tv/${id}?api_key=${APIKey}`;
        } else {
            console.error('error en el tipo');
            return;
        }

        let respuesta = await fetch(endpoint);
        let datos = await respuesta.json();
        let detalle = '';

        detalle += `
            <div class="pelicula">
                <img class="imgB" src="https://image.tmdb.org/t/p/w500/${datos.poster_path}">
                <h3 class="tituloDetalle">${datos.title || datos.name}</h3>
                <p>Fecha de estreno: ${datos.release_date || datos.first_air_date}</p>
                <p>Duración: ${datos.runtime || datos.episode_run_time} minutos</p>
                <p>Calificación: ${datos.vote_average} / 10.0</p>
                <p>Descripción: ${datos.overview}</p>
            </div>
        `;

        document.getElementById('detallePelicula').innerHTML = detalle;

        let botonAgregarFavorito = document.createElement('button');
        botonAgregarFavorito.textContent = 'Agregar a favoritos';
        botonAgregarFavorito.classList.add('botonFavorito'); 

        botonAgregarFavorito.addEventListener('click', () => {
            agregarAFavoritos(datos);
            alert('Película agregada a favoritos'); 
        });

        document.getElementById('detallePelicula').appendChild(botonAgregarFavorito);

    } catch (error) {
        console.error(error);
    }
};

let urlParams = new URLSearchParams(location.search);
let id = urlParams.get('id');
let tipo = urlParams.get('tipo');

cargarDetalle(id, tipo);

let agregarAFavoritos = (datos) => {
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    favoritos.push(datos);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
};
