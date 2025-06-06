"use client"

import { useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import SectionData from '../../data/sliders/latest-projects.json';

const LatestProjects = ({ projects }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="mil-works mil-p-120-90">
      {/*<div className="mil-deco" style={{ top: 0, right: "40%" }} />*/}
      <div className="container">
        <div className="row align-items-center mil-mb-60-adapt">
          <div className="col-md-6 col-xl-6">
            <h2 className="mil-mb-30">{SectionData.title}</h2>
          </div>
          <div className="col-md-6 col-xl-6">
            <div className="mil-adaptive-right">
              <div className="mil-slider-nav mil-mb-30">
                <div ref={prevRef} className="mil-slider-btn-prev mil-works-prev">
                  <i className="fas fa-arrow-left" />
                  <span className="mil-h6">Prev</span>
                </div>
                <div ref={nextRef} className="mil-slider-btn-next mil-works-next">
                  <span className="mil-h6">Next</span>
                  <i className="fas fa-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          speed={800}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            }
          }}
          onInit={(swiper) => {
            // Update swiper instance's navigation elements with the refs
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="swiper-container mil-works-slider mil-mb-90"
        >
          {projects.slice(0, SectionData.numOfItems).map((item, key) => (
            <SwiperSlide className="swiper-slide" key={key}>
              <Link href="project" className="mil-card">
                <div className="mil-cover-frame">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="mil-description">
                  <div className="mil-card-title">
                    <h4 className="mil-mb-20">
                      {item.title}
                    </h4>
                    <h6>
                      by: <span className="mil-accent">{item.author}</span>
                    </h6>
                  </div>
                  <div className="mil-card-text">
                    <p>{item.short}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="row align-items-center">
          <div className="col-md-6 col-xl-6">
            <Link href={SectionData.button1.link} className="mil-link mil-mb-30">
              <span>{SectionData.button1.label}</span>
              <i className="fas fa-arrow-right" />
            </Link>
          </div>
          <div className="col-md-6 col-xl-6">
            <div className="mil-adaptive-right">
              <Link href={SectionData.button2.link} className="mil-button mil-border mil-mb-30">
                <span>{SectionData.button2.label}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;