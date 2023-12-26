"use client";
import React from 'react'
export const Hero = () => {
  const handleScroll = () => {
    // window.scrollTo({top: -100, behavior: 'smooth'});
  }
  return (
    <div className='hero grid h-full mx-20 grid-cols-2 max-[500px]:grid-cols-1'>
      <div className='flex flex-col justify-center'>
        <h1 className='heroTitle text-4xl font-bold'>Find, book or rent a car, 
        Quick and easy!</h1>
        <p className='heroSubtitle italic mt-2 text-gray-600 text-xl'>
          Car hernu hoss ra kinnu hoss!
          </p>
          <button className='customBtn my-5 p-3 rounded-2xl font-bold w-max  bg-aquamarine text-black' onClick={handleScroll()}>Explore Cars</button>
      </div>
      <div className="imgContainer">
        <div className='heroImg'>
          <img src="/hero.png" alt="car" className="heroImg "/>
        
        </div>
        </div>
    </div>
  )
}
