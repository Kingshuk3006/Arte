import React from "react";

const CartItemCard = ({
  title,
  mrp,
  discount,
  sellingPrice,
  shopName,
  image,
  setRemoveID,
  productID,
}) => {
  // console.log(productID);
  return (
    <div className="bg-[#1b1b1b88] rounded-xl md:px-8 px-4 md:py-4 py-3 text-white flex flex-col md:flex-row md:justify-start justify-center md:items-start items-center space-x-4 md:space-y-0 space-y-4 relative pb-16 md:pb-0">
      <img src={image} className="max-w-[15rem] object-contain" />
      <div className="">
        <section className="space-y-3 h-full">
          <h1 className="text-[#F9DBB3] font-Roboto_flex md:text-2xl text-xl font-medium">
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
        <button
          className="btn-brown bg-red-500 hover:bg-red-600 p-2 hover:text-white text-sm w-fit absolute md:right-8 md:bottom-8 right-3 bottom-3"
          onClick={()=>setRemoveID(productID)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItemCard;
