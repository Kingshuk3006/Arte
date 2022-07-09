import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import {EffectCards} from 'swiper';
const Referenes = () => {
  return (
    <div className="bg-[#0F0F0F] h-full">
      <h1 className="w-[100vw] bg-referencesbg bg-contain py-8 font-Playfair text-[#F9DBB3] md:text-5xl text-4xl flex items-center justify-center text-center md:text-left">
        References
      </h1>
      <div className="flex md:flex-row flex-col justify-around text-white items-center my-8 py-8 px-12 ">
        <div className='md:w-[30%]'>
          <h1 className="text-lg leading-loose">
            We feel the necessity of
            <span className="font-semibold text-[#F9DBB3]"> references </span>
            for artists.That's why we made enrich stock of refereces with category
          </h1>
          <button className="bg-[#0F0F0F] border-2 border-[#F9DBB3] px-8 py-2 text-white rounded-full hover:border-[#c58d43] my-4">
            Explore
          </button>
        </div>

        <div className="md:w-72 w-48 my-4">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
            slideShadows={false}
          >
            <SwiperSlide>
              <img src="/images/sketch.png" className="w-64" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/sketch.png" className="w-64" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/sketch.png" className="w-64" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/sketch.png" className="w-64" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/sketch.png" className="w-64" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/sketch.png" className="w-64" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Referenes;
