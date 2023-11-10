import { useEffect, useState } from "react";
import cinemaxLogo from "../assets/cinemax-lg.png";

import Search from "../components/Search";
import Movies from "../components/Movies";
import Nav from "../components/Nav";

export default function Home() {
  const API = "https://www.omdbapi.com/?apikey=ffe9f21a";
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const searchMovies = async (searchValue) => {
    const response = await fetch(API + "&s=" + searchValue);
    const data = await response.json();
    if (data.Search) {
      setMovies(data.Search);
    }
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("");
  }, []);

  return (
    <>
      <Nav />
      <div className="App">
        <header>
          <img src={cinemaxLogo} className="logo" alt="logo cinemax" />
          <Search
            search={search}
            setSearch={setSearch}
            searchMovies={searchMovies}
          />
        </header>
        <main>
          <Movies movies={movies} />
        </main>
      </div>
    </>
  );
}
