import React from 'react';
import '../SlickSlider/SlickSlider.css';
import data from '../SlickSlider/data.json';
import { Swiper, EffectCoverflow, Pagination } from 'swiper';
import {  SwiperSlide } from 'swiper/react';
import 'swiper/css';
// Swiper.use();
Swiper.use([EffectCoverflow, Pagination]);

const Testimonials = () => {
  return (
    <section id="testimonials" className="main-testimonials-wrapper">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 6,
          slideShadows: true,
        }}
        // pagination={true}
      >
        {data.map((item, key) => (
          <SwiperSlide key={key}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.testimony}</p>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="quote-parent">
        <div className="quote n-box1 flex-with-center">
          <h1>Quote?!</h1>
          <div className="quote-content">
            <p>“ Knowledge is power.” </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
