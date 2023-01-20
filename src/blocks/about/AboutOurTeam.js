import React from "react";

import ruben from "../../assets/img/sliders/RUBEN.jpeg";
import robert from "../../assets/img/sliders/ROBERT.jpg";
import jesus from "../../assets/img/sliders/JESUS.jpeg";

const AboutOurTeam = () => {
  return (
    <div id="our-team" className="block spacer p-top-xl">
      <div className="title">
        <h2 className="hr">Nuestro Equipo</h2>
      </div>

      <div className="row gutter-width-sm with-pb-md">
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <div className="team-member">
            <div className="img object-fit">
              <div className="object-fit-cover">
                <img src={ruben} alt="Rubén" />
              </div>
            </div>

            <div className="team-member-content">
              <h4 className="team-member-t-head">Rubén</h4>
              <div className="team-member-description">
                <p>
                  Barbero y educador de Buena Barba, es un apasionado por la
                  barberia, cuenta con más de 7 años de experiencia, además de
                  cursos y certificados que avalan su profesionalismo, agenda tu
                  hora con él.
                </p>
              </div>
            </div>

            <nav className="team-member-nav-items">
              <ul className="nav">
                <li className="nav-item">
                  <a title="Facebook" href="https://www.facebook.com/adveits/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    title="LinkedIn"
                    href="https://www.linkedin.com/company/18135051/"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    title="Instagram"
                    href="https://www.instagram.com/adveits/"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <div className="team-member">
            <div className="img object-fit">
              <div className="object-fit-cover">
                <img src={robert} alt="Robert" />
              </div>
            </div>

            <div className="team-member-content">
              <h4 className="team-member-t-head">Robert</h4>

              <div className="team-member-description">
                <p>
                  Barbero con 8 años de experiencia en países como Venezuela,
                  Perú y actualmente en Chile como parte del equipo de Buena
                  Barba, detallista y cuidadoso en cada servicio para lograr los
                  mejores resultados, agenda tu hora con él.
                </p>
              </div>
            </div>

            <nav className="team-member-nav-items">
              <ul className="nav">
                <li className="nav-item">
                  <a title="Facebook" href="https://www.facebook.com/adveits/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    title="LinkedIn"
                    href="https://www.linkedin.com/company/18135051/"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    title="Instagram"
                    href="https://www.instagram.com/adveits/"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <div className="team-member">
            <div className="img object-fit">
              <div className="object-fit-cover">
                <img src={jesus} alt="Tom Henders" />
              </div>
            </div>

            <div className="team-member-content">
              <h4 className="team-member-t-head">Jesus</h4>

              <div className="team-member-description">
                <p>
                  Nuestro barbero Jesus quien cuenta con 5 año s de experiencia
                  en barberia se caracteriza por el cuidado al detalle y el
                  trato amable con sus clientes, atento a sus exigencias para
                  lograr los resultados deseados, agenda tu hora con él.
                </p>
              </div>
            </div>

            <nav className="team-member-nav-items">
              <ul className="nav">
                <li className="nav-item">
                  <a title="Facebook" href="https://www.facebook.com/adveits/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    title="LinkedIn"
                    href="https://www.linkedin.com/company/18135051/"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    title="Instagram"
                    href="https://www.instagram.com/adveits/"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOurTeam;
