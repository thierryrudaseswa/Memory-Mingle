'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import quotes from "./components/array/quote"; // Import the quotes array

const images = [
  "/Image/thierry1.jpeg",
  "/Image/thierry28.jpeg",
  "/Image/thierry.jpg" // Add more image paths as needed
];

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    // Change the image every 10 seconds (10000 milliseconds)
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Automatically change quotes every 10 seconds
    const quoteTimer = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 10000);

    return () => clearInterval(quoteTimer);
  }, []);

  return (
    <main className="min-h-screen grid grid-rows-10 p-10" style={{ color: '#001219' }}>
      {/* the whole screen */}
      <div className="grid grid-cols-5 row-span-2 bg-green-500 rounded-2xl">
        <div className="right col-span-2 grid justify-center items-center">
          <div>
            <div className="font-extrabold text-3xl flex justify-center">
              HAPPY BIRTHDAY
            </div>
            <div className="font-extrabold text-3xl flex justify-center">
              John Doe
            </div>
            <div className="quote-container mt-4 ml-8 ">
              <Carousel
                showThumbs={false}
                showStatus={false}
                showArrows={false}
                selectedItem={currentQuoteIndex}
                onChange={(index) => setCurrentQuoteIndex(index)}
                dynamicHeight={false}
                autoPlay={false} // Disable the built-in autoPlay feature
                interval={10000} // 
              >
                {quotes.map((quote, index) => (
                  <div key={index} className="font-semibold text-2xl max-w-xl mb-8 bg-red-500 p-2 rounded-md">
                    {quote}
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>

        <div className="left col-span-3 grid justify-center items-center">
          <div className="relative w-96 h-96 rounded-3xl overflow-hidden">
            <AnimatePresence>
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute top-0 left-0 w-full h-full"
              >
                <Image
                  src={images[currentImageIndex]}
                  alt="Birthday Image"
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* about a person */}
      <div className="about bg-slate-500 row-span-2 p-16">
        <div className="aboutd bg-orange-500 rounded-3xl p-8">
          <h1 className="flex justify-center items-center font-extrabold text-2xl">About John Doe</h1>
          <div className="grid grid-cols-7">
            <div className="col-span-2 grid justify-center items-center p-12">
              <div className="relative h-96 w-96 rounded-3xl overflow-hidden">
                <Image src="/Image/thierry28.jpeg" alt="Thierry's Photo" layout="fill" objectFit="cover" />
              </div>
            </div>
            <p className="col-span-5 flex justify-center items-center text-2xl p-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corporis blanditiis sed autem ab quisquam? Officia ipsa cum inventore vitae cumque ea! Ea totam tempore veniam officia omnis quibusdam natus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero sint in optio omnis quod molestias recusandae ab quis blanditiis hic quasi, dicta modi nobis nam explicabo dolore. Excepturi, neque earum.
            </p>
          </div>
        </div>
      </div>

      {/* friend zone */}

      <div className="zone bg-cyan-600 p-7 row-span-2">
        <div className="zon grid grid-rows-5 p-8 bg-orange-500 rounded-3xl">
          <div className=" row-span-1  flex justify-center items-center text-3xl ">FRIEND ZONE</div>
          <div className=" row-span-4  grid grid-cols-3 gap-6 p-2">

            <div className="first  grid grid-rows-6 p-8 gap-4 rounded-3xl">
              <div className="name flex justify-center items-center row-span-1"> thierry</div>
              <div className="image row-span-3  flex justify-center">
              <div className="relative h-44 w-44 rounded-3xl overflow-hidden">
                <Image src="/Image/thierry28.jpeg" alt="Thierry's Photo" layout="fill" objectFit="cover" />
              </div>
              </div>
              <div className="testimony text-sm row-span-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere deserunt perspiciatis maiores provident doloremque ipsam, quam quis repudiandae, fugit alias, minima at. At harum ea velit modi labore! Earum, sit!</div>
            </div>


            <div className="first b grid grid-rows-6 p-8 gap-4 rounded-3xl">
              <div className="name flex justify-center items-center row-span-1"> thierry</div>
              <div className="image row-span-3  flex justify-center">
              <div className="relative h-44 w-44 rounded-3xl overflow-hidden">
                <Image src="/Image/thierry28.jpeg" alt="Thierry's Photo" layout="fill" objectFit="cover" />
              </div>
              </div>
              <div className="testimony text-sm row-span-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere deserunt perspiciatis maiores provident doloremque ipsam, quam quis repudiandae, fugit alias, minima at. At harum ea velit modi labore! Earum, sit!</div>
            </div>
            <div className="first grid grid-rows-6 p-8 gap-4 rounded-3xl">
              <div className="name flex justify-center items-center row-span-1"> thierry</div>
              <div className="image row-span-3 flex justify-center">
              <div className="relative h-44 w-44 rounded-3xl overflow-hidden">
                <Image src="/Image/thierry28.jpeg" alt="Thierry's Photo" layout="fill" objectFit="cover" />
              </div>
              </div>
              <div className="testimony text-sm row-span-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere deserunt perspiciatis maiores provident doloremque ipsam, quam quis repudiandae, fugit alias, minima at. At harum ea velit modi labore! Earum, sit!</div>
            </div>

          </div>
        </div>
        

      </div>

      {/* wishes */}

         <div className="row-span-2 bg-teal-500 p-7 ">
        <div className=" bg-white grid rounded-3xl p-8 gap-6">
        <div className="head  grid grid-cols-10 gap-2">
          <div className="rate col-span-1 rounded-full flex justify-center font-extrabold text-2xl items-center h-20 w-20 bg-slate-500"> 96 %</div>
          <div className="par col-span-8 font-bold text-2xl bg-red-800 rounded-full p-4">
          <p className=" flex justify-center items-center"> Friendship isn't about who you've known the longest,
          it's about who walked into your  life and said,  </p> 
            <p className=" bg-lime-400 flex justify-center"> I'm here for you,' and proved it.</p> 
          </div>
          <div className=" col-span-1 bg-teal-300 flex justify-end items-center">
          <div className="relative h-20 w-20 rounded-3xl overflow-hidden">
                <Image src="/Image/thierry28.jpeg" alt="Thierry's Photo" layout="fill" objectFit="cover" />
              </div>
          </div>

        </div>



<div className="smsfr grid grid-cols-4 bg-slate-500 p-3">
  <div className=" col-span-1 bg-slate-800 flex items-center">
  <div className="relative h-56 w-56 rounded-3xl overflow-hidden  ">
                <Image src="/Image/thierry28.jpeg" alt="Thierry's Photo" layout="fill" objectFit="cover" />
              </div>

  </div>
  <div className="wishes bg-slate-50 col-span-2 grid justify-center items-center p-2">
   <div className=" bg-emerald-400 rounded-2xl  p-4 grid justify-center "> <p className=" flex justify-center items-center">  quae! "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo et aut delectus voluptatum tenetur sapiente accusantium vero doloremque nisi assumenda blanditiis rem reiciendis nostrum iste quam, fugit mollitia. Temporibus, iure."</p>
   <p className=" font-extrabold flex justify-end">By. Dr Thierry Rudaseswa</p></div>

  </div>
  <div className="gif col-span-1 bg-cyan-500 flex justify-end items-center gap-4 p-4"> 
 <div className="">
 <p> Excited for your birthday! I have a special gift for you that I know you'll love. which isss</p>
   <p className=" font-extrabold grid justify-end pl-2 text-2xl">Bicycle !!</p>
   <div className=" flex items-center"><div className="relative h-36 w-36 rounded-3xl overflow-hidden">
                <Image src="/Image/thierry28.jpeg" alt="Thierry's Photo" layout="fill" objectFit="cover" />
              </div></div>

 </div>
    </div>
  
 
</div>
<div className="smsfr grid grid-cols-4 bg-slate-500 p-3">
  <div className=" col-span-1 bg-slate-800 flex items-center">
  <div className="relative h-56 w-56 rounded-3xl overflow-hidden  ">
                <Image src="/Image/thierry28.jpeg" alt="Thierry's Photo" layout="fill" objectFit="cover" />
              </div>

  </div>
  <div className="wishes bg-slate-50 col-span-2 grid justify-center items-center p-2">
   <div className=" bg-emerald-400 rounded-2xl  p-4 grid justify-center "> <p className=" flex justify-center items-center">  quae! "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo et aut delectus voluptatum tenetur sapiente accusantium vero doloremque nisi assumenda blanditiis rem reiciendis nostrum iste quam, fugit mollitia. Temporibus, iure."</p>
   <p className=" font-extrabold flex justify-end">By. Dr Thierry Rudaseswa</p></div>

  </div>
  <div className="gif col-span-1 bg-cyan-500 flex justify-end items-center gap-4 p-4"> 
 <div className="">
 <p> Excited for your birthday! I have a special gift for you that I know you'll love. which isss</p>
   <p className=" font-extrabold grid justify-end pl-2 text-2xl">Bicycle !!</p>
   <div className=" flex items-center"><div className="relative h-36 w-36 rounded-3xl overflow-hidden">
                <Image src="/Image/thierry28.jpeg" alt="Thierry's Photo" layout="fill" objectFit="cover" />
              </div></div>

 </div>
    </div>
  
 
</div>
        </div>

         </div>
    </main>
  );
}

export default Home;
