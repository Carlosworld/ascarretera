import React from "react";
import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";

import PageTitleBox from "../components/PageTitleBox/PageTitleBox";
import OurTeamLoader from "../components/OurTeam/OurTeamLoader";
//import OurTeam from "";

const OurTeam = dynamic(
  () => import("../components/OurTeam/OurTeam.container"),
  {
    loading: () => <OurTeamLoader />,
    ssr: false,
  }
);

export default function About() {
  return (
    <>
      {/* <PageTitleBox /> */}
      <div className="about-box-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="noo-sh-title">
                Nosotros<span></span>
              </h2>
              <p>
                AsCarreterra favorecer el perfeccionamiento profesional de nuestros miembros mediante la educación, capacitación y adopción de las mejores prácticas de seguridad, técnicas de conducción, servicio y conducta con el fin de promover el crecimiento, la sostenibilidad y la rentabilidad de la industria del transporte en EUA & Canadá.
              </p>
              <p>
               
              </p>
            </div>
            <div className="col-lg-6">
              <div className="banner-frame">
                <img
                  className="img-thumbnail img-fluid"
                  src="images/05.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* <div className="row my-5">
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>Calidad en el servicio</h3>
                <p>
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>Mas de 30 años de experiencia</h3>
                <p>

                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>Personal capasitado y certificado</h3>
                <p>

                </p>
              </div>
            </div>
          </div> */}
          {/* <OurTeam /> */}
        </div>
      </div>
    </>
  );
}
