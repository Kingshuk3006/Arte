import React, { useState } from "react";
import { useSession } from "next-auth/react";
import {
  arrayUnion,
  deleteDoc,
  doc,
  getDoc,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { useRouter } from "next/router";
import { AiTwotoneDelete } from "react-icons/ai";
import { useEffect } from "react";
import { Dialog, DialogContent } from "@mui/material";

const AskCard = ({
  description,
  name,
  email,
  image,
  time,
  askers,
  askId,
  setDeleteID,
}) => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const [nameSender, setNameSender] = useState("");
  const [message, setMessage] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { data: session } = useSession();
  const router = useRouter();

  const messageAll = {
    toMail: email,
    fromMail: process.env.FROM_MAIL,
    subject: message,
    html: `
    <p><strong>Message from:</strong> ${nameSender}</p>
    <p>${message}</p>`,
  };

  const handleClose2 = () => setOpen2(false);
  const handleOpen2 = () => setOpen2(true);

  const handleSendMail = async (e) => {
    console.log("Function Called");
    try {
      await fetch("/api/askArtist", {
        method: "POST",
        headers: {
          // "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageAll),
      });
      alert("Message Sent Seccessfully");
      await UpdateDoc();
      handleClose();
      router.reload(window.location.pathname);
    } catch (err) {
      console.log(err);
    }
  };

  const validateForm = () => {
    if ( nameSender === "" || message === "") {
      return false;
    } else {
      return true;
    }
  };

  // console.log(askers, askId);

  const UpdateDoc = async () => {
    console.log("Function called");
    let updateAskers = [...askers];
    updateAskers.push(session?.user?.uid);
    // console.log(updateAskers);
    const askRef = doc(db, "ask-artist", `${askId}`);
    try {
      await updateDoc(askRef, {
        askers: arrayUnion(session?.user?.uid),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteAsk = async () => {
    await deleteDoc(doc(db, "ask-artist", askId));
    router.reload(window.location.pathname);
  };

  return (
    <div className="bg-[#1b1b1b88] rounded-xl border border-[#f9dbb341] w-full flex flex-col space-y-4 text-[#ffffffbe] font-Roboto_flex py-4 md:px-8 px-4 relative">
      <section className="flex justify-start space-x-4 items-center">
        <img src={image} className="w-12 h-12 rounded-full object-cover" />
        <h1 className="text-[#F9DBB3] text-lg">{name}</h1>
      </section>
      <section className="text-base px-4">{description}</section>
      <div className="md:text-right text-center pt-4">
        <div>
          {!askers.includes(session?.user?.uid) ? (
            <div>
              {!open ? (
                <button
                  className="btn-brown w-fit text-sm px-2 py-2"
                  onClick={handleOpen}
                >
                  Start Painting
                </button>
              ) : (
                <button
                  className="btn-brown bg-red-500 text-white w-fit text-sm px-2 py-2"
                  onClick={handleClose}
                >
                  Cancel
                </button>
              )}
            </div>
          ) : (
            <button
              className="btn-brown w-fit text-sm px-2 py-2 bg-[#f9dbb365] hover:bg-[#f9dbb365] cursor-not-allowed"
              disabled
            >
              Start Painting
            </button>
          )}
        </div>
      </div>
      <div className={`text-white ${open ? "block" : "hidden"} `}>
        <div className="flex flex-col space-y-8">
          <section className="flex flex-col space-y-4">
            <label className="text-[#F9DBB3] md:text-xl text-lg mb-2 md:mb-0">
              Name
            </label>
            <input
              type="text"
              value={nameSender}
              onChange={(e) => setNameSender(e.target.value)}
              name="from_name"
              placeholder="Your Name"
              className="bg-transparent px-4 py-3 focus:outline-none border border-[#f9dbb341] rounded-md text-white"
            />
          </section>
          <section className="flex flex-col space-y-4">
            <label className="text-[#F9DBB3] md:text-xl text-lg mb-2 md:mb-0">
              Email
            </label>
           
          </section>
          <section className="flex flex-col space-y-4">
            <label className="text-[#F9DBB3] md:text-xl text-lg mb-2 md:mb-0">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              className="bg-transparent px-4 py-3 focus:outline-none border border-[#f9dbb341] rounded-md text-white"
              placeholder="Message"
            />
          </section>
          <div className="text-center">
            {validateForm() ? (
              <button
                className="btn-brown w-fit"
                onClick={async () => await handleSendMail()}
              >
                Send
              </button>
            ) : (
              <button
                type="submit"
                value="Send"
                className="btn-brown bg-[#f9dbb365] w-fit"
                disabled
              >
                Send
              </button>
            )}
          </div>
        </div>
      </div>

      {session && (
        <div>
          {email === session?.user?.email && (
            <div className="absolute top-4 right-4">
              <AiTwotoneDelete
                className="text-red-500 hover:text-600 text-2xl cursor-pointer"
                onClick={handleOpen2}
              />
            </div>
          )}
        </div>
      )}
      <Dialog
        open={open2}
        onClose={handleClose2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="p-6">
          <div id="alert-dialog-title">
            <div className="w-full text-center"><AiTwotoneDelete className="text-6xl text-red-500 mx-auto" /></div>
            
          </div>
          <DialogContent className="p-10">
            <div id="alert-dialog-description" className="w-full p-0">
              <h1 className="text-xl font-nunito">
                Do you want to Delete the Speaker?
              </h1>
            </div>
          </DialogContent>
          <div className="space-x-12 w-full flex justify-center">
            <button
              onClick={(e) => {
                deleteAsk();
              }}
              className="btn-brown"
              autoFocus
            >
              Yes
            </button>
            <button
              onClick={() => {
                handleClose2();
              }}
              className="bg-zinc-200 btn-brown text-black hover:bg-zinc-200"
            >
              No
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default AskCard;
