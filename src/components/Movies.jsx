import React, { useContext, useEffect, useState } from "react";
import Movie from "./ui/Movie";
import axios from "axios";
import { AppContext } from "../context/AppContext";

export default function Movies({ movies }) {
  return (
    <section id="movies">
      <div className="movies__content">
        <div className="movies__list" id="movies-list">
          {movies?.length > 0
            ? movies
                .slice(0, 6)
                .map((movie) => <Movie key={movie.id} movie={movie} />)
            : null}
        </div>
      </div>
    </section>
  );
}
