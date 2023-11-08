import React from "react";

// Ce composant représente le résultat de la recherche
const Movies = ({ movies }) => {
  // Lien IMDB
  const imdb = "https://imdb.com/title/";
  const star = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#fff82e" d="M16.23 18L12 15.45L7.77 18l1.12-4.81l-3.73-3.23l4.92-.42L12 5l1.92 4.53l4.92.42l-3.73 3.23L16.23 18M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/></svg>`

  return (
    <div className="movies">
      
      {movies.map((movie) => (
        <div className="movie" key={movie.imdbID}>
          <form className="favorite" method="POST" action="http://localhost:3002/api/save">
            <input type="hidden" name="imdbID" value={movie.imdbID} />
            <button type="submit" className="btn-favorite">
              <img src="https://api.iconify.design/mdi:star-circle.svg" alt="star" width="50" />
            </button>
          </form>
          <div className="movie-info">
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://placehold.co/300x450/000000/FFF?text=Non+disponible"
              }
              alt={movie.Title}
            />
            <h3>{movie.Title}</h3>
            <p>
              Voir les détails
              <a href={imdb + movie.imdbID} target="_blank">
                IMDB
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies;
