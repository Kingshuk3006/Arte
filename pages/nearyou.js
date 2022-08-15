import React, {useEffect, useState} from 'react';
import Navbar from '../components/Home/Hero/Navbar';
import Footer from '../components/Home//Footer';
import Map from '../components/nearYou/Map';
import AddressAutofill from 'react-map-gl';

const Nearyou = ({locationData}) => {
  console.log(locationData)
  return (
    <div className="bg-[#0F0F0F]">
      <Navbar />
      <div className="md:px-16 px-8 max-w-[1280px] mx-auto py-8">
        <div className="flex md:space-x-36 space-x-8 md:child:text-lg child:text-base justify-center child:border-[#F9DBB3] child:border child:text-[#F9DBB3] md:child:px-6 child:px-4 child:py-2 child:rounded-lg md:pb-8 pb-4">
          <button className="hover:bg-[#f9dbb342]">Art Galleries</button>
          <button className="hover:bg-[#f9dbb342]">Art Teacher</button>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 ">
          <div className="lg:h-[30rem] md:h-[20rem] h-[15rem] cursor-pointer rounded-xl">
            <Map locationData={locationData}/>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Nearyou;

export async function getStaticProps () {
  const res = await fetch ('https://ipapi.co/json');
  const locationData = await res.json ();
  return {
    props: {locationData},
  };
}
