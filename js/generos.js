let cargarGenerosPeliculas = async () => {
  try {
      let APIKey = "aad4ccb8efdd15fad341576d3301e95e"
      let tipo = "pelicula"
      let respuesta = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${APIKey}`);
      let datos = await respuesta.json();
      let generos = '';

      datos.results.slice(0, 19).forEach((genero, index) => {
          generos += `
              <li> ${genero.genre} </li>                
          `;
      });

      document.getElementById('listaPeliculas').innerHTML = peliculas;

      let generosDOM = document.querySelectorAll('.genero');

      generosDOM.forEach(function(genero) {
          genero.addEventListener('click', function() {
              let id = genero.getAttribute('data-id');
              let detalleURL = `detalle.html?id=${encodeURIComponent(id)}&tipo=${tipo}`;
              window.location.href = detalleURL;
          });
      });

  } catch (error) {
      console.log(error);
  }
}



let cargarGenerosSeries = async () => {
  try {
      let APIKey = "aad4ccb8efdd15fad341576d3301e95e"
      let tipo = Serie
      let respuesta = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${APIKey}`);
      let datos = await respuesta.json();
      let generos = '';

      datos.results.slice(0, 19).forEach((genero, index) => {
          generos += `
              <li> ${genero.genre} </li>                
          `;
      });

      document.getElementById('listaSeries').innerHTML = series;

      let generosDOM = document.querySelectorAll('.genero');

      //seguir mañana

      generosDOM.forEach(function(genero) {
          genero.addEventListener('click', function() {
              let id = genero.getAttribute('data-id');
              let detalleURL = `detalle.html?id=${encodeURIComponent(id)}&tipo=${tipo}`;
              window.location.href = detalleURL;
          });
      });

  } catch (error) {
      console.log(error);
  }
}


cargarGenerosPeliculas()
cargarGenerosSeries()