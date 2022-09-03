import Article from "../components/Home/Article/Article";
import Artwork from "../components/Home/Artwork";
import Footer from "../components/Home/Footer";
import Hero from "../components/Home/Hero/Hero";
import Nearyou from "../components/Home/Nearyou";
import Referenes from "../components/Home/Referenes";
import Tutorial from "../components/Home/Tutorial";
import { useSession } from "next-auth/react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import ArtMarket from "../components/Home/ArtMarket";
import * as animation from './animation.json';
import Lottie from 'react-lottie';

export default function Home() {
  const { data: session, status } = useSession();

  const uid = session && session.user.uid;
  console.log(session, uid);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const addNewUser = async () => {
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      await setDoc(doc(db, "users", uid), {
        name: session?.user?.name,
        email: session?.user?.email,
        image: session?.user?.image,
        userID: uid,
        cart: [],
      });
    }
  };

  if (status === "authenticated") {
    addNewUser();
  }

  return (
    <div className="w-full overflow-x-hidden bg-[#0F0F0F] h-screen">
      {loading ? (
        <div className="h-screen flex flex-col justify-center items-center space-y-8">
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          // isStopped={showanimation}
          // isPaused={showanimation}

        />
        <img src="/images/logo.svg"/>
        </div>
        
      ) : (
        <div className="w-full overflow-x-hidden bg-[#0F0F0F]">
          <Hero />
          <Referenes />
          <ArtMarket />
          <Footer />
        </div>
      )}
    </div>
  );
}
