import React from 'react'

const Artwork = () => {
  return (
    <div className='bg-[#0F0F0F] h-full my-8 space-y-4'>
      <h1 className="w-[100vw] bg-artworkbg bg-contain py-8 font-Playfair text-[#F9DBB3] md:text-5xl text-4xl my-4 flex items-center justify-center text-center">
        Artist & Artwork
      </h1>
      <img src='/images/artwork.png' alt='artwork' className='w-[75vw] m-auto'/>

    </div>
  )
}

export default Artwork