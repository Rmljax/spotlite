import React, { useContext, useEffect, useState } from "react";
import postertest from "../assets/postertest.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Movies from "../components/Movies";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import MoviesSkeleton from "../components/ui/MoviesSkeleton";
import MoviePageSkeleton from "../components/ui/MoviePageSkeleton";

export default function MoviePage() {
  const [movie, setMovie] = useState();
  const [similarMovies, setSimilarMovies] = useState();
  const { id } = useParams();
  const { options, setNavActive } = useContext(AppContext);

  setNavActive("");

  async function fetchData() {
    const resOne = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}`,
      options,
    );
    const resTwo = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/similar`,
      options,
    );
    console.log(resOne.data);
    console.log(resTwo.data.results);

    setMovie(resOne.data);
    setSimilarMovies(resTwo.data.results);
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className="movie__page">
      {movie ? (
        <div className="movie__wrapper">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
            alt=""
            className="movie__page__image"
          />
          <div className="movie__text__wrapper">
            <h1 className="movie__title">{movie?.title}</h1>
            <span className="movie__info">
              {movie?.release_date} . {movie?.runtime} min .{" "}
              {Math.round(movie?.vote_average)}/10
            </span>
            <h3 className="movie__overview">Overview:</h3>
            <p className="movie__para">{movie?.overview}</p>
            <button className="movie__watch__btn">
              <FontAwesomeIcon icon={faPlay} />
              Watch
            </button>
          </div>
        </div>
      ) : (
        <MoviePageSkeleton />
      )}

      <h2 className="recommended__title">Recommended Movies</h2>
      {similarMovies?.length > 0 ? (
        <Movies movies={similarMovies} />
      ) : (
        <MoviesSkeleton />
      )}
    </div>
  );
}
