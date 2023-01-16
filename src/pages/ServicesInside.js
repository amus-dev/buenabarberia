import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";

import Loading from "../blocks/loading/Loading";
import Header from "../blocks/header/Header";
import PageTitleServicesInside from "../blocks/page-title/PageTitleServicesInside";
import Footer from "../blocks/footer/Footer";
import BackToServices from "../components/button/BackToServices";

const ServicesInside = () => {
  document.body.classList.add("single");
  document.body.classList.add("single-adveits_services");
  document.body.classList.remove("home");
  document.body.classList.remove("header-absolute-true");
  return (
    <Fragment>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>Service inside | Chop - Barber Shop React JS Template</title>

        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow, noodp" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
      </MetaTags>

      <Loading />

      <Header logoColor="dark" />

      <main id="main" className="site-main">
        <PageTitleServicesInside />

        <div id="page-content" className="spacer p-top-xl">
          <div className="wrapper">
            <div className="content">
              <div id="single">
                <div id="single-content">
                  <div id="img" className="block">
                    <div className="img-no-wrap-1">
                      <div className="img object-fit">
                        <div className="object-fit-cover">
                          <img
                            src="assets/img/placeholder/1600x700.jpg"
                            alt="Servicios"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="description" className="block spacer p-top-xl">
                    <div className="description">
                      <p>
                        Buena Barba Barberia y Academia es una barbería
                        inspirada en el estilo clásico europeo que dio origen a
                        este oficio, pensando en el hombre actual y sus
                        necesidades creamos un espacio que combina lo clásico
                        con lo moderno y ofrecemos una variedad de servicios
                        para satisfacer a los clientes mas exigentes. Visítanos
                        y descubre porque nos prefieren.
                      </p>
                    </div>
                  </div>

                  <div id="price-list" className="block spacer p-top-xl">
                    <div className="price-list">
                      <div className="price-list-items">
                        <div className="price-list-item">
                          <div className="price-list-item-title">
                            <h3>Lista de Precios</h3>
                          </div>

                          <ul className="price-list-item-list-group list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                              <span className="list-group-title">
                                Corte de Cabello
                              </span>
                              <span className="list-group-price">$12.000</span>
                            </li>

                            <li className="list-group-item d-flex justify-content-between align-items-center">
                              <span className="list-group-title">
                                Ritual de Barba
                              </span>
                              <span className="list-group-price">$10.000</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                              <span className="list-group-title">
                                Corte de Cabello + Ritual de Barba
                              </span>
                              <span className="list-group-price">$20.000</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                              <span className="list-group-title">
                                Tratamiento Facial
                              </span>
                              <span className="list-group-price">$13.000</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                              <span className="list-group-title">
                                Limpieza facial
                              </span>
                              <span className="list-group-price">$9.000</span>
                            </li>

                            <li className="list-group-item d-flex justify-content-between align-items-center">
                              <span className="list-group-title">
                                Barba Vip
                              </span>
                              <span className="list-group-price">$13.000</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                              <span className="list-group-title">
                                Servicio de permanente
                              </span>
                              <span className="list-group-price">$45.000</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <BackToServices /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default ServicesInside;
