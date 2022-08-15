import React from 'react';
import Footer from '../../components/Home/Footer';
import Navbar from '../../components/Home/Hero/Navbar';
import TextField from '@mui/material/TextField';

const Createshop = () => {
  return (
    <div className="bg-[#0F0F0F]">
      <Navbar />
      <div className='max-w-[1280px] xl:mx-auto lg:mx-16 md:mx-8 mx-4'>
        <section className='grid grid-cols-2 justify-center items-center gap-8'>
            <div className='space-y-8'>
                <h1 className='text-5xl font-Playfair text-[#F9DBB3] flex justify-start items-center'>Build Your Shop ! <img src="/images/shop.svg" className='ml-4'/></h1>
                <h1 className='text-2xl text-[#FFFFFF]'>Register your Shop in Arte to get Started.<br/> Fill up the details!</h1>
                <button className='px-4 py-3 bg-[#F9DBB3] rounded-md text-black text-xl font-semibold'>Get Started</button>
            </div>
            <img src="/images/createshop.png"/>
        </section>
        <div className='my-12'>
            <h1 className='text-5xl font-Playfair text-[#F9DBB3] text-center'>Register Your Shop</h1>
            <TextField id="outlined-basic" label="Shop Name" variant="outlined" />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Createshop;
