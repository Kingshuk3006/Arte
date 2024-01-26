import React from "react";
// import { Drawer, Box, IconButton } from "@material-ui/core";
import { useState } from "react";
// import CancelIcon from "@mui/icons-material/Cancel";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import { useSession } from "next-auth/react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
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
  const { data: session } = useSession();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <Button onClick={()=>setIsDrawerOpen(true)}>
        <img src="/images/hamburger.svg" alt="hamburger" />
      </Button>
      <Drawer
        isOpen={isDrawerOpen}
        placement="right"
        onClose={()=>setIsDrawerOpen(false)}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>{/* <Input placeholder='Type here...' /> */}</DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={()=>setIsDrawerOpen(false)}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerSection;
