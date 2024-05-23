import React from "react";
import "./navbar.css";

function NavBar({ scrollToSection }) {
  return (
    <nav className="Navbar">
      <div className="Left-Navbar">
        <ul>
          <li>
            <button onClick={() => scrollToSection("home")}>
              Rosendo Marquez
            </button>
          </li>
        </ul>
      </div>

      <div className="Right-Navbar">
        <ul>
          <li>
            <button onClick={() => scrollToSection("about")}>About</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("projects")}>
              Experience
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("extracurriculars")}>
              Extracurriculars
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
