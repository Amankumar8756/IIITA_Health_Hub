import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Doctors from './pages/Doctors';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Myprofile from './pages/Myprofile';
import MyAppointment from './pages/MyAppointment';
import Appoinment from './pages/Appoinment';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        
        {/* Add both routes */}
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/my-appointments' element={<MyAppointment />} />
        <Route path='/appointment/:id' element={<Appoinment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


//  <Route path="/" element={<Home />} />
//         <Route path="/doctors" element={<Doctors />} />
//         <Route path="/doctors/:speciality" element={<Doctors />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="about/" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/my-profile" element={<MyProfile />} />
//         <Route path="/my-appointments" element={<MyAppointments />} />
//         <Route path="/appointment/:docId" element={<Appointment />} />