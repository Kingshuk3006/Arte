import React from 'react';
import {RiShoppingBasketLine} from 'react-icons/ri';

const ProductCard = () => {
  return (
    <div className="bg-[#1b1b1b88] max-w-[30rem] rounded-md overflow-hidden">
      <img src="/images/eye.png" className="object-contain mx-auto hover:scale-110 duration-200" />
      <div className="p-8 space-y-2">
        <h1 className="text-white text-2xl font-normal">
          The Color of Eyes | 40x20cm wall hanging oill painting
        </h1>
        <h1 className="text-[#ffffff73] text-lg">-Rana Goswami</h1>
        <div className="flex justify-start space-x-4">
          <section className="text-[#F9DBB3] flex items-center justify-start">
            <span>₹</span><h1 className="text-2xl">400.00</h1>
          </section>
          <section className="text-[#f9dbb36e] flex">
            <span>₹</span><h1 className="text-2xl line-through">500.00</h1>
          </section>
          <h1 className="text-[#F9DBB3] text-lg">30% off</h1>
        </div>
        <div className="w-full flex justify-between items-center pt-4">
        <button className='bg-[#F9DBB3] rounded-md text-xl text-black px-4 py-2 font-semibold'>View</button>
          <RiShoppingBasketLine className="text-2xl text-[#F9DBB3] " />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
