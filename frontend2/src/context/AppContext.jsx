import React, { createContext, useState } from 'react';
import { doctors as doctorData } from '../assets/assets'; 

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [doctors, setDoctors] = useState(doctorData); 

  return (
    <AppContext.Provider value={{ doctors, setDoctors }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
