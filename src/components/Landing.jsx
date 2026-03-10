import React, { useContext, useState } from "react";
import brick_wall from "../assets/brickwall.jpeg";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const { setSearchValue } = useContext(AppContext);
  const navigate = useNavigate();

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      setSearchValue(e.target.value);
      navigate("/movies");
    }
  }

  return (
    <section id="landing">
      <div className="landing__background">
        <figure className="background__wrapper">
          <img src={brick_wall} alt="" className="background__image" />
          <div className="background__text">
            <h1 className="background__title">
              Spot<span>Lite</span>
            </h1>
            <h2 className="background__subtitle">
              With over <span>3000</span> movies on SpotLite, anything is
              possible!
            </h2>
            <div className="background__search">
              <div className="movie__input__wrapper form__submit">
                <input
                  type="text"
                  className="movie__input"
                  placeholder="Find a movie"
                  onKeyUp={handleKeyPress}
                />
              </div>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
