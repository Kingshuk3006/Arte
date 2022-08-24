import React from 'react';
import Footer from '../../../components/Home/Footer';
import Navbar from '../../../components/Home/Hero/Navbar';
import {useSession} from 'next-auth/react';
import {CgClose} from 'react-icons/cg';
import Link from 'next/link';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import cities from '../../../database/city';
import { addDoc, collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import {useRouter} from 'next/router';


const AdminProfile = () => {
  const {data: session} = useSession ();
  const [userData, setUserData] = useState(null)
  const [open, setOpen] = React.useState (false);
  const [address, setAddress] = useState ('');
  const [country, setCountry] = useState ('');
  const [state, setState] = useState ('');
  const [city, setCity] = useState ('');
  const [pincode, setPincode] = useState ('');
  const [landmark, setLandmark] = useState ('');
  const [loading, setLoading] = useState (false);

  const router = useRouter ();
  const userID = router.query.uid;
  console.log(userID)

  const fetchUserDetails = React.useCallback (
    async () => {
      const eventRef = doc (db, 'users', userID);

      const eventsnap = await getDoc (eventRef);
      if (eventsnap.exists ()) {
        const data = eventsnap.data ();
        setUserData (data);
      } else {
        router.push (`/404`);
      }
    },
    [userID, router]
  );

  React.useEffect (
    () => {
      if (!router.isReady) return;
      fetchUserDetails ();
    },
    [fetchUserDetails, router.isReady]
  );

  console.log (userData, "userdta");


  const handleOpen = () => setOpen (true);
  const handleClose = () => {setOpen (false); RemoveFormData()}
  const stateCity = cities.filter (element => element.state == state);

  const validateRegister = () => {
    if (
      address === '' ||
      country === '' ||
      state === '' ||
      city === '' ||
      pincode === '' ||
      pincode.length !== 6 ||
      landmark === ''
    ) {
      return false;
    } else {
      return true;
    }
  };

  const addPersonalInfo = async ()=>{
    setLoading(true)
    await addDoc(collection(db, 'users'), {
        name: session?.user?.name,
        image: session?.user.image,
        emailId: session?.user?.email,
        userID: session?.user?.uid,
        address: address,
        country: country,
        state: state,
        city: city,
        pincode: pincode,
        landmark: landmark
    })
    setLoading(false)
    alert("Info Added SuccessFully");
    handleClose()
  }

  const RemoveFormData = () => {
    setAddress ('');
    setCity ('');
    setState ('');
    setCountry ('');
    setPincode ('');
    setLandmark ('');
  };

  return (
    <div className="bg-[#0F0F0F]">
      <Navbar />
      <div className="xl:px-16 px-8 mx-auto max-w-[1280px] text-white space-y-12">
        <div className="flex flex-col justify-center items-center space-y-8 my-8">
          <div>
            <img src={session?.user?.image} className="w-[8rem] rounded-full" />
          </div>
          <div>
            <h1 className="text-[#F9DBB3] text-5xl font-Playfair">
              {session?.user?.name}
            </h1>
          </div>
        </div>
        <div className="space-y-8">
          <h1 className="text-[#F9DBB3] text-4xl font-Playfair">Person Info</h1>
          <h1 className="text-xl flex items-center">
            <CgClose className="text-red-500 text-3xl mr-4" /> No info given !
          </h1>
          <button className="btn-brown" onClick={handleOpen}>Add Info</button>
        </div>
        <div className="space-y-8">
          <h1 className="text-[#F9DBB3] text-4xl font-Playfair">Shop</h1>
          <h1 className="text-xl flex items-center">
            <CgClose className="text-red-500 text-3xl mr-4" /> No Shop Created !
          </h1>
          <Link href="/ecommerce/createshop">
            <button className="btn-brown">Create Shop</button>
          </Link>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2c2c2c] md:w-[50vw] w-[80vw] space-y-4 p-4 rounded-lg">
          <h1 className='text-[#F9DBB3] font-Roboto_flex text-3xl font-medium text-center'>Add Info</h1>
          <form className="flex flex-col space-y-4">
                <div className="w-full flex flex-col  space-y-4">
                  <label className="text-xl text-[#F9DBB3]">Address</label>
                  <textarea
                    value={address}
                    onChange={e => setAddress (e.target.value)}
                    type="text"
                    placeholder="Your Address"
                    className="bg-[#1b1b1b88] border border-[#f9dbb341] focus:outline-none px-4 py-3 placeholder:text-[#ffffff49] text-white rounded-md"
                  />
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1  md:gap-12">
                  <div className="w-full flex flex-col  space-y-4">
                    <label className="text-xl text-[#F9DBB3]">Country</label>
                    <select
                      value={country}
                      onChange={e => setCountry (e.target.value)}
                      className="child:bg-black bg-[#1b1b1b88] border border-[#f9dbb341] focus:outline-none px-4 py-3 text-[#F9DBB3] rounded-md"
                    >
                      <option value="">
                        Enter Country
                      </option>
                      <option value="India" className="">India</option>
                    </select>
                  </div>
                  <div className="w-full flex flex-col  space-y-4">
                    <label className="text-xl text-[#F9DBB3]">State</label>
                    <select
                      value={state}
                      className="child:bg-black bg-[#1b1b1b88] border border-[#f9dbb341] focus:outline-none px-4 py-3 text-[#F9DBB3] rounded-md"
                      onChange={e => setState (e.target.value)}
                    >
                      <option value="">Select State</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Andaman and Nicobar Islands">
                        Andaman and Nicobar Islands
                      </option>
                      <option value="Arunachal Pradesh">
                        Arunachal Pradesh
                      </option>
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
                      <option value="Jammu and Kashmir">
                        Jammu and Kashmir
                      </option>
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
                <div className="grid lg:grid-cols-2 grid-cols-1  md:gap-12">
                  <div className="w-full flex flex-col  space-y-4">
                    <label className="text-xl text-[#F9DBB3]">City</label>
                    {state === ''
                      ? <select
                          value={city}
                          className="child:bg-black bg-[#1b1b1b88] border border-[#f9dbb341] focus:outline-none px-4 py-3 text-[#F9DBB3] rounded-md"
                          disabled
                        >
                          <option>Select City</option>
                        </select>
                      : <select
                          value={city}
                          onChange={e => setCity (e.target.value)}
                          className="child:bg-black bg-[#1b1b1b88] border border-[#f9dbb341] focus:outline-none px-4 py-3 text-[#F9DBB3] rounded-md"
                        >
                          <option value="Select City">Select City</option>
                          {stateCity.map (city => {
                            return (
                              <option value={city.name}>{city.name}</option>
                            ); //Mapping through city database According to state
                          })}
                        </select>}

                  </div>
                  <div className="w-full flex flex-col  space-y-4">
                    <label className="text-xl text-[#F9DBB3]">Pincode</label>
                    <input
                      value={pincode}
                      onChange={e => setPincode (e.target.value)}
                      type="text"
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
                    onChange={e => setLandmark (e.target.value)}
                    type="text"
                    placeholder="Your nearest landmark"
                    className="bg-[#1b1b1b88] border border-[#f9dbb341] focus:outline-none px-4 py-3 placeholder:text-[#ffffff49] text-white rounded-md w=full"
                  />
                </div>
                {!validateRegister () || loading
                  ? <button
                      className="text-xl bg-[#f9dbb365] font-semibold rounded-md w-fit px-4 py-3 mx-auto cursor-not-allowed"
                      disabled
                    >
                      Add
                    </button>
                  : <button
                      className="text-xl bg-[#F9DBB3] font-semibold rounded-md w-fit px-4 py-3 mx-auto cursor-pointer"
                      onClick={addPersonalInfo}
                    >
                      Add
                    </button>}
              </form>
        </div>
      </Modal>
      <Footer />
    </div>
  );
};

export default AdminProfile;
