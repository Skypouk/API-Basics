import React from "react";
import { NavLink } from "react-router-dom";
import main_logo from "assets/coding.png";

export const MobileNavBarBrand = ({ handleClick }) => {
  return (
    <div onClick={handleClick} className="mobile-nav-bar__brand">
      <NavLink to="/">
        <img
          className="mobile-nav-bar__logo"
          src={main_logo}
          alt="Skypouk logo"
        />
      </NavLink>
    </div>
  );
};
