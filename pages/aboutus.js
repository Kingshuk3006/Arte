import React from "react";
import Footer from "../components/Home/Footer";
import Navbar from "../components/Home/Hero/Navbar";
import { GrMail } from "react-icons/gr";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import * as animation from "./animation3.json";
import Lottie from "react-lottie";

const aboutus = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="bg-[#0F0F0F]">
      <Navbar />
      <div className="max-w-[1280px] xl:mx-auto lg:mx-16 md:mx-8 mx-4 text-white min-h-screen space-y-8">
        <div className="grid md:grid-cols-2 grid-cols-1 place-items-center gap-8 py-8">
          <section className="flex justify-start space-x-4 items-center">
            <img
              src="/kingshuk.jpeg"
              className="md:w-44 md:h-44 w-32 h-32 rounded-full object-cover"
            />
            <div className="space-y-2">
              <h1 className="font-Playfair md:text-3xl text-2xl text-[#F9DBB3]">
                Kingshuk Sarkar
              </h1>
              <h1 className="font-Roboto_flex opacity-30 text-xl">Developer</h1>
              <div className="flex justify-start space-x-4">
                <GrMail className="text-[#ffffff73] text-2xl cursor-pointer" />
                <BsLinkedin className="text-[#ffffff73] md:text-2xl text-xl cursor-pointer" />
              </div>
            </div>
          </section>
          <section className="flex justify-start space-x-4 items-center">
            <img
              src="/soumita.jpg"
              className="md:w-44 md:h-44 w-32 h-323 rounded-full"
            />
            <div className="space-y-2">
              <h1 className="font-Playfair md:text-3xl text-2xl text-[#F9DBB3]">
                Soumita Banerjee
              </h1>
              <h1 className="font-Roboto_flex opacity-30 text-xl">
                Artist, Ideation
              </h1>
              <div className="flex justify-start space-x-4">
                <GrMail className="text-[#ffffff73] md:text-2xl text-xl cursor-pointer" />
                <BsInstagram className="text-[#ffffff73] text-2xl cursor-pointer" />
              </div>
            </div>
          </section>
        </div>
        <h1 className="md:text-xl ">
          <span className="md:text-5xl text-4xl font-Playfair text-[#F9DBB3]">Arte</span> is
          a Project made by Kingshuk Sarkar and with help of Soumita Banerjee.
          It is an Art Market Place as well as Art Showcase place. You can Come
          and Upload Your Art Work in here for the others.
        </h1>
        <ul className="list-disc md:text-xl space-y-2 pl-4">
          <li>A place to Sell Your Artwork</li>
          <li>Users can buy your Artwork Your Artwork</li>
          <li>Users can ask artists to draw their dream Art or paintings</li>
          <li>Artists can showcase their Painting to the world!!</li>
        </ul>
        <div>
          <Lottie
            options={defaultOptions}
            height={300}
            width={300}
            // isStopped={showanimation}
            // isPaused={showanimation}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default aboutus;
