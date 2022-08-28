import React, { useState } from "react";
import Footer from "../../../components/Home/Footer";
import Navbar from "../../../components/Home/Hero/Navbar";
import ProductCard from "../../../components/ProductCard";
import { BiSearchAlt } from "react-icons/bi";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BsChevronDown } from "react-icons/bs";
import { GrBasket } from "react-icons/gr";
import { useSession } from "next-auth/react";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../../firebase";
import Link from "next/link";

const Products = () => {
  const { data: session, status } = useSession();
  const uid = session && session.user.uid;

  const [anchorEl, setAnchorEl] = useState(null);
  const [artWorks, setAllArtworks] = useState([]);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // React.useEffect (
  //   () => {
  //     return onSnapshot (
  //       query (collection (db, 'products'), orderBy ('timestamp', 'desc')),
  //       snapshot => {
  //         setAllArtworks (snapshot.docs);
  //       }
  //     );
  //   },
  //   [db]
  // );

  const getAskings = React.useCallback(async () => {
    const data = [];
    await getDocs(collection(db, "products"))
      .then((snapshot) => {
        snapshot.docs.map((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        setAllArtworks(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    getAskings();
  }, [getAskings]);

  console.log(artWorks);

  return (
    <div className="bg-[#0F0F0F] relative">
      <Navbar />
      {artWorks.length === 0 ? (
        <div className="flex flex-col space-y-4 justify-center items-center h-screen">
          <img src="/images/empty.png" className="w-[30rem]" />
          <h1 className="text-[#F9DBB3] text-xl">No Products !!</h1>
        </div>
      ) : (
        <div className="max-w-[1280px] md:mx-auto pb-4 mx-4 min-h-screen">
          <div className="relative">
            <input
              className=" focus:outline-none border border-[#f9dbb396] rounded-full w-full bg-transparent pr-4 pl-14 py-3 my-8 placeholder:text-[#f9dbb37c] text-[#f9dbb3] placeholder:text-lg text-lg"
              placeholder="Search"
            />
            <BiSearchAlt className="text-[#f9dbb396] text-3xl absolute top-[45px] left-4" />
          </div>
          <div className="items-right flex justify-end mb-8">
            <button
              className="text-black bg-[#F9DBB3] rounded-full px-4 py-2 w-fit flex justify-center items-center font-semibold"
              onClick={handleClick}
            >
              SORT BY <BsChevronDown className="text-black" />
            </button>
          </div>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 items-center justify-items-center">
            {artWorks.map((artwork, index) => {
              return (
                <ProductCard
                  title={artwork.title}
                  description={artwork.description}
                  mrp={artwork.MRP}
                  discount={artwork.discount}
                  image={artwork.images}
                  sellingPrice={artwork.sellingPrice}
                  tags={artwork.tags}
                  shopName={artwork.shopName}
                  productId={artwork.id}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      )}

      <Footer />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div className="child:text-right -my-2 rounded-xs p-4 text-black space-y-4 w-28 text-xl">
          <h1 onClick={handleClose}>Price</h1>
          <h1 onClick={handleClose}>Newer</h1>
        </div>
      </Menu>
      <Link href={`/ecommerce/cart/${uid}`}>
        <div className="fixed right-16 bottom-16">
          <div className="btn-brown rounded-full p-4 w-fit">
            <GrBasket className="text-white text-3xl" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Products;
