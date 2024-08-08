// pages/index.tsx
"use client";
import "./globals.css";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import quotes from "./components/array/quote"; // Import the quotes array
// import SwiperComponent from "./components/swiper/SwiperComponent";
import Fireworks from "./components/Firework/Fireworks";
import Closer from "./components/Questions/Closer";
import HomePage from "./components/Swip/Swip";
import Friend from "./components/friends/Friend";
import Celebrity from "./components/celebrity/Celebrity";
import BehindName from "./components/BehindName/BehindName";
import Guess from "./components/Guess/Guess";
import Input from "./components/Input/Input";
import InputName from "./components/Input/Input";
import MakeWish from "./components/MakeWish/MakeWish";
import Questionnaire from "./components/Rather/Rather";
import StarryBackground from "./components/Stearth/Star";
import RotatingEarth from "./components/Stearth/Earth";
import About from "./components/About/About";
import connectDB from "../../config/database";


// import connectToDatabase from "./backend/mongoose";

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
// const connect = async ()=>{
//   const res = await connectDB();
//   console.log(res);
// }
// connect();

const connect = async ()=>{
  const res = await connectDB();
  console.log(res)
}
connect();

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
      <div className="grid  grid-cols-5  mb-8 h-[350px]  rounded-2xl relative z-10 text-white sm:grid sm:grid-cols-5">
        <div className="right col-span-2 grid justify-center items-center sm:col-span-3 sm:grid sm:justify-start">
          <div className=" sm:grid sm:justify-start">
            <div className="font-extrabold text-3xl flex justify-center">
              HAPPY BIRTHDAY
            </div>
            <div className="font-extrabold text-3xl flex justify-center">
              John Doe
            </div>
            <div className="quote-container mt-4 p-2  grid ml-2 justify-center h-40">
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
                    className="font-semibold text-2xl max-w-xl mb-8  p-4 rounded-3xl sm"
                    style={{ background: "#0e0146" }}
                  >
                    {quote}
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>

        <div className="left col-span-3 grid justify-center items-center  sm:p-3 sm:col-span-2">
          <div className="relative  w-[330px] h-[340px] rounded-3xl overflow-hidden sm:w-64 sm:h-[320px]">
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
      <div className="about row-span-2 p- relative z-10 text-white">
        <About />
      </div>

      {/* Friedn */}
      <div className=" ">
        <Friend />
      </div>

      {/* Homepage */}
      <div className="mb-8">
        {/* <SwiperComponent /> */}
        <HomePage />
      </div>
      {/* Closer */}
      <div className="qs p-4 rounded-xl">
        <Closer />
      </div>
      {/* Celebrity */}
      <div className="">
        <Celebrity />
      </div>
      {/* BehindNAme */}
      <div className="">
        <BehindName name="Thieery" />
      </div>
      {/* Guess */}
      <div className="">
        <Guess />
      </div>
      {/* MakeWish */}
      <div className="">
        <MakeWish />
      </div>
      {/* Question */}
      <div className="">
        <Questionnaire />
      </div>
    </main>
  );
};

export default Home;
