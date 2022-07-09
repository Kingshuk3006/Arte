
const HeroSection = () => {
  return (
    <div className="flex md:flex-row flex-col px-12 justify-between items-center pb-12 h-full my-8">
        <div className="md:ml-40 space-y-8 mx-auto my-8">
            <h1 className="font-Playfair md:text-[70px] text-5xl  text-[#F9DBB3] lg:my-4">
            Find the<br/> Artist in You
            </h1>
            <p className="text-white text-lg font-Inter md:w-[80%]">
            A place for the artists, which had been wanting for so long.
            </p>
        </div>
        <div>
            <img src='/images/heroimage.svg' alt='heroimage' className="md:w-[30rem] w-[20rem]"/>
        </div>
    </div>
  )
}

export default HeroSection