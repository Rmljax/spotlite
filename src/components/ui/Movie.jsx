import React, { useState } from "react";
import postertest from "../../assets/postertest.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Movie({ movie }) {
  return (
    <div className="movie">
      <figure className="movie__image__wrapper">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
          className="movie__image"
        />
        <h3 className="movie__more__title">{movie.title}</h3>
        <Link to={`/movies/${movie.id}`} className="movie__more__btn">
          Find Out More
        </Link>
      </figure>
    </div>
  );
}
