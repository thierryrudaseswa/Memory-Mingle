import React from 'react'
import Image from 'next/image'


const Celebrity = () => {
  return (
    <div className="zone b p-7 row-span-2 relative z-10">
        <div className="zon grid grid-rows-5 p-8 bg-orange-500 rounded-3xl">
          <div className=" row-span-1  flex justify-center items-center text-3xl ">
            CELEBRITY TWINS
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
  )
}

export default Celebrity;
