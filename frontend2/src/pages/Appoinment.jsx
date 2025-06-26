import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets'; // ✅ Ensure this is correctly pointing
const currencySymbol = '₹'; // Or '$' based on your app

const Appoinment = () => {
  const { id } = useParams();
  const { doctors } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);

  useEffect(() => {
    const fetchDocInfo = () => {
      const foundDoc = doctors.find((doc) => doc._id === id);
      setDocInfo(foundDoc);
      console.log(foundDoc);
    };

    fetchDocInfo();
  }, [doctors, id]);

  if (!docInfo) {
    return <div className="p-4 text-gray-500">Loading doctor details...</div>;
  }

  return (
    <div className="p-4 sm:p-8">
      {/* doctors details */}
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Doctor Image */}
        <div className="w-full sm:w-72">
          <img
            className="bg-cyan-500 w-full object-cover rounded-lg"
            src={docInfo.image}
            alt="Doctor"
          />
        </div>

        {/* Doctor Info */}
        <div className="flex-1 border border-gray-300 rounded-lg p-6 bg-white shadow-md">
          {/* Name + Verified */}
          <p className="flex items-center gap-2 text-2xl font-semibold text-gray-900">
            {docInfo.name}
            <img
              className="w-5"
              src={assets.verified_icon}
              alt="Verified"
            />
          </p>

          {/* Degree + Experience */}
          <div className="flex items-center gap-3 text-sm mt-2 text-gray-700">
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className="py-0.5 px-2 border border-gray-300 text-xs rounded-full">
              {docInfo.experience}
            </button>
          </div>

          {/* About Section */}
          <div className="mt-4">
            <p className="flex items-center gap-2 text-sm font-medium text-gray-900">
              About
              <img className="w-4" src={assets.info_icon} alt="info" />
            </p>
            <p className="text-sm text-gray-600 mt-1">
              {docInfo.about}
            </p>
          </div>

          {/* Fees */}
          <p className="text-gray-500 font-medium mt-4">
            Appointment fee:{" "}
            <span className="text-gray-700 font-semibold">
              {currencySymbol}{docInfo.fees}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Appoinment;
