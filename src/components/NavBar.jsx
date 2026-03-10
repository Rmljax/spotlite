import React, { useContext } from "react";
import logo from "../assets/spotlite_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faGear, faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function NavBar() {
  const { navActive } = useContext(AppContext);

  return (
    <nav className="nav__row row">
      <div className="nav__content">
        <img src={logo} alt="" className="nav__logo" />

        <div className="nav__links">
          <Link
            to="/"
            className={`nav__link ${navActive == "Home" ? "active" : null}`}
          >
            <FontAwesomeIcon icon={faHome} className="icon" />
            <span>Home</span>
          </Link>
          <Link
            to="/movies"
            className={`nav__link ${navActive == "Movies" ? "active" : null}`}
          >
            <FontAwesomeIcon icon={faFilm} className="icon" />
            <span>Movie</span>
          </Link>
          <a className="nav__link settings">
            <FontAwesomeIcon icon={faGear} className="icon" />
            <span>Settings</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
