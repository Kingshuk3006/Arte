import React from 'react';
import EcommerceSwiper from '../../../components/EcommerceSwiper';
import Footer from '../../../components/Home/Footer';
import Navbar from '../../../components/Home/Hero/Navbar';
import {AiFillTags} from 'react-icons/ai';
import {BsVectorPen} from 'react-icons/bs';

const IndividuaProduct = () => {
  return (
    <div className="bg-[#0F0F0F]">
      <Navbar />
      <div className="max-w-[1280px] xl:mx-auto lg:mx-16 md:mx-8 mx-4 text-white space-y-16 py-16 font-Roboto_flex">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-8  justify-items-center">
          <EcommerceSwiper />
          <section className="flex flex-col justify-between space-y-12">
            <div className="space-y-4">
              <h1 className="lg:text-5xl md:text-4xl text-3xl text-[#F9DBB3]">
                24 inch Watercolor Ganesh Painting
              </h1>
              <h1 className="text-[#f9dbb3d8] text-xl">- Krishna Goswami</h1>
              <div>
                <div className="flex justify-start space-x-4 child:h-full">
                  <section className="text-white flex items-center justify-center">
                    <span>₹</span><h1 className="text-4xl">400.00</h1>
                  </section>
                  <section className="text-[#f9dbb36e] flex">
                    <span>₹</span>
                    <h1 className="text-2xl line-through">500.00</h1>
                  </section>
                  <h1 className="text-red-400 text-lg">30% off</h1>
                </div>
                <h1 className="text-[#ffffff5e]">*Inclusive all taxes</h1>
              </div>

            </div>
            <div className="space-y-4">
              <h1 className="text-[#F9DBB3] text-xl flex items-center">
                <AiFillTags className="text-[#F9DBB3] mr-2 text-3xl" />
                Related Tags :
              </h1>
              <div className="grid lg:grid-cols-3 grid-cols-2 place-items-start justify-items-start gap-4">
                <button className="btn-brown bg-transparent hover:text-black duration-200 text-white border-[#f9dbb356] border font-light py-2 px-4 w-full text-lg">
                  Ganesh
                </button>
                <button className="btn-brown bg-transparent hover:text-black duration-200 text-white border-[#f9dbb356] border font-light py-2 px-4 w-full text-lg">
                  Watercolor
                </button>
                <button className="btn-brown bg-transparent hover:text-black duration-200 text-white border-[#f9dbb356] border font-light py-2 px-4 w-full text-lg">
                  ArtWork
                </button>
                <button className="btn-brown bg-transparent hover:text-black duration-200 text-white border-[#f9dbb356] border font-light py-2 px-4 w-full text-lg">
                  Wall Hanging
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 justify-items-center md:justify-items-start gap-8 md:gap-12 lg:gap-20">
              <button className="btn-brown bg-transparent border-[#F9DBB3] border text-[#F9DBB3] w-full hover:text-black">
                Add to Cart
              </button>
              <button className="btn-brown w-full">Buy</button>

            </div>

          </section>
        </div>
        <section className="xl:px-16 lg:px-12 md:px-8 px-4 mt-16 flex flex-col md:flex-row justify-start md:space-x-4 md:space-y-0 space-y-4">
          <h1 className="font-Playfair font-semibold text-[#F9DBB3] md:text-4xl text-3xl whitespace-nowrap flex items-center h-fit">
            Artist's Word
            <BsVectorPen className="text-[#F9DBB3] text-3xl ml-2" />
          </h1>
          <p className=" text-lg text-[#ffffffce] col-span-3 first-line:text-2xl first-line:mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default IndividuaProduct;
