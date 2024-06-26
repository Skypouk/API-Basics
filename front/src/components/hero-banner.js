import React from "react";

export const HeroBanner = () => {
  const logo = "https://cdn.auth0.com/blog/developer-hub/react-logo.svg";

  return (
    <div className="hero-banner hero-banner--pink-yellow">
      <div className="hero-banner__logo">
        <img className="hero-banner__image" src={logo} alt="React logo" />
      </div>
      <h1 className="hero-banner__headline">Welcome on my website project!</h1>
      <p className="hero-banner__description">
        This is a sample <strong>Skypouk's</strong> project that applies and
        combine a number of technologies into a single application.
      </p>
    </div>
  );
};
