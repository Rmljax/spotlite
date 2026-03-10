import React, { useContext, useEffect, useState } from "react";
import Movies from "../components/Movies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import MoviesSkeleton from "../components/ui/MoviesSkeleton";
import waiting from "../assets/waiting.png";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const { options, setNavActive, searchValue, setSearchValue } =
    useContext(AppContext);

  async function fetchData() {
    setLoading(true);
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false`,
      options,
    );
    console.log(data.results);
    setMovies(data.results);
  }
  setNavActive("Movies");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue(value);
  };

  useEffect(() => {
    fetchData();
    setLoading(false);
  }, [searchValue]);
  return (
    <div className="movies__page container">
      <form className="search__bar__wrapper" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a movie"
          className="search__bar"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button type="submit" className="search__btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      {movies?.length > 0 ? (
        <Movies movies={movies} />
      ) : loading === true ? (
        <MoviesSkeleton />
      ) : (
        <div className="nope">
          <img src={waiting} className="waiting" />
        </div>
      )}
    </div>
  );
}
