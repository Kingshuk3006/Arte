import React from 'react';
import {ImGoogle} from 'react-icons/im';
import {getProviders, signIn as signIntoProvider} from 'next-auth/react';
import Navbar from '../../components/Home/Hero/Navbar';
import Footer from '../../components/Home/Footer';

const login = ({providers}) => {
  return (
    <div className="min-h-[70vh] bg-[#0F0F0F] relative">
    <Navbar/>
      <div className="max-w-[1280px] xl:mx-auto lg:mx-16 md:mx-8 mx-8 py-8">
        {/* <div> */}
          {/* <img src="/images/logo.svg" className='w-24 mx-auto sm:mx-0'/> */}
        {/* </div> */}
        <div className="md:grid-cols-2 grid grid-cols-1 justify-items-center place-items-center my-8 gap-8">
          <div>
            <button className="bg-transparent border border-[#F9DBB3] rounded-full flex md:space-x-8 space-x-4 text-lg  text-white px-4 py-3 md:text-2xl items-center hover:bg-[#f9dbb32d] duration-150" onClick={() => signIntoProvider (providers.google.id, {callbackUrl: '/'})}>
              <ImGoogle className="text-[#F9DBB3]" />
              <span>Login with</span>
              <span className="text-[#F9DBB3]">Google</span>
            </button>
          </div>
          <div className=''>
            <img src="/images/artist.png" />
          </div>
        </div>
      </div>
      <img src="/images/effect.png" className='absolute top-0 right-0 -z-30'/>
      <Footer/>
    </div>
  );
};

export async function getServerSideProps () {
  const providers = await getProviders ();

  return {
    props: {
      providers: providers,
    },
  };
}

export default login;
