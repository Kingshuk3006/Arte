import React from 'react';

let articleText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries";

const ArticleCard = () => {
  return (
    <div className="flex flex-col bg-gradient-to-br from-[#0F0F0F] via-[#2e2b23] to-[#0F0F0F]  hover:border hover:border-[#A79376] p-2 rounded-md space-y-4 hover:scale-105 duration-300">
      <img src="/images/imageCarousel.jpg" alt="Article image" className="" />
      <div className="text-white space-y-4 px-2">
        <h1 className="font-Playfair text-2xl font-semibold">
          Article Heading
        </h1>
        <h1>{articleText.slice(0, 100).concat ('...')}</h1>
      </div>
      <div className='text-center'>
      <button className="border border-[#A79376] font-semibold text-white px-4 py-2 rounded-md hover:bg-[#A79376] hover:text-black transition-all duration-300 w-44">
        Continue Reading
      </button>
      </div>
    </div>
  );
};

export default ArticleCard;
