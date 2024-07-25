// pages/index.tsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import quotes from "./components/array/quote"; // Import the quotes array
import SwiperComponent from "./components/swiper/SwiperComponent";
import Fireworks from "./components/Firework/Fireworks";
import Closer from "./components/Questions/Closer";

const images = [
  "/Image/thierry1.jpeg",
  "/Image/thierry28.jpeg",
  "/Image/thierry.jpg",
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
    <main
      className="relative min-h-screen bg-custom-gradient-1 animate-gradient-change p-10"
      style={{ color: "#001219" }}
    >
      <Fireworks />
      {/* the whole screen */}
      <div className="grid grid-cols-5 row-span-2 rounded-2xl relative z-10">
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
                  <div
                    key={index}
                    className="font-semibold text-2xl max-w-xl mb-8 bg-red-500 p-2 rounded-md"
                  >
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
                <div className="h-44 w-44">
                  <Image
                    src={images[currentImageIndex]}
                    alt="Birthday Image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* about a person */}
      <div className="about row-span-2 p-16 relative z-10">
        <div className="aboutd bg-orange-500 rounded-3xl p-8">
          <h1 className="flex justify-center items-center font-extrabold text-2xl">
            About John Doe
          </h1>
          <div className="grid grid-cols-7">
            <div className="col-span-2 grid justify-center items-center p-12">
              <div className="relative h-96 w-96 rounded-3xl overflow-hidden">
                <Image
                  src="/Image/thierry28.jpeg"
                  alt="Thierry's Photo"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <p className="col-span-5 flex justify-center items-center text-2xl p-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates corporis blanditiis sed autem ab quisquam? Officia ipsa
              cum inventore vitae cumque ea! Ea totam tempore veniam officia
              omnis quibusdam natus? Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Libero sint in optio omnis quod molestias
              recusandae ab quis blanditiis hic quasi, dicta modi nobis nam
              explicabo dolore. Excepturi, neque earum.
            </p>
          </div>
        </div>
      </div>

      {/* friend zone */}
      <div className="zone b p-7 row-span-2 relative z-10">
        <div className="zon grid grid-rows-5 p-8 bg-orange-500 rounded-3xl">
          <div className=" row-span-1  flex justify-center items-center text-3xl ">
            FRIEND ZONE
          </div>
          <div className=" row-span-4  grid grid-cols-3 gap-6 p-2">
            <div className="first  grid grid-rows-6 p-8 gap-4 rounded-3xl">
              <div className="name flex justify-center items-center row-span-1">
                {" "}
                thierry
              </div>
              <div className="image row-span-3  flex justify-center">
                <div className="relative h-44 w-44 rounded-3xl overflow-hidden">
                  <Image
                    src="/Image/thierry28.jpeg"
                    alt="Thierry's Photo"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="testimony text-sm m-0 row-span-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                deserunt perspiciatis maiores provident doloremque ipsam, quam
                quis repudiandae, fugit alias, minima at. At harum ea velit modi
                labore! Earum, sit!
              </div>
            </div>

            <div className="first b grid grid-rows-6 p-8 gap-4 rounded-3xl">
              <div className="name p-0 flex justify-center items-center row-span-1">
                {" "}
                thierry
              </div>
              <div className="image row-span-3  flex justify-center">
                <div className="relative h-44 w-44 rounded-3xl overflow-hidden">
                  <Image
                    src="/Image/thierry28.jpeg"
                    alt="Thierry's Photo"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="testimony text-sm row-span-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                deserunt perspiciatis maiores provident doloremque ipsam, quam
                quis repudiandae, fugit alias, minima at. At harum ea velit modi
                labore! Earum, sit!
              </div>
            </div>
            <div className="first grid grid-rows-6 p-8 gap-4 rounded-3xl">
              <div className="name flex justify-center items-center row-span-1">
                {" "}
                thierry
              </div>
              <div className="image row-span-3 flex justify-center">
                <div className="relative h-44 w-44 rounded-3xl overflow-hidden">
                  <Image
                    src="/Image/thierry28.jpeg"
                    alt="Thierry's Photo"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="testimony text-sm row-span-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                deserunt perspiciatis maiores provident doloremque ipsam, quam
                quis repudiandae, fugit alias, minima at. At harum ea velit modi
                labore! Earum, sit!
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <SwiperComponent />
      </div>
      <div className="qs bg-black p-4 rounded-xl">
        <Closer />
      </div>
    </main>
  );
};

export default Home;
