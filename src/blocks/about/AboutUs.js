import React from "react";

const AboutsUs = () => {
  return (
    <section id="about-us" className="block spacer p-top-xl">
      <div className="wrapper">
        <div className="row gutter-width-sm">
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
            <div className="title">
              <h2 className="text-uppercase">
                Buena Barba Barberia y Academia
              </h2>
            </div>
          </div>
        </div>

        <div className="row gutter-width-sm justify-content-end">
          <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
            <div className="description">
              <p>
                Es una barbería inspirada en el estilo clásico europeo que dio
                origen a este oficio, pensando en el hombre actual y sus
                necesidades creamos un espacio que combina lo clásico con lo
                moderno y ofrecemos una variedad de servicios para satisfacer a
                los clientes mas exigentes. Visítanos y descubre porque nos
                prefieren.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutsUs;
