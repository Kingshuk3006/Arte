import React, {useState} from 'react';
import Navbar from '../components/Home/Hero/Navbar';
import Footer from '../components/Home//Footer';



const Nearyou = () => {
  return (
    <div className="bg-[#0F0F0F] h-screen">
      <Navbar />
      <div className='h-54 w-54 text-white'>
        Hello
      </div>
      <Footer />
    </div>
  );
};

export default Nearyou;
