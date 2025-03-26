'use client'

import { useEffect, useRef } from 'react'
import { register } from 'swiper/element/bundle'
import Image from 'next/image'
import Content from '../../data/sliders/testimonial.json'

// Register Swiper custom elements
register()

const Home1TestimonialSlider = () => {
  const swiperElRef = useRef(null)
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  useEffect(() => {
    // Make sure Swiper is available in the client environment
    const swiperContainer = swiperElRef.current

    if (swiperContainer) {
      // Get the swiper options
      const swiperParams = {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        navigation: {
          prevEl: '.mil-revi-prev',
          nextEl: '.mil-revi-next',
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        },
      }

      // Apply the parameters to the Swiper element
      Object.assign(swiperContainer, swiperParams)

      // Initialize Swiper
      swiperContainer.initialize()

      // Setup navigation buttons
      if (prevRef.current && nextRef.current) {
        prevRef.current.addEventListener('click', () => {
          swiperContainer.swiper.slidePrev()
        })

        nextRef.current.addEventListener('click', () => {
          swiperContainer.swiper.slideNext()
        })
      }
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
    <section className="mil-reviews mil-deep-bg mil-p-120-120">
      <div className="mil-deco" style={{ top: 0, right: '30%' }} />
      <div className="container">
        <div className="row align-items-center mil-mb-90">
          <div className="col-md-6 col-xl-6">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{Content.subtitle}</span>
            <h2>
              {Content.title.first} <span className="mil-accent">{Content.title.second}</span>{' '}
              {Content.title.third}
            </h2>
          </div>
          <div className="col-md-6 col-xl-6">
            <div className="mil-adaptive-right mil-mt-60-adapt">
              <div className="mil-slider-nav">
                <div className="mil-slider-btn-prev mil-revi-prev" ref={prevRef}>
                  <i className="fas fa-arrow-left" />
                  <span className="mil-h6">Prev</span>
                </div>
                <div className="mil-slider-btn-next mil-revi-next" ref={nextRef}>
                  <span className="mil-h6">Next</span>
                  <i className="fas fa-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <swiper-container ref={swiperElRef} className="mil-revi-slider" init="false">
          {Content.items.map((item, key) => (
            <swiper-slide key={key}>
              <div className="mil-review">
                <div className="mil-stars mil-mb-30">
                  {/*<Image src="/img/icons/sm/11.svg" width={20} height={20} alt="quote" />*/}
                  <ul>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                  </ul>
                </div>
                <p className="mil-mb-30">{item.text}</p>
                <div className="mil-author">
                  {/*<Image src={item.image} width={50} height={50} alt={item.name} />*/}
                  <div className="mil-name">
                    <h6 className="mil-mb-5">{item.name}</h6>
                    <span className="mil-text-sm">{item.role}</span>
                  </div>
                </div>
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </section>
  )
}

export default Home1TestimonialSlider
