import React, {useState} from 'react';
import Footer from '../../../components/Home/Footer';
import Navbar from '../../../components/Home/Hero/Navbar';
import ProductCard from '../../../components/ProductCard';
import {BiSearchAlt} from 'react-icons/bi';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {BsChevronDown} from 'react-icons/bs';

const Products = () => {
  const [anchorEl, setAnchorEl] = useState (null);
  const open = Boolean (anchorEl);
  const handleClick = event => {
    setAnchorEl (event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl (null);
  };
  return (
    <div className="bg-[#0F0F0F]">
      <Navbar />
      <div className="max-w-[1280px] md:mx-auto pb-4 mx-4">
        <div className="relative">
          <input
            className=" focus:outline-none border border-[#f9dbb396] rounded-full w-full bg-transparent pr-4 pl-14 py-3 my-8 placeholder:text-[#f9dbb37c] text-[#f9dbb3] placeholder:text-lg text-lg"
            placeholder="Search"
          />
          <BiSearchAlt className="text-[#f9dbb396] text-3xl absolute top-[45px] left-4" />
        </div>
        <div className='items-right flex justify-end mb-8'>
        <button
          className="text-black bg-[#F9DBB3] rounded-full px-4 py-2 w-fit flex justify-center items-center font-semibold"
          onClick={handleClick}
        >
          SORT BY <BsChevronDown className="text-black" />
        </button>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 items-center justify-items-center">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <Footer />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <div className="child:text-right -my-2 rounded-xs p-4 text-black space-y-4 w-28 text-xl">
          <h1 onClick={handleClose}>Price</h1>
          <h1 onClick={handleClose}>Newer</h1>
        </div>
      </Menu>
    </div>
  );
};

export default Products;
