import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../../firebase";
import { useRouter } from "next/router";
import ProductCard from "../ProductCard";
import * as animation from "../../pages/animation2.json";
import Lottie from "react-lottie";
import Link from "next/link";
// import { Link } from "@material-ui/core";

const ArtMarket = () => {
  const [allProducts, setAllProducts] = useState([]);
  const router = useRouter();
  useEffect(() => {
    return onSnapshot(
      query(collection(db, "products"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setAllProducts(snapshot.docs);
      }
    );
  }, [db, router.isReady]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  console.log(allProducts);

  return (
    <div className="max-w-[1280px] xl:mx-auto lg:mx-16 md:mx-8 mx-4 text-white py-8 xl:py-16  bg-[#0F0F0F] lg:space-y-16 space-y-8 font-Roboto_flex">
      <h1 className="font-Playfair text-[#F9DBB3] md:text-5xl text-4xl text-center w-full">
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-[#363636]" />
          <span className="flex-shrink mx-12">
            <h1>Art Market</h1>
          </span>
          <div className="flex-grow border-t border-[#363636]" />
        </div>
      </h1>
      <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl space-y-4 text-center leading-relaxed">
        <Link href="/ecommerce/products">
          <button className="btn-brown mr-4">Explore</button>
        </Link>
        Arte Art Market
      </h1>
      {/* <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-8 place-items-center">
        {allProducts.map((product, i) => {
          if (i >= 3) return;
          else {
            return (
              <ProductCard
                key={i}
                title={product.data().title}
                shopName={product.data().shopName}
                mrp={product.data().MRP}
                sellingPrice={product.data().sellingPrice}
                discount={product.data().discount}
                image={product.data().images}
                productId={product.id}
              />
            );
          }
        })}
      </div> */}
      <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl space-y-8 text-center leading-relaxed">
        <h1>
          <Link href="/ecommerce/addProductforSell">
            <button className="btn-brown mr-4">Sell</button>
          </Link>
          Your Art Work
        </h1>
      </div>
      <hr className="border-[#363636] border w-3/5 mx-auto" />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 text-white place-items-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl space-y-4">
          <Link href="/ecommerce/ask-artist">
            <button className="btn-brown mb-4 mr-4">Ask Artist</button>
          </Link>
          <br /> to draw your{" "}
          <span className="text-[#F9DBB3]">dream ArtWork!</span>
        </h1>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          isStopped={false}
          isPaused={false}
        />
      </div>
    </div>
  );
};

export default ArtMarket;
