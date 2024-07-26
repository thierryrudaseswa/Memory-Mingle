'use client';

import React from 'react';
import { NextPage } from 'next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

// Import your images
import slide_image_1 from '../../../../public/Image/thierry.jpg'
import slide_image_2 from  '../../../../public/Image/thierry.jpg'
import slide_image_3 from '../../../../public/Image/thierry.jpg'
import slide_image_4 from '../../../../public/Image/thierry.jpg'
import slide_image_5 from '../../../../public/Image/thierry.jpg'
import slide_image_6 from '../../../../public/Image/thierry.jpg'
import slide_image_7 from '../../../../public/Image/thierry.jpg'

const HomePage: NextPage = () => {
  return (
    <div className="container">
      <h1 className="heading">Flower Gallery</h1>
      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="swiper_container"
      >
        <SwiperSlide>
          <Image src={slide_image_1} alt="slide_image" layout="fill" objectFit="cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide_image_2} alt="slide_image" layout="fill" objectFit="cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide_image_3} alt="slide_image" layout="fill" objectFit="cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide_image_4} alt="slide_image" layout="fill" objectFit="cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide_image_5} alt="slide_image" layout="fill" objectFit="cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide_image_6} alt="slide_image" layout="fill" objectFit="cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide_image_7} alt="slide_image" layout="fill" objectFit="cover" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <FaArrowLeft />
          </div>
          <div className="swiper-button-next slider-arrow">
            <FaArrowRight />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default HomePage;
