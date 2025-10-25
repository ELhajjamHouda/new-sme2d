"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";
const TestimonialOne = () => {
  return (
    <div
      className="testimonial-area-1 overflow-hidden"
      // style={{ backgroundImage: "url(assets/img/bg/testimonial-bg1-1.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="testimonial-thumb1">
              <img src="assets/img/testimonial/testimonial-1-1.png" alt="sme2d" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="space">
              <div className="title-area">
                <span className="sub-title">SME2D</span>

                <h2 className="sec-title ">  {/* text-white */}
                 Les moyens humains <br /> 
                </h2>
              </div>
              <div className="row global-carousel testi-slider-1">
                <Swiper
                  loop={true}
                  navigation={{
                    nextEl: ".testimonialOne-button-next",
                    prevEl: ".testimonialOne-button-prev",
                  }}
                  spaceBetween={20}
                  slidesPerGroup={1}
                  speed={1000}
                  autoplay={{ delay: 6000 }}
                  pagination={true}
                  className="mySwiper"
                  modules={[FreeMode, Navigation, Thumbs, EffectFade]}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    500: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 1,
                    },
                    992: {
                      slidesPerView: 1,
                    },
                    1200: {
                      slidesPerView: 1,
                    },
                    1400: {
                      slidesPerView: 1,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div>
                      <div className="testi-card">
                        <div className="testi-card_content">
                          <div className="testi-card-profile">
                            {/* <div className="testi-card-profile-details">
                              <h4 className="testi-profile-title">
                                Les moyens humains
                              </h4>
                              <span className="testi-profile-desig">
                                Customer
                              </span>
                            </div> */}
                            <div className="quote-icon">
                              <img
                                src="assets/img/icon/quote1-1.svg"
                                alt="sme2d"
                              />
                            </div>
                          </div>
                          <p className="testi-card_text">
                            SME2D met à la disposition de ses clients une équipe d'ingénieurs, 
                            de chargés d'affaires et de techniciens qualifiés, possédant une 
                            connaissance approfondie des exigences de chaque projet. Que ce 
                            soit pour des organismes publics, des promoteurs, des maîtres 
                            d'ouvrage, des architectes ou des bureaux d'études, nous mobilisons 
                            l'ensemble de nos compétences techniques et notre savoir-faire pour 
                            accompagner nos clients à chaque étape de la réalisation et tout au 
                            long de la durée de vie de leurs installations, où qu'elles se 
                            trouvent. Au-delà de la performance technique et des objectifs 
                            financiers, notre équipe agit avec passion, engagement et 
                            professionnalisme, avec un seul objectif : garantir la satisfaction
                            totale de nos clients.
                          </p>
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialOne;
