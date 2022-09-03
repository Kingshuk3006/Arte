import React, { useEffect, useState } from "react";
import Footer from "../../components/Home/Footer";
import Navbar from "../../components/Home/Hero/Navbar";
import { useSession } from "next-auth/react";
import AuthenticatedScreen from "../../components/AuthenticatedScreen";
import AskCard from "../../components/AskCard";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { serverTimestamp } from "firebase/firestore";
import { AiFillSlackCircle } from "react-icons/ai";
import { allowedStatusCodes } from "next/dist/lib/load-custom-routes";
import { useRouter } from "next/router";

const AskArtist = () => {
  const { data: session, status } = useSession();
  const [description, setDescription] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [allAsking, setAllAsking] = React.useState([]);
  const router = useRouter();

  const publishArt = async () => {
    setLoading(true);
    const docRef = await addDoc(collection(db, "ask-artist"), {
      writer_name: session.user.name,
      writer_image: session.user.image,
      writer_email: session.user.email,
      askers: [session.user.uid],
      time: serverTimestamp(),
      description: description,
    });
    setLoading(false);
    setDescription("");
    alert("Ask Added");
    router.reload(window.location.pathname);
  };

  const validateDescription = () => {
    if (description === "" || description.match(/(\w+)/g).length > 100) {
      return false;
    } else {
      return true;
    }
  };

  // const getAllAsks = async () => {
  //   const data = [...allAsking];
  //   await getDocs (collection (db, 'ask-artist')).then (snapshot => {
  //     snapshot.docs.map (doc => {
  //       data.push ({...doc.data (), id: doc.id});
  //     });
  //   });
  //   setAllAsking (data);
  // };

  // React.useEffect (() => {
  //   getAllAsks ();
  // }, []);

  const getAskings = React.useCallback(async () => {
    const data = [];
    const q = query(collection(db, "ask-artist"), orderBy("time", "desc"));
    await getDocs(q)
      .then((snapshot) => {
        snapshot.docs.map((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        setAllAsking(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [db]);

  React.useEffect(() => {
    getAskings();
  }, [getAskings]);

  // console.log(allAsking)

  // React.useEffect (
  //   () => {
  //     return onSnapshot (
  //       query (collection (db, 'ask-artist'), orderBy ('time', 'desc')),
  //       snapshot => {
  //         setAllAsking (snapshot.docs);
  //       }
  //     );
  //   },
  //   [db]
  // );

  return (
    <div className="bg-[#0F0F0F] font-Roboto_flex">
      <Navbar />
      <div className="max-w-[1280px] xl:mx-auto lg:mx-16 md:mx-8 mx-4 tracking-wider text-white space-y-8 py-8">
        {status === "authenticated" ? (
          <div>
            <form>
              <div className="flex md:flex-row flex-col justify-start md:space-x-4 md:space-y-0 space-y-4">
                <img
                  src={session.user.image}
                  className="w-10 md:h-12 h-10 md:w-12 rounded-full object-cover"
                />
                <div className="w-full">
                  <textarea
                    className="px-4 py-3 focus:outline-none border border-[#f9dbb341] rounded-md w-full bg-[#1b1b1b88] text-white"
                    placeholder="Describe your dream artwork in less than 100 words"
                    rows={7}
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  />
                  <h1 className="text-right text-[#f9dbb3de] md:text-lg text-base">
                    - {session.user.name}
                  </h1>
                </div>
              </div>
              <div className="text-center">
                {!validateDescription() ? (
                  <button
                    className="btn-brown bg-[#f9dbb35d] my-4 hover:bg-[#f9dbb365] cursor-not-allowed"
                    disabled
                  >
                    Publish
                  </button>
                ) : (
                  <button
                    className="btn-brown my-4"
                    onClick={(e) => {
                      e.preventDefault();
                      publishArt();
                    }}
                  >
                    Publish
                  </button>
                )}
              </div>
            </form>
            <hr className="border-[0.5px] border-[#f9dbb344] mt-8" />
            {/*
             */}
            {allAsking.length === 0 ? (
              <div className="flex flex-col space-y-4 justify-center items-center">
                <img src="/images/empty.png" className="w-[30rem]" />
                <h1 className="text-[#F9DBB3] text-xl">
                  No Askings for now !!
                </h1>
              </div>
            ) : (
              <div className="space-y-8 my-8">
                {allAsking.map((ask, index) => {
                  return (
                    <AskCard
                      description={ask?.description}
                      time={ask?.time}
                      email={ask?.writer_email}
                      image={ask?.writer_image}
                      name={ask?.writer_name}
                      key={index}
                      askers={ask?.askers}
                      askId={ask?.id}
                    />
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          <AuthenticatedScreen />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AskArtist;
