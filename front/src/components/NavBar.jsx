import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const toggleNavbar = () => {
    setNav(!nav);
    console.log(`nav is ${nav ? "True" : "False"}`);
  };
  return (
    <header className="navbar">
      <h1 className="nav-logo">Portfolio</h1>
      <nav className={`nav-overlay ${nav ? "nav-active" : ""}`}>
        <ul className="nav-list">
          <li>
            <a href="/#home" onClick={toggleNavbar}>
              Home
            </a>
          </li>
          <li>
            <a href="/#skills" onClick={toggleNavbar}>
              Skills
            </a>
          </li>
          <li>
            <a href="/#xp" onClick={toggleNavbar}>
              Experience
            </a>
          </li>
        </ul>
      </nav>
      <button className="mobile-btn" onClick={toggleNavbar}>
        {nav ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
};

export default Navbar;
