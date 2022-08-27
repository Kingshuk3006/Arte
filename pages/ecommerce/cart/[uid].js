import React, { useState } from "react";
import CartItemCard from "../../../components/CartItemCard";
import Footer from "../../../components/Home/Footer";
import Navbar from "../../../components/Home/Hero/Navbar";
import { useRouter } from "next/router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { useSession } from "next-auth/react";

const IndividualCart = () => {
  let totalPrice = 0;
  const { data: session } = useSession();
  const router = useRouter();
  const uid = router.query.uid;
  const [userData, setUserData] = useState(null);
  //   const [totalPrice, setTotalPrice] = useState(0);

  const fetchUserDetails = React.useCallback(async () => {
    const userRef = doc(db, "users", uid);

    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      const data = userSnap.data();
      setUserData(data);
    } else {
      setUserData(null);
    }
  }, [uid, router]);

  React.useEffect(() => {
    if (!router.isReady) return;
    fetchUserDetails();
  }, [fetchUserDetails, router.isReady]);

  const getTotalPrice = () => {
    userData?.cart?.forEach((element) => {
      totalPrice += element.sellingPrice;
    });
    return totalPrice;
  };

  return (
    <div className="bg-[#0F0F0F]">
      <Navbar />
      <div className="max-w-[1280px] xl:mx-auto lg:mx-16 md:mx-8 mx-4 min-h-[65vh]">
        {/* <div className="lg:mt-16 md:mt-12 mt-8">
          <div className="flex flex-col space-y-4 justify-center items-center my-auto">
            <img src="/images/empty.png" className="w-[30rem]" />
            <h1 className="text-[#F9DBB3] text-xl">No Cart item for now !!</h1>
          </div>
        </div> */}
        <div className="space-y-6">
          {userData?.cart?.map((item, index) => {
            {
              /* setTotalPrice(totalPrice + item.sellingPrice); */
            }
            return (
              <CartItemCard
                key={index}
                index={index}
                title={item.title}
                mrp={item.MRP}
                discount={item.discount}
                sellingPrice={item.sellingPrice}
                shopName={item.shopName}
                image={item.images}
                userId={userData.userID}
              />
            );
          })}
        </div>
        <hr className="bg-[#ffffff3b] my-8" />
        <div className="flex justify-center child:text-2xl font-Roboto_flex text-white space-x-4">
          <h1>Your Total Price for the Purchase is : </h1>
          <h1 className="text-[#F9DBB3]">₹ {getTotalPrice()}</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IndividualCart;
