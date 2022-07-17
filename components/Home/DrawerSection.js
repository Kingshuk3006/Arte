import React from 'react';
import {Drawer, Box, IconButton} from '@material-ui/core';
import {useState} from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
const navmenu = ['Articles', 'Near You', 'References', 'ArtWorks', 'Tutorials'];

const DrawerSection = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState (false);
  return (
    <div className='font-gilroy'>
      <IconButton onClick={() => setIsDrawerOpen (true)}>
      <img src='/images/hamburger.svg' alt="hamburger"/>
      </IconButton>
      <Drawer
        style={{height: '100vh'}}
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen (false)}
      >
        <Box p={2} textAlign="center" role="presentation">
          <div className="bg-[#0F0F0F] h-[100vh] flex flex-col w-[75vw] justify-center text-white">
            <div className="w-full text-right px-4 py-2 cursor-pointer">
              <CancelIcon
                style={{fontSize: '30px', margin: '10px'}}
                onClick={() => setIsDrawerOpen (false)}
              />
            </div>
            <ul className="flex flex-col items-left w-[60vw] m-auto font-semibold h-[50vh] text-[20px]">
              {navmenu.map (name => {
                return (
                  <li className=" my-4 w-full text-center" key={name}>
                    {name}
                  </li>
                );
              })}
            </ul>
            <nav className="flex flex-row m-auto">
              <div className="mx-4">
                <InstagramIcon style={{ fontSize: '35px'}} />
              </div>
            </nav>
          </div>
        </Box>
      </Drawer>
    </div>
  );
};

export default DrawerSection;
