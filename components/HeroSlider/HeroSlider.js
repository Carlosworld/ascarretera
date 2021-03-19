import React from "react";

export default function HeroSlider() {
  return (
    <div id="slides-shop" className="cover-slides">
      <ul className="slides-container">
        <li className="text-left">
          <img src="images/01.jpg" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                    OPERADORES DE QUINTA RUEDA, AUTOBUSES<br /> TORTONS, ENTRE OTROS.
                  </strong>
                </h1>
                <p className="m-b-40">
                  {" "}
                  <br />
                </p>
                <p>
                  <a className="btn hvr-hover" href="/our-services">
                    SERVICIOS
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="text-center">
          <img src="images/02.jpg" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                    UNION LABORAL DE TRAILEROS<br /> 
                  </strong>
                </h1>
                <p className="m-b-40">
                Agencia de trabajo internacional  para traileros.{" "}
                  <br />
                  Para trabajadores del volante.
                </p>
                <p>
                  <a className="btn hvr-hover" href="/our-services">
                    Servicios
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="text-right">
          <img src="images/03.jpg" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                   RECLUTANDO PERSONAL DESDE 1991<br /> 30 AÑOS A SUS SERVICIOS
                  </strong>
                </h1>
                <p className="m-b-40">
                  .{" "}
                  <br />
                </p>
                <p>
                  <a className="btn hvr-hover" href="#">
                    SERVICIOS
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="slides-navigation">
        <a href="#" className="next">
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </a>
        <a href="#" className="prev">
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}
