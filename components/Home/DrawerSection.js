import React from "react";
import { Drawer, Box, IconButton } from "@material-ui/core";
import { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import { useSession } from "next-auth/react";
const navmenu = [
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

const DrawerSection = () => {
  const {data:session} = useSession()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className="font-gilroy w-full">
      <IconButton onClick={() => setIsDrawerOpen(true)}>
        <img src="/images/hamburger.svg" alt="hamburger" />
      </IconButton>
      <Drawer
        style={{ height: "100vh" }}
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} textAlign="center" role="presentation">
          <div className="bg-[#0F0F0F] h-[100vh] flex flex-col w-[75vw] justify-center text-white">
            <div className="w-full text-right px-4 py-2 cursor-pointer">
              <CancelIcon
                style={{ fontSize: "30px", margin: "10px" }}
                onClick={() => setIsDrawerOpen(false)}
              />
            </div>
            <ul className="flex flex-col items-left w-[60vw] m-auto font-semibold h-[50vh] text-[20px]">
              {navmenu.map((item) => {
                return (
                  <Link href={item.href} key={item.item}>
                    <li className=" my-4 w-full text-center">{item.item}</li>
                  </Link>
                );
              })}
            </ul>
            
            {session ? (
              <img
                src={session?.user?.image || "/images/user.png"}
                className="w-12 h-12 rounded-full object-cover cursor-pointer mx-auto"
              />
            ) : (
              <Link href="/auth/signin">
                <a className="text-center">
                  <button
                    className={`bg-[#0F0F0F] border-2 border-[#F9DBB3] px-4 py-2 text-white rounded-full hover:border-[#c58d43]`}
                  >
                    Sign In
                  </button>
                </a>
              </Link>
            )}
            <nav className="flex flex-row m-auto">
              <div className="mx-4">
                <InstagramIcon style={{ fontSize: "35px" }} />
              </div>
            </nav>
          </div>
        </Box>
      </Drawer>
    </div>
  );
};

export default DrawerSection;
