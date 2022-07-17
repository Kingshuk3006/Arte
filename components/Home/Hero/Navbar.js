import React from 'react';
import DrawerSection from '../DrawerSection';
import Link from 'next/link';
import {useSession, signIn, signOut} from 'next-auth/react';
import {Avatar} from '@material-ui/core';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useState, useEffect} from 'react';
const navbarList = [
  'Articles',
  'Near You',
  'References',
  'Artist & Artworks',
  'Tutorials',
];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState (null);
  const open = Boolean (anchorEl);
  const handleClick = event => {
    setAnchorEl (event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl (null);
  };
  return (
    <div>
      <nav className="flex flex-row h-24 items-center justify-between px-16 mx-auto max-w-[1280px]">
        <div>
          <img src="/images/logo.svg" alt="logo" className="w-20" />
        </div>
        <div className="hidden md:block">
          <ul className="flex flex-row items-center">
            {navbarList.map (item => {
              return (
                <Link href="#" key={item}>
                  <a>
                    <li className="mx-8 text-white font-Inter text-lg cursor-pointer hover:text-[#F9DBB3]">
                      {item}
                    </li>
                  </a>
                </Link>
              );
            })}
          </ul>
        </div>
        <Link href="/login">
          <a>
            <button
              className={`bg-[#0F0F0F] border-2 border-[#F9DBB3] px-4 py-2 text-white rounded-full hover:border-[#c58d43] hidden md:block `}
            >
              Sign In
            </button>
          </a>
        </Link>

        <div className="block md:hidden">
          <DrawerSection />
        </div>
      </nav>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <div className="flex flex-col space-y-2 p-2 child:cursor-pointer">
          <div onClick={handleClose}>Profile</div>
          <div onClick={handleClose}>My account</div>
          <div onClick={signOut}>Logout</div>
        </div>
      </Menu>
    </div>
  );
};

export default Navbar;
