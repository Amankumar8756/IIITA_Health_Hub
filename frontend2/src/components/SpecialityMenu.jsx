import React from 'react';
import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-6 py-16 bg-white text-gray-800' id='speciality'>

      {/* Title Section */}
      <h1 className='text-3xl font-semibold'>Find by Speciality</h1>
      <p className='text-center text-sm sm:w-1/2 text-gray-600'>
        Simply browse through our extensive list of trusted doctors and schedule your appointment hassle-free.
      </p>

      {/* Scrollable Speciality List */}
      <div className='w-full overflow-x-auto'>
        <div className='flex justify-center gap-8 px-6 sm:px-10 md:px-20 py-6 min-w-max'>

          {specialityData.map((item, index) => (
            <Link
              key={index}
              to={`/doctors/${item.speciality}`}
              onClick={() => scrollTo(0, 0)}
              className='flex flex-col items-center justify-center gap-3 text-sm text-gray-700 hover:text-blue-600 cursor-pointer transition-all duration-300 transform hover:-translate-y-2'
            >
              <div className="flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white shadow-lg border border-gray-200">
                <img
                  src={item.image}
                  alt={item.speciality}
                  className='w-16 h-16 sm:w-20 sm:h-20 object-contain'
                />
              </div>
              <p className='text-center font-medium'>{item.speciality}</p>
            </Link>
          ))}

        </div>
      </div>
    </div>
  );
};

export default SpecialityMenu;
