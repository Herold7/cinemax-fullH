import React from "react";

// Ce composant représente la barre de recherche
const Search = ({ search, setSearch, searchMovies }) => {
  // On paramètre la fonction hundleSubmit pour récupérer la valeure
  const handleSubmit = (e) => {
    // On récupère la valeure
    e.preventDefault();
    // On affecte la valeure à la fonction de recherche
    searchMovies(search);
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Quel film recherchez-vous ?"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn" type="submit">Rechercher</button>
      </form>
    </div>
  );
};

export default Search;
