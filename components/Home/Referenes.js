import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Artwork from "./Artwork";
import { CircularProgress } from "@chakra-ui/react";
import {Autoplay, Navigation, Pagination} from 'swiper';
import Link from "next/link";


const Referenes = () => {
  const router = useRouter();
  const [Allartworks, setAllArtworks] = useState([]);
  useEffect(() => {
    return onSnapshot(
      query(collection(db, "Artworks"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setAllArtworks(snapshot.docs);
      }
    );
  }, [db, router.isReady]);

  // console.log(artWorks, "svnsfvn");

  return (
    <div className="max-w-[1280px] xl:mx-auto lg:mx-16 md:mx-8 mx-4 text-white xl:py-16 py-8  bg-[#0F0F0F] lg:space-y-16 space-y-8 font-Roboto_flex">
      <h1 className="font-Playfair text-[#F9DBB3] md:text-5xl text-4xl text-center w-full">
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-[#363636]" />
          <span className="flex-shrink mx-12">
            <h1>Artworks</h1>
          </span>
          <div className="flex-grow border-t border-[#363636]" />
        </div>
      </h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 text-white place-items-center">
        <section className="text-xl md:text-2xl lg:text-3xl xl:text-4xl space-y-4">
          <h1>Show Case your Artworks in Arte.</h1>
          <h1>
            Let make Artist Community{" "}
            <span className="text-2xl lg:text-4xl xl:text-5xl font-semibold text-[#F9DBB3]">
              Bigger
            </span>
            !!
          </h1>
          <Link href="/artworks">
            <button className="btn-brown mt-4">Add Artwork</button>
          </Link>
        </section>
        {/* <section>
          <div className="md:w-72 w-48 my-4">
            <Swiper
              className="mySwiper"
              pagination={true}
              modules={[Autoplay, Pagination]}
              autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
            >
              {Allartworks.length !== 0 ? (
                <div>
                  {Allartworks.map((item, i) => {
                    if (i > 5) return;
                    else {
                      return (
                        <SwiperSlide key={i} style={{ height: "100%" }}>
                          <div className=" w-full bg-[#0F0F0F] h-[28rem]">
                            <img
                              src={item.data().artWork}
                              className="my-auto h-full w-full object-contain"
                            />
                          </div>
                        </SwiperSlide>
                      );
                    }
                  })}
                </div>
              ) : (
                <div className="flex justify-center items-center">
                  <CircularProgress />
                </div>
              )}
            </Swiper>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default Referenes;

/* */
