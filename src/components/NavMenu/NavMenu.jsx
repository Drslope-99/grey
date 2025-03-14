import React from "react";
import "./NavMenu.css";

const NavMenu = ({ isOpen, clicked }) => {
  return (
    <ul className={`nav__list ${isOpen ? "active" : ""}`}>
      <li className="nav__list-item">
        <a href="#" className="nav__link" onClick={clicked}>
          home
        </a>
      </li>
      <li className="nav__list-item">
        <a href="#about" className="nav__link" onClick={clicked}>
          about
        </a>
      </li>
      <li className="nav__list-item">
        <a href="#services" className="nav__link" onClick={clicked}>
          services
        </a>
      </li>
      <li className="nav__list-item">
        <a href="#" className="nav__link" onClick={clicked}>
          projects
        </a>
      </li>
      <li className="nav__list-item">
        <a href="#testimonial" className="nav__link" onClick={clicked}>
          testimonial
        </a>
      </li>
      <li className="nav__list-item">
        <a href="#footer" className="nav__link" onClick={clicked}>
          contact us
        </a>
      </li>
    </ul>
  );
};

export default NavMenu;
