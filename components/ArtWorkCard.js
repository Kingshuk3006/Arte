import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { db } from "../firebase";
import Link from "next/link";

const ArtWorkCard = ({ id, name, image }) => {
  const [hasliked, setHasLiked] = useState(false);
  const [likes, setLikes] = useState([]);
  const { data: session, status } = useSession();

  const likePost = async () => {
    if (hasliked) {
      await deleteDoc(doc(db, "Artworks", id, "likes", session.user.uid));
    } else {
      await setDoc(doc(db, "Artworks", id, "likes", session.user.uid), {
        username: session.user.username,
      });
    }
  };

  useEffect(() => {
    return onSnapshot(collection(db, "Artworks", id, "likes"), (snapshot) => {
      setLikes(snapshot.docs);
    });
  }, [db, id]);

  useEffect(() => {
    if (session) {
      setHasLiked(
        likes.findIndex((like) => like.id === session.user.uid) !== -1
      );
    }
  }, [likes]);

  console.log(hasliked, "liked?");

  return (
    <div className="relative w-fit">
      <div>
        <img src={image} className="max-w-[18rem] rounded-2xl " />
      </div>
      <div className="absolute top-0 left-0 h-full w-full bg-[#00000059] opacity-0 hover:opacity-100 duration-100 flex flex-col justify-between p-4">
        <h1 className="flex justify-start items-center space-x-2 ">
          <span>{likes.length} Likes</span>
          {
            <div>
              {status !== "authenticated" ? (
                <Link href="/auth/signin">
                  <AiOutlineHeart className="cursor-pointer" />
                </Link>
              ) : (
                <div>
                  {hasliked ? (
                    <AiFillHeart
                      className="text-red-500 hover:scale-125 transition-all duration-300 text-2xl"
                      onClick={likePost}
                    />
                  ) : (
                    <AiOutlineHeart
                      className={`hover:scale-125 transition-all duration-300 text-2xl}`}
                      onClick={likePost}
                    />
                  )}
                </div>
              )}
            </div>
          }
        </h1>
        <h1 className="text-[#F9DBB3]">{name}</h1>
      </div>
    </div>
  );
};

export default ArtWorkCard;
