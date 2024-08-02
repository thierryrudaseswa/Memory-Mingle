import React from "react";
import Image from "next/image";

const MakeWish = () => {
  return (
    <div className=" grid justify-center items-center gap-6  bg-green-500 p-3">
      <div className="">
        <div className=" flex justify-center items-center">MAKE WISH</div>
      <div className=" bg-yellow-400 p-10">
      <div className=" grid grid-cols-3 justify-center items-center bg-black rounded-2xl">
          <div className=" col-span-2 font-light text-2xl">
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur pariatur labore necessitatibus? Molestiae officiis et
            nisi natus facere vitae totam maiores aspernatur quos, quod beatae
            alias quae provident quo culpa."
          </div>
          <div className=" col-span-1">
            <div className="relative h-96 w-96 rounded-3xl overflow-hidden">
              <Image
                src="/Image/thierry28.jpeg"
                alt="Thierry's Photo"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default MakeWish;
