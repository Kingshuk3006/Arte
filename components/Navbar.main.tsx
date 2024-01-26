import React from "react";
// import DrawerSection from "../DrawerSection";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

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
    const [open, setOpen] = useState<boolean>(false)

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
                        onClick={()=> router.push('/')}
                    />
                </section>

                <div className="hidden xl:block">
                    <section className="flex justify-center items-center gap-12">
                        {navbarList?.map(nav => (
                            <span onClick={() => router.push(nav.href)} className="cursor-pointer hover:text-main_tone_primary">{nav.item}</span>
                        ))}
                    </section>
                </div>

                <button className='btn-brown' onClick={()=>router.push('/auth/signin')}>
                    Sign In
                </button>

                <Drawer
                    isOpen={open}
                    placement='right'
                    onClose={() => setOpen(false)}
                >
                    <DrawerOverlay />
                    <DrawerContent backgroundColor={'#F9DBB3'} textColor={'black'}>
                        <DrawerCloseButton color={'black'} />

                        <DrawerBody marginTop={20} marginBottom={20} className="flex justify-between items-center flex-col">
                            <section className="flex flex-col justify-start items-center gap-12">
                                {navbarList?.map(nav => (
                                    <span onClick={() => router.push(nav.href)} className="cursor-pointer">{nav.item}</span>
                                ))}
                            </section>
                            <button className='btn-brown bg-black text-white hover:bg-black'>
                                Sign In
                            </button>
                        </DrawerBody>


                    </DrawerContent>
                </Drawer>
            </div>
        </>
    );
};

export default Navbar;
