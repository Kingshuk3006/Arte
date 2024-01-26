// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
const Article = () => {
  return (
    <div className="bg-[#0F0F0F] h-full my-8 py-8 -mt-8">
      <h1 className="w-[100vw] bg-articlebg bg-contain py-4 font-Playfair text-[#F9DBB3] text-5xl md:text-4xl flex items-center justify-center">
        Article
      </h1>
      <div className="mx-12  py-12">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          // pagination={{
          //   clickable: true,
          // }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col items-center justify-evenly text-white border rounded-lg px-4 py-2 border-l-white border-b-white border-t-[#F9DBB3] border-r-[#F9DBB3]">
              <div>
                <img
                  src="/images/imageCarousel.jpg"
                  alt="image"
                  className="w-auto object-scale-down h-56 my-2"
                />
              </div>
              <div className="flex flex-col items-center">
                <p className="my-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting ...
                </p>
                <button className="bg-[#0F0F0F] border-2 border-[#F9DBB3] px-4 py-2 text-white rounded-full hover:border-[#c58d43] my-2">
                  Read
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-evenly text-white border rounded-lg px-4 py-2 border-l-white border-b-white border-t-[#F9DBB3] border-r-[#F9DBB3]">
              <div>
                <img
                  src="/images/imageCarousel.jpg"
                  alt="image"
                  className="w-auto object-scale-down h-56 my-2"
                />
              </div>
              <div className="flex flex-col items-center">
                <p className="my-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting ...
                </p>
                <button className="bg-[#0F0F0F] border-2 border-[#F9DBB3] px-4 py-2 text-white rounded-full hover:border-[#c58d43] my-2">
                  Read
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-evenly text-white border rounded-lg px-4 py-2 border-l-white border-b-white border-t-[#F9DBB3] border-r-[#F9DBB3]">
              <div>
                <img
                  src="/images/imageCarousel.jpg"
                  alt="image"
                  className="w-auto object-scale-down h-56 my-2"
                />
              </div>
              <div className="flex flex-col items-center">
                <p className="my-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting ...
                </p>
                <button className="bg-[#0F0F0F] border-2 border-[#F9DBB3] px-4 py-2 text-white rounded-full hover:border-[#c58d43] my-2">
                  Read
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-evenly text-white border rounded-lg px-4 py-2 border-l-white border-b-white border-t-[#F9DBB3] border-r-[#F9DBB3]">
              <div>
                <img
                  src="/images/imageCarousel.jpg"
                  alt="image"
                  className="w-auto object-scale-down h-56 my-2"
                />
              </div>
              <div className="flex flex-col items-center">
                <p className="my-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting ...
                </p>
                <button className="bg-[#0F0F0F] border-2 border-[#F9DBB3] px-4 py-2 text-white rounded-full hover:border-[#c58d43] my-2">
                  Read
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-evenly text-white border rounded-lg px-4 py-2 border-l-white border-b-white border-t-[#F9DBB3] border-r-[#F9DBB3]">
              <div>
                <img
                  src="/images/imageCarousel.jpg"
                  alt="image"
                  className="w-auto object-scale-down h-56 my-2"
                />
              </div>
              <div className="flex flex-col items-center">
                <p className="my-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting ...
                </p>
                <button className="bg-[#0F0F0F] border-2 border-[#F9DBB3] px-4 py-2 text-white rounded-full hover:border-[#c58d43] my-2">
                  Read
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-evenly text-white border rounded-lg px-4 py-2 border-l-white border-b-white border-t-[#F9DBB3] border-r-[#F9DBB3]">
              <div>
                <img
                  src="/images/imageCarousel.jpg"
                  alt="image"
                  className="w-auto object-scale-down h-56 my-2"
                />
              </div>
              <div className="flex flex-col items-center">
                <p className="my-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting ...
                </p>
                <button className="bg-[#0F0F0F] border-2 border-[#F9DBB3] px-4 py-2 text-white rounded-full hover:border-[#c58d43] my-2">
                  Read
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <button className="flex flex-row items-center justify-evenly px-4 py-2 bg-[#0F0F0F] text-white border-[#F9DBB3] border-2 rounded-full m-auto">
        Discover More
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
};

export default Article;
