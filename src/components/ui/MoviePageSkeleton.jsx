import React from "react";

export default function MoviePageSkeleton() {
  return (
    <div className="movie__wrapper">
      <div className="movie__page__image--skeleton skeleton" />
      <div className="movie__text__wrapper">
        <h1 className="movie__title--skeleton skeleton"></h1>
        <span className="movie__info--skeleton skeleton"></span>
        <h3 className="movie__overview">Overview:</h3>
        <p className="movie__para--skeleton skeleton"></p>
        <p className="movie__para--skeleton skeleton"></p>
        <p className="movie__para--skeleton skeleton"></p>
        <p className="movie__para--skeleton skeleton"></p>
        <button className="movie__watch__btn--skeleton skeleton"></button>
      </div>
    </div>
  );
}
