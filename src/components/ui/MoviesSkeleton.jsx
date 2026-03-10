import React from "react";

export default function MoviesSkeleton() {
  return (
    <section id="movies">
      <div className="movies__content">
        <div className="movies__list" id="movies-list">
          {new Array(6).fill(<div className="movie--skeleton skeleton"></div>)}
        </div>
      </div>
    </section>
  );
}
