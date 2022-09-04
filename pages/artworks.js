import React, { useState } from "react";
import Footer from "../components/Home/Footer";
import Navbar from "../components/Home/Hero/Navbar";
import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { RiImageAddFill } from "react-icons/ri";
import Modal from "@mui/material/Modal";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai";
import { CgCloseO } from "react-icons/cg";
import { CircularProgress } from "@mui/material";

import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import ArtWorkCard from "../components/ArtWorkCard";

const Article = () => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [selectedFile, setSelectedFile] = useState("");
  const [caption, setCaption] = useState("");
  const [showImageSrc, setShowImageSrc] = useState("");
  const [singleArtTag, setSingleArtTag] = React.useState("");
  const [artTags, setArtTags] = React.useState([]);
  const [loading, setLoading] = useState(false);
  const [Allartworks, setAllArtworks] = useState([]);
  const router = useRouter();
  const [openedArtWork, setOpenedArtWork] = useState(null);

  const { data: session, status } = useSession();
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    RemoveData();
  };
  const handleOpen2 = () => setOpen(true);
  const handleClose2 = () => {
    setOpen2(false);
    setOpenedArtWork(null);
  };

  const addArtTag = () => {
    const tags = [...artTags];
    if (singleArtTag === "") {
      alert("Can't add empty Tag");
    } else {
      tags.push(singleArtTag);
      setArtTags(tags);
    }
    setSingleArtTag("");
  };

  const removeArtTag = (index) => {
    const tags = [...artTags];
    tags.splice(index, 1);
    setArtTags(tags);
  };

  const handleRemoveImage = () => {
    setShowImageSrc("");
    setSelectedFile("");
  };

  const addImagetoPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setShowImageSrc(readerEvent.target.result);
    };
  };

  const ValidateArtPost = () => {
    if (
      caption === "" ||
      artTags.includes("") ||
      artTags.length === 0 ||
      selectedFile === ""
    ) {
      return false;
    } else {
      return true;
    }
  };

  const RemoveData = () => {
    setCaption("");
    setSelectedFile("");
    setArtTags([]);
    setSingleArtTag("");
    setShowImageSrc("");
  };

  const addArtWork = async () => {
    setLoading(true);
    const docRef = await addDoc(collection(db, "Artworks"), {
      name: session?.user?.name,
      email: session?.user?.email,
      image: session?.user?.image,
      tags: artTags,
      caption: caption,
      timestamp: serverTimestamp(),
    });

    //upload image and update the document

    const date = new Date();
    const artWorkImageRef = ref(
      storage,
      `artwork${date.getTime()}_${session?.user?.name}.jpg`
    );

    const uploadTask =
      selectedFile && uploadBytesResumable(artWorkImageRef, selectedFile);
    uploadTask &&
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          switch (error.code) {
            case "storage/unauthorized":
              break;
            case "storage/canceled":
              break;

            case "storage/unknown":
              break;
          }
        },
        async () => {
          await getDownloadURL(uploadTask.snapshot.ref).then(
            async (downloadURLOnUpload) =>
              await updateDoc(doc(db, "Artworks", docRef.id), {
                artWork: downloadURLOnUpload,
              })
          );
        }
      );
    RemoveData();
    setLoading(false);
  };

  React.useEffect(() => {
    return onSnapshot(
      query(collection(db, "Artworks"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setAllArtworks(snapshot.docs);
      }
    );
  }, [db, router.isReady]);

  return (
    <div className="bg-[#0F0F0F]">
      <Navbar />
      <div className="max-w-[1280px] xl:mx-auto lg:mx-16 md:mx-8 mx-4 text-white min-h-screen ">
        <div>
          {Allartworks.length !== 0 ? (
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 place-items-center">
              {Allartworks?.map((artwork, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => {
                      setOpen2(true);
                      setOpenedArtWork(artwork.data());
                    }}
                  >
                    <ArtWorkCard
                      key={i}
                      id={artwork.id}
                      image={artwork.data().artWork}
                      name={artwork.data().name}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="h-screen flex justify-center items-center">
              <CircularProgress />
            </div>
          )}
        </div>
      </div>
      <Footer />

      {status === "authenticated" && (
        <div
          className="w-fit text-[#F9DBB3] rounded-full md:p-4 p-2 fixed right-8 bottom-8 bg-[#1b1b1b88] border-2 border-[#F9DBB3] cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <RiImageAddFill className="xl:text-4xl lg:text-3xl text-2xl" />
        </div>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2c2c2c] md:w-[70vw] w-[90vw] overflow-y-auto  outline-none rounded-lg ">
          <div className="space-y-4 p-4">
            <section className="flex justify-start space-x-4 items-center">
              <img
                src={session?.user?.image}
                className="rounded-full w-12 h-12 object-cover"
              />
              <h1 className="text-[#F9DBB3] text-2xl font-Roboto_flex">
                {session?.user?.name}
              </h1>
            </section>
            <textarea
              className="bg-transparent w-full px-4 py-3 focus:outline-none border border-[#f9dbb341] rounded-md text-white"
              rows={5}
              placeholder="Add some Name"
              onChange={(e) => setCaption(e.target.value)}
              value={caption}
            />
            <section className=" md:space-x-4 font-Roboto_flex items-center relative xl:w-1/4">
              <div className="col-span-3 flex flex-col ">
                <input
                  type="text"
                  value={singleArtTag}
                  placeholder="Add some tags"
                  className="bg-transparent px-4 py-3 focus:outline-none border border-[#f9dbb341] rounded-md text-white "
                  onChange={(e) => setSingleArtTag(e.target.value)}
                />
                <div className="flex flex-wrap">
                  {artTags.map((tag, index) => (
                    <span
                      className="bg-[#F9DBB3] font-medium w-fit px-3 py-2 rounded-full flex items-center ml-4 mt-4"
                      key={index}
                    >
                      {tag}
                      <AiOutlineClose
                        className="ml-2 cursor-pointer"
                        onClick={() => removeArtTag(index)}
                      />
                    </span>
                  ))}
                </div>

                {artTags.length >= 5 ? (
                  <span
                    className="bg-[#f9dbb380] text-black px-3 py-3 w-fit absolute right-0 rounded-tr-md rounded-br-md cursor-not-allowed"
                    disabled
                  >
                    Add
                  </span>
                ) : (
                  <span
                    className="bg-[#F9DBB3] text-black px-3 py-3 w-fit absolute right-0 rounded-tr-md rounded-br-md cursor-pointer"
                    onClick={addArtTag}
                  >
                    Add
                  </span>
                )}
              </div>
            </section>
            <div className="bg-[#1b1b1b88]  rounded-xl my-auto">
              {showImageSrc !== "" ? (
                <div className="relative">
                  <img
                    src={showImageSrc}
                    alt="null"
                    className="lg:max-h-[20rem] md:max-h-[15rem] max-h-[10rem]  object-contain mx-auto"
                  />
                  <div className="flex justify-end w-full">
                    <div className="w-full h-full absolute bg-[#00000094] top-0 opacity-0 hover:opacity-100">
                      <CgCloseO
                        className="text-[#F9DBB3] sm:text-3xl text-xl cursor-pointer absolute top-4 right-4"
                        onClick={() => handleRemoveImage()}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <input
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                  className="my-auto mx-auto block w-fit text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#f9dbb3be] hover:file:bg-[#F9DBB3]  py-4 md:h-[20rem]"
                  onChange={(e) => {
                    setSelectedFile(e.target.files[0]);
                    addImagetoPost(e);
                  }}
                />
              )}
            </div>
            <div className="text-center">
              {ValidateArtPost() ? (
                <div>
                  {!loading ? (
                    <button className="btn-brown" onClick={addArtWork}>
                      Add
                    </button>
                  ) : (
                    <button className="btn-brown">Adding..</button>
                  )}
                </div>
              ) : (
                <button className="btn-brown bg-[#f9dbb356] cursor-not-allowed hover:bg-[#f9dbb356]">
                  Add
                </button>
              )}
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2c2c2c] md:w-[70vw] w-[90vw] outline-none space-y-4 p-4 rounded-lg ">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 justify-content-center align-content-center">
            <img src={openedArtWork?.artWork} className="max-h-full " />
            <div className="space-y-8">
              <h1 className="font-Playfair text-3xl text-white text-center w-full">
                {openedArtWork?.caption}
              </h1>
              <div className="space-y-4">
                <h1 className="text-[#F9DBB3] text-xl mb-4">Related Tag :</h1>
                <div className="space-x-4 space-y-4 flex justify-start flex-wrap">
                  {openedArtWork?.tags.map((name, i) => {
                    return (
                      <button
                        className="btn-brown bg-transparent hover:text-black duration-200 text-white border-[#f9dbb356] border font-light py-2 px-4 w-fit text-lg"
                        key={i}
                      >
                        {name}
                      </button>
                    );
                  })}
                </div>
              </div>

              <section className="flex flex-col justify-start space-y-2 items-center">
                <img
                  src={openedArtWork?.image}
                  className="rounded-full lg:h-36 lg:w-36 object-cover"
                />
                <h1 className="text-[#F9DBB3] md:text-2xl text-xl font-Roboto_flex">
                  {openedArtWork?.name}
                </h1>
                <h1 className="text-[#f9dbb369] md:text-lg text-md font-Roboto_flex">
                  {openedArtWork?.timestamp.toDate().toDateString()}
                </h1>
              </section>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Article;
