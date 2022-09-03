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

export default function Home() {
  const { data: session, status } = useSession();

  const uid = session && session.user.uid;
  console.log(session, uid);
  const router = useRouter();

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
    <div className="w-full overflow-x-hidden bg-[#0F0F0F]">
      <Hero />
      {/* <Article /> */}
      {/* <Nearyou /> */}
      <Referenes />
      {/* <Artwork /> */}
      {/* <Tutorial /> */}
      <Footer />
    </div>
  );
}
