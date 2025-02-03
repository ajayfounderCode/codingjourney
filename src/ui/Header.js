import React, { useState } from "react";
import logo from '../assets/logo.png';
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll effect for header
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`navbar navbar-expand-lg navbar-dark ${isScrolled ? "bg-dark shadow animate_animated animate_fadeInDown" : ""
        }`}
      style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}
    >
      <div className="container">
        {/* Logo */}
        <img src={logo} class='logo-image' alt='website logo'></img>
        <a className="navbar-brand fs-3 fw-bold" href="#home">
          Coding Journey
        </a>

        {/* Hamburger Menu for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ready-projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Code
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Video
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Graphics
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#footer">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;