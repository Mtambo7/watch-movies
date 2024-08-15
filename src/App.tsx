import { useEffect, useState } from "react";

import "./App.css";
import MovieCard from "./MovieCard";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=b32a83a3";

  const searchMovies = async (title: string) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("ironman");
  }, []);

  return (
    <div className="app">
      <h1>WATCH MOVIES</h1>
      <div className="search">
        <input
          placeholder="Search Movies"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <img
          src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
          alt="Search"
          onClick={() => searchMovies(search)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movie found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
