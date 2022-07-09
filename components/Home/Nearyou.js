const Nearyou = () => {
  return (
    <div className="bg-[#0F0F0F] h-full py-8 text-white -mt-8">
      <h1 className="w-[100vw] bg-nearyoubg bg-contain py-4 font-Playfair text-[#F9DBB3] md:text-5xl text-3xl flex items-center justify-center text-center px-8">
        Explore Near by<br/>
        Art Gallery and Art Teachers
      </h1>
      <div className="font-Inter flex md:flex-row flex-col justify-evenly items-center px-12">
          <div className="md:w-[40%]">
              <p className=" my-4 text-lg">There are many Art Places near your locality which you might not even know,</p>
              <p className=" my-4 text-lg">Finding a art teacher in your area is quite troublesome!</p>
              <h1 className="md:text-3xl text-xl font-inter font-semibold text-[#D5BD9D] my-4">Let us help you out.</h1>
              <button className="bg-[#0F0F0F] border-2 border-[#F9DBB3] px-4 py-2 text-white rounded-full hover:border-[#c58d43] w-[12rem]">Go to maps</button>
          </div>
          <div>
              <img src='/images/bicycle.png' alt='cycle'/>
          </div>
      </div>
    </div>
  );
};

export default Nearyou;
