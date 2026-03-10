import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import MoviesPage from "./pages/MoviesPage";
import MoviePage from "./pages/MoviePage";
import { AppContext } from "./context/AppContext";
import { useState } from "react";

function App() {
  const [navActive, setNavActive] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzJlMTViNTFiNjM0NmQzYWM2OGE0OWU0NzNhYzNiZCIsIm5iZiI6MTc2ODcyMzc0Ny45Njk5OTk4LCJzdWIiOiI2OTZjOTUyMzZmNGViMzE2ZDFhYWE4NmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.u3ASu7qqFHvYDBix8T0oqqpC1Fwet1Om4zOJgOI1Byg",
    },
  };

  return (
    <AppContext.Provider
      value={{ options, navActive, setNavActive, searchValue, setSearchValue }}
    >
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
