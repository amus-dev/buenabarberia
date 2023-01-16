import React from "react";
import BackgroundHome from "../../assets/img/bg/background-home.png";

const PageTitleHome = () => {
  return (
    <section
      id="page-title"
      className="block with-img"
      style={{ backgroundImage: `url(${BackgroundHome})` }}
    >
      <div className="wrapper text-center d-flex">
        <div className="align-self-center w-100">
          <div className="title"></div>
        </div>
      </div>
      <div className="page-title-bg-color"></div>
    </section>
  );
};

export default PageTitleHome;
