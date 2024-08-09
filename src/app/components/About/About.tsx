import React from 'react';
import Image from 'next/image';
import { useQuery } from 'react-query';

const fetchData = async () => {
  const response = await fetch('http://localhost:3000/backend/api/');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const About = () => {
  const { data, error, isLoading } = useQuery('aboutData', fetchData);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  // Assuming data is an array and you want to display the first item
  const person = data[0];

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
