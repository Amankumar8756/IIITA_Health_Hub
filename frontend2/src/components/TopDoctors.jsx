import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";


const TopDoctors = () => {
  const navigate = useNavigate();
  const {doctors} = useContext(AppContext);
  console.log("Doctors from context:", doctors);

  return (
    <div className="flex flex-col items-center gap-6 my-16 text-gray-900 px-4 md:px-10 lg:px-10">
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-center">
        Top Doctors to Book
      </h1>
      <p className="text-sm text-gray-600 text-center sm:w-1/2">
        Simply browse through our extended list of trusted doctors.
      </p>

      {/* Doctor Cards Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-5">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300 bg-white shadow-sm"
          >
            {/* Doctor Image */}
            <div className="w-full aspect-[4/3] bg-blue-50 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Doctor Info */}
            <div className="p-4 space-y-1">
              <div
                className={`flex items-center gap-2 text-sm ${
                  item.available ? "text-green-500" : "text-gray-500"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    item.available ? "bg-green-500" : "bg-gray-500"
                  }`}
                ></span>
                <p>{item.available ? "Available" : "Not Available"}</p>
              </div>
              <p className="text-lg font-semibold text-gray-800">{item.name}</p>
              <p className="text-sm text-gray-600">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* "More" Button */}
      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className="bg-blue-500 text-white px-6 py-2 rounded-full mt-10 hover:bg-blue-600 transition-all duration-300"
      >
        View More Doctors
      </button>
    </div>
  );
};

export default TopDoctors;
