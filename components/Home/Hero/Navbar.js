import React from "react";
import DrawerSection from "../DrawerSection";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
// import { Avatar } from "@material-ui/core";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Menu } from "@chakra-ui/react";
const navbarList = [
  {
    item: "Home",
    href: "/",
  },
  {
    item: "Art Works",
    href: "/artworks",
  },
  {
    item: "Art Market",
    href: "/ecommerce",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const router = useRouter();

  // console.log(session)
  return (
    <div>
      <nav className="flex flex-row h-24 items-center justify-between xl:px-16 px-8 mx-auto max-w-[1280px]">
        <div>
          <Link href="/">
            <img
              src="/images/logo.svg"
              alt="logo"
              className="w-20 cursor-pointer"
            />
          </Link>
        </div>
        <div className="hidden xl:block">
          <ul className="flex flex-row items-center">
            {navbarList.map((item) => {
              return (
                <Link href={`${item.href}`} key={item.item}>
                  <li className="mx-8 text-white font-Inter text-lg cursor-pointer hover:text-[#F9DBB3]">
                    {item.item}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
        {session ? (
          <img
            src={session.user.image || "/images/user.png"}
            className="w-12 h-12 rounded-full object-cover cursor-pointer"
            onClick={handleClick}
          />
        ) : (
          <Link href="/auth/signin">
            <button
              className={`bg-[#0F0F0F] border-2 border-[#F9DBB3] px-4 py-2 text-white rounded-full hover:border-[#c58d43] hidden xl:block`}
            >
              Sign In
            </button>
          </Link>
        )}
        <div className="block xl:hidden">
          <DrawerSection session={session} />
        </div>
      </nav>
      <Menu open={open} onClose={handleClose}>
        <div className="flex flex-col space-y-2 p-2 child:cursor-pointer bg-[#000000ec] -my-2 text-[#F9DBB3]">
          <div
            onClick={() => router.push(`/profile/admin/${session?.user?.uid}`)}
          >
            Profile
          </div>
          <div onClick={signOut}>Logout</div>
        </div>
      </Menu>
    </div>
  );
};

export default Navbar;
