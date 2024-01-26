import React from "react";
import Link from "next/link";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const footerItem = [
  { key: Date.now(), item: "About Us", link: "/aboutus" },
  { key: Date.now(), item: "Contact Us", link: "/contact" },
  { key: Date.now(), item: "FAQs", link: "/faqs" },
];

const Footer = () => {
  return (
    <footer className="w-full ">
      <div className="flex flex-col items-center justify-center text-white space-y-8 py-8">
        <img src="/images/logo.svg" />
        <div>
          <ul className="flex md:flex-row md:space-x-24 md:space-y-0 flex-col space-y-4 text-center">
            {footerItem.map((elm) => {
              return (
                <li key={elm}>
                  <Link href={elm.link}>{elm.item}</Link>
                </li>
              );
            })}
          </ul>
          <ul className="space-x-12 flex flex-row items-center justify-center my-8">
            <Link href="#">
              <FaSquareFacebook />
            </Link>
            <Link href="#">
              <FaLinkedin />
            </Link>
            <Link href="#">
              <FaInstagram />
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
