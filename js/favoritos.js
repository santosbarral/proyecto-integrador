let mostrarDetalles = (favorito) => {
    let detalle = `
        <div class="pelicula">
            <img class="imgB" src="https://image.tmdb.org/t/p/w500/${favorito.poster_path}">
            <h3 class="tituloDetalle">${favorito.title || favorito.name}</h3>
            <p>Fecha de estreno: ${favorito.release_date || favorito.first_air_date}</p>
            <p>Duración: ${favorito.runtime || favorito.episode_run_time} minutos</p>
            <p>Calificación: ${favorito.vote_average} / 10.0</p>
            <p>Descripción: ${favorito.overview}</p>
            <button onclick="toggleFavorito(${JSON.stringify(favorito)})">Toggle favorito</button>
        </div>
    `;

    document.getElementById('detallePelicula').innerHTML = detalle;
};

let toggleFavorito = (favorito) => {
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    let index = favoritos.findIndex(fav => fav.id === favorito.id);

    if (index !== -1) {
        favoritos.splice(index, 1);
    } else {
        favoritos.push(favorito);
    }

    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    mostrarFavoritos(); 
};


let eliminarDeFavoritos = (id) => {
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    let nuevosFavoritos = favoritos.filter(favorito => favorito.id !== id);

    localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
    mostrarFavoritos(); 
};

let mostrarFavoritos = () => {
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    let listaFavoritosHTML = '';

    favoritos.forEach((favorito, index) => {
        listaFavoritosHTML += `
            <div class="favorito" onclick="mostrarDetalles(${JSON.stringify(favorito)})">
                <img src="https://image.tmdb.org/t/p/w500/${favorito.poster_path}" alt="${favorito.title || favorito.name}" class="imgFavorito">
                <div class="infoFavorito">
                    <h3>${favorito.title || favorito.name}</h3>
                    <button onclick="eliminarDeFavoritos(${favorito.id})">Quitar de favoritos</button>
                </div>
            </div>
        `;
    });

    document.getElementById('favoritosContainer').innerHTML = listaFavoritosHTML;
};

mostrarFavoritos(); 