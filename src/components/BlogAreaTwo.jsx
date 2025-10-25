
"use client"
import { DiAptana } from "react-icons/di";
import { FaUser, FaArrowRight } from "react-icons/fa"; 
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BlogAreaTwo = () => {
  return (
    <section className="blog-area space-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">Projets en vedette</span>
              <h2 className="sec-title">
                Découvrons tous nos derniers projets
              </h2>
            </div>
          </div>
        </div>

        <div className="row global-carousel blog-slider slider-shadow">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            navigation={{
              nextEl: ".testimonialOne-button-next",
              prevEl: ".testimonialOne-button-prev",
            }}
            spaceBetween={20}
            slidesPerGroup={1}
            speed={1000}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000 }}
            className="mySwiper"
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 3 },
              1400: { slidesPerView: 3 },
            }}
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="blog-card style2">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_s2_1.png" alt="sme2d" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link href="/station-epuration-prison-el-arjat-onee" className="d-flex align-items-center">
                      <DiAptana style={{ marginRight: "5px" }} /> MBBR
                    </Link>
                  </div>
                  <h3 className="blog-title">
                    <Link href="/station-epuration-prison-el-arjat-onee">
                      STATION D’ÉPURATION DE PRISON LOCAL EL ARJAT
                    </Link>
                  </h3>
                  <Link className="link-btn style3" href="/station-epuration-prison-el-arjat-onee">
                    En savoir plus <FaArrowRight className="ms-2" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="blog-card style2">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_s2_2.png" alt="sme2d" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link href="/station-epuration-complexe-residentiel-touristique-seoul-construction-souelem-trifia" className="d-flex align-items-center">
                      <DiAptana style={{ marginRight: "5px" }} /> SBR
                    </Link>
                  </div>
                  <h3 className="blog-title">
                    <Link href="/station-epuration-complexe-residentiel-touristique-seoul-construction-souelem-trifia">
                      STATION D’ÉPURATION D’UN COMPLEXE RÉSIDENTIEL ET
                      TOURISTIQUE SEOUL CONSTRUCTION- A SOUELEM TRIFIA
                    </Link>
                  </h3>
                  <Link className="link-btn style3" href="/station-epuration-complexe-residentiel-touristique-seoul-construction-souelem-trifia">
                    En savoir plus <FaArrowRight className="ms-2" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="blog-card style2">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_s2_3.png" alt="sme2d" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link href="/station-pretraitement-rejets-industriels-usine-silda" className="d-flex align-items-center">
                      <DiAptana style={{ marginRight: "5px" }} /> Physico-chimique
                    </Link>                    
                  </div>
                  <h3 className="blog-title">
                    <Link href="/station-pretraitement-rejets-industriels-usine-silda">
                      STATION DE PRÉTRAITEMENT DES REJETS INDUSTRIELS DE L’USINE
                      SILDA
                    </Link>
                  </h3>
                  <Link className="link-btn style3" href="/station-pretraitement-rejets-industriels-usine-silda">
                    En savoir plus <FaArrowRight className="ms-2" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BlogAreaTwo;
