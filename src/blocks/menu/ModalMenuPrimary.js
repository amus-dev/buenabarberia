import React from "react";

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
          <a title="Home" href={process.env.PUBLIC_URL + "/"}>
            Inicio
          </a>
        </li>

        <li
          className={
            "nav-item" +
            (window.location.pathname === "/about" ? " current-nav-item" : "")
          }
        >
          <a title="Sobre nosotros" href={process.env.PUBLIC_URL + "/about-us"}>
            Sobre nosotros
          </a>
        </li>

        <li
          className={
            "nav-item" +
            (window.location.pathname === "/services-inside"
              ? " current-nav-item"
              : "")
          }
        >
          <a
            title="Servicios"
            href={process.env.PUBLIC_URL + "/services-inside"}
          >
            Servicios
          </a>
        </li>

        <li
          className={
            "nav-item" +
            (window.location.pathname === "/gallery" ? " current-nav-item" : "")
          }
        >
          <a title="Galería" href={process.env.PUBLIC_URL + "/gallery"}>
            Galería
          </a>
        </li>

        <li
          className={
            "nav-item" +
            (window.location.pathname === "/news" ? " current-nav-item" : "")
          }
        >
          <a title="Noticias" href={process.env.PUBLIC_URL + "/news"}>
            Noticias
          </a>
        </li>

        <li
          className={
            "nav-item" +
            (window.location.pathname === "/contacts"
              ? " current-nav-item"
              : "")
          }
        >
          <a title="Contactos" href={process.env.PUBLIC_URL + "/contacts"}>
            Contactos
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default ModalMenuPrimary;
