import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className="aboutfriend  rounded-3xl p-8">
    <h1 className="flex justify-center items-center font-extrabold text-2xl">
      About John Doe
    </h1>
    <div className="grid grid-cols-7 gap-4">
      <div className="col-span-2 grid justify-center items-center p-12">
        <div className="relative h-96 w-96 rounded-3xl overflow-hidden sms:w-48">
          <Image
            src="/Image/thierry28.jpeg"
            alt="Thierry's Photo"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <p className="col-span-5 flex  justify-center items-center text-2xl p-4">
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
  )
}

export default About
