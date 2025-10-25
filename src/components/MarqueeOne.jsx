"use client";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
const MarqueeOne = () => {
  return (
    <div className="bg-smoke">
      <div className="container-fluid p-0 overflow-hidden">
        <div className="slider__marquee">
          <div className="marquee_mode">
            <Marquee>
              <div className="item">
                <Link href="#">
                  <img
                    src="assets/img/icon/marquee-icon-1-1.svg"
                    alt="sme2d"
                  />
                  <span className="text-stroke-Two">SME2D</span>
                </Link>
              </div>
              <div className="item">
                <Link href="#">
                  <img
                    src="assets/img/icon/marquee-icon-1-2.svg"
                    alt="sme2d"
                  />
                  <span className="text-stroke">SME2D</span>
                </Link>
              </div>
              <div className="item">
                <Link href="#">
                  <img
                    src="assets/img/icon/marquee-icon-1-1.svg"
                    alt="sme2d"
                  />
                  <span>SME2D</span>
                </Link>
              </div>
              <div className="item">
                <Link href="#">
                  <img
                    src="assets/img/icon/marquee-icon-1-2.svg"
                    alt="sme2d"
                  />
                  <span className="text-stroke">SME2D</span>
                </Link>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeOne;
