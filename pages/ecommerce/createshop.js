import React from 'react';
import Footer from '../../components/Home/Footer';
import Navbar from '../../components/Home/Hero/Navbar';
import TextField from '@mui/material/TextField';
import {useState} from 'react';
import {useRef} from 'react';
import cities from '../../database/city';

const Createshop = () => {
    const ref = useRef(null);
  const [getStarted, setGetStarted] = useState (false);
  const [state, setState] = useState ('');
  //   console.log(state)

  const stateCity = cities.filter (element => element.state == state);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div className="bg-[#0F0F0F]">
      <Navbar />
      <div className="max-w-[1280px] xl:mx-auto lg:mx-16 md:mx-8 mx-4">
        <section className="grid lg:grid-cols-2 grid-cols-1 justify-items-center items-center lg:gap-8">
          <div className="lg:space-y-8 space-y-4 flex flex-col justify-center items-center lg:items-start">
            <h1 className="lg:text-5xl text-3xl  font-Playfair text-[#F9DBB3] flex ;g:justify-start justify-center items-center text-center">
              Build Your Shop ! <img src="/images/shop.svg" className="ml-4 w-8 lg:w-12" />
            </h1>
            <h1 className="xl:text-2xl text-xl text-[#FFFFFF] w-full text-center lg:text-left">
              Register your Shop in Arte to get Started.
              {/* <br /> */}
              Fill up the details!
            </h1>
            <button
              className="px-4 lg:py-3 py-2 bg-[#F9DBB3] rounded-md text-black md:text-xl text-lg  font-semibold"
              onClick={() => {setGetStarted (true); setTimeout(()=>{
                handleClick()
              }, [200])}}
            >
              Get Started
            </button>
          </div>
          <img src="/images/createshop.png" />
        </section>
        <div className={`my-12 ${!getStarted && 'hidden'}`} ref={ref}>
          <h1 className="xl:text-5xl lg:text-4xl text-3xl font-Playfair text-[#F9DBB3] text-center">
            Register Your Shop
          </h1>
          <form className="flex flex-col space-y-12 py-16">
            <div className="w-full flex flex-col  space-y-4">
              <label className="text-xl text-[#F9DBB3]">Shop Name</label>
              <input
                type="text"
                placeholder="Your Shop Name"
                className="bg-[#1b1b1b88] border border-[#f9dbb341] focus:outline-none px-4 py-3 placeholder:text-[#ffffff49] text-white rounded-md"
              />
            </div>
            <div className="w-full flex flex-col  space-y-4">
              <label className="text-xl text-[#F9DBB3]">Address</label>
              <textarea
                type="text"
                placeholder="Your Address"
                className="bg-[#1b1b1b88] border border-[#f9dbb341] focus:outline-none px-4 py-3 placeholder:text-[#ffffff49] text-white rounded-md"
              />
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1  gap-12">
              <div className="w-full flex flex-col  space-y-4">
                <label className="text-xl text-[#F9DBB3]">Country</label>
                <select className="child:bg-black bg-[#1b1b1b88] border border-[#f9dbb341] focus:outline-none px-4 py-3 text-[#F9DBB3] rounded-md">
                  <option value="">
                    Enter Country
                  </option>
                  <option value="India" className="">India</option>
                </select>
              </div>
              <div className="w-full flex flex-col  space-y-4">
                <label className="text-xl text-[#F9DBB3]">State</label>
                <select
                  className="child:bg-black bg-[#1b1b1b88] border border-[#f9dbb341] focus:outline-none px-4 py-3 text-[#F9DBB3] rounded-md"
                  onChange={e => setState (e.target.value)}
                >
                  <option value="">Select State</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadar and Nagar Haveli">
                    Dadar and Nagar Haveli
                  </option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1  gap-12">
              <div className="w-full flex flex-col  space-y-4">
                <label className="text-xl text-[#F9DBB3]">City</label>
                {state === ''
                  ? <select
                      className="child:bg-black bg-[#1b1b1b88] border border-[#f9dbb341] focus:outline-none px-4 py-3 text-[#F9DBB3] rounded-md"
                      disabled
                    >
                      <option>Select City</option>
                    </select>
                  : <select className="child:bg-black bg-[#1b1b1b88] border border-[#f9dbb341] focus:outline-none px-4 py-3 text-[#F9DBB3] rounded-md">
                      {stateCity.map (city => {
                        return <option value={city.name}>{city.name}</option>; //Mapping through city database According to state
                      })}
                    </select>}

              </div>
              <div className="w-full flex flex-col  space-y-4">
                <label className="text-xl text-[#F9DBB3]">Pincode</label>
                <input
                  type="text"
                  placeholder="Your Pincode"
                  className="bg-[#1b1b1b88] border border-[#f9dbb341] focus:outline-none px-4 py-3 placeholder:text-[#ffffff49] text-white rounded-md"
                />
              </div>
            </div>
            {/* <label className="">State</label> */}
            <div className="w-full flex flex-col  space-y-4">
              <label className="text-xl text-[#F9DBB3]">Landmark</label>
              <input
                type="text"
                placeholder="Your nearest landmark"
                className="bg-[#1b1b1b88] border border-[#f9dbb341] focus:outline-none px-4 py-3 placeholder:text-[#ffffff49] text-white rounded-md w=full"
              />
            </div>
            <button className="text-xl bg-[#F9DBB3] font-semibold rounded-md w-fit px-4 py-3 mx-auto">
              Register
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Createshop;
