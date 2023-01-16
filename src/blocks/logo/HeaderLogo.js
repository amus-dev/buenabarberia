import React from "react";
import { Link } from "react-router-dom";

const HeaderLogo = ({ logoColor }) => {
  return (
    <div className="header-logo">
      <Link
        className="logo logo-secondary transform-scale-h"
        title="Logo"
        to={process.env.PUBLIC_URL + "/"}
      >
        <img src={"assets/img/logo/logo-" + logoColor + ".svg"} alt="Logo" />
      </Link>
    </div>
  );
};

export default HeaderLogo;
