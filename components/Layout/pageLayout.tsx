import React from "react";
import Navbar from "../Navbar.main";
import { AbsoluteCenter, Spinner } from "@chakra-ui/react";

interface Props {
    children: JSX.Element[] | JSX.Element;
}

const PageLayout = ({ children }: Props) => {
    return (
        <div className="xl:px-24 lg:px-16 md:px-8 sm:px-5 px-3 min-h-screen flex flex-col gap-4 md:gap-8 lg:gap-12 relative pb-4 md:pb-8 lg:pb-12 xl:pb-16">
            <Navbar />
            {children}
        </div>
    );
};

export default PageLayout;
