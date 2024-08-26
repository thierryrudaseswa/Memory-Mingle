import React, { useState } from 'react';
import { NextPage } from 'next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import Modal from './Modal';
import './Swip.css'

// Interface for FriendData
interface FriendData {
  FriendWish: string;
  FriendName: string;
  GiftName: string;
}

// Fetch function to get data from the API
const FriendWishFetch = async (): Promise<FriendData[]> => {
  const response = await fetch('http://localhost:3000/backend/api/FriendWish/');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

// POST function to send new data to the API
const postFriendWish = async (data: { FriendName: string; FriendWish: string; GiftName: string }) => {
  const response = await fetch('http://localhost:3000/backend/api/FriendWish/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to post the wish');
  }
  return response.json();
};

// Card component to display each friend's wish and gift
const Card: React.FC<{ friend: FriendData }> = ({ friend }) => {
  return (
    <div className="smsfr grid p-6 rounded-3xl justify-center text-white lg:w-[500px] xs:w-[430px] xs:h-[430px]" style={{ background: "#0e0146" }}>
      <div className="grid grid-cols-3">
        <div className="p-2 h-80 rounded-2xl col-span-1 grid justify-start">
          <div className="relative rounded-3xl overflow-hidden p-2 xs:h-72">
            <Image
              src="/Image/thierry28.jpeg"
              alt={friend.FriendName}
              fill
              className="elem "
            />
          </div>
        </div>

        <div className="wishes col-span-2 grid justify-start items-center p-2">
          <div className="rounded-2xl">
            <p className="flex justify-center items-center">{friend.FriendWish}</p>
            <p className="font-extrabold flex justify-end">{friend.FriendName}</p>
          </div>
        </div>
      </div>

      <div className="gif gap-4 p-4 rounded-2xl">
        <div>
          <p className="row-span-1 flex justify-center items-center font-bold mb-5">
            Excited for your birthday! I have a special gift for you that I know you'll love, which is...
          </p>
          <p className="font-extrabold grid pl-2 text-2xl mb-2 justify-center items-center">
            {friend.GiftName}!!
          </p>
          <div className="flex items-center justify-center row-span-2">
            <div className="relative rounded-3xl overflow-hidden xs:h-40">
              <Image
                src="/Image/thierry28.jpeg"
                alt={friend.FriendName}
                fill
                className="lemen"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main HomePage component
const HomePage: NextPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery('aboutFriendWish', FriendWishFetch);

  const mutation = useMutation(postFriendWish, {
    onSuccess: () => {
      queryClient.invalidateQueries('aboutFriendWish');
    },
  });

  const handleModalSubmit = (newWish: { FriendName: string; FriendWish: string; GiftName: string }) => {
    mutation.mutate(newWish);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <div className="container">
      <div className="flex justify-center items-start text-white h-20 ">
        <p className='flex-'> THE MARVELOUS WISHES AND PROMISES</p>
        <button onClick={() => setModalOpen(true)}>Post a Wish</button>
      </div>

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
        {data?.map((friend, index) => (
          <SwiperSlide key={index} className="lg:w-[500px]">
            <Card friend={friend} />
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

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} onSubmit={handleModalSubmit} />
    </div>
  );
};

export default HomePage;
