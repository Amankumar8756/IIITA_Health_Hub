import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointment = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="p-4">
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">My Appointments</p>
      <div className="mt-6 space-y-6">
        {doctors.slice(0, 2).map((item, index) => (
          <div
            key={index}
             className="grid rid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b mt-10"
          >
            {/* Doctor Image */}
            <div className="flex-shrink-0">
              <img
                className="w-27 h-28 rounded-md "
                src={item.image}
                alt={item.name}
              />
            </div>

            {/* Doctor Info */}
            <div className="flex-1 text-sm text-zinc-700">
              <p className="text-lg font-semibold text-zinc-800">{item.name}</p>
              <p className="text-zinc-500">{item.speciality}</p>
              <p className="mt-2 font-medium">Address:</p>
              <p>{item.address.line1}</p>
              <p>{item.address.line2}</p>
              <p className="mt-2">
                <span className="font-medium text-zinc-800">Date & Time:</span> 25 July, 2025 | 8:30 PM
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-2">
              <button className="px-4 py-2 text-white bg-cyan-500 rounded hover:bg-blue-700">
                Pay Online
              </button>
              <button className="px-4 py-2 text-red-600 border border-red-500 rounded hover:bg-red-50">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointment;
