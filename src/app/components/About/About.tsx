import React from 'react';
import Image from 'next/image';
import { useQuery } from 'react-query';
interface AboutProps{
  person:{
    name:string;
    text:string
  }
}


const About : React.FC<AboutProps>= ({person}) => {
 



  // Assuming data is an array and you want to display the first item
 

  return (
    <div className="aboutfriend rounded-3xl p-8">
      <h1 className="flex justify-center items-center font-extrabold text-2xl">
        About {person.name}
      </h1>
      <div className="grid grid-cols-7 gap-4">
        <div className="col-span-2 grid justify-center items-center p-12">
          <div className="relative h-96 w-96 rounded-3xl overflow-hidden sms:w-48">
            <Image
              src="/Image/thierry28.jpeg"
              alt={`${person.name}'s Photo`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <p className="col-span-5 flex justify-center items-center text-2xl p-4">
          {person.text}
        </p>
      </div>
    </div>
  );
};

export default About;
