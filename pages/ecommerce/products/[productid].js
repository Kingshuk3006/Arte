import React, {useEffect} from 'react';
import EcommerceSwiper from '../../../components/EcommerceSwiper';
import Footer from '../../../components/Home/Footer';
import Navbar from '../../../components/Home/Hero/Navbar';
import {AiFillTags} from 'react-icons/ai';
import {BsVectorPen} from 'react-icons/bs';
import {useRouter} from 'next/router';
import {db} from '../../../firebase';
import {collection, doc, get, getDoc, query} from 'firebase/firestore';

const IndividuaProduct = () => {
  const [productDetails, setProductDetails] = React.useState (null);
  const router = useRouter ();
  const productID = router.query.productid;

  const fetchProductDetails = React.useCallback (
    async () => {
      const eventRef = doc (db, 'products', productID);

      const eventsnap = await getDoc (eventRef);
      if (eventsnap.exists ()) {
        const data = eventsnap.data ();
        setProductDetails (data);
      } else {
        router.push (`/404`);
      }
    },
    [productID, router]
  );

  React.useEffect (
    () => {
      if (!router.isReady) return;
      fetchProductDetails ();
    },
    [fetchProductDetails, router.isReady]
  );

  console.log (productDetails);

  return (
    <div className="bg-[#0F0F0F]">
      <Navbar />
      <div className="max-w-[1280px] xl:mx-auto lg:mx-16 md:mx-8 mx-4 text-white space-y-16 py-16 font-Roboto_flex">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-8  justify-items-center">
          {/* <EcommerceSwiper /> */}
          <img
            src={productDetails.images}
            className="w-[22rem] md:w-[30rem] xl:w-[35rem] object-contain"
          />
          <section className="flex flex-col justify-between space-y-12">
            <div className="space-y-4">
              <h1 className="lg:text-5xl md:text-4xl text-3xl text-[#F9DBB3]">
                {productDetails.title}
              </h1>
              <h1 className="text-[#f9dbb3d8] text-xl">
                - {productDetails.shopName}
              </h1>
              <div>
                <div className="flex justify-start space-x-4 child:h-full">
                  <section className="text-white flex items-center justify-center">
                    <span>₹</span>
                    <h1 className="text-4xl">{productDetails.sellingPrice}</h1>
                  </section>
                  <section className="text-[#f9dbb36e] flex">
                    <span>₹</span>
                    <h1 className="text-2xl line-through">
                      {productDetails.MRP}
                    </h1>
                  </section>
                  <h1 className="text-red-400 text-lg">
                    {productDetails.discount}% off
                  </h1>
                </div>
                <h1 className="text-[#ffffff5e]">*Inclusive all taxes</h1>
              </div>

            </div>
            <div className="space-y-4">
              <h1 className="text-[#F9DBB3] text-xl flex items-center">
                <AiFillTags className="text-[#F9DBB3] mr-2 text-3xl" />
                Related Tags :
              </h1>
              <div className="grid lg:grid-cols-3 grid-cols-2 place-items-start justify-items-start gap-4">
                {productDetails.tags.map ((tag, index) => {
                  return (
                    <button className="btn-brown bg-transparent hover:text-black duration-200 text-white border-[#f9dbb356] border font-light py-2 px-4 w-full text-lg" ley={index}>
                      {tag}
                    </button>
                  );
                })}

              </div>
            </div>

            <div className="grid grid-cols-2 justify-items-center md:justify-items-start gap-8 md:gap-12 lg:gap-20">
              <button className="btn-brown bg-transparent border-[#F9DBB3] border text-[#F9DBB3] w-full hover:text-black">
                Add to Cart
              </button>
              <button className="btn-brown w-full">Buy</button>

            </div>

          </section>
        </div>
        <section className="xl:px-16 lg:px-12 md:px-8 px-4 mt-16 flex flex-col md:flex-row justify-start md:space-x-4 md:space-y-0 space-y-4">
          <h1 className="font-Playfair font-semibold text-[#F9DBB3] md:text-4xl text-3xl whitespace-nowrap flex items-center h-fit">
            Artist's Word
            <BsVectorPen className="text-[#F9DBB3] text-3xl ml-2" />
          </h1>
          <p className=" text-lg text-[#ffffffce] col-span-3 first-line:text-2xl first-line:mb-2">
          {productDetails.description}
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default IndividuaProduct;
