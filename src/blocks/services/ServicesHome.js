import React, { Component } from "react";
import Swiper from "swiper";

// Images
import Image1 from "../../assets/img/sliders/img-1.JPG";
import Image2 from "../../assets/img/sliders/img-2.JPG";
import Image3 from "../../assets/img/sliders/img-3.JPG";
import Image4 from "../../assets/img/sliders/img-4.JPG";
import Image5 from "../../assets/img/sliders/img-5.JPG";
import Image6 from "../../assets/img/sliders/img-6.JPG";
import Image7 from "../../assets/img/sliders/img-7.JPG";
import Image8 from "../../assets/img/sliders/img-8.JPG";
import Image9 from "../../assets/img/sliders/img-9.JPG";

class ServicesHome extends Component {
  componentDidMount() {
    new Swiper(".adv-slider-services .adv-swiper-container", {
      // ADV swiper
      noSwipingClass: "adv-swiper-no-swiping",
      containerModifierClass: "adv-swiper-container-",
      slideClass: "adv-swiper-slide",
      slideBlankClass: "adv-swiper-slide-invisible-blank",
      slideActiveClass: "adv-swiper-slide-active",
      slideDuplicateActiveClass: "adv-swiper-slide-duplicate-active",
      slideVisibleClass: "adv-swiper-slide-visible",
      slideDuplicateClass: "adv-swiper-slide-duplicate",
      slideNextClass: "adv-swiper-slide-next",
      slideDuplicateNextClass: "adv-swiper-slide-duplicate-next",
      slidePrevClass: "adv-swiper-slide-prev",
      slideDuplicatePrevClass: "adv-swiper-slide-duplicate-prev",
      wrapperClass: "adv-swiper-wrapper",
      navigation: {
        disabledClass: "adv-swiper-button-disabled",
        hiddenClass: "adv-swiper-button-hidden",
        lockClass: "adv-swiper-button-lock",
        nextEl: ".adv-2-swiper-button-next",
        prevEl: ".adv-2-swiper-button-prev",
      },
      spaceBetween: 0,
      slidesPerView: "auto",
    });
  }

  render() {
    return (
      <section id="services" className="block">
        <div className="adv-slider-services">
          <div className="adv-swiper-container">
            <div className="adv-swiper-wrapper services-items clearfix">
              <a
                title="Corte de cabello"
                className="adv-swiper-slide services-item"
                href={process.env.PUBLIC_URL + "/services-inside"}
              >
                <div className="services-item-content">
                  <h3 className="services-item-t-head">Corte de Cabello</h3>

                  <span className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto link-no-space">
                    Ver más
                  </span>
                </div>

                <div className="img object-fit">
                  <div className="object-fit-cover">
                    <img src={Image7} alt="Corte de cabello" />
                  </div>
                </div>

                <div className="img-bg-color"></div>
              </a>

              <a
                title="Ritual de Barba"
                className="adv-swiper-slide services-item"
                href={process.env.PUBLIC_URL + "/services-inside"}
              >
                <div className="services-item-content">
                  <h3 className="services-item-t-head">Ritual de Barba</h3>

                  <span className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto link-no-space">
                    Ver más
                  </span>
                </div>

                <div className="img object-fit">
                  <div className="object-fit-cover">
                    <img src={Image9} alt="Ritual de Barba" />
                  </div>
                </div>

                <div className="img-bg-color"></div>
              </a>

              <a
                title="Corte de Cabello + Ritual de Barba"
                className="adv-swiper-slide services-item"
                href={process.env.PUBLIC_URL + "/services-inside"}
              >
                <div className="services-item-content">
                  <h3 className="services-item-t-head">
                    Corte de Cabello y Ritual de Barba
                  </h3>

                  <span className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto link-no-space">
                    Ver más
                  </span>
                </div>

                <div className="img object-fit">
                  <div className="object-fit-cover">
                    <img
                      src={Image8}
                      alt="Corte de Cabello + Ritual de Barba"
                    />
                  </div>
                </div>

                <div className="img-bg-color"></div>
              </a>

              <a
                title="Tratamiento Facial"
                className="adv-swiper-slide services-item"
                href={process.env.PUBLIC_URL + "/services-inside"}
              >
                <div className="services-item-content">
                  <h3 className="services-item-t-head">Tratamiento Facial</h3>

                  <span className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto link-no-space">
                    ver más
                  </span>
                </div>

                <div className="img object-fit">
                  <div className="object-fit-cover">
                    <img src={Image6} alt="Tratamiento Facial" />
                  </div>
                </div>

                <div className="img-bg-color"></div>
              </a>
              <a
                title="Limpieza facial"
                className="adv-swiper-slide services-item"
                href={process.env.PUBLIC_URL + "/services-inside"}
              >
                <div className="services-item-content">
                  <h3 className="services-item-t-head">Limpieza facial</h3>

                  <span className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto link-no-space">
                    ver más
                  </span>
                </div>

                <div className="img object-fit">
                  <div className="object-fit-cover">
                    <img src={Image5} alt="Limpieza facial" />
                  </div>
                </div>

                <div className="img-bg-color"></div>
              </a>
              <a
                title="Barba Vip"
                className="adv-swiper-slide services-item"
                href={process.env.PUBLIC_URL + "/services-inside"}
              >
                <div className="services-item-content">
                  <h3 className="services-item-t-head">Barba Vip</h3>

                  <span className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto link-no-space">
                    ver más
                  </span>
                </div>

                <div className="img object-fit">
                  <div className="object-fit-cover">
                    <img src={Image4} alt="Barba Vip" />
                  </div>
                </div>

                <div className="img-bg-color"></div>
              </a>
              <a
                title="Servicio de permanente"
                className="adv-swiper-slide services-item"
                href={process.env.PUBLIC_URL + "/services-inside"}
              >
                <div className="services-item-content">
                  <h3 className="services-item-t-head">
                    Servicio de permanente
                  </h3>

                  <span className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto link-no-space">
                    ver más
                  </span>
                </div>

                <div className="img object-fit">
                  <div className="object-fit-cover">
                    <img src={Image1} alt="Servicio de permanente" />
                  </div>
                </div>

                <div className="img-bg-color"></div>
              </a>
            </div>

            <div className="adv-2-swiper-button-prev">
              <span>
                <span className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto">
                  Anterior
                </span>
              </span>
            </div>

            <div className="adv-2-swiper-button-next">
              <span>
                <span className="btn btn-lg btn-after-dot btn-link border-0 p-0 min-w-auto">
                  Siguiente
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ServicesHome;
