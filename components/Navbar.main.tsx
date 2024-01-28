import React from "react";
// import DrawerSection from "../DrawerSection";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  Avatar,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoPersonOutline } from "react-icons/io5";
import { GoSignOut } from "react-icons/go";

const navbarList = [
  {
    item: "Art Works",
    href: "/artworks",
  },
  {
    item: "Art Market",
    href: "/ecommerce",
  },
  {
    item: "Art School",
    href: "/artschool",
  },
];

const Navbar = () => {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState<boolean>(false);

  const router = useRouter();

  return (
    <>
      <div className="flex justify-between items-center gap-8 py-4">
        <section className="flex justify-start items-center gap-3">
          <button onClick={() => setOpen(true)} className="xl:hidden">
            <RxHamburgerMenu size={35} color="#F9DBB3" />
          </button>
          <img
            src="/images/logo.svg"
            alt="logo"
            width={70}
            className="cursor-pointer"
            onClick={() => router.push("/")}
          />
        </section>

        <div className="hidden xl:block">
          <section className="flex justify-center items-center gap-12">
            {navbarList?.map((nav, i) => (
              <span
                key={i}
                onClick={() => router.push(nav.href)}
                className="cursor-pointer hover:text-main_tone_primary"
              >
                {nav.item}
              </span>
            ))}
          </section>
        </div>

        {status === "authenticated" && session !== null ? (
          <Menu>
            <MenuButton>
              <Avatar
                name={(session?.user?.name as string) || ""}
                src={(session?.user?.image as string) || ""}
                cursor={"pointer"}
              />
            </MenuButton>
            <MenuList backgroundColor={"#F9DBB3"} border={"none"}>
              <MenuItem backgroundColor={"#F9DBB3"} textColor={"black"} _hover={{bg: '#f8c582'}}>
                <Flex gap={2} alignItems={"center"} justifyContent={"start"}>
                  <IoPersonOutline size={20} />
                  <span className="font-medium">Profile</span>
                </Flex>
              </MenuItem>
              <MenuItem
                backgroundColor={"#F9DBB3"}
                textColor={"black"}
                onClick={() => signOut()}
                _hover={{bg: '#f8c582'}}
              >
                <Flex gap={2} alignItems={"center"} justifyContent={"start"} >
                  <GoSignOut size={20} />
                  <span className="font-medium">Signout</span>
                </Flex>
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <button
            className="btn-brown"
            onClick={() => router.push("/auth/signin")}
          >
            Sign In
          </button>
        )}

        <Drawer isOpen={open} placement="right" onClose={() => setOpen(false)}>
          <DrawerOverlay />
          <DrawerContent backgroundColor={"#F9DBB3"} textColor={"black"}>
            <DrawerCloseButton color={"black"} />

            <DrawerBody
              marginTop={20}
              marginBottom={20}
              className="flex justify-between items-center flex-col"
            >
              <section className="flex flex-col justify-start items-center gap-12">
                {navbarList?.map((nav, i: number) => (
                  <span
                    key={i}
                    onClick={() => router.push(nav.href)}
                    className="cursor-pointer"
                  >
                    {nav.item}
                  </span>
                ))}
              </section>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default Navbar;
