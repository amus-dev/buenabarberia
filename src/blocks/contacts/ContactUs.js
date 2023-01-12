import React from "react";

const ContactsUs = () => {
  return (
    <section id="contact-us" className="block">
      <div className="bg-blue text-tertiary spacer p-top-xl p-bottom-xl">
        <div className="wrapper text-center">
          <div className="title">
            <h2 className="text-uppercase">Contáctanos</h2>
          </div>
          <div
            className="boxInfo"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 999,
              marginBottom: 20,
            }}
          >
            <a href="tel:+56976533082">Fono: +56 9 7653 3082</a>
          </div>
          <div
            className="boxInfo"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 999,
              marginBottom: 20,
            }}
          >
            <a href="mailto:buenabarbabarberia@gmail.com">
              Correo: buenabarbabarberia@gmail.com
            </a>
          </div>
          <div
            className="boxInfo"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 999,
              marginBottom: 20,
            }}
          >
            <a
              href="https://goo.gl/maps/m6cSMJfs57JVuPxn9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ubicación: Vicuña Mackenna Poniente 6650, local 5. La Florida
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsUs;
