import dynamic from 'next/dynamic';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { WishPerson, Person } from '@/app/data/wish';
import styles from './SwiperComponent.module.css';

// Dynamically import Swiper to avoid SSR issues
const Swiper = dynamic(() => import('swiper/react').then(mod => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import('swiper/react').then(mod => mod.SwiperSlide), { ssr: false });
import { Pagination, Navigation } from 'swiper/modules';

const Card = ({ person }: { person: Person }) => (
  <div className="bg-teal-300 p-4">
    <div className="smsfr grid bg-lime-400 grid-cols-4 p-3 rounded-3xl">
      {/* Left column: Photo */}
      <div className="col-span-1 bg-slate-800 p-2 rounded-2xl">
        <div className={`relative rounded-3xl overflow-hidden flex items-center justify-center bg-white p-2 ${styles.imageContainer}`}>
          {person.photo && (
            <Image
              src={person.photo}
              alt={person.name}
              layout="fill"
              className={styles.elem}
              sizes="(max-width: 908px) 80vw, (max-width: 1200px) 50vw, 80vw"
            />
          )}
        </div>
      </div>
      {/* Middle column: Wishes */}
      <div className="wishes bg-slate-50 col-span-2 grid rounded-2xl justify-center items-center p-2">
        <div className="bg-emerald-400 rounded-2xl p-4 grid justify-center">
          {person.wish && <p className="flex justify-center items-center">{person.wish}</p>}
          {person.name && <p className="font-extrabold flex justify-end">{person.name}</p>}
        </div>
      </div>
      {/* Right column: Promise and gift */}
      <div className="gif col-span-1 bg-cyan-500 gap-4 p-4 rounded-2xl">
        <div className="bg-orange-500 grid grid-rows-4">
          {person.promise && <p className="row-span-1 bg-white flex justify-center items-center font-bold">{person.promise}</p>}
          {person.gift && (
            <p className="font-extrabold grid justify-end pl-2 text-2xl row-span-1 justify-center items-center">
              {person.gift} !!
            </p>
          )}
          <div className="flex items-center justify-center bg-yellow-400 row-span-2">
            <div className={`relative rounded-3xl overflow-hidden ${styles.imageContainer}`}>
              {person.photoTwo && (
                <Image
                  src={person.photoTwo}
                  alt={person.name}
                  layout="fill"
                  className={styles.lemen}
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

const SwiperComponent = () => (
  <Swiper
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    modules={[Pagination, Navigation]}
    className={styles.swiperContainer}
  >
    {WishPerson.map((person: Person, index: number) => (
      <SwiperSlide key={index} className={styles.swiperSlide}>
        <Card person={person} />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default SwiperComponent;
