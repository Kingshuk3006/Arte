import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../../../components/Home/Footer";
import Navbar from "../../../components/Home/Hero/Navbar";
import { db } from "../../../firebase";
import cities from "../../../database/city";

const BuyProduct = () => {
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [landmark, setLandmark] = useState("");
  const stateCity = cities.filter((element) => element.state == state);
  const router = useRouter();
  const userID = router.query.uid;
  const [userData, setUserData] = useState(null);
  const [isPaymentDone, setIsPaymentDone] = useState(false);

  console.log(router.query, "query");

  const fetchUserDetails = React.useCallback(async () => {
    const eventRef = doc(db, "users", userID);

    const eventsnap = await getDoc(eventRef);
    if (eventsnap.exists()) {
      const data = eventsnap.data();
      setUserData(data);
    } else {
      setUserData(null);
    }
  }, [userID, router]);

  React.useEffect(() => {
    if (!router.isReady) return;
    fetchUserDetails();
  }, [fetchUserDetails, router.isReady]);

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const makePayment = async () => {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const data = await fetch("/api/razorpay", { method: "POST" }).then((t) =>
      t.json()
    );
    console.log(data);
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "Arte",
      currency: data.currency,
      amount: 100 * parseInt(router.query.totalPrice),
      order_id: data.id,
      description: "Thankyou for your Purchase",
      image: "https://manuarora.in/logo.png",
      handler: function (response) {
        alert("Payment Successfull !!");
        console.log(
          response.razorpay_signature,
          response.razorpay_order_id,
          response.razorpay_payment_id
        );
      },
      prefill: {
        name: "Kingshuk Sarkar",
        email: "kingsarkar3006@gmail.com",
        contact: "8777028005",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    setIsPaymentDone(true);
  };

  const RemoveAllCart = async () => {
    const userRef = doc(db, "users", userID);

    await updateDoc(userRef, {
      cart: [],
    });
  };

  useEffect(() => {
    if (isPaymentDone) {
      RemoveAllCart();
    }
  }, [isPaymentDone]);

  useEffect(() => {
    if (userData) {
      setAddress(userData?.address);
      setCity(userData?.city);
      setState(userData?.state);
      setCountry(userData?.country);
      setPincode(userData?.pincode);
      setLandmark(userData?.landmark);
    }
  }, [userData]);

  return (
    <div className="bg-[#0F0F0F]">
      <Navbar />
      <div className="xl:px-16 sm:px-8 px-4 mx-auto max-w-[1280px] text-white space-y-12 min-h-[70vh]">
        <div className="space-y-8 mt-8">
          <h1 className="font-Playfair md:text-3xl text-[#F9DBB3] text-2xl">
            Location Info
          </h1>
          <form className="flex flex-col space-y-12">
            <div className="w-full flex flex-col  space-y-4">
              <label className="text-xl text-[#F9DBB3]">Address</label>
              <textarea
                type="text"
                value={address}
                placeholder="Your Address"
                className="bg-[#1b1b1b88] border border-[#f9dbb341] focus:outline-none px-4 py-3 placeholder:text-[#ffffff49] text-white rounded-md"
              />
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1  gap-12">
              <div className="w-full flex flex-col  space-y-4">
                <label className="text-xl text-[#F9DBB3]">Country</label>
                <select
                  className="child:bg-black bg-[#1b1b1b88] border border-[#f9dbb341] focus:outline-none px-4 py-3 text-[#F9DBB3] rounded-md"
                  value={country}
                >
                  <option value="">Enter Country</option>
                  <option value="India" className="">
                    India
                  </option>
                </select>
              </div>
              <div className="w-full flex flex-col  space-y-4">
                <label className="text-xl text-[#F9DBB3]">State</label>
                <select
                  className="child:bg-black bg-[#1b1b1b88] border border-[#f9dbb341] focus:outline-none px-4 py-3 text-[#F9DBB3] rounded-md"
                  onChange={(e) => setState(e.target.value)}
                  value={state}
                >
                  <option value="">Select State</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadar and Nagar Haveli">
                    Dadar and Nagar Haveli
                  </option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1  gap-12">
              <div className="w-full flex flex-col  space-y-4">
                <label className="text-xl text-[#F9DBB3]">City</label>
                {state === "" ? (
                  <select
                    className="child:bg-black bg-[#1b1b1b88] border border-[#f9dbb341] focus:outline-none px-4 py-3 text-[#F9DBB3] rounded-md"
                    disabled
                  >
                    <option>Select City</option>
                  </select>
                ) : (
                  <select
                    className="child:bg-black bg-[#1b1b1b88] border border-[#f9dbb341] focus:outline-none px-4 py-3 text-[#F9DBB3] rounded-md"
                    value={city}
                  >
                    {stateCity.map((city) => {
                      return <option value={city.name}>{city.name}</option>; //Mapping through city database According to state
                    })}
                  </select>
                )}
              </div>
              <div className="w-full flex flex-col  space-y-4">
                <label className="text-xl text-[#F9DBB3]">Pincode</label>
                <input
                  type="text"
                  value={pincode}
                  placeholder="Your Pincode"
                  className="bg-[#1b1b1b88] border border-[#f9dbb341] focus:outline-none px-4 py-3 placeholder:text-[#ffffff49] text-white rounded-md"
                />
              </div>
            </div>
            {/* <label className="">State</label> */}
            <div className="w-full flex flex-col  space-y-4">
              <label className="text-xl text-[#F9DBB3]">Landmark</label>
              <input
                value={landmark}
                type="text"
                placeholder="Your nearest landmark"
                className="bg-[#1b1b1b88] border border-[#f9dbb341] focus:outline-none px-4 py-3 placeholder:text-[#ffffff49] text-white rounded-md w=full"
              />
            </div>
          </form>
        </div>
        <div className="">
          <h1 className="font-Playfair md:text-3xl text-[#F9DBB3] text-2xl">
            Payment Info
          </h1>
          <div className="text-center mb-16">
          {isPaymentDone ? <button className="btn-brown w-32 bg-[#f9dbb352] cursor-not-allowed hover:bg-[#f9dbb352]" disabled>
              Buy
            </button> : <button className="btn-brown w-32" onClick={makePayment}>
              Buy
            </button>}
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BuyProduct;
