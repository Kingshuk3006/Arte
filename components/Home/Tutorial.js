import React from 'react';

const Tutorial = () => {
  return (
    <div className='bg-[#0F0F0F] h-screen text-white'>
      <h1 className="bg-tutorialbg bg-contain py-4 my-4 font-Playfair text-[#F9DBB3] md:text-5xl text-4xl flex items-center justify-center">
        Tutorial
      </h1>
      <div className='flex md:flex-row flex-col items-center justify-evenly px-12'>
        <div className='md:w-[40%]'>
          <p className=' text-lg font-Inter tracking-wider my-2'>
            Self learning a great way to boost your speed and energy, Let the Artists guide you to the right track of learning.
          </p>
          <button className="bg-[#0F0F0F] border-2 border-[#F9DBB3] px-4 py-2 text-white rounded-full hover:border-[#c58d43] my-2">Go to Resources</button>
        </div>
        <div>
          <img src="/images/tutorialimage.svg" alt="image" className='md:w-[25rem] w-[20rem]' />
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
