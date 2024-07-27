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
import './Swip.css'



import { WishPerson,Person } from '@/app/data/wish';


const Card = ({ person }: { person: Person }) => (
  
    <div className="smsfr grid  p-3 rounded-3xl  bg-orange-700">
<div className="  grid bg-white   grid-cols-3">
<div className=" p-2 h-96 rounded-2xl col-span-1 grid justify-start">
        <div className="`relative rounded-3xl overflow-hidden p-2 ">
          {person.photo && (
            <Image
              src={person.photo}
              alt={person.name}
              layout="fill"
              className="elem "
             
            />
          )}
        </div>
      </div> 
   
      <div className="wishes col-span-2 grid justify-start items-center p-2">
        <div className=" rounded-2xl ">
          {person.wish && <p className="flex justify-center items-center">{person.wish}</p>}
          {person.name && <p className="font-extrabold flex justify-end">{person.name}</p>}
        </div>
      </div>

</div>
<div className="">
<div className="gif  gap-4 p-4 rounded-2xl">
        <div className=" grid grid-rows-4">
          {person.promise && <p className="row-span-1 flex justify-center items-center font-bold">{person.promise}</p>}
          {person.gift && (
            <p className="font-extrabold grid  pl-2 text-2xl row-span-1 justify-center items-center">
              {person.gift} !!
            </p>
          )}
          <div className="flex items-center justify-center  row-span-2">
            <div className="relative rounded-3xl overflow-hidden ">
              {person.photoTwo && (
                <Image
                  src={person.photoTwo}
                  alt={person.name}
                  layout="fill"
                  className="lemen"
                  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 15vw"
                />
              )}
            </div>
          </div>
        </div>
       </div> 
</div>


     
     
      
    </div>
);

const HomePage: NextPage = () => {
  return (
    <div className="container">
      <div className=" flex justify-center items-start bg-slate-500 h-20">THE MERVEROUS WISHES AND PROMISES</div>
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
          modifier: 12,
        }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="swiper_container"
      >
        {/* {WishPers} */}
        {/* <SwiperSlide>
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
        </SwiperSlide> */}

        {WishPerson.map((person: Person,index:number)=>(

        
        <SwiperSlide key={index} className="">
          <Card person={person} />

    
      
        </SwiperSlide>
        ))}

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
