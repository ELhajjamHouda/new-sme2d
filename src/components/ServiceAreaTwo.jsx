"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const services = [
  {
    title: "ÉPURATION DES EAUX USÉES",
    imgBg: "/assets/img/service/epuration-des-eaux-Usees-1.svg",
    icon: "assets/img/icon/service-icon_1-1.svg",
    href: "/epuration-des-eaux-usees",
  },
  {
    title: "POMPAGE & RELEVAGE",
    imgBg: "assets/img/portfolio/portfolio-2.png",
    icon: "assets/img/icon/service-icon_1-2.svg",
    href: "/relevage-et-pompage-des-eaux",
  },
  {
    title: "TRAITEMENT DE L’AIR",
    imgBg: "assets/img/service/traitement-de-l-air-1.png",
    icon: "assets/img/icon/service-icon_1-3.svg",
    href: "/traitement-de-l-air",
  },
  {
    title: "SERVICE APRÈS-VENTE ET EXPLOITATION",
    imgBg: "assets/img/portfolio/portfolio-4.png",
    icon: "assets/img/icon/service-icon_1-3.svg",
    href: "/service-apres-vente-et-exploitation",
  },
  {
    title: "BUREAU D’ÉTUDES INTÉGRÉ",
    imgBg: "assets/img/portfolio/portfolio-5.png",
    icon: "assets/img/icon/service-icon_1-3.svg",
    href: "/bureau-d-etudes-integre",
  },
  {
    title: "ÉLECTRICITÉ ET AUTOMATISME",
    imgBg: "assets/img/portfolio/portfolio-6.png",
    icon: "assets/img/icon/service-icon_1-3.svg",
    href: "/electricite-et-automatisme",
  },
];

const ServiceAreaTwo = () => {
  return (
    <div className="service-area-2 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">nous offrons</span>
              <div className="sec-title-wrapper">
                <h2 className="sec-title">
                  Une Variété de Services de Qualité Vous Attend Chez Nous.
                </h2>
                <img
                  className="title-bg-shape shape-center"
                  src="assets/img/bg/title-bg-shape.png"
                  alt="sme2d"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            576: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="service-card style2">
                <div
                  className="service-card_content"
                  style={{ backgroundImage: `url(${service.imgBg})` }}
                >
                  <div>
                    <h4 className="service-card_title h5">
                      <Link href={service.href}>{service.title}</Link>
                    </h4>
                    <p className="service-card_text">SME2D</p>
                  </div>
                </div>

                <Link href={service.href} className="btn style4">
                  En savoir plus <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ServiceAreaTwo;
