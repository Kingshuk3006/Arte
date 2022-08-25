import React from 'react';
import Footer from '../../components/Home/Footer';
import Navbar from '../../components/Home/Hero/Navbar';
import {useRouter} from 'next/router';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import {db} from '../../firebase';
import {CgClose} from 'react-icons/cg';

const UserProfile = () => {
  const [userData, setUserData] = React.useState (null);
  const [userShopData, setUserShopData] = React.useState (null);

  const router = useRouter ();
  const userID = router.query.uid;

  const fetchUserDetails = React.useCallback (
    async () => {
      const eventRef = doc (db, 'users', userID);

      const eventsnap = await getDoc (eventRef);
      if (eventsnap.exists ()) {
        const data = eventsnap.data ();
        setUserData (data);
      } else {
        setUserData (null);
      }
    },
    [userID, router]
  );

  const checkForShop = async () => {
    const q = query (collection (db, 'shops'), where ('userid', '==', userID));

    const querySnapshot = await getDocs (q);
    querySnapshot.forEach (doc => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      setUserShopData ({data: doc.data (), id: doc.id});
    });
  };

  React.useEffect (
    () => {
      if (!router.isReady) return;
      fetchUserDetails ();
      checkForShop ();
    },
    [fetchUserDetails, router.isReady]
  );
  return (
    <div className="bg-[#0F0F0F]">
      <Navbar />
      <div className="xl:px-16 sm:px-8 px-4 mx-auto max-w-[1280px] text-white h-[70vh]">
        {!userData
          ? <div className="h-screen flex flex-col justify-center items-center space-y-4">
              <img src="/images/notFound.png" />
              <span className="lg:text-5xl font-semibold font-Roboto_flex text-[#F9DBB3]">
                User Not Found !!
              </span>
            </div>
          : <div>
              <div className="flex flex-col justify-center items-center space-y-8 my-8">
                <div>
                  <img src={userData?.image} className="w-[8rem] rounded-full" />
                </div>
                <div>
                  <h1 className="text-[#F9DBB3] xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-Playfair">
                    {userData?.name}
                  </h1>
                </div>
              </div>
              <h1 className="text-[#F9DBB3] lg:text-4xl text-2xl font-Playfair mb-4">Shop</h1>
              {!userShopData
                ? <div>
                    <h1 className="text-xl flex items-center my-4">
                      <CgClose className="text-red-500 text-3xl mr-4" />
                      No Shop Created !
                    </h1>
                  </div>
                : <div><div className='flex flex-col justify-start space-y-8 py-4 md:px-8 px-2 rounded-xl bg-[#1b1b1b88]'><section className='grid md:grid-cols-5 grid-cols-4'><label className='text-[#F9DBB3] lg:text-2xl text-lg whitespace-nowrap'>ShopID :</label><h1 className='col-span-4 lg:text-xl text-sm'>{userShopData?.id}</h1></section><section className='grid md:grid-cols-5 grid-cols-4'><label className='text-[#F9DBB3] lg:text-2xl text-lg whitespace-nowrap'>Shopname :</label><h1 className='col-span-4 lg:text-xl text-sm'>{userShopData?.data?.shopName}</h1></section></div></div>}
            </div>}
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
