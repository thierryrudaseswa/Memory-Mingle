import React from "react";
import Image from "next/image";

const MakeWish = () => {
  return (
    <div className=" grid mt-5 justify-center items-center gap-6 p-3 text-white" style={{background:"#020223"}}>
      <div className="">
        <div className=" flex justify-center items-center">MAKE WISH</div>
      <div className="  p-10">
      <div className=" grid grid-cols-3 justify-center items-center rounded-2xl"  style={{background:"#0e0146"}}>
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
