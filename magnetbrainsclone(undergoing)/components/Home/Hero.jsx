import React from 'react'

const Hero = () => {
  return (
    <div className='border-b border-gray-300 px-8 flex w-full items-center justify-between '>
      <div className="Heading text-center md:text-left mt-4">
          <h1 className='font-extrabold text-[#ff6445] text-2xl sm:text-4xl md:text-5xl lg:text-6xl'>INDIA'S NO. 1</h1>
          <span className=' flex md:w-80 md:block  flex-col md:flex-row font-extrabold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl'> 100% Free Online Education  
          <span>&nbsp; Platform</span>
          </span>
      </div>
      <div className="Image hidden md:block">
        <img className='w-64 md:w-96' src="/student1.webp" alt="studentimage" />
      </div>
    </div>
  )
}

export default Hero