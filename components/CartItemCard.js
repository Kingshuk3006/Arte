import React from "react";

const CartItemCard = ({ title, mrp, discount, sellingPrice, shopName, image , userId, index}) => {
  return (
    <div className="bg-[#1b1b1b88] rounded-xl md:px-8 px-4 md:py-4 py-3 text-white flex justify-start space-x-4 relative max-h-64">
      <img
        src={image}
        className="max-w-[15rem] object-contain"
      />
      <div className="">
        <section className="space-y-3 h-full">
          <h1 className="text-[#F9DBB3] font-Roboto_flex text-2xl font-medium">
            {title}
          </h1>
          <h1 className="text-[#f9dbb36b] font-Roboto_flex text-lg font-medium">
            -{shopName}
          </h1>
          <div className="flex justify-start space-x-4">
            <section className="text-[#F9DBB3] flex items-center justify-start">
              <span>₹</span>
              <h1 className="text-2xl">{sellingPrice}</h1>
            </section>
            <section className="text-[#f9dbb36e] flex">
              <span>₹</span>
              <h1 className="text-2xl line-through">{mrp}</h1>
            </section>
            <h1 className="text-red-500 text-lg">{discount}% off</h1>
          </div>
        </section>
        <button className="btn-brown bg-red-500 hover:bg-red-600 p-2 hover:text-white text-sm w-fit absolute right-8 bottom-8">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItemCard;
