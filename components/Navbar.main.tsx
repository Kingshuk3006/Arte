import React from "react";
// import DrawerSection from "../DrawerSection";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Button, Menu } from "@chakra-ui/react";

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
    const [open, setOpen] = useState<boolean>(false);
    const { data: session, status } = useSession();

    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const router = useRouter();

    return (
        <>
            <div className="flex justify-between items-center gap-8 py-4">
                <img
                    src="/images/logo.svg"
                    alt="logo"
                    width={70}
                />
                <section className="flex justify-center items-center gap-12">
                    {navbarList?.map(nav => (
                        <span onClick={() => router.push(nav.href)} className="cursor-pointer hover:color-main_tone_primary">{nav.item}</span>
                    ))}
                </section>
                <button className='btn-brown hidden xl:block'>
                    Sign In
                </button>
            </div>
        </>
    );
};

export default Navbar;
