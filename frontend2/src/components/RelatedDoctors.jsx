import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const RelatedDoctors = ({ docId, speciality }) => {
  const [relDocs, setRelDocs] = useState([]);
  const { doctors } = useContext(AppContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (doctors.length && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDocs(doctorsData);
    }
  }, [doctors, docId, speciality]);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-center">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm text-gray-600">
        Simply browse through our extended list of trusted doctors.
      </p>

    

      {/* More Button */}
      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className="bg-cyan-500 text-white px-10 py-3 rounded-full mt-10 font-medium shadow hover:bg-blue-700 transition"
      >
        More Doctors
      </button>
    </div>
  );
};

export default RelatedDoctors;
