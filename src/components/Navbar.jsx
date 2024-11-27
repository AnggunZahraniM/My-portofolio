import React from "react";
import { Link } from "react-scroll";
import './Navbar.css'; // Assuming the styles will be in an external CSS file

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow">
      <div className="container-fluid d-flex justify-content-between align-items-center px-4">
        <a className="navbar-brand text-white" href="#home">
          Portfolio
        </a>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="skills" // Skills now placed first
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="projects" // Projects moved to the middle
                smooth={true}
                duration={500}
              >
                My Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="contact"
                smooth={true}
                duration={500}
              >
                My Social Media
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
