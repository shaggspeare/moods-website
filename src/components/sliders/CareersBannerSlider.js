'use client'

import { useRef, useEffect } from 'react'
import { register } from 'swiper/element/bundle'
import Image from 'next/image'

// Register Swiper custom elements
register()

const CareersBannerSlider = () => {
  const swiperElRef = useRef(null)

  useEffect(() => {
    // Make sure Swiper is available in the client environment
    const swiperContainer = swiperElRef.current

    if (swiperContainer) {
      // Get the swiper options
      const swiperParams = {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        parallax: true,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.mil-banners-pagination',
          clickable: true,
        },
        watchSlidesProgress: true,
      }

      // Apply the parameters to the Swiper element
      Object.assign(swiperContainer, swiperParams)

      // Initialize Swiper
      swiperContainer.initialize()
    }
  }, [])

  return (
    <section className="mil-banners mil-p-120-0">
      <div className="container">
        <div className="mil-text-center mil-mb-120">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">We Offer You</span>
          <h2 className="mil-mb-30">
            Great Benefits for <span className="mil-accent">Working</span> With Us
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
            Itaque eveniet, officiis voluptate voluptatum.
          </p>
        </div>

        <swiper-container ref={swiperElRef} className="mil-banners-slider" init="false">
          <swiper-slide>
            <div className="mil-banner-slide">
              <Image
                src="/img/photo/10.jpg"
                alt="banner"
                className="mil-banner-bg"
                fill
                data-swiper-parallax="-100"
                data-swiper-parallax-scale="1.1"
                sizes="100vw"
                priority
              />
              <div className="mil-overlay" />
              <div className="row justify-content-end align-items-center">
                <div className="col-lg-8 col-xl-6" data-swiper-parallax-y="-300">
                  <div className="mil-icon-box mil-sb-inner mil-relative">
                    <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                      <Image src="/img/icons/md/1.svg" alt="icon" width={48} height={48} />
                    </div>
                    <h4 className="mil-mb-30">Continuous Learning</h4>
                    <div className="mil-divider mil-divider-left mil-mb-30" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua quis ipsum suspendisse ultrices
                      gravida risus commodo viverra.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div className="mil-banner-slide">
              <Image
                src="/img/photo/11.jpg"
                alt="banner"
                className="mil-banner-bg"
                fill
                data-swiper-parallax="-100"
                data-swiper-parallax-scale="1.1"
                sizes="100vw"
              />
              <div className="mil-overlay" />
              <div className="row justify-content-end align-items-center">
                <div className="col-lg-8 col-xl-6" data-swiper-parallax-y="-300">
                  <div className="mil-icon-box mil-sb-inner mil-relative">
                    <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                      <Image src="/img/icons/md/2.svg" alt="icon" width={48} height={48} />
                    </div>
                    <h4 className="mil-mb-30">Consectetur adipiscing elit</h4>
                    <div className="mil-divider mil-divider-left mil-mb-30" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua quis ipsum suspendisse ultrices
                      gravida risus commodo viverra.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div className="mil-banner-slide">
              <Image
                src="/img/photo/12.jpg"
                alt="banner"
                className="mil-banner-bg"
                fill
                data-swiper-parallax="-100"
                data-swiper-parallax-scale="1.1"
                sizes="100vw"
              />
              <div className="mil-overlay" />
              <div className="row justify-content-end align-items-center">
                <div className="col-lg-8 col-xl-6" data-swiper-parallax-y="-300">
                  <div className="mil-icon-box mil-sb-inner mil-relative">
                    <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                      <Image src="/img/icons/md/3.svg" alt="icon" width={48} height={48} />
                    </div>
                    <h4 className="mil-mb-30">Dolore magna aliqua</h4>
                    <div className="mil-divider mil-divider-left mil-mb-30" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua quis ipsum suspendisse ultrices
                      gravida risus commodo viverra.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>

          {/* Pagination Element */}
          <div className="mil-banners-pagination" slot="pagination"></div>
        </swiper-container>
      </div>
    </section>
  )
}

export default CareersBannerSlider
