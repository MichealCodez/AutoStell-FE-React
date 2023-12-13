import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import footerCardImage from '../../images/footer-card-image.png';
import car1 from '../../images/car1.png';
import car2 from '../../images/car3.png';
import car3 from '../../images/car4.png';
import car4 from '../../images/car5.png';
import car5 from '../../images/car6.png';
import car6 from '../../images/car7.png';
import car7 from '../../images/car8.png';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/Footer.css';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function FooterCard() {
  

  return (
    <div className="footer-card">
      <div className='back-image'>
        <img src={footerCardImage} alt="footer-card-background" />
        <div className='slider-back'>
          <Swiper
            spaceBetween={30}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={false}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className='image-container'>
                <img src={car1} alt='Swiping cars' />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='image-container'>
                <img src={car2} alt='Swiping cars'/>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='image-container'>
                <img src={car3} alt='Swiping cars' />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='image-container'>
                <img src={car4} alt='Swiping cars' />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='image-container'>
                <img src={car5} alt='Swiping cars' />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='image-container'>
                <img src={car6} alt='Swiping cars' />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='image-container'>
                <img src={car7} alt='Swiping cars' />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div >
  );
}
