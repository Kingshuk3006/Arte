import React from 'react';
import Footer from '../../components/Home/Footer';
import Navbar from '../../components/Home/Hero/Navbar';
import {useSession} from 'next-auth/react';
import AuthenticatedScreen from '../../components/AuthenticatedScreen';
import AskCard from '../../components/AskCard';

const AskArtist = () => {
  const {data: session, status} = useSession ();
  return (
    <div className="bg-[#0F0F0F] font-Roboto_flex">
      <Navbar />
      <div className="max-w-[1280px] xl:mx-auto lg:mx-16 md:mx-8 mx-4 tracking-wider text-white space-y-8 py-8">
        {status === 'authenticated'
          ? <div>
              <form>
                <div className="flex md:flex-row flex-col justify-start md:space-x-4 md:space-y-0 space-y-4">
                  <img
                    src={session.user.image}
                    className="w-10 md:h-12 h-10 md:w-12 rounded-full object-cover"
                  />
                  <div className="w-full">
                    <textarea
                      className="px-4 py-3 focus:outline-none border border-[#f9dbb341] rounded-md w-full bg-[#1b1b1b88] text-white"
                      placeholder="Describe your dream artwork in less than 100 words"
                      rows={7}
                    />
                    <h1 className="text-right text-[#f9dbb3de] md:text-lg text-base">
                      - {session.user.name}
                    </h1>
                  </div>
                </div>
                <div className="text-center">
                  <button className="btn-brown my-4">Publish</button>
                </div>
              </form>
              <hr className='border-[0.5px] border-[#f9dbb344] mt-8'/>
{/* 
              <div className="flex flex-col space-y-4 justify-center items-center">
                <img src="/images/empty.png" className='w-[30rem]'/>
                <h1 className="text-[#F9DBB3] text-xl">No Askings for now !!</h1>
              </div> */}
              <div className='space-y-8 my-8'>
              <AskCard/>
              <AskCard/>
              <AskCard/>
              </div>
            </div>
          : <AuthenticatedScreen />}
      </div>
      <Footer />
    </div>
  );
};

export default AskArtist;
