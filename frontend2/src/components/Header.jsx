import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row bg-cyan-500 rounded-xl overflow-hidden shadow-lg px-6 md:px-10 lg:px-20'>

      {/* Left Section */}
      <div className='md:w-1/2 flex flex-col justify-center gap-6 py-12 md:py-20 text-white'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>
          Welcome to IIITA <br />
          Book Appointment <br />
          With Trusted Doctors
        </h1>

        <div className='flex flex-col sm:flex-row items-center gap-4'>
          <img src={assets.group_profiles} alt="Group Profiles" className='w-24 sm:w-28' />
          <p className='text-sm font-light text-white text-center sm:text-left'>
            Simply browse through our extensive list of trusted doctors,<br className='hidden sm:block' />
            and schedule your appointment hassle-free.
          </p>
        </div>

        <a
          href="#speciality"
          className='mt-4 sm:mt-0 inline-flex items-center gap-2 bg-white text-cyan-600 font-semibold px-6 py-3 rounded-full shadow hover:scale-105 transition-all duration-300 w-fit'
        >
          Book Appointment
          <img src={assets.arrow_icon} alt="Arrow Icon" className='w-4' />
        </a>
      </div>

      {/* Right Section */}
      <div className='md:w-1/2 flex items-end justify-center md:justify-end relative'>
        <img
          src={assets.header_img}
          alt="Header Visual"
          className='w-full h-auto object-cover md:max-w-[90%] mt-6 md:mt-0 md:mb-[-20px] rounded-t-xl md:rounded-xl'
        />
      </div>

    </div>
  )
}

export default Header
