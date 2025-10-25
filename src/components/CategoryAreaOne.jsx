"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Link from "next/link";

const CategoryAreaOne = ({ slidesData = [], sectionTitle}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <div className="category-area-1 pt-95 pb-100">
      <div className="container">
        <h4 className="text-center fw-extrabold mb-20">{sectionTitle}</h4>
        <div className="row gx-0 global-carousel category-slider3 relative">
          {swiperReady && (
            <Swiper
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              spaceBetween={20}
              slidesPerGroup={1}
              speed={1000}
              pagination={{ clickable: true }}
              loop
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="mySwiper"
              modules={[FreeMode, Navigation, Thumbs, EffectFade, Autoplay]}
              breakpoints={{
                0: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                992: { slidesPerView: 4 },
                1200: { slidesPerView: 5 },
                1400: { slidesPerView: 5 },
              }}
            >
              {slidesData.map((slide, i) => (
                <SwiperSlide key={i}>
                  <div className="category-card-item">
                    <img src={slide.img} alt={slide.title} />
                    <h6 className="category-card-title">
                      <Link href={slide.href || "/shop-details"}>
                        {slide.title}
                      </Link>
                    </h6>
                    {slide.text && (
                      <p className="category-card-text">{slide.text}</p>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryAreaOne;
