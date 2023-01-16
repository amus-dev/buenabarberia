import React from "react";
import FooterMenu from "../footer/FooterMenu";

const Footer = () => {
  return (
    <footer id="footer" className="site-footer">
      <div className="wrapper">
        <div className="footer">
          <div className="d-flex flex-column">
            <div className="align-self-center">
              <FooterMenu />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
