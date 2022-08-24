import Link from 'next/link';
import React from 'react';
import Footer from '../../components/Home/Footer';
import Navbar from '../../components/Home/Hero/Navbar';
import {useSession} from 'next-auth/react';



const Ecommerce = () => {
  const {data: session, status} = useSession ();
  
  return (
    <div className="bg-[#0F0F0F]">
      <Navbar />
      <div className="mb-16">
        <img
          src="/images/ecommercebg.png"
          className="w-screen h-[70vh] object-cover relative"
        />
        <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center space-y-8 mt-12">
          <h1 className="font-Playfair font-semibold xl:text-6xl lg:text-4xl md:text-3xl text-2xl text-center text-white tracking-wider w-full">
            Lets Bring Colors in<br /> Your Place
          </h1>
          <Link href="/ecommerce/products">
            <button className="bg-black text-white font-medium px-4 py-3 xl:text-2xl text-lg rounded-md">
              Explore
            </button>

          </Link>
        </div>
      </div>
      <div className="max-w-[1280px] xl:mx-auto lg:mx-16 md:mx-8 mx-4 tracking-wider text-white space-y-8 py-8">
        <h1 className="font-Playfair xl:text-4xl lg:text-3xl text-2xl font-semibold text-center">
          Over <span className="text-[#F9DBB3]">300+</span> Art Works in Arte
        </h1>
        <section className="grid md:grid-cols-2 grid-cols-1 justify-items-center gap-8 items-center">
          <img src="/images/Askartist.png" />
          <div className="space-y-8 flex flex-col justify-center md:items-start items-center">
            <h1 className="text-[#F9DBB3] text-3xl lg:text-4xl font-semibold text-center md:text-left">
              Ask the Artist to Draw
            </h1>
            <h1 className="text-[rgba(255, 255, 255, 0.5)] text-xl text-center md:text-left">
              You can descrirbe your dream artwork you want, Our artist will try to get you that.
            </h1>
            <Link href="/ecommerce/ask-artist">
              <button className="btn-brown">
                Discover
              </button>
            </Link>

          </div>
        </section>
        <section className="flex flex-col-reverse md:flex-row gap-8 items-center">
          <div className="space-y-8 flex flex-col justify-center md:items-start items-center">
            <h1 className="text-[#F9DBB3] lg:text-4xl text-3xl font-semibold text-center md:text-left">
              Sell Your Art
            </h1>
            <h1 className="text-[rgba(255, 255, 255, 0.5)] text-xl text-center md:text-left">
              Sell Your artwork to customers with Arte. Start your carrier as an Artist!
            </h1>
            <Link
              href={session ? '/ecommerce/addProductforSell' : 'auth/signin'}
            >
              <button className="btn-brown">
                Sell
              </button>

            </Link>
          </div>
          <img src="/images/sell.png" />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Ecommerce;
