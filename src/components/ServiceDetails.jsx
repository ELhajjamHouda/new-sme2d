import React from "react";
import Link from "next/link";

const ServiceDetails = ({Title1,Para1,Img1,Img2,Img3}) => {
  return (
    <div className="service-details-area space-top space-extra-bottom overflow-hidden">
      <div className="container">
        <div className="row gx-40 flex-row-reverse">
          <div className="col-xxl-8 col-lg-7">
            <div className="service-page-single">
              <div className="page-img mb-45">
                <img
                  src={Img1}
                  alt="sme2d"
                />
              </div>
              <div className="page-content">
                <h2 className="page-title">{Title1}</h2>
                <div className="mb-25">
                    {Para1}
                </div>
                {/*<p className="mb-25">
                  Nous concevons des installations sur mesure, permettant de traiter 
                  efficacement les effluents tout en favorisant la valorisation des eaux
                  traitées. Ces solutions contribuent à la préservation des ressources et à
                  l’optimisation des coûts d’exploitation. Chaque projet est étudié selon 
                  les spécificités des effluents et les objectifs de réutilisation
                </p>
                 <h3 className="page-subtitle mb-15">
                  Trusted Car Repair Professionals
                </h3>
                <p className="mb-30">
                  Web designing in a powerful way of just not an only
                  professions, however, in a passion for our Company. We have to
                  a tendency to believe the idea that smart looking of any
                  websitet in on visitors.Web designing in a powerful way of
                  just not an only profession Web designing in a powerful way of
                  just not an only{" "}
                </p> */}
                <div className="row gy-30">
                  <div className="col-sm-6">
                    <div className="page-img">
                      <img
                        // src="assets/img/service/service-details1-2.jpeg"
                        // alt="sme2d"
                        src={Img2}
                       alt="sme2d"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="page-img">
                      <img
                        // src="assets/img/service/service-details1-3.jpeg"
                        // alt="sme2d"
                        src={Img3}
                        alt="sme2d"
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="checklist style2 mt-35 mb-20">
                  <ul>
                    <li>
                      <i className="fas fa-angle-double-right" /> A car repair
                      is a service provided to fix any issues or damages with
                      your vehicle
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      It involves diagnosing the problem, repairing or replacing
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Trusted Car Repair Professionals et Your Car Fixed Right
                      Away
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Quality Car Repair Services Affordable Car Repair
                      Solutions
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-5">
            <aside className="sidebar-area">
              <div className="widget widget_service-list">
                <h3 className="widget_title">Nos services</h3>
                <ul>
                  <li>
                    <Link href="#">
                      <i className="fas fa-angle-double-right" />
                      Épuration Des Eaux Usées
                    </Link>
                  </li>
                  <li>
                    <Link href="/relevage-et-pompage-des-eaux">
                      <i className="fas fa-angle-double-right" />
                      Relevage et Pompage des Eaux
                    </Link>
                  </li>
                  <li>
                    <Link href="/traitement-de-l-air">
                      <i className="fas fa-angle-double-right" />
                      Traitement de l'air
                    </Link>
                  </li>
                  <li>
                    <Link href="/electricite-et-automatisme">
                      <i className="fas fa-angle-double-right" />
                      Électricité et Automatisme
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-apres-vente-et-exploitation">
                      <i className="fas fa-angle-double-right" />
                      Service après-vente et exploitation
                    </Link>
                  </li>
                  <li>
                    <Link href="/bureau-d-etudes-integre">
                      <i className="fas fa-angle-double-right" />
                      Bureau d’Études intégré
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="widget widget_contact">
                <div className="widget-contact-wrap text-center">
                  <h3 className="widget_title">Contactez-nous</h3>
                  <p className="widget-contact-text">
                    Vous pouvez nous contacter à tout moment
                  </p>
                  <div className="icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <p className="widget-contact-text">Appelez à tout moment</p>
                  <h5>
                    <Link href="tel:80855510111">(+212) 6 61 93 21 62</Link>
                  </h5>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
