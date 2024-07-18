import dynamic from 'next/dynamic';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

// Dynamically import Swiper to avoid SSR issues
const Swiper = dynamic(() => import('swiper/react').then(mod => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import('swiper/react').then(mod => mod.SwiperSlide), { ssr: false });
import { Pagination, Navigation } from 'swiper/modules';

const Card = () => (
  <div className="smsfr grid bg-slate-500 grid-cols-4 p-3 rounded-3xl">
    <div className="col-span-1 bg-slate-800 flex items-center justify-center">
      <div className="relative h-96 w-96 rounded-3xl overflow-hidden">
        <Image
          src="/Image/thierry28.jpeg"
          alt="Thierry's Photo"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
    <div className="wishes bg-slate-50 col-span-2 grid justify-center items-center p-2">
      <div className="bg-emerald-400 rounded-2xl p-4 grid justify-center">
        <p className="flex justify-center items-center">
          quae! "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo et aut delectus voluptatum tenetur sapiente accusantium vero doloremque nisi assumenda blanditiis rem reiciendis nostrum iste quam, fugit mollitia. Temporibus, iure."
        </p>
        <p className="font-extrabold flex justify-end">By. Dr Thierry Rudaseswa</p>
      </div>
    </div>
    <div className="gif col-span-1 bg-cyan-500 flex justify-end items-center gap-4 p-4">
      <div>
        <p>Excited for your birthday! I have a special gift for you that I know you'll love, which isss</p>
        <p className="font-extrabold grid justify-end pl-2 text-2xl">Bicycle !!</p>
        <div className="flex items-center">
          <div className="relative h-36 w-36 rounded-3xl overflow-hidden">
            {/* <Image
              src="/Image/thierry28.jpeg"
              alt="Thierry's Photo"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
            /> */}
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
  >
    <SwiperSlide>
      <Card />
    </SwiperSlide>
 
  </Swiper>
);

export default SwiperComponent;
