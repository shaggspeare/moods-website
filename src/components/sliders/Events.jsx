'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { register } from 'swiper/element/bundle'
import Content from '../../data/sliders/events.json'

// Register Swiper custom elements
register()

const Home2EventsSlider = () => {
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
        navigation: {
          prevEl: '.mil-events-prev',
          nextEl: '.mil-events-next',
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
    <section className="mil-events mil-deep-bg mil-p-120-120">
      {/*<div className="mil-deco" style={{ top: 0, right: "20%" }} />*/}
      <div className="container">
        <div className="row align-items-end mil-mb-60-adapt">
          <div className="col-md-4 col-xl-4">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{Content.subtitle}</span>
            <h2 className="mil-mb-30">{Content.title}</h2>
          </div>
          <div className="col-md-5 col-xl-5">
            <p className="mil-mb-30">{Content.text}</p>
          </div>
          <div className="col-md-3 col-xl-3">
            <div className="mil-adaptive-right mil-mb-30">
              <div className="mil-slider-nav">
                <div className="mil-slider-btn-prev mil-events-prev" ref={prevRef}>
                  <i className="fas fa-arrow-left" />
                  <span className="mil-h6">Prev</span>
                </div>
                <div className="mil-slider-btn-next mil-events-next" ref={nextRef}>
                  <span className="mil-h6">Next</span>
                  <i className="fas fa-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <swiper-container ref={swiperElRef} className="mil-events-slider" init="false">
          {Content.items.map((item, key) => (
            <swiper-slide key={key}>
              <Link href={item.link} className="mil-card-2">
                <div className="mil-cover-frame">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={250}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="mil-description">
                  <ul className="mil-speakers">
                    {item.speakers.map((element, speakerKey) => (
                      <li className="mil-speaker" key={speakerKey}>
                        <img src={element.image} alt={element.alt} width={40} height={40} />
                      </li>
                    ))}
                  </ul>
                  <div className="mil-card-title">
                    <p className="mil-category mil-text-sm mil-mb-15">{item.category}</p>
                    <h4>{item.title}</h4>
                  </div>
                </div>
              </Link>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </section>
  )
}

export default Home2EventsSlider
