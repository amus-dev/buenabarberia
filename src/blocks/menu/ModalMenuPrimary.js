import React from "react";
import { Link } from "react-router-dom";

const ModalMenuPrimary = () => {
  return (
    <nav className="menu-primary">
      <ul className="nav">
        <li
          className={
            "nav-item" +
            (window.location.pathname === "/" ? " current-nav-item" : "")
          }
        >
          <Link to={process.env.PUBLIC_URL + "/"}>Inicio</Link>
        </li>

        <li
          className={
            "nav-item" +
            (window.location.pathname === "/about" ? " current-nav-item" : "")
          }
        >
          <Link to={process.env.PUBLIC_URL + "/about-us"}>Sobre nosotros</Link>
        </li>

        <li
          className={
            "nav-item" +
            (window.location.pathname === "/services-inside"
              ? " current-nav-item"
              : "")
          }
        >
          <Link to={process.env.PUBLIC_URL + "/services-inside"}>
            Servicios
          </Link>
        </li>

        <li
          className={
            "nav-item" +
            (window.location.pathname === "/gallery" ? " current-nav-item" : "")
          }
        >
          <Link to={process.env.PUBLIC_URL + "/gallery"}>Galería</Link>
        </li>
      </ul>
    </nav>
  );
};

export default ModalMenuPrimary;
