import React from "react";
import main_logo from "../assets/coding.png";

export const HeroBanner = () => {
  return (
    <div className="hero-banner hero-banner--pink-yellow">
      <div className="hero-banner__logo">
        <img
          className="hero-banner__image"
          src={main_logo}
          alt="Skypouk logo"
        />
      </div>
      <h1 className="hero-banner__headline">Welcome on my website project!</h1>
      <p className="hero-banner__description">
        This is a sample <strong>Skypouk's</strong> project that applies and
        combine a number of technologies into a single application.
      </p>
    </div>
  );
};
