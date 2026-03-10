import React, { useContext, useEffect, useState } from "react";
import Landing from "../components/Landing";
import Movies from "../components/Movies";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import MoviesSkeleton from "../components/ui/MoviesSkeleton";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const { options, setNavActive, setSearchValue } = useContext(AppContext);

  async function fetchData() {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing`,
      options,
    );
    setMovies(data.results);
  }

  useEffect(() => {
    fetchData();
    setNavActive("Home");
    setSearchValue("");
  }, []);
  return (
    <div>
      <Landing />
      {movies.length > 0 ? <Movies movies={movies} /> : <MoviesSkeleton />}
    </div>
  );
}
