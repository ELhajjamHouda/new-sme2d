"use client"
import { DiAptana } from "react-icons/di";
import { FaUser, FaArrowRight } from "react-icons/fa"; 
import Link from "next/link";
import React from "react";
import CountUp from "react-countup";
const AboutOne = () => {
  return (
    <div className="about-area-1 ">
      <div className="about1-shape-img shape-mockup">
        {/* <img
          className="about1-shape-img-1 spin"
          src="assets/img/normal/about_shape1-2.svg"
          alt="sme2d"
        />  */}
        <Link href="/blog" className="about1-shape-img-1 spin d-flex align-items-center justify-content-center">
          <DiAptana size={80} color="#0aa1d5" />
        </Link>
        {/* <img
          className="about1-shape-img-2 spin2"
          src="assets/img/normal/about_shape1-1.svg"
          alt="sme2d"
        /> */}
        <Link href="/blog" className="about1-shape-img-1 spin d-flex align-items-center justify-content-center">
          <DiAptana size={80} color="#0aa1d5" />
        </Link>
      </div>
      <div className="container">
        <div className="row gx-60 align-items-center">
          <div className="col-xl-6">
            <div className="about-thumb1 mb-40 mb-xl-0">
              <div className="about-img-1">
                <img src="/assets/img/normal/about_1-1.jpg" alt="sme2d" />
              </div>
              <div className="about-img-2">
                <img src="/assets/img/normal/about_1-2.png" alt="sme2d" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="about-content-wrap">
              <div className="title-area me-xl-5 mb-20">
                <span className="sub-title">Découvrez SME2D</span>
                <h2 className="sec-title">
                  SME2D | Solutions intégrées pour l’eau et l’air
                </h2>
                <p className="sec-text">
                  SME2D conçoit et met en œuvre des solutions complètes, de l’étude à 
                  l’exploitation, pour répondre aux besoins en gestion de l’eau et de l’air. 
                  Grâce à notre expertise technique et à notre engagement pour la qualité, 
                  nous proposons des solutions sur mesure, fiables et respectueuses de
                  l’environnement, tout en assurant un service réactif et un accompagnement 
                  personnalisé à chaque étape de vos projets.
                </p>
              </div>
              <div className="row gy-4 justify-content-xl-between justify-content-end align-items-center flex-row-reverse">
                
                <div className="col-xl-auto col-lg-6">
                  <div className="checklist">
                    <ul>
                      <li>
                        <i className="fas fa-check-circle" />
                        Traitement des eaux usées
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        Relevage et pompage
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        Traitement de l’air{" "}
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        Automatisation et gestion des installations
                      </li>
                                            <li>
                        <i className="fas fa-check-circle" />
                        Étude, conception et réhabilitation{" "}
                      </li>
                                            <li>
                        <i className="fas fa-check-circle" />
                         Fourniture et installation d’équipements{" "}
                      </li>
                                            <li>
                        <i className="fas fa-check-circle" />
                         Maintenance et service après-vente{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <div className="btn-wrap mt-20">
                <Link href="/about" className="btn style2 mt-xl-0 mt-20">
                  Read More <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;
