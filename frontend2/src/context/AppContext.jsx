import React, { createContext, useState } from 'react';
import { doctors as doctorData } from '../assets/assets'; // or from API

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [doctors, setDoctors] = useState(doctorData); // ✅ Make sure it's filled!

  return (
    <AppContext.Provider value={{ doctors, setDoctors }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
