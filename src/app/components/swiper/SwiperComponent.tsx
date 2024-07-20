// components/SwiperComponent.js
'use client'
import dynamic from 'next/dynamic';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { WishPerson , Person} from '@/app/data/wish';
import styles from './SwiperComponent.module.css';

// Dynamically import Swiper to avoid SSR issues
const Swiper = dynamic(() => import('swiper/react').then(mod => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import('swiper/react').then(mod => mod.SwiperSlide), { ssr: false });
import { Pagination, Navigation } from 'swiper/modules';

const Card = () => (
  <div className="">
    {WishPerson.map((person : Person, index:number)=>(
<div className="smsfr grid bg-lime-400 grid-cols-4 p-3 rounded-3xl" key={index}>
<div className="col-span-1 bg-slate-800 flex items-center justify-center p-2 rounded-2xl">
      <div className={`relative rounded-3xl overflow-hidden ${styles.imageContainer}`}>
        {person.photo && <Image
          src={person.photo}
          alt={person.name}
          layout="fill"
         className={styles.elem}
          sizes="(max-width: 768px) 40vw, (max-width: 1200px) 50vw, 33vw"
        />}
      </div>
    </div>
    <div className="wishes bg-slate-50 col-span-2 grid rounded-2xl justify-center items-center p-2">
      <div className="bg-emerald-400 rounded-2xl p-4 grid justify-center">
        {person.wish && <p className="flex justify-center items-center">
          {person.wish}
        </p>}
        {person.name && <p className="font-extrabold flex justify-end">{person.name}</p>}
      </div>
    </div>
    <div className="gif col-span-1 bg-cyan-500 flex justify-end items-center gap-4 p-4 rounded-2xl">
      <div>
        {person.promise && <p>{person.promise}</p>}
        {person.gift && <p className="font-extrabold grid justify-end pl-2 text-2xl"> {person.gift} !!</p>}
        <div className="flex items-center">
          <div className={`relative rounded-3xl overflow-hidden ${styles.imageContainer}`}>
            {person.phot0Two && <Image
              src={person.phot0Two}
              alt={person.name}
              layout="fill"
              className={styles.elemen}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />}
          </div>
        </div>
      </div>
    </div>
</div>
    ))}
  
  </div>
);

const SwiperComponent = () => (
  <Swiper
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    modules={[Pagination, Navigation]}
  >
    {WishPerson.map((person, index) => (
      <SwiperSlide key={index} className={styles.swiperSlideContent}>
        <Card />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default SwiperComponent;
