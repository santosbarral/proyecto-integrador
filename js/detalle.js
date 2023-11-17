let APIKey = "aad4ccb8efdd15fad341576d3301e95e";

let cargarPeliculaDetalle = async (id) => {
    try {
        let respuesta = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}`);
        let datos = await respuesta.json();
        let detalle = '';

        detalle += `
            <div class="pelicula">
                <img class="imgB" src="https://image.tmdb.org/t/p/w500/${datos.poster_path}">
                <h3 class="titulo">${datos.title}</h3>
                <p>Fecha de estreno: <br>${datos.release_date}</p>
                <p>Descripción: <br>${datos.overview}</p>
                <!-- Puedes mostrar más información según tus necesidades -->
            </div>
        `;

        document.getElementById('detallePelicula').innerHTML = detalle;
    } catch (error) {
        console.log(error);
    }
}

let urlParams = new URLSearchParams(location.search);
let id_pelicula = urlParams.get('id');

cargarPeliculaDetalle(id_pelicula);

