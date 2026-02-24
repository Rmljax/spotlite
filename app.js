apiKey = "372e15b51b6346d3ac68a49e473ac3bd";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzJlMTViNTFiNjM0NmQzYWM2OGE0OWU0NzNhYzNiZCIsIm5iZiI6MTc2ODcyMzc0Ny45Njk5OTk4LCJzdWIiOiI2OTZjOTUyMzZmNGViMzE2ZDFhYWE4NmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.u3ASu7qqFHvYDBix8T0oqqpC1Fwet1Om4zOJgOI1Byg",
  },
};
async function fetchMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?`,
    options,
  );
  const data = await response.json();
  const movies = data.results;
  return movies;
}

async function fetchSearch(keyWord) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${keyWord}`,
    options,
  );
  const data = await response.json();
  const movies = data.results;
  return movies;
}

async function renderMovies(searchValue = null) {
  try {
    const moviesList = document.querySelector("#movies-list");
    moviesList.innerHTML = `<i class="fa-solid fa-spinner movies__spinner"></i>`;
    let movies = await fetchMovies();

    if (searchValue !== null) {
      movies = await fetchSearch(searchValue);
    }
    moviesList.innerHTML = movies
      .slice(0, 6)
      .map(
        (movie) => `<div class="movie">
                            <figure class="movie__image__wrapper">
                                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="" class="movie__image">
                                <h3 class="movie__info__title">${movie.title}</h3>
                                <div class="movie__info__list">
                                    <div class="movie__info movie__info1">
                                        <i class="fa-solid fa-clock"></i>
                                        <p class="movie__info__text">${movie.release_date}</p>
                                    </div>
                                    <div class="movie__info movie__info2">
                                        <i class="fa-solid fa-star"></i>
                                        <p class="movie__info__text">${movie.vote_average.toFixed(1)}</p>
                                    </div>
                                    <div class="movie__info movie__info3">
                                        <i class="fa-solid fa-earth-americas"></i>
                                        <p class="movie__info__text">${movie.original_language.toUpperCase()}</p>
                                    </div>
                                </div>
                            </figure>
                            <h4 class="movie__title">${movie.title}</h4>
                        </div>`,
      )
      .join("");
  } catch (e) {
    alert(e);
  }
}

function searchBarEvent(event) {
  if (event.key === "Enter") {
    const searchValue = document.querySelector("#search-input").value;
    document.querySelector("#search-input").value = "";
    document.querySelector("#search-text").innerHTML = `"${searchValue}"`;
    renderMovies(searchValue);
  }
}
function searchNavEvent(event) {
  if (event.key === "Enter") {
    const searchValue = document.querySelector("#nav-input").value;
    document.querySelector("#nav-input").value = "";
    document.querySelector("#search-text").innerHTML = `"${searchValue}"`;
    renderMovies(searchValue);
  }
}

function searchBarClick() {
  const searchValue = document.querySelector("#search-input").value;
  document.querySelector("#search-input").value = "";
  document.querySelector("#search-text").innerHTML = `"${searchValue}"`;
  renderMovies(searchValue);
}

function searchActive() {
  document.querySelector(".nav__input").focus();
}

renderMovies();
