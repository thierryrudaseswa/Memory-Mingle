import React from "react";
import Image from "next/image";

interface aboutperson{
  person:{
    wishing: string;
  }
}

const MakeWish:React.FC<aboutperson> = ({person}) => {
  return (
    <div className=" grid mt-5 justify-center items-center gap-6 p-3 text-white" style={{background:"#020223"}}>
      <div className="">
        <div className=" flex justify-center items-center p-0">MAKE WISH</div>
      <div className="  p-10">
      <div className=" grid grid-cols-3 justify-cente items-center rounded-2xl"  style={{background:"#0e0146"}}>
          <div className=" col-span-2 font-light text-2xl ">
            {person.wishing}
          </div>
          <div className=" col-span-1 grid justify-center">
            <div className="relative h-96 w-96 rounded-3xl overflow-hidden lg:w-56">
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
