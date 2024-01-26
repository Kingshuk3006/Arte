import React from 'react'

const Hero = () => {
    return (
        <div className="flex md:flex-row flex-col justify-between items-center h-full ">
            <div className="space-y-8">
                <h1 className="font-DMSerif md:text-7xl text-5xl  text-main_tone_primary lg:my-4">
                    Find the
                    <br /> Artist in You
                </h1>
                <p className="text-white text-lg font-Inter">
                    Not just a art market place, but more...
                </p>
            </div>
            <div>
                <img src="/images/heroimage.png" className="md:w-[30rem] w-[20rem]" />
            </div>
        </div>
    )
}

export default Hero