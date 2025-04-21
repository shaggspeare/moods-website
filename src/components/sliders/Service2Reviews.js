'use client'

import { useRef, useEffect } from 'react'
import { register } from 'swiper/element/bundle'
import Image from 'next/image'

// Register Swiper custom elements
register()

const Service2Reviews = () => {
  const swiperElRef = useRef(null)
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  useEffect(() => {
    // Make sure Swiper is available in the client environment
    const swiperContainer = swiperElRef.current

    if (swiperContainer && prevRef.current && nextRef.current) {
      // Get the swiper options
      const swiperParams = {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        parallax: true,
        navigation: {
          prevEl: '.mil-box-prev',
          nextEl: '.mil-box-next',
        },
        autoplay: {
          delay: 5000,
        },
      }

      // Apply the parameters to the Swiper element
      Object.assign(swiperContainer, swiperParams)

      // Initialize Swiper
      swiperContainer.initialize()

      // Setup navigation buttons
      prevRef.current.addEventListener('click', () => {
        swiperContainer.swiper.slidePrev()
      })

      nextRef.current.addEventListener('click', () => {
        swiperContainer.swiper.slideNext()
      })
    }

    // Cleanup event listeners on unmount
    return () => {
      if (prevRef.current && nextRef.current && swiperContainer?.swiper) {
        prevRef.current.removeEventListener('click', () => {
          swiperContainer.swiper.slidePrev()
        })

        nextRef.current.removeEventListener('click', () => {
          swiperContainer.swiper.slideNext()
        })
      }
    }
  }, [])

  return (
    <section className="mil-gradient-bg mil-p-120-120">
      <div className="container">
        <swiper-container ref={swiperElRef} className="mil-box-slider" init="false">
          <swiper-slide>
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y="-100"
              data-swiper-parallax-opacity="0"
            >
              <div className="col-lg-3 offset-lg-1">
                <div
                  className="mil-circle-illustration mil-with-dots mil-mb-60"
                  data-swiper-parallax-scale=".8"
                >
                  <div className="mil-circle-bg" />
                  <div className="mil-image-frame">
                    <Image src="/img/faces/t6.png" alt="Victoria Oldman" width={200} height={200} />
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="mil-icon-frame mil-light mil-icon-frame-sm mil-mb-60">
                  <Image src="/img/icons/sm/11.svg" alt="quote icon" width={24} height={24} />
                </div>
                <p className="mil-text-lg mil-light mil-mb-60">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua quis ipsum suspendisse ultrices
                  gravida risus commodo viverra maecenas.
                </p>
                <h3 className="mil-light mil-mb-15">Victoria Oldman</h3>
                <p className="mil-light-soft">Director of Product Management</p>
                <p className="mil-accent">ITAgency, Inc</p>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y="-100"
              data-swiper-parallax-opacity="0"
            >
              <div className="col-lg-3 offset-lg-1">
                <div
                  className="mil-circle-illustration mil-with-dots mil-mb-60"
                  data-swiper-parallax-scale=".8"
                >
                  <div className="mil-circle-bg" />
                  <div className="mil-image-frame">
                    <Image src="/img/faces/t1.png" alt="John Doe" width={200} height={200} />
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="mil-icon-frame mil-light mil-icon-frame-sm mil-mb-60">
                  <Image src="/img/icons/sm/11.svg" alt="quote icon" width={24} height={24} />
                </div>
                <p className="mil-text-lg mil-light mil-mb-60">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua quis ipsum suspendisse ultrices
                  gravida risus commodo viverra maecenas.
                </p>
                <h3 className="mil-light mil-mb-15">John Doe</h3>
                <p className="mil-light-soft">Director of Product Management</p>
                <p className="mil-accent">ITAgency, Inc</p>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y="-100"
              data-swiper-parallax-opacity="0"
            >
              <div className="col-lg-3 offset-lg-1">
                <div
                  className="mil-circle-illustration mil-with-dots mil-mb-60"
                  data-swiper-parallax-scale=".8"
                >
                  <div className="mil-circle-bg" />
                  <div className="mil-image-frame">
                    <Image src="/img/faces/t2.png" alt="Oscar Trueman" width={200} height={200} />
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="mil-icon-frame mil-light mil-icon-frame-sm mil-mb-60">
                  <Image src="/img/icons/sm/11.svg" alt="quote icon" width={24} height={24} />
                </div>
                <p className="mil-text-lg mil-light mil-mb-60">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua quis ipsum suspendisse ultrices
                  gravida risus commodo viverra maecenas.
                </p>
                <h3 className="mil-light mil-mb-15">Oscar Trueman</h3>
                <p className="mil-light-soft">Director of Product Management</p>
                <p className="mil-accent">ITAgency, Inc</p>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>

        <div className="row">
          <div className="col-lg-5">
            <div className="mil-slider-nav justify-content-lg-center mil-reviews-btns-space">
              <div className="mil-slider-btn-prev mil-box-prev mil-light" ref={prevRef}>
                <i className="fas fa-arrow-left" />
                <span className="mil-h6">Prev</span>
              </div>
              <div className="mil-slider-btn-next mil-box-next mil-light" ref={nextRef}>
                <span className="mil-h6">Next</span>
                <i className="fas fa-arrow-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service2Reviews
