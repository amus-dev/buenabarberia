import React from "react";
import HeaderLogo from "../../blocks/logo/HeaderLogo";
import MenuModal from "../../components/modal/MenuModal";
import Actions from "../actions/Actions";
import { Link } from "react-router-dom";

const Header = ({ logoColor }) => {
  return (
    <header id="header" className="site-header">
      <div className="wrapper">
        <div className="header-content d-flex justify-content-between">
          <div className="header-left align-self-center">
            <div className="btnReservar btn btn-lg btn-before-dot btn-link">
              <a
                href="https://buenabarba.site.agendapro.com/cl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservar
              </a>
            </div>
            <div className="links">
              <div className="links-items">
                <div className="links-item">
                  <Link
                    className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto"
                    to={process.env.PUBLIC_URL + "/"}
                  >
                    INICIO
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="header-center align-self-center">
            <HeaderLogo logoColor={logoColor} />
          </div>

          <div className="header-right d-flex justify-content-end">
            <div className="d-flex align-items-center">
              <MenuModal />
            </div>

            <Actions />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
